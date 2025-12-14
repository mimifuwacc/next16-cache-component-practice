import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { config } from "@repo/db/config";

const globalForDb = global as unknown as { conn: postgres.Sql | undefined };
const conn = globalForDb.conn ?? postgres(config.db.url);

if (process.env.NODE_ENV !== "production") {
  globalForDb.conn = conn;
}

export const db = drizzle(conn);
