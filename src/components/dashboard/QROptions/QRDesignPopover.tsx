import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import React from "react";

export default function QRDesignPopover() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="outline" size="sm" className="">
          <MixerHorizontalIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <ScrollArea className="h-64 px-2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="imageOptions">
              <AccordionTrigger>Image Options</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-6 items-center justify-between gap-x-2">
                  <span className="col-span-2 font-bold">Image</span>
                  <Input type="file" className="col-span-4" />
                </div>
                <div className="grid grid-cols-6 items-center justify-between gap-x-2 mt-2">
                  <span className="col-span-2 font-bold">Image Size</span>
                  <Input type="number" className="col-span-4" />
                </div>
                <div className="grid grid-cols-6 items-center justify-between gap-x-2 mt-2">
                  <span className="col-span-2 font-bold">Margin Size</span>
                  <Input type="number" className="col-span-4" />
                </div>
                <div className="grid grid-cols-6 items-center justify-between gap-x-2 mt-2">
                  <span className="col-span-3 font-bold">Hide Background</span>
                  <Checkbox className="col-span-3" />
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="dotOptions">
              <AccordionTrigger>Dot Options</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-6 items-center justify-between gap-x-2">
                  <span className="col-span-2 font-bold">Dot Style:</span>
                  <Select>
                    <SelectTrigger className="col-span-4 text-gray-100">
                      <SelectValue placeholder="rounded" className="" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="square">square</SelectItem>
                        <SelectItem value="dots">dots</SelectItem>
                        <SelectItem value="rounded">rounded</SelectItem>
                        <SelectItem value="extra-rounded">
                          extra-rounded
                        </SelectItem>
                        <SelectItem value="classy">classy</SelectItem>
                        <SelectItem value="classy-rounded">
                          classy-rounded
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-6 items-center justify-between gap-x-2 mt-2">
                  <span className="col-span-2 font-bold">Color Type</span>
                  <Select>
                    <SelectTrigger className="col-span-4 text-gray-100">
                      <SelectValue placeholder="solid" className="" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="solid">solid</SelectItem>
                        <SelectItem value="gradient">
                          gradient:Coming Soon
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-6 items-center justify-between gap-x-2 mt-2">
                  <span className="col-span-2 font-bold">Color</span>
                  <Input type="color" className="col-span-4" />
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="cornerSquareOptions">
              <AccordionTrigger>Corner Square Options</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-6 items-center justify-between gap-x-2">
                  <span className="col-span-2 font-bold">
                    Corner Square Style
                  </span>
                  <Select>
                    <SelectTrigger className="col-span-4 text-gray-100">
                      <SelectValue placeholder="none" className="" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="none">none</SelectItem>
                        <SelectItem value="square">square</SelectItem>
                        <SelectItem value="dots">dots</SelectItem>
                        <SelectItem value="extra-rounded">
                          extra-rounded
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-6 items-center justify-between gap-x-2 mt-2">
                  <span className="col-span-2 font-bold">Color Type</span>
                  <Select>
                    <SelectTrigger className="col-span-4 text-gray-100">
                      <SelectValue placeholder="solid" className="" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="solid">solid</SelectItem>
                        <SelectItem value="gradient">
                          gradient:Coming Soon
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-6 items-center justify-between gap-x-2 mt-2">
                  <span className="col-span-2 font-bold">Color</span>
                  <Input type="color" className="col-span-4" />
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="cornerDotOptions">
              <AccordionTrigger>Corner Dot Options</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-6 items-center justify-between gap-x-2">
                  <span className="col-span-2 font-bold">
                    Corner Square Style
                  </span>
                  <Select>
                    <SelectTrigger className="col-span-4 text-gray-100">
                      <SelectValue placeholder="none" className="" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="none">none</SelectItem>
                        <SelectItem value="square">square</SelectItem>
                        <SelectItem value="dots">dots</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-6 items-center justify-between gap-x-2 mt-2">
                  <span className="col-span-2 font-bold">Color Type</span>
                  <Select>
                    <SelectTrigger className="col-span-4 text-gray-100">
                      <SelectValue placeholder="solid" className="" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="solid">solid</SelectItem>
                        <SelectItem value="gradient">
                          gradient:Coming Soon
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-6 items-center justify-between gap-x-2 mt-2">
                  <span className="col-span-2 font-bold">Color</span>
                  <Input type="color" className="col-span-4" />
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="backgroundOptions">
              <AccordionTrigger>Background Options</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
}
