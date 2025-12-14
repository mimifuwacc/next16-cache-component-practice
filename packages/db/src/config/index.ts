if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing");
}

export const config = {
  db: {
    url: process.env.DATABASE_URL,
  },
} as const;
