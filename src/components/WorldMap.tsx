import type { OperationLocation } from "../types";

interface Props {
  locations: OperationLocation[];
}

const W = 1000;
const H = 500;

const project = (lat: number, lng: number) => ({
  x: ((lng + 180) / 360) * W,
  y: ((90 - lat) / 180) * H,
});

const TYPE_COLOR: Record<OperationLocation["type"], string> = {
  headquarters: "#6C8EF5",
  "regional-hq": "#F5C842",
  manufacturing: "#E8734A",
};

const TYPE_LABEL: Record<OperationLocation["type"], string> = {
  headquarters: "Headquarters",
  "regional-hq": "Regional HQ",
  manufacturing: "Manufacturing / Plant",
};

// Very simplified continent silhouettes — illustrative backdrop only, not precise coastlines.
const CONTINENTS = [
  "M 130 90 L 300 70 L 330 130 L 280 220 L 200 260 L 140 200 Z", // N. America
  "M 230 270 L 280 260 L 300 340 L 260 430 L 220 400 L 210 320 Z", // S. America
  "M 460 80 L 560 70 L 580 150 L 520 180 L 460 150 Z", // Europe
  "M 460 160 L 600 160 L 620 280 L 560 380 L 480 340 L 450 240 Z", // Africa
  "M 580 70 L 820 60 L 860 180 L 760 260 L 620 240 L 590 150 Z", // Asia
  "M 780 330 L 860 320 L 880 370 L 820 400 L 780 370 Z", // Australia
];

export default function WorldMap({ locations }: Props) {
  const types = Array.from(new Set(locations.map(l => l.type)));
  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto", borderRadius: 12, background: "linear-gradient(180deg, #0f1b33, #0a1424)" }}>
        {/* graticule */}
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={`v${i}`} x1={(i * W) / 10} y1={0} x2={(i * W) / 10} y2={H} stroke="#1c2740" strokeWidth={1} />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <line key={`h${i}`} x1={0} y1={(i * H) / 4} x2={W} y2={(i * H) / 4} stroke="#1c2740" strokeWidth={1} />
        ))}
        {/* stylized continents */}
        {CONTINENTS.map((d, i) => (
          <path key={i} d={d} fill="#1a2540" stroke="#26365c" strokeWidth={1.5} />
        ))}
        {/* markers */}
        {locations.map((loc, i) => {
          const { x, y } = project(loc.lat, loc.lng);
          return (
            <g key={i}>
              <circle cx={x} cy={y} r={9} fill={TYPE_COLOR[loc.type]} opacity={0.25} />
              <circle cx={x} cy={y} r={5} fill={TYPE_COLOR[loc.type]} stroke="#0d0d1a" strokeWidth={1.5}>
                <title>{`${loc.name} — ${loc.city}, ${loc.country}${loc.note ? `\n${loc.note}` : ""}`}</title>
              </circle>
            </g>
          );
        })}
      </svg>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 12 }}>
        {types.map(t => (
          <div key={t} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "#999" }}>
            <span style={{ width: 9, height: 9, borderRadius: "50%", background: TYPE_COLOR[t], display: "inline-block" }} />
            {TYPE_LABEL[t]}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 4 }}>
        {locations.map((loc, i) => (
          <div key={i} style={{ fontSize: 12, color: "#888", display: "flex", justifyContent: "space-between", gap: 10 }}>
            <span><span style={{ color: TYPE_COLOR[loc.type] }}>●</span> {loc.name}</span>
            <span style={{ color: "#555" }}>{loc.city}, {loc.country}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
