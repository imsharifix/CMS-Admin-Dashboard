import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import "./Chart.css";

import { homeChartDatas } from "../../Datas";

export default function Chart({
  data = homeChartDatas,
  label = "Analytics",
  title = "Monthly Sales",
  description = "Sales performance throughout the year",
  year = "2026",
  dataKey = "sale",
}) {
  // پیدا کردن بیشترین مقدار
  const peakValue = Math.max(...data.map((item) => item[dataKey]));

  return (
    <div className="sales-chart">
      {/* Header */}
      <div className="sales-chart__header">
        <div>
          <span className="sales-chart__label">{label}</span>

          <h2 className="sales-chart__title">{title}</h2>

          <p className="sales-chart__description">{description}</p>
        </div>

        <span className="sales-chart__year">{year}</span>
      </div>

      {/* Chart */}
      <div className="sales-chart__wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: -10,
              bottom: 10,
            }}
          >
            <defs>
              <linearGradient
                id="sales-line-gradient"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop offset="0%" stopColor="#6366f1" />

                <stop offset="50%" stopColor="#8b5cf6" />

                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              stroke="#e5e7eb"
              strokeDasharray="4 8"
            />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#94a3b8",
                fontSize: 12,
              }}
              tickFormatter={(value) => value.slice(0, 3)}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#94a3b8",
                fontSize: 12,
              }}
              tickFormatter={(value) => `${value / 1000}k`}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey={dataKey}
              stroke="url(#sales-line-gradient)"
              strokeWidth={4}
              dot={{
                r: 4,
                fill: "#fff",
                stroke: "#8b5cf6",
                strokeWidth: 3,
              }}
              activeDot={{
                r: 8,
                fill: "#8b5cf6",
                stroke: "#fff",
                strokeWidth: 4,
              }}
              animationDuration={1500}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Footer */}
      <div className="sales-chart__footer">
        <div>
          <span className="sales-chart__footer-label">Peak</span>

          <strong className="sales-chart__footer-value">
            {peakValue.toLocaleString()}
          </strong>
        </div>

        <span className="sales-chart__status">
          <span className="sales-chart__status-dot" />
          Live performance
        </span>
      </div>
    </div>
  );
}
