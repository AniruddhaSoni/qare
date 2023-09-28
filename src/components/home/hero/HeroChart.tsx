"use client";

import React from "react";
import { LineChart, Line, XAxis, ResponsiveContainer } from "recharts";

const data = [
  { name: "2023-09-01", clicks: 120 },
  { name: "2023-09-02", clicks: 95 },
  { name: "2023-09-03", clicks: 150 },
  { name: "2023-09-04", clicks: 80 },
  { name: "2023-09-05", clicks: 200 },
  { name: "2023-09-06", clicks: 130 },
  { name: "2023-09-07", clicks: 110 },
];

export default function HeroChart() {
  return (
    <ResponsiveContainer width={"100%"} height={240}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        className="w-full"
      >
        <XAxis label={"Dates"} tick={false} />
        {/* <YAxis tick={false} /> */}
        {/* <Tooltip /> */}
        <Line
          type="monotone"
          dataKey="clicks"
          dot={false}
          stroke="#E11D48"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
