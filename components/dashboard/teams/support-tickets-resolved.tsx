"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { teamMonthData } from "@/public/team-month";

// 1️⃣ ResponsiveContainer: the container for the whole line chart
// 2️⃣ LineChart: the specific chart component;
// 3️⃣ Line: each line in the chart
//    type：used to define the line shape;

// 4️⃣ XAxis/YAxis: X and Y axis
// 5️⃣ CartesianGrid: grid line in the chart;
//    strokeDasharray="3 8": the length of each dash of the grid and the distance between two dashes

export default function SupportTicketsResolved() {
  return (
    <ResponsiveContainer height={350} width="100%">
      <LineChart data={teamMonthData}>
        <Tooltip
          labelClassName="font-bold"
          wrapperClassName="!text-sm dark:!bg-black rounded-md dark:!border-border"
        />
        <XAxis fontSize={12} dataKey="name" stroke="#888888" />
        <YAxis fontSize={12} stroke="#888888" />
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <CartesianGrid strokeDasharray="3" />
        <Line type="monotone" dataKey="delta" stroke="#84cc16" />
        <Line type="monotone" dataKey="alpha" stroke="#3b82f6" />
        <Line type="monotone" dataKey="canary" stroke="#f97316" />
        <Legend
          formatter={(value) => <span className="capitalize">{value}</span>}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
