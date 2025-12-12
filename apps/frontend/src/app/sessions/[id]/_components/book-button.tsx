"use client";

import { useTransition } from "react";
import { bookSession } from "../_actions/book-session";

export function BookButton({ sessionId }: { sessionId: number }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={() => startTransition(() => bookSession(sessionId))}
      disabled={isPending}
    >
      {isPending ? "Booking..." : "Book Session"}
    </button>
  );
}
