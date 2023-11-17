"use client";

import { Dialog } from "@radix-ui/react-dialog";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

// import QrCode from "./QrCode";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import QRVariantList from "./QRVariantList";
import { useSession } from "next-auth/react";

const DynamicQRCode = dynamic(() => import("./QrCode"), {
  ssr: true,
});

export default function AddQr() {
  const session = useSession();
  const urlRef = useRef<string>(null);
  const variantCountRef = useRef<number>(0);
  const [url, setUrl] = useState<string>("");
  const [variants, setVariants] = useState<Array<{}>>();

  async function variantData(
    uid: string,
    targetUrl: string,
    variantCount: number
  ) {
    const data = await fetch("/api/addNewQR", {
      method: "post",
      body: JSON.stringify({
        uid,
        targetUrl,
        variantCount,
      }),
    });
    return await data.json();
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add New QR</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Generate QR</DialogTitle>
        </DialogHeader>
        <div className="grid">
          <div className="grid grid-cols-12 items-center gap-4">
            <Input
              id="QRlink"
              className="col-span-7"
              placeholder="https://example.com"
              onChange={(e) => {
                urlRef.current = e.target.value;
              }}
            />
            <Input
              id="QRVariants"
              className="col-span-2"
              placeholder="variants"
              type="number"
              onChange={(e) => {
                variantCountRef.current = parseInt(e.target.value);
              }}
            />
            <Button
              type="submit"
              className="m-0 col-span-3"
              onClick={() => {
                variantData(
                  session.data.user.uid.toString(),
                  urlRef.current,
                  variantCountRef.current
                );
                console.log(variants);
              }}
            >
              Generate QR
            </Button>
          </div>
        </div>

        <DialogFooter className="w-full grid grid-cols-12">
          <div className="col-span-8">
            <QRVariantList />
          </div>
          <div className="col-span-4 flex items-center justify-center text-center text-accent">
            <DynamicQRCode url={url} />
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
