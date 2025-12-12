import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString = process.env.DATABASE_URL || "";

if (!connectionString) {
  throw new Error("DATABASE_URL is missing");
}

const globalForDb = global as unknown as { conn: postgres.Sql | undefined };
const conn = globalForDb.conn ?? postgres(connectionString);

if (process.env.NODE_ENV !== "production") {
  globalForDb.conn = conn;
}

export const db = drizzle(conn);
