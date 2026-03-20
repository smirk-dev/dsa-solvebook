import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 font-mono">
      <div className="text-6xl text-[var(--muted)]">404</div>
      <h2 className="text-xl text-[var(--text)]">Problem not found</h2>
      <p className="text-[var(--muted)] text-sm">
        This problem hasn&apos;t been solved yet — check the planned list.
      </p>
      <div className="flex gap-4 mt-2">
        <Link href="/problems" className="text-[var(--blue)] hover:underline text-sm">
          → View Library
        </Link>
        <Link href="/" className="text-[var(--muted)] hover:underline text-sm">
          → Dashboard
        </Link>
      </div>
    </div>
  );
}
