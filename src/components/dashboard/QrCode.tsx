"use client";
// import QRCodeStyling from "qr-code-styling";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import QRCodeStyling, { FileExtension, gradientTypes } from "qr-code-styling";

let qrCode: QRCodeStyling;

export default function QrCode({ url }: { url: string }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const downloadBtnRef = React.useRef<HTMLButtonElement>(null);
  const [fileExt, setFileExt] = useState<any>(null);

  React.useEffect(() => {
    if (url !== "" && url !== null) {
      import("qr-code-styling").then(({ default: QRCodeStyling }) => {
        qrCode = new QRCodeStyling({
          width: 200,
          height: 200,
          data: url,
          margin: 0,
          qrOptions: {
            typeNumber: 0,
            mode: "Byte",
            errorCorrectionLevel: "Q",
          },
          imageOptions: { hideBackgroundDots: true, imageSize: 0.4, margin: 0 },
          dotsOptions: { type: "rounded", color: "#cc1b42" },
          backgroundOptions: { color: "none" },
          image: null,
          cornersSquareOptions: { type: "extra-rounded", color: "#cc1b42" },
          cornersDotOptions: { type: "dot", color: "#cc1b42" },
        });

        qrCode.append(ref.current);
      });
    }
  }, [url]);

  useEffect(() => {
    if (downloadBtnRef.current != null) {
      downloadBtnRef.current.addEventListener("click", () => {
        if (fileExt !== null && fileExt !== null) {
          qrCode.download({
            extension: fileExt,
            name: "variant",
          });

          console.log(fileExt);
        }
      });
    }
  }, [fileExt]);

  return (
    <>
      {(url === "" || url === null) && "Click a Variant to View QR"}
      {url !== "" && url !== null && (
        <div className="">
          <div ref={ref} />
          <div className="grid grid-cols-6 gap-x-2 mt-4">
            <Select
              onValueChange={(value) => {
                setFileExt(value);
              }}
            >
              <SelectTrigger className="col-span-3 text-gray-100">
                <SelectValue placeholder="Format" className="" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="png">png</SelectItem>
                  <SelectItem value="jpeg">jpeg</SelectItem>
                  <SelectItem value="svg">svg</SelectItem>
                  <SelectItem value="webp">webp</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Button className="col-span-3" ref={downloadBtnRef}>
              Download
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
