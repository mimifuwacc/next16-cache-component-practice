import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

export function createDb() {
  const connectionString = process.env.DATABASE_URL || "";
  if (!connectionString) {
    throw new Error("DATABASE_URL is missing");
  }
  const conn = postgres(connectionString);
  return drizzle(conn);
}
