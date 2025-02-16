"use client";
// why Client Component?
// 1️⃣ recharts need to access the DOM api;
// 2️⃣ Tooltip need to handle client;

// Pie chart
// 1️⃣ data
// 2️⃣ Cell: it's one piece of the whole pie, accord with one piece of the data;

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { teamDistribution } from "@/public/team-distribution";

export default function TeamDistributionChart() {
  return (
    <ResponsiveContainer width="100%" height={150}>
      <PieChart>
        <Tooltip
          labelClassName="font-bold"
          wrapperClassName="dark:[&_.recharts-tooltip-item]:!text-white [&_.recharts-tooltip-item]:!text-black !text-sm dark:!bg-black rounded-md dark:!border-border"
        />
        <Pie data={teamDistribution} dataKey="value" nameKey="name">
          {teamDistribution.map((dataItem, i) => (
            <Cell key={i} fill={dataItem.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
