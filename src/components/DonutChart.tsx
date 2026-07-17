import { PieChart, Pie, Cell, Tooltip } from "recharts";
import type { OwnershipStake } from "../types";

interface Props {
  stakes: OwnershipStake[];
  totalValue: number;
  stockUnitValue?: number;
  company: string;
}

const fmt = (n: number) =>
  n >= 1_000_000_000
    ? `$${(n / 1_000_000_000).toFixed(2)}B`
    : n >= 1_000_000
    ? `$${(n / 1_000_000).toFixed(2)}M`
    : `$${n.toLocaleString()}`;

export default function DonutChart({ stakes, totalValue, stockUnitValue, company }: Props) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
      <div style={{ position: "relative" }}>
        <PieChart width={220} height={220}>
          <Pie
            data={stakes}
            dataKey="percentage"
            cx={110}
            cy={110}
            innerRadius={70}
            outerRadius={105}
            startAngle={90}
            endAngle={-270}
            strokeWidth={2}
            stroke="#1a1a2e"
          >
            {stakes.map((s, i) => (
              <Cell key={i} fill={s.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={((val: number, _: string, entry: { payload: OwnershipStake }) =>
              [`${val}% — ${fmt(entry.payload.shareValue)}`, entry.payload.name]) as (val: number, name: string, entry: unknown) => [string, string]}
            contentStyle={{ background: "#1a1a2e", border: "1px solid #333", borderRadius: 8, color: "#fff" }}
          />
        </PieChart>
        {/* center label */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)", textAlign: "center", pointerEvents: "none"
        }}>
          <div style={{ fontSize: 11, color: "#aaa", lineHeight: 1.2 }}>{company}</div>
          {stockUnitValue != null && (
            <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginTop: 4 }}>
              ${stockUnitValue.toFixed(2)}
              <div style={{ fontSize: 10, fontWeight: 400, color: "#aaa" }}>per share</div>
            </div>
          )}
        </div>
      </div>

      {/* legend */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {stakes.map((s, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 14, height: 14, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#eee" }}>{s.name}</div>
              <div style={{ fontSize: 12, color: "#aaa" }}>
                {s.percentage}% &nbsp;·&nbsp; {fmt(s.shareValue)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
