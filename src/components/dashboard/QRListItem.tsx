"use client";

import React from "react";
import { Button } from "../ui/button";
import QREditPopover from "./QROptions/QREditPopover";
import QRDeletePopover from "./QROptions/QRDeletePopover";
import QRDesignPopover from "./QROptions/QRDesignPopover";
import { IoQrCode } from "react-icons/io5";
import QRViewBtn from "./QROptions/QRViewBtn";

export default function QRListItem() {
  return (
    <li className="bg-background pt-2 flex justify-between px-4 items-center">
      <div className="">Variant 1</div>
      <div className="space-x-2">
        <QREditPopover />
        <QRDesignPopover />
        <QRViewBtn />
        <QRDeletePopover />
      </div>
    </li>
  );
}
