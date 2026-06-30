import { relations } from "drizzle-orm";
import {
  boolean,
  index,
  integer,
  jsonb,
  pgEnum,
  pgTable,
  real,
  text,
  timestamp,
  uniqueIndex,
  uuid,
} from "drizzle-orm/pg-core";

// ---------------------------------------------------------------------------
// Enums
// ---------------------------------------------------------------------------

export const rolEnum = pgEnum("rol", ["learner", "admin"]);
export const planEnum = pgEnum("plan", ["free", "premium"]);
export const bloqueEnum = pgEnum("bloque", ["comun", "especifica"]);
export const dificultadEnum = pgEnum("dificultad", ["facil", "media", "dificil"]);
export const modoEnum = pgEnum("modo", ["tema", "simulacro", "falladas", "rapido"]);
export const subStatusEnum = pgEnum("sub_status", [
  "active",
  "trialing",
  "past_due",
  "canceled",
  "incomplete",
]);

// ---------------------------------------------------------------------------
// Usuarios
// ---------------------------------------------------------------------------

export const usuarios = pgTable(
  "usuarios",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    email: text("email").notNull(),
    passwordHash: text("password_hash").notNull(),
    nombre: text("nombre"),
    rol: rolEnum("rol").notNull().default("learner"),
    plan: planEnum("plan").notNull().default("free"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => ({
    emailIdx: uniqueIndex("usuarios_email_idx").on(t.email),
  }),
);

// ---------------------------------------------------------------------------
// Catalogo de oposiciones: categoria -> tema -> pregunta
// ---------------------------------------------------------------------------

export const categorias = pgTable(
  "categorias",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    slug: text("slug").notNull(), // celador, tcae, enfermeria, aux-administrativo
    nombre: text("nombre").notNull(),
    descripcion: text("descripcion"),
    orden: integer("orden").notNull().default(0),
    activa: boolean("activa").notNull().default(true),
  },
  (t) => ({
    slugIdx: uniqueIndex("categorias_slug_idx").on(t.slug),
  }),
);

export const temas = pgTable(
  "temas",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    categoriaId: uuid("categoria_id")
      .notNull()
      .references(() => categorias.id, { onDelete: "cascade" }),
    slug: text("slug").notNull(),
    nombre: text("nombre").notNull(),
    bloque: bloqueEnum("bloque").notNull().default("comun"),
    orden: integer("orden").notNull().default(0),
  },
  (t) => ({
    categoriaIdx: index("temas_categoria_idx").on(t.categoriaId),
    slugIdx: uniqueIndex("temas_cat_slug_idx").on(t.categoriaId, t.slug),
  }),
);

// Fragmentos del temario que sirven de fuente para generar preguntas.
// Cada chunk se asocia a un tema y lleva su cita legal/fuente.
export const temario = pgTable(
  "temario",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    temaId: uuid("tema_id")
      .notNull()
      .references(() => temas.id, { onDelete: "cascade" }),
    titulo: text("titulo"),
    contenido: text("contenido").notNull(),
    fuente: text("fuente").notNull(),
    orden: integer("orden").notNull().default(0),
    // Cuantas preguntas se han generado ya desde este fragmento
    preguntasGeneradas: integer("preguntas_generadas").notNull().default(0),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => ({
    temaIdx: index("temario_tema_idx").on(t.temaId),
  }),
);

// Apuntes didacticos por tema (texto de estudio para leer y escuchar).
// Distinto de `temario` (fragmentos-fuente para generar preguntas).
export const apuntes = pgTable(
  "apuntes",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    temaId: uuid("tema_id")
      .notNull()
      .references(() => temas.id, { onDelete: "cascade" }),
    titulo: text("titulo").notNull(),
    resumen: text("resumen"),
    contenido: text("contenido").notNull(),
    puntosClave: jsonb("puntos_clave").$type<string[]>(),
    // URL de audio pregenerado (TTS); null = se reproduce con voz del navegador
    audioUrl: text("audio_url"),
    palabras: integer("palabras").notNull().default(0),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => ({
    temaIdx: uniqueIndex("apuntes_tema_idx").on(t.temaId),
  }),
);

export const preguntas = pgTable(
  "preguntas",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    categoriaId: uuid("categoria_id")
      .notNull()
      .references(() => categorias.id, { onDelete: "cascade" }),
    temaId: uuid("tema_id").references(() => temas.id, { onDelete: "set null" }),
    // Fragmento de temario del que se genero (trazabilidad)
    temarioId: uuid("temario_id").references(() => temario.id, { onDelete: "set null" }),
    enunciado: text("enunciado").notNull(),
    // 4 opciones en orden; correctaIndex apunta a la correcta (0-3)
    opciones: jsonb("opciones").$type<string[]>().notNull(),
    correctaIndex: integer("correcta_index").notNull(),
    explicacion: text("explicacion"),
    // Cita legal / temario que respalda la respuesta (citacion obligatoria)
    fuente: text("fuente"),
    dificultad: dificultadEnum("dificultad").notNull().default("media"),
    // Procede de un examen oficial real (vs generada/elaborada)
    oficial: boolean("oficial").notNull().default(false),
    revisada: boolean("revisada").notNull().default(false),
    activa: boolean("activa").notNull().default(true),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => ({
    categoriaIdx: index("preguntas_categoria_idx").on(t.categoriaId),
    temaIdx: index("preguntas_tema_idx").on(t.temaId),
  }),
);

// ---------------------------------------------------------------------------
// Sesiones de test y respuestas
// ---------------------------------------------------------------------------

