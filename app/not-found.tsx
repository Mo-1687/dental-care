import Link from "next/link";

export const metadata = {
  title: "404 – Page Not Found",
};

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8 bg-background">
      <div className="text-center max-w-2xl">
        <p className="text-9xl font-black tracking-tighter text-primary animate-pulse">
          404
        </p>
        <h1 className="mt-8 text-5xl font-bold tracking-tight text-foreground">
          Page not found
        </h1>
        <p className="mt-6 text-lg leading-7 text-muted-foreground">
          Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/"
            className="rounded-md bg-primary px-8 py-4 text-lg font-medium text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Back to Home
          </Link>
         
        </div>

        <div className="mt-16 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-primary/30 animate-sound-wave"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}