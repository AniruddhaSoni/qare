import { Button } from "@/components/ui/button";
import React from "react";
import { IoQrCode } from "react-icons/io5";

export default function QRViewBtn() {
  return (
    <Button
      variant="outline"
      size="sm"
      className=""
      onClick={() => {
        console.log("ask to View");
      }}
    >
      <IoQrCode size={16} />
    </Button>
  );
}
