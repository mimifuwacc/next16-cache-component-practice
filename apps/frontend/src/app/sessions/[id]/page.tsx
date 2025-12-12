import { Suspense } from "react";
import { SessionInfo } from "./_components/session-info";
import { BookButton } from "./_components/book-button";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const sessionId = Number(id);

  return (
    <main>
      <Suspense fallback={<p>Loading session info...</p>}>
        <SessionInfo sessionId={sessionId} />
      </Suspense>

      <BookButton sessionId={sessionId} />
    </main>
  );
}
