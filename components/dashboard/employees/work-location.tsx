"use client";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { data } from "@/public/chart-data";

export default function WorkLocationTrends() {
  return (
    <ResponsiveContainer height={350} width="100%">
      <BarChart
        data={data}
        // &_ : current element and its child element
        // .recharts-tooltip-cursor : a class name that some Recharts component have;
        // [] is a tailwind arbitrary selector
        // [&_.recharts-tooltip-cursor] is used to select the current element itself and all it descendant which have class name 'recharts-tooltip-cursor', then add new style to them.
        className="[&_.recharts-tooltip-cursor]:fill-zinc-200 dark:[&_.recharts-tooltip-cursor]:fill-zinc-800"
      >
        <XAxis dataKey="name" stroke="#6b7280" fontSize={16} />
        <YAxis stroke="#6b7280" fontSize={14} />
        <Tooltip
          // default separator is ' : ', we don't need the blank before the semicolon
          separator=": "
          formatter={(value, name) => {
            if (name === "wfh") {
              return [value, "Work from home"];
            } else if (name === "office") {
              return [value, "Work from office"];
            }
          }}
          labelClassName="font-bold !text-lg"
          wrapperClassName="!text-sm dark:!bg-black rounded-md dark:!border-border"
        />
        <Legend
          // shape of the icon
          iconType="circle"
          // define the format of the text, the value is the office from 'office: 55'
          formatter={(value) => {
            if (value === "wfh") {
              return <div className="text-sm">Work from home</div>;
            } else if (value === "office") {
              return <div className="text-sm">Work from office</div>;
            }
          }}
        />
        <Bar dataKey="office" stackId={1} fill="#6d28d9" />
        <Bar dataKey="wfh" stackId={1} fill="#6b7280" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
