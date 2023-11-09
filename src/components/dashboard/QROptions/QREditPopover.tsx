import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Pencil1Icon } from "@radix-ui/react-icons";
import React from "react";

export default function QREditPopover() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="outline" size="sm" className="">
          <Pencil1Icon />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Label className="">New Name</Label>
        <div className="grid grid-cols-6 gap-x-2">
          <Input placeholder="Variant Name" className="col-span-4" />
          <Button className="col-span-2">Rename</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
