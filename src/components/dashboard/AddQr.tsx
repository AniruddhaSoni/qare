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

export default function AddQr() {
  const urlRef = useRef<String>(null);
  const [url, setUrl] = useState<String>("google.com");
  0;

  const DynamicQRCode = dynamic(() => import("./QrCode"), {
    ssr: true,
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add New QR</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Generate QR</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        <div className="grid">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="QRlink"
              className="col-span-4"
              placeholder="https://example.com"
              onChange={(e) => {
                urlRef.current = e.target.value;
              }}
            />
          </div>
        </div>
        <Button
          type="submit"
          className="m-0"
          onClick={() => setUrl(urlRef.current)}
        >
          Generate QR
        </Button>

        <DialogFooter className="w-full">
          <DynamicQRCode url={url} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
