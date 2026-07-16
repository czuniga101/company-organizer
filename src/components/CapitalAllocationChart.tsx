import { PieChart, Pie, Cell, Tooltip } from "recharts";
import type { CapitalAllocationItem } from "../types";

interface Props {
  items: CapitalAllocationItem[];
  year: number;
}

export default function CapitalAllocationChart({ items, year }: Props) {
  if (!items || items.length === 0) {
    return <div style={{ fontSize: 13, color: "#666" }}>No capital allocation data for {year}.</div>;
  }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
      <div style={{ position: "relative" }}>
        <PieChart width={180} height={180}>
          <Pie
            data={items}
            dataKey="percentage"
            cx={90}
            cy={90}
            innerRadius={55}
            outerRadius={85}
            startAngle={90}
            endAngle={-270}
            strokeWidth={2}
            stroke="#1a1a2e"
          >
            {items.map((s, i) => (
              <Cell key={i} fill={s.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(val: number, _: string, entry: { payload: CapitalAllocationItem }) => [
              `${val}%`,
              entry.payload.name,
            ]}
            contentStyle={{ background: "#1a1a2e", border: "1px solid #333", borderRadius: 8, color: "#fff" }}
          />
        </PieChart>
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)", textAlign: "center", pointerEvents: "none"
        }}>
          <div style={{ fontSize: 11, color: "#aaa" }}>{year}</div>
          <div style={{ fontSize: 10, color: "#666" }}>capital use</div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {items.map((s, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
            <div style={{ fontSize: 13, color: "#ddd" }}>
              {s.name} <span style={{ color: "#777" }}>· {s.percentage}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
