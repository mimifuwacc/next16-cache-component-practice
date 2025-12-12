import { getDb } from "@/lib/db";
import { sessions, bookings } from "@/db/schema";
import { eq, sql } from "drizzle-orm";

export const getSessionData = async (sessionId: number) => {
  const db = getDb();

  const sessionResult = await db
    .select()
    .from(sessions)
    .where(eq(sessions.id, sessionId))
    .limit(1);

  const bookingCount = await db
    .select({ count: sql<number>`count(*)` })
    .from(bookings)
    .where(eq(bookings.sessionId, sessionId));

  return {
    session: sessionResult[0],
    bookingCount: bookingCount[0].count,
  };
};