export const sesiones = pgTable(
  "sesiones",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    usuarioId: uuid("usuario_id")
      .notNull()
      .references(() => usuarios.id, { onDelete: "cascade" }),
    categoriaId: uuid("categoria_id")
      .notNull()
      .references(() => categorias.id, { onDelete: "cascade" }),
    modo: modoEnum("modo").notNull(),
    config: jsonb("config").$type<SesionConfig>(),
    totalPreguntas: integer("total_preguntas").notNull(),
    aciertos: integer("aciertos").notNull().default(0),
    fallos: integer("fallos").notNull().default(0),
    enBlanco: integer("en_blanco").notNull().default(0),
    // Nota neta tras penalizacion (sobre 10)
    nota: real("nota"),
    startedAt: timestamp("started_at", { withTimezone: true }).notNull().defaultNow(),
    finishedAt: timestamp("finished_at", { withTimezone: true }),
  },
  (t) => ({
    usuarioIdx: index("sesiones_usuario_idx").on(t.usuarioId),
  }),
);

export const respuestas = pgTable(
  "respuestas",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    sesionId: uuid("sesion_id")
      .notNull()
      .references(() => sesiones.id, { onDelete: "cascade" }),
    preguntaId: uuid("pregunta_id")
      .notNull()
      .references(() => preguntas.id, { onDelete: "cascade" }),
    // null = dejada en blanco
    opcionElegida: integer("opcion_elegida"),
    esCorrecta: boolean("es_correcta").notNull().default(false),
    tiempoMs: integer("tiempo_ms"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => ({
    sesionIdx: index("respuestas_sesion_idx").on(t.sesionId),
    preguntaIdx: index("respuestas_pregunta_idx").on(t.preguntaId),
  }),
);

// ---------------------------------------------------------------------------
// Progreso por pregunta (repaso espaciado, estilo SM-2 simplificado)
// ---------------------------------------------------------------------------

export const progresoPregunta = pgTable(
  "progreso_pregunta",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    usuarioId: uuid("usuario_id")
      .notNull()
      .references(() => usuarios.id, { onDelete: "cascade" }),
    preguntaId: uuid("pregunta_id")
      .notNull()
      .references(() => preguntas.id, { onDelete: "cascade" }),
    nAciertos: integer("n_aciertos").notNull().default(0),
    nFallos: integer("n_fallos").notNull().default(0),
    facilidad: real("facilidad").notNull().default(2.5),
    intervaloDias: integer("intervalo_dias").notNull().default(0),
    ultimaVista: timestamp("ultima_vista", { withTimezone: true }),
    proximaRevision: timestamp("proxima_revision", { withTimezone: true }),
  },
  (t) => ({
    uniq: uniqueIndex("progreso_usuario_pregunta_idx").on(t.usuarioId, t.preguntaId),
    revisionIdx: index("progreso_proxima_revision_idx").on(t.usuarioId, t.proximaRevision),
  }),
);

// ---------------------------------------------------------------------------
// Suscripciones (Stripe)
// ---------------------------------------------------------------------------

export const suscripciones = pgTable(
  "suscripciones",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    usuarioId: uuid("usuario_id")
      .notNull()
      .references(() => usuarios.id, { onDelete: "cascade" }),
    stripeCustomerId: text("stripe_customer_id"),
    stripeSubscriptionId: text("stripe_subscription_id"),
    status: subStatusEnum("status").notNull().default("incomplete"),
    currentPeriodEnd: timestamp("current_period_end", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => ({
    usuarioIdx: uniqueIndex("suscripciones_usuario_idx").on(t.usuarioId),
  }),
);

// ---------------------------------------------------------------------------
// Tipos auxiliares
// ---------------------------------------------------------------------------

export interface SesionConfig {
  temaIds?: string[];
  dificultad?: "facil" | "media" | "dificil";
  conPenalizacion?: boolean;
  // factor de penalizacion: 1 fallo resta 1/divisor aciertos (SAS suele usar 3)
  penalizacionDivisor?: number;
  tiempoLimiteSeg?: number;
  soloOficiales?: boolean;
}

// ---------------------------------------------------------------------------
// Relations
// ---------------------------------------------------------------------------

export const categoriasRelations = relations(categorias, ({ many }) => ({
  temas: many(temas),
  preguntas: many(preguntas),
}));

export const temasRelations = relations(temas, ({ one, many }) => ({
  categoria: one(categorias, {
    fields: [temas.categoriaId],
    references: [categorias.id],
  }),
  preguntas: many(preguntas),
  temario: many(temario),
}));

export const temarioRelations = relations(temario, ({ one, many }) => ({
  tema: one(temas, {
    fields: [temario.temaId],
    references: [temas.id],
  }),
  preguntas: many(preguntas),
}));

export const apuntesRelations = relations(apuntes, ({ one }) => ({
  tema: one(temas, {
    fields: [apuntes.temaId],
    references: [temas.id],
  }),
}));

export const preguntasRelations = relations(preguntas, ({ one }) => ({
  categoria: one(categorias, {
    fields: [preguntas.categoriaId],
    references: [categorias.id],
  }),
  tema: one(temas, {
    fields: [preguntas.temaId],
    references: [temas.id],
  }),
}));

export const sesionesRelations = relations(sesiones, ({ one, many }) => ({
  usuario: one(usuarios, {
    fields: [sesiones.usuarioId],
    references: [usuarios.id],
  }),
  categoria: one(categorias, {
    fields: [sesiones.categoriaId],
    references: [categorias.id],
  }),
  respuestas: many(respuestas),
}));

export const respuestasRelations = relations(respuestas, ({ one }) => ({
  sesion: one(sesiones, {
    fields: [respuestas.sesionId],
    references: [sesiones.id],
  }),
  pregunta: one(preguntas, {
    fields: [respuestas.preguntaId],
    references: [preguntas.id],
  }),
}));
