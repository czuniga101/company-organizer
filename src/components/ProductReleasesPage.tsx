import type { ProductRelease } from "../data/apple/productReleases";

interface Props {
  year: number;
  releases: Record<number, ProductRelease[]>;
  onBack: () => void;
}

const card: React.CSSProperties = { background: "#13131f", border: "1px solid #222", borderRadius: 16, padding: "16px 20px" };

export default function ProductReleasesPage({ year, releases, onBack }: Props) {
  const yearReleases = releases[year];

  return (
    <div style={{ minHeight: "100vh", background: "#0d0d1a", color: "#fff", fontFamily: "'Inter', system-ui, sans-serif", display: "flex", justifyContent: "center", padding: "40px 16px" }}>
      <div style={{ width: "100%", maxWidth: 720, display: "flex", flexDirection: "column", gap: 20 }}>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button onClick={onBack} style={backBtn}>‹ Back</button>
          <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.02em" }}>Product Development / Releases — {year}</div>
        </div>

        {(!yearReleases || yearReleases.length === 0) && (
          <div style={card}>
            <div style={{ fontSize: 13, color: "#aaa", lineHeight: 1.6 }}>No verified product release data has been added for {year} yet.</div>
          </div>
        )}

        {yearReleases && yearReleases.map((p, i) => (
          <div key={i} style={card}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <div style={{ fontSize: 18, fontWeight: 700 }}>{p.name}</div>
              <div style={{ fontSize: 12, color: "#777" }}>{p.date}</div>
            </div>
            {p.price && <div style={{ fontSize: 13, color: "#6C8EF5", fontWeight: 600, marginTop: 4 }}>{p.price}</div>}
            <div style={{ fontSize: 13, color: "#aaa", lineHeight: 1.6, marginTop: 10 }}>{p.description}</div>
            <a href={p.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: "#6C8EF5", textDecoration: "none", marginTop: 10, display: "inline-block" }}>{p.sourceTitle} ↗</a>
          </div>
        ))}

      </div>
    </div>
  );
}

const backBtn: React.CSSProperties = { background: "none", border: "1px solid #333", color: "#aaa", fontSize: 14, padding: "8px 14px", borderRadius: 10, cursor: "pointer" };
