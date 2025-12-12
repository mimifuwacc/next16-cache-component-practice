import { getSessionData } from "@/lib/data";
import { cacheTag, cacheLife } from "next/cache";
import { notFound } from "next/navigation";

export async function SessionInfo({ sessionId }: { sessionId: number }) {
  "use cache";

  cacheTag(`session-${sessionId}`);
  cacheLife("default");

  const { session, bookingCount } = await getSessionData(sessionId);

  // const result = await fetch(
  //   `${process.env.API_URL}/session?sessionId=${sessionId}`
  // );
  // const { session, bookingCount } = await result.json();

  console.log("Fetch initiated for session data with caching:", sessionId);

  if (!session) {
    notFound();
  }

  const isFull = bookingCount >= session.capacity;

  return (
    <>
      <p>Cached at: {new Date().toLocaleTimeString()}</p>
      <p>Session Name: {session.title}</p>
      <p>Status: {isFull ? "Full" : "Available"}</p>
      <p>
        {bookingCount} / {session.capacity}
      </p>
    </>
  );
}
