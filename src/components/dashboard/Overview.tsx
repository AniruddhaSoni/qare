"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Jan",
    total: 105,
  },
  {
    name: "Feb",
    total: 80,
  },
  {
    name: "Mar",
    total: 120,
  },
  {
    name: "Apr",
    total: 125,
  },
  {
    name: "May",
    total: 70,
  },
  {
    name: "Jun",
    total: 180,
  },
  {
    name: "Jul",
    total: 100,
  },
  {
    name: "Aug",
    total: 96,
  },
  {
    name: "Sep",
    total: 66,
  },
  {
    name: "Oct",
    total: 20,
  },
  {
    name: "Nov",
    total: 42,
  },
  {
    name: "Dec",
    total: 200,
  },
];

export function Overview() {
  return (
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
  );
}
