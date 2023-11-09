"use client";

import { Dialog } from "@radix-ui/react-dialog";
import {
  DialogContent,
  DialogDescription,
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

export default function AddQr() {
  const urlRef = useRef<string>(null);
  const [url, setUrl] = useState<string>("");
  0;

  const DynamicQRCode = dynamic(() => import("./QrCode"), {
    ssr: true,
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add New QR</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Generate QR</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
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
            />
            <Button
              type="submit"
              className="m-0 col-span-3"
              onClick={() => setUrl(urlRef.current)}
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
