"use client";
import Link from 'next/link';
import React, { useEffect, useRef } from "react";
import HeroChart from "./HeroChart";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="w-full max-w-[75rem] mx-auto flex items-center justify-center flex-col gap-4">
      <h1 className="text-4xl font-bold">
        Unlock QR <span className="text-primary">Insights</span>
      </h1>
      <div className="w-full max-w-2xl bg-accent rounded-2xl p-4">
        <div className="">
          <HeroChart />
        </div>
        <div className="flex gap-4">
          <Image
            src={"/images/home/qr.png"}
            height={128}
            width={128}
            alt="qare"
          />
          <div className="rounded-xl w-full flex flex-col p-2 ring-primary ring-1">
            <div className="">
              <h2 className="text-xl font-medium">QAre Link</h2>
              <a href="https://qare.anirudhsoni.in" className="text-blue-800">
                https://qare.anirudhsoni.in/qr?sdoiu3r
              </a>
            </div>
            <div className="">
              <h2 className="text-xl font-medium">Clicks</h2>
              <p>200</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full max-w-xl flex-col gap-4">
        <p className="text-center">
          QAre leverages QR codes for enhanced marketing. It generates trackable
          codes, bridging physical and digital realms, empowering insightful
          campaigns.
        </p>
        <Link href="/dashboard">
          <Button>
           Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}
