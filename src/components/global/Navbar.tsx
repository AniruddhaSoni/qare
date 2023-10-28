"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { signIn, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const session = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (session.status === "authenticated") {
      // router.push("/profile");
    }
  });

  return (
    <div className="w-full max-w-[75rem] mx-auto py-6 flex justify-between items-center">
      <Link href="/">
        <Image src={"/logo.png"} height={200} width={84} alt="Qare" />
      </Link>

      {session.status === "authenticated" && (
        <Button
          onClick={() => {
            router.push("/dashboard");
          }}
        >
          Dashboard
        </Button>
      )}
      {session.status === "unauthenticated" && (
        <Button onClick={() => signIn("google")}>Login</Button>
      )}
      {session.status === "loading" && <Button>Loading..</Button>}
    </div>
  );
}
