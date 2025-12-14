// drizzle.config.ts

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/schema.ts",
  out: "./src/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
    database: process.env.POSTGRES_DB || "",
    user: process.env.POSTGRES_USER || "",
    password: process.env.POSTGRES_PASSWORD || "",
  },
});
