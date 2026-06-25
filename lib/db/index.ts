import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

type DB = ReturnType<typeof drizzle<typeof schema>>;

// Inicializacion perezosa: no conecta (ni exige DATABASE_URL) hasta el primer
// uso real, para no romper el "collecting page data" del build de Next.
const globalForDb = globalThis as unknown as {
  client?: ReturnType<typeof postgres>;
  db?: DB;
};

function getDb(): DB {
  if (globalForDb.db) return globalForDb.db;

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) throw new Error("DATABASE_URL no esta definida");

  const client = globalForDb.client ?? postgres(connectionString, { prepare: false });
  if (process.env.NODE_ENV !== "production") globalForDb.client = client;

  const instance = drizzle(client, { schema, casing: "snake_case" });
  if (process.env.NODE_ENV !== "production") globalForDb.db = instance;
  return instance;
}

export const db = new Proxy({} as DB, {
  get(_target, prop) {
    return getDb()[prop as keyof DB];
  },
});

export * from "./schema";
