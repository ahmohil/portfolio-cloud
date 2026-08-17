import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6">
      <div className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          404
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Page not found.
        </h1>
        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded-full bg-foreground px-5 py-2.5 font-mono text-[13px] text-background transition-all hover:-translate-y-0.5"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
