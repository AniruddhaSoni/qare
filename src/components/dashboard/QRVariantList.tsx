import React from "react";
import QRListItem from "./QRListItem";
import { ScrollArea } from "../ui/scroll-area";

export default function QRVariantList() {
  return (
    <ScrollArea className="h-60">
      <ul className="divide-y-[1px] space-y-2"></ul>
    </ScrollArea>
  );
}
