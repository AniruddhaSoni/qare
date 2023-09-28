import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <div className="w-full max-w-[75rem] mx-auto py-6">
      <Image src={"/logo.png"} height={200} width={84} alt="Qare" />
    </div>
  );
}
