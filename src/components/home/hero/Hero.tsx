"use client";
import Link from 'next/link';
import Navbar from "@/components/global/Navbar";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { signIn, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Hero() {

  const bg = 'url("/images/home/Qarebg.png")';
  const style = {
    backgroundImage: bg, backgroundSize: 'cover',  backgroundPosition: 'center', minHeight: '100vh',  
  };
  const session = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (session.status === "authenticated") {
      // router.push("/profile");
    }
  });
  
  return (
    <div className="hero min-h-screen" style={style}>
    <div className=''>
    <div className='flex justify-center items-center'>
    <Image
            src={"/logo.png"}
            height={100}
            width={100}
            alt="qare"
            className='text-center mt-20'
          />
    </div>
    <div className='flex justify-center items-center mt-10'>
      <p className='text-center'>QAre leverages QR codes for enhanced marketing.
         It generates trackable codes,  <br /> bridging physical and digital realms, empowering insightful campaigns.</p>
    </div>
    <div className='flex justify-center items-center mt-10'>
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
    </div>
    </div>
  );
}
