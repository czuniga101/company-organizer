import type { Citation } from "../data/apple/secFilings";

interface Props {
  year: number;
  annualFilings: Record<number, Citation[]>;
  quarterlyFilings: Record<number, Citation[]>;
  gapNotes: Record<number, string>;
  onBack: () => void;
}

const card: React.CSSProperties = { background: "#13131f", border: "1px solid #222", borderRadius: 16, padding: "16px 20px" };
const sectionLabel: React.CSSProperties = { fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: "#666", marginBottom: 10 };

function FilingList({ filings }: { filings: Citation[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {filings.map((f, i) => (
        <a key={i} href={f.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 14, color: "#6C8EF5", textDecoration: "none" }}>{f.title} ↗</a>
      ))}
    </div>
  );
}

export default function SecFilingsPage({ year, annualFilings, quarterlyFilings, gapNotes, onBack }: Props) {
  const annual = annualFilings[year];
  const quarterly = quarterlyFilings[year];
  const gapNote = gapNotes[year];
  const preSec = !annual && !quarterly && !gapNote;

  return (
    <div style={{ minHeight: "100vh", background: "#0d0d1a", color: "#fff", fontFamily: "'Inter', system-ui, sans-serif", display: "flex", justifyContent: "center", padding: "40px 16px" }}>
      <div style={{ width: "100%", maxWidth: 720, display: "flex", flexDirection: "column", gap: 20 }}>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button onClick={onBack} style={backBtn}>‹ Back</button>
          <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.02em" }}>SEC Filings — {year}</div>
        </div>

        {preSec && (
          <div style={card}>
            <div style={{ fontSize: 13, color: "#aaa", lineHeight: 1.6 }}>No SEC filings available for {year}.</div>
          </div>
        )}

        {gapNote && (
          <div style={card}>
            <div style={{ fontSize: 13, color: "#aaa", lineHeight: 1.6 }}>{gapNote}</div>
          </div>
        )}

        {annual && annual.length > 0 && (
          <div style={card}>
            <div style={sectionLabel}>Annual Report (10-K)</div>
            <FilingList filings={annual} />
          </div>
        )}

        {quarterly && quarterly.length > 0 && (
          <div style={card}>
            <div style={sectionLabel}>Quarterly Reports (10-Q)</div>
            <FilingList filings={quarterly} />
          </div>
        )}

      </div>
    </div>
  );
}

const backBtn: React.CSSProperties = { background: "none", border: "1px solid #333", color: "#aaa", fontSize: 14, padding: "8px 14px", borderRadius: 10, cursor: "pointer" };
