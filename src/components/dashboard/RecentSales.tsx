"use client";

import { Dialog } from "@radix-ui/react-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Variant1",
    total: 10,
  },
  {
    name: "Variant2",
    total: 12,
  },
  {
    name: "Variant3",
    total: 19,
  },
  {
    name: "Variant4",
    total: 10,
  },
  {
    name: "Variant5",
    total: 8,
  },
];

export function RecentSales() {
  return (
    <div className="space-y-8">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"outline"} className="w-full m-0 py-3 h-auto">
            <div className="w-full flex items-center justify-between">
              <Avatar className="h-9 w-9">
                <AvatarFallback>YT</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">Youtube</p>
                <p className="text-sm text-muted-foreground">
                  https://youtube.com
                </p>
              </div>
              <div className="ml-auto font-medium">+500</div>
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Youtube</DialogTitle>
            {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
          </DialogHeader>
          <div className="grid">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={data}>
                <XAxis
                  dataKey="name"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                />
                <Bar dataKey="total" fill="#f3214f" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
