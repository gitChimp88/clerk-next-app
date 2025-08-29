"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <SignedOut>
        <SignInButton mode="modal" forceRedirectUrl="/dashboard">
          <button>Sign in</button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
        <Link href="/dashboard" style={{ marginLeft: 12 }}>
          Go to Dashboard
        </Link>
      </SignedIn>
    </main>
  );
}
