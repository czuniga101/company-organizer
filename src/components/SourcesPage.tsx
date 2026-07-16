import type { CompanyYear } from "../types";
import type { Citation } from "../data/apple/sources";

interface Props {
  records: CompanyYear[];
  sources: Record<number, Citation[]>;
  onBack: () => void;
  onSecFilings: () => void;
  onProductReleases: () => void;
}

const card: React.CSSProperties = { background: "#13131f", border: "1px solid #222", borderRadius: 16, padding: "16px 20px" };

export default function SourcesPage({ records, sources, onBack, onSecFilings, onProductReleases }: Props) {
  return (
    <div style={{ minHeight: "100vh", background: "#0d0d1a", color: "#fff", fontFamily: "'Inter', system-ui, sans-serif", display: "flex", justifyContent: "center", padding: "40px 16px" }}>
      <div style={{ width: "100%", maxWidth: 720, display: "flex", flexDirection: "column", gap: 16 }}>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
          <button onClick={onProductReleases} style={outlineBtn}>Product Development/Releases</button>
          <button onClick={onSecFilings} style={outlineBtn}>SEC Filings</button>
          <button style={investBtn}>Invest</button>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button onClick={onBack} style={backBtn}>‹ Back</button>
          <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.02em" }}>Sources & Notes</div>
        </div>

        <div style={{ fontSize: 13, color: "#777", lineHeight: 1.5 }}>
          Most years were drafted by Claude from training knowledge and have <b>not</b> been independently
          verified — those are labeled "Unverified" below. Milestone years have been checked against live
          web sources and link directly to authoritative reporting.
        </div>

        {records.map((r) => {
          const citations = sources[r.year];
          return (
            <div key={r.year} style={card}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                <div style={{ fontSize: 16, fontWeight: 700 }}>{r.year}</div>
                <div style={{ fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 6, background: citations ? "#1d3a2a" : "#3a1d1d", color: citations ? "#6fcf97" : "#e08585" }}>
                  {citations ? "Verified" : "Unverified"}
                </div>
              </div>
              <div style={{ fontSize: 13, color: "#aaa", lineHeight: 1.5, marginBottom: citations ? 10 : 0 }}>{r.notes || "No notes provided for this year."}</div>
              {citations && (
                <div style={{ display: "flex", flexDirection: "column", gap: 4, marginTop: 8, borderTop: "1px solid #222", paddingTop: 10 }}>
                  {citations.map((c, i) => (
                    <a key={i} href={c.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: "#6C8EF5", textDecoration: "none" }}>{c.title} ↗</a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const backBtn: React.CSSProperties = { background: "none", border: "1px solid #333", color: "#aaa", fontSize: 14, padding: "8px 14px", borderRadius: 10, cursor: "pointer" };
const outlineBtn: React.CSSProperties = { background: "none", border: "1px solid #444", color: "#ccc", fontSize: 13, fontWeight: 600, padding: "8px 20px", borderRadius: 20, cursor: "pointer", letterSpacing: "0.02em" };
const investBtn: React.CSSProperties = { background: "linear-gradient(135deg, #6C8EF5, #8C6CF5)", border: "none", color: "#fff", fontSize: 13, fontWeight: 700, padding: "8px 20px", borderRadius: 20, cursor: "pointer", letterSpacing: "0.02em" };
