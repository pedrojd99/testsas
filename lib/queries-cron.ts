import "server-only";
import { db, pushSubscriptions, sesiones, usuarios } from "@/lib/db";
import { getRacha } from "@/lib/queries";
import { and, count, eq, inArray, isNotNull, notInArray, sql } from "drizzle-orm";

export interface ResumenUsuario {
  email: string;
  nombre: string | null;
  tests: number;
  preguntas: number;
  precision: number;
}

// Usuarios suscritos a push que practicaron ayer pero aun no hoy: su racha
// esta en riesgo de romperse. Devuelve la racha para personalizar el aviso.
export async function getRachaEnRiesgo(): Promise<{ usuarioId: string; racha: number }[]> {
  const hoy = sql`(now() at time zone 'UTC')::date`;
  const ayer = sql`(now() at time zone 'UTC')::date - 1`;

  const practicaronHoy = db
    .select({ id: sesiones.usuarioId })
    .from(sesiones)
    .where(
      and(
        isNotNull(sesiones.finishedAt),
        sql`(${sesiones.finishedAt} at time zone 'UTC')::date = ${hoy}`,
      ),
    );

  const rows = await db
    .selectDistinct({ usuarioId: sesiones.usuarioId })
    .from(sesiones)
    .innerJoin(pushSubscriptions, eq(pushSubscriptions.usuarioId, sesiones.usuarioId))
    .where(
      and(
        isNotNull(sesiones.finishedAt),
        sql`(${sesiones.finishedAt} at time zone 'UTC')::date = ${ayer}`,
        notInArray(sesiones.usuarioId, practicaronHoy),
      ),
    );

  const out: { usuarioId: string; racha: number }[] = [];
  for (const r of rows) {
    const racha = await getRacha(r.usuarioId);
    if (racha > 0) out.push({ usuarioId: r.usuarioId, racha });
  }
  return out;
}

// Ranking de la semana ISO pasada por oposicion: mapa usuarioId -> puesto/total.
export async function getRankingSemanaPasada(
  categoriaId: string,
): Promise<Map<string, { puesto: number; total: number }>> {
  const filas = await db
    .select({ usuarioId: sesiones.usuarioId, mejor: sql<number>`max(${sesiones.nota})` })
    .from(sesiones)
    .where(
      and(
        eq(sesiones.categoriaId, categoriaId),
        isNotNull(sesiones.finishedAt),
        isNotNull(sesiones.nota),
        sql`date_trunc('week', ${sesiones.finishedAt}) = date_trunc('week', now() - interval '7 days')`,
      ),
    )
    .groupBy(sesiones.usuarioId)
    .orderBy(sql`max(${sesiones.nota}) desc`);

  const total = filas.length;
  const mapa = new Map<string, { puesto: number; total: number }>();
  let puesto = 0;
  let prev: number | null = null;
  filas.forEach((f, i) => {
    const nota = Number(f.mejor);
    if (prev === null || nota < prev) puesto = i + 1;
    prev = nota;
    mapa.set(f.usuarioId, { puesto, total });
  });
  return mapa;
}

// Usuarios con push activo y oposicion preferida, para el aviso de ranking.
export async function getUsuariosPushConPreferida(): Promise<
  { usuarioId: string; categoriaId: string }[]
> {
  const rows = await db
    .selectDistinct({
      usuarioId: usuarios.id,
      categoriaId: usuarios.categoriaPreferidaId,
    })
    .from(usuarios)
    .innerJoin(pushSubscriptions, eq(pushSubscriptions.usuarioId, usuarios.id))
    .where(isNotNull(usuarios.categoriaPreferidaId));

  return rows.filter(
    (r): r is { usuarioId: string; categoriaId: string } => r.categoriaId !== null,
  );
}

// Actividad de los ultimos 7 dias por usuario, para el resumen semanal.
export async function getResumenSemanal(): Promise<ResumenUsuario[]> {
  const agg = await db
    .select({
      usuarioId: sesiones.usuarioId,
      tests: count(),
      preguntas: sql<number>`coalesce(sum(${sesiones.totalPreguntas}), 0)`,
      aciertos: sql<number>`coalesce(sum(${sesiones.aciertos}), 0)`,
      fallos: sql<number>`coalesce(sum(${sesiones.fallos}), 0)`,
    })
    .from(sesiones)
    .where(
      and(isNotNull(sesiones.finishedAt), sql`${sesiones.finishedAt} >= now() - interval '7 days'`),
    )
    .groupBy(sesiones.usuarioId);

  if (agg.length === 0) return [];

  const users = await db
    .select({
      id: usuarios.id,
      email: usuarios.email,
      nombre: usuarios.nombre,
      recibir: usuarios.recibirResumen,
    })
    .from(usuarios)
    .where(
      inArray(
        usuarios.id,
        agg.map((a) => a.usuarioId),
      ),
    );
  const uMap = new Map(users.map((u) => [u.id, u]));

  return agg
    .filter((a) => uMap.get(a.usuarioId)?.recibir)
    .map((a) => {
      const u = uMap.get(a.usuarioId)!;
      const respondidas = Number(a.aciertos) + Number(a.fallos);
      return {
        email: u.email,
        nombre: u.nombre,
        tests: Number(a.tests),
        preguntas: Number(a.preguntas),
        precision: respondidas > 0 ? Math.round((Number(a.aciertos) / respondidas) * 100) : 0,
      };
    });
}
