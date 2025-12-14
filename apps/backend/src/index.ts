import { Hono } from "hono";

import { createDb } from "@/lib/db";
import { getSessionData } from "@/lib/data";
import { bookings } from "@repo/db/schema";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/session", async (c) => {
  const { sessionId } = c.req.query();

  const { session, bookingCount } = await getSessionData(Number(sessionId));

  return c.json({ session, bookingCount });
});

app.post("/book", async (c) => {
  const { sessionId } = await c.req.json();
  const db = createDb();

  console.log("Booking requested for session:", sessionId);

  await db.insert(bookings).values({ sessionId });

  return c.json({ message: "Booking created successfully" });
});

export default app;
