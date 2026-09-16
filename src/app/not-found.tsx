import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col justify-center pt-[var(--nav-h)]">
      <div className="site-shell">
        <p className="meta mb-6">404</p>
        <h1 className="display headline max-w-[8ch]">Lost the thread.</h1>
        <Link href="/" className="link-arrow mt-10 inline-flex">
          Back to home →
        </Link>
      </div>
    </main>
  );
}
