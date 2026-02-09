import React, { useEffect, useMemo } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#AF19FF",
  "#FF4D4D",
];
// #region Sample data

import { useSelector } from "react-redux";

export const Analytics = ({ isAnimationActive = true }) => {
  const state = useSelector((state) => state.expense);

  // // #region Sample data

  // const data = [];

  const data = useMemo(() => {
    const map = {};

    state.forEach((ele) => {
      map[ele.category] = (map[ele.category] || 0) + Number(ele.amount);
    });

    return Object.entries(map).map(([name, value]) => ({
      name,
      value,
    }));
  }, [state]);

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            startAngle={180}
            endAngle={0}
            cx="50%"
            cy="100%"
            outerRadius="80%"
            label
            isAnimationActive={isAnimationActive}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

const StraightAnglePieChart = ({ isAnimationActive = true }) => {};

export default StraightAnglePieChart;
