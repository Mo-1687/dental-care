"use client"
import { Button } from "@/components/ui/button";
import { useUpdateUserRole } from "@/hooks/use-user";
import { Loader2 } from "lucide-react";
import Link from "next/link";

export default function Unauthorized() {
  const { mutate, isPending } = useUpdateUserRole();
  function handleUserUpdate(){
    mutate()
  }
  return (
    <main className="grid min-h-screen place-items-center px-6 py-24 bg-background">
      <div className="text-center max-w-md">
        <div className="mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-destructive/10">
          <svg
            className="h-16 w-16 text-destructive"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h1 className="text-7xl font-black text-foreground">401</h1>
        <p className="mt-6 text-3xl font-bold text-foreground">Access Denied</p>
        <p className="mt-4 text-lg text-muted-foreground">
          You don’t have permission to view this page.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="px-4 py-5" onClick={handleUserUpdate}>
            {isPending ? (
              <Loader2 className="animate-spin" />
            ) : (
              <span>Upgrade to admin </span>
            )}
          </Button>
          <Link
            href="/"
            className="rounded-md border border-border px-4 py-3 text-base font-semibold text-foreground hover:bg-muted transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}
