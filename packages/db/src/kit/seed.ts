import { drizzle } from "drizzle-orm/node-postgres";
import { seed } from "drizzle-seed";
import * as schema from "../schema";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  // seed
  const db = drizzle(process.env.DATABASE_URL!);
  await seed(db, schema).refine((funcs) => ({
    sessions: {
      columns: {
        capacity: funcs.int({
          minValue: 0,
        }),
      },
    },
  }));
}

main();
