"use client";

import React from "react";
import { Button } from "../ui/button";
import {
  MixerHorizontalIcon,
  Pencil1Icon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import QREditPopover from "./QROptions/QREditPopover";
import QRDeletePopover from "./QROptions/QRDeletePopover";
import QRDesignPopover from "./QROptions/QRDesignPopover";
import { IoQrCode } from "react-icons/io5";

export default function QRListItem() {
  return (
    <li className="bg-background pt-2 flex justify-between px-4 items-center">
      <div className="">Variant 1</div>
      <div className="space-x-2">
        {/* Edit Variant Name */}
        <QREditPopover />

        {/* Edit Design Name */}
        <QRDesignPopover />

        {/* View QR Variant */}

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

        {/* Delete QR Variant */}
        <QRDeletePopover />
      </div>
    </li>
  );
}
