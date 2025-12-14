import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { config } from "@repo/db/config";

export function createDb() {
  const conn = postgres(config.db.url);
  return drizzle(conn);
}
