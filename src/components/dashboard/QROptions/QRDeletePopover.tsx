import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TrashIcon } from "@radix-ui/react-icons";
import React, { useRef } from "react";

export default function QRDeletePopover() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="link" size="sm" className="ring-[0.5px] ring-primary">
          <TrashIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="text-lg text-center mb-4">Are you sure?</div>
        <div className="flex items-center justify-evenly">
          <PopoverClose>
            <Button variant="secondary">Cancel</Button>
          </PopoverClose>
          <Button variant="default">Delete</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
