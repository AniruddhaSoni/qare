import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";


export default function Navbar() {
  return (
    <div className="w-full max-w-[75rem] mx-auto py-6 flex justify-between items-center">
      <Link href="/">
      <Image src={"/logo.png"} height={200} width={84} alt="Qare" />
      </Link>
      <Link href="/profile">
      <Button>Profile</Button>
      </Link>
    </div>
  );
}
