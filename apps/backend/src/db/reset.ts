import { drizzle } from "drizzle-orm/node-postgres";
import { reset } from "drizzle-seed";
import * as schema from "./schema";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  // reset
  const db = drizzle(process.env.DATABASE_URL!);
  await reset(db, schema);
}

main();
