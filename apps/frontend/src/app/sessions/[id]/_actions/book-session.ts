"use server";

import { db } from "@/lib/db";
import { bookings } from "@repo/db/schema";
import { updateTag } from "next/cache";

export async function bookSession(sessionId: number) {
  // await db.insert(bookings).values({ sessionId });

  await fetch(`${process.env.API_URL}/book`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sessionId }),
  });

  console.log("Booking confirmed for session:", sessionId);

  updateTag(`session-${sessionId}`);
}
