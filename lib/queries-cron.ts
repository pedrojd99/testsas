import "server-only";
import { db, sesiones, usuarios } from "@/lib/db";
import { and, count, inArray, isNotNull, sql } from "drizzle-orm";

export interface ResumenUsuario {
  email: string;
  nombre: string | null;
  tests: number;
  preguntas: number;
  precision: number;
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
