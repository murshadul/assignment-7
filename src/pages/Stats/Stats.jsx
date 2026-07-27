import React, { useContext } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ShowContext } from "../../context/ShowContext";

const Stats = () => {
  const { call, text, video } = useContext(ShowContext);

  const data = [
    { name: "Call", value: call.length, fill: "#00C49F" },
    { name: "Text", value: text.length, fill: "#0088FE" },
    { name: "Video", value: video.length, fill: "#FFBB28" },
  ];

  return (
    <div className="container mx-auto shadow my-8 py-6 h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={70}
            outerRadius={110}
            paddingAngle={5}
          />
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Stats;