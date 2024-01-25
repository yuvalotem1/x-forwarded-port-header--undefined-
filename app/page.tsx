"use client";
/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <div>
      <button onClick={() => fetch("/api/test-header")}>
        click to see x-forwarded-port header
      </button>
    </div>
  );
}
