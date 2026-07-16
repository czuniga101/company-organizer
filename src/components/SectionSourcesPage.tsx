import type { ReactNode } from "react";

export interface Citation { title: string; url: string; }

interface Props {
  year: number;
  sectionTitle: string;
  intro: string;
  sources: Record<number, Citation[]>;
  gapNotes: Record<number, string>;
  onBack: () => void;
  onPrevYear: () => void;
  onNextYear: () => void;
  canPrevYear: boolean;
  canNextYear: boolean;
  extra?: ReactNode;
}

const card: React.CSSProperties = { background: "#13131f", border: "1px solid #222", borderRadius: 16, padding: "16px 20px" };
const backBtn: React.CSSProperties = { background: "none", border: "1px solid #333", color: "#aaa", fontSize: 14, padding: "8px 14px", borderRadius: 10, cursor: "pointer" };
const yearNavBtn: React.CSSProperties = { background: "none", border: "1px solid #333", color: "#aaa", fontSize: 13, fontWeight: 600, padding: "6px 8px", borderRadius: 8, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 };
const yearNavArrow: React.CSSProperties = { background: "none", border: "none", color: "#aaa", fontSize: 16, cursor: "pointer", padding: "0 4px", lineHeight: 1 };

export default function SectionSourcesPage({ year, sectionTitle, intro, sources, gapNotes, onBack, onPrevYear, onNextYear, canPrevYear, canNextYear, extra }: Props) {
  const citations = sources[year];
  const gapNote = gapNotes[year];

  return (
    <div style={{ minHeight: "100vh", background: "#0d0d1a", color: "#fff", fontFamily: "'Inter', system-ui, sans-serif", display: "flex", justifyContent: "center", padding: "40px 16px" }}>
      <div style={{ width: "100%", maxWidth: 720, display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <button onClick={onBack} style={backBtn}>‹ Back</button>
            <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.02em" }}>{sectionTitle} Sources — {year}</div>
          </div>
          <div style={yearNavBtn}>
            <button onClick={onPrevYear} disabled={!canPrevYear} style={{ ...yearNavArrow, opacity: canPrevYear ? 1 : 0.3 }}>‹</button>
            <span>{year}</span>
            <button onClick={onNextYear} disabled={!canNextYear} style={{ ...yearNavArrow, opacity: canNextYear ? 1 : 0.3 }}>›</button>
          </div>
        </div>

        {citations && citations.length > 0 && (
          <div style={card}>
            <div style={{ fontSize: 13, color: "#aaa", lineHeight: 1.6, marginBottom: 10 }}>{intro}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {citations.map((c, i) => (
                <a key={i} href={c.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: "#6C8EF5", textDecoration: "none" }}>
                  {c.title} ↗
                </a>
              ))}
            </div>
          </div>
        )}

        {(!citations || citations.length === 0) && gapNote && (
          <div style={card}>
            <div style={{ fontSize: 13, color: "#aaa", lineHeight: 1.6 }}>{gapNote}</div>
          </div>
        )}

        {(!citations || citations.length === 0) && !gapNote && (
          <div style={card}>
            <div style={{ fontSize: 13, color: "#aaa", lineHeight: 1.6 }}>No {sectionTitle.toLowerCase()}-specific source has been verified for {year} yet.</div>
          </div>
        )}

        {extra && <div style={card}>{extra}</div>}
      </div>
    </div>
  );
}
