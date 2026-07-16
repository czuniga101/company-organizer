import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceDot } from "recharts";
import type { CompanyYear } from "../types";

interface Props {
  records: CompanyYear[];
  currentYear: number;
}

export default function MoatChart({ records, currentYear }: Props) {
  const data = records.map((r) => ({
    year: r.year,
    score: r.moatScore ?? 0,
    label: r.moatLabel ?? "",
    note: r.moatNote ?? "",
  }));

  const current = data.find((d) => d.year === currentYear);

  return (
    <div>
      <ResponsiveContainer width="100%" height={180}>
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="moatFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6C8EF5" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#6C8EF5" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="year"
            tick={{ fill: "#666", fontSize: 10 }}
            interval={4}
            axisLine={{ stroke: "#333" }}
            tickLine={false}
          />
          <YAxis domain={[0, 10]} hide />
          <Tooltip
            contentStyle={{ background: "#1a1a2e", border: "1px solid #333", borderRadius: 8, color: "#fff", fontSize: 12 }}
            formatter={(_val: number, _name: string, entry: any) => [
              `${entry.payload.score}/10 — ${entry.payload.label}`,
              entry.payload.year,
            ]}
            labelFormatter={() => ""}
          />
          <Area type="monotone" dataKey="score" stroke="#6C8EF5" strokeWidth={2} fill="url(#moatFill)" />
          {current && (
            <ReferenceDot x={current.year} y={current.score} r={5} fill="#fff" stroke="#6C8EF5" strokeWidth={2} />
          )}
        </AreaChart>
      </ResponsiveContainer>
      {current && (
        <div style={{ marginTop: 4 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#eee" }}>
            {current.score}/10 — {current.label}
          </div>
          <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>{current.note}</div>
        </div>
      )}
    </div>
  );
}
