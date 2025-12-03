"use client"
import Link from "next/link";

export default function ServerError() {
  return (
    <main className="grid min-h-screen place-items-center px-6 py-24 bg-background">
      <div className="text-center max-w-lg">
        <div className="mx-auto mb-10 flex justify-center">
          <div className="relative">
            <div className="h-32 w-32 rounded-full bg-destructive/10 animate-ping"></div>
            <div className="absolute inset-0 h-32 w-32 rounded-full bg-destructive/20"></div>
            <svg
              className="absolute inset-0 m-auto h-20 w-20 text-destructive"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18.364 5.636l-12.728 12.728m0-12.728l12.728 12.728"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-8xl font-black text-foreground">500</h1>
        <p className="mt-6 text-3xl font-bold text-foreground">
          Something went wrong
        </p>
        <p className="mt-4 text-lg text-muted-foreground">
          Our team has been notified and we&apos;re working on a fix.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="rounded-md bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-md hover:shadow-lg transition"
          >
            Back to Home
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="rounded-md border border-border px-7 py-3.5 text-base font-semibold text-foreground hover:bg-muted transition"
          >
            Reload Page
          </button>
        </div>

       
      </div>
    </main>
  );
}
