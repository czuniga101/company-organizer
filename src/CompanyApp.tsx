import { useState } from "react";
import DonutChart from "./components/DonutChart";
import BoardRow from "./components/BoardRow";
import MoatChart from "./components/MoatChart";
import CapitalAllocationChart from "./components/CapitalAllocationChart";
import SourcesPage from "./components/SourcesPage";
import SecFilingsPage from "./components/SecFilingsPage";
import ProductReleasesPage from "./components/ProductReleasesPage";
import ForumsPage from "./components/ForumsPage";
import SectionSourcesPage from "./components/SectionSourcesPage";
import WorldMap from "./components/WorldMap";
import type { CompanyYear, OperationLocation } from "./types";
import type { Citation as SecCitation } from "./data/apple/secFilings";
import type { Citation as SourceCitation } from "./data/apple/sources";
import type { ProductRelease } from "./data/apple/productReleases";

export interface CompanyData {
  records: CompanyYear[];
  sources: Record<number, SourceCitation[]>;
  annualFilings: Record<number, SecCitation[]>;
  quarterlyFilings: Record<number, SecCitation[]>;
  filingsGap: Record<number, string>;
  productReleases: Record<number, ProductRelease[]>;
  operationsLocations?: Record<number, OperationLocation[]>;
  boardSources?: Record<number, SourceCitation[]>;
  boardSourcesGap?: Record<number, string>;
  ceoSources?: Record<number, SourceCitation[]>;
  ceoSourcesGap?: Record<number, string>;
  ownershipSources?: Record<number, SourceCitation[]>;
  ownershipSourcesGap?: Record<number, string>;
  valuationSources?: Record<number, SourceCitation[]>;
  valuationSourcesGap?: Record<number, string>;
  moatSourcesGap?: Record<number, string>;
  capitalAllocationSourcesGap?: Record<number, string>;
  operationsSources?: Record<number, SourceCitation[]>;
  operationsSourcesGap?: Record<number, string>;
}

type SectionKey = "ceo" | "board" | "ownership" | "valuation" | "moat" | "capitalAllocation" | "operations";

const SECTION_META: Record<SectionKey, { title: string; intro: string }> = {
  ceo: { title: "CEO", intro: "Sources documenting CEO appointments or transitions for this year:" },
  board: { title: "Board of Directors", intro: "Sources documenting board composition, appointments, or leadership changes for this year:" },
  ownership: { title: "Ownership Stakes", intro: "Sources documenting ownership/shareholder composition for this year:" },
  valuation: { title: "Valuation", intro: "Sources documenting company valuation or market capitalization for this year:" },
  moat: { title: "Economic Moat", intro: "Sources relating to the economic moat assessment for this year:" },
  capitalAllocation: { title: "Capital Allocation", intro: "Sources relating to the capital allocation breakdown for this year:" },
  operations: { title: "Global Operations", intro: "Sources documenting the facilities shown on this year's operations map:" },
};

interface Props {
  data: CompanyData;
  onBack: () => void;
}

const fmt = (n: number) =>
  n >= 1_000_000_000
    ? `$${(n / 1_000_000_000).toFixed(2)}B`
    : n >= 1_000_000
    ? `$${(n / 1_000_000).toFixed(2)}M`
    : `$${n.toLocaleString()}`;

const label: React.CSSProperties = { fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: "#666", marginBottom: 8 };
const card: React.CSSProperties = { background: "#13131f", border: "1px solid #222", borderRadius: 16, padding: "20px 24px" };

export default function CompanyApp({ data, onBack }: Props) {
  const [idx, setIdx] = useState(0);
  const [view, setView] = useState<"timeline" | "sources" | "sec" | "products" | "forums" | "sectionSources">("timeline");
  const [activeSection, setActiveSection] = useState<SectionKey>("board");
  const [userVote, setUserVote] = useState<0 | 1 | -1>(0);
  const voteCount = 1 + userVote;
  const orderedRecords = [...data.records].reverse();
  const record = orderedRecords[idx];

  if (view === "sources") {
    return (
      <SourcesPage
        records={orderedRecords}
        sources={data.sources}
        onBack={() => setView("timeline")}
        onSecFilings={() => setView("sec")}
        onProductReleases={() => setView("products")}
      />
    );
  }

  if (view === "sec") {
    return (
      <SecFilingsPage
        year={record.year}
        annualFilings={data.annualFilings}
        quarterlyFilings={data.quarterlyFilings}
        gapNotes={data.filingsGap}
        onBack={() => setView("timeline")}
      />
    );
  }

  if (view === "forums") {
    return <ForumsPage onBack={() => setView("timeline")} />;
  }

  if (view === "sectionSources") {
    const sectionSourcesMap: Record<SectionKey, [Record<number, SourceCitation[]> | undefined, Record<number, string> | undefined]> = {
      ceo: [data.ceoSources, data.ceoSourcesGap],
      board: [data.boardSources, data.boardSourcesGap],
      ownership: [data.ownershipSources, data.ownershipSourcesGap],
      valuation: [data.valuationSources, data.valuationSourcesGap],
      moat: [undefined, data.moatSourcesGap],
      capitalAllocation: [undefined, data.capitalAllocationSourcesGap],
      operations: [data.operationsSources, data.operationsSourcesGap],
    };
    const [sourcesMap, gapMap] = sectionSourcesMap[activeSection];
    const meta = SECTION_META[activeSection];
    return (
      <SectionSourcesPage
        year={record.year}
        sectionTitle={meta.title}
        intro={meta.intro}
        sources={sourcesMap ?? {}}
        gapNotes={gapMap ?? {}}
        onBack={() => setView("timeline")}
        onPrevYear={() => setIdx(i => Math.max(0, i - 1))}
        onNextYear={() => setIdx(i => Math.min(orderedRecords.length - 1, i + 1))}
        canPrevYear={idx > 0}
        canNextYear={idx < orderedRecords.length - 1}
        extra={
          activeSection === "ownership" ? (
            <DonutChart stakes={record.ownership} totalValue={record.valuation} stockUnitValue={record.stockUnitValue} company={record.company} />
          ) : activeSection === "valuation" ? (
            <>
              <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.03em" }}>{fmt(record.valuation)}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16 }}>
                {record.ownership.map((s, i) => (
                  <div key={i} style={{ background: "#1e1e30", borderRadius: 10, padding: "10px 14px", borderLeft: `3px solid ${s.color}` }}>
                    <div style={{ fontSize: 12, color: "#888" }}>{s.name}</div>
                    <div style={{ fontSize: 16, fontWeight: 700 }}>{fmt(s.shareValue)}</div>
                    <div style={{ fontSize: 11, color: "#555" }}>{s.percentage}%</div>
                  </div>
                ))}
              </div>
              {record.notes && <div style={{ marginTop: 16, fontSize: 12, color: "#555", fontStyle: "italic" }}>{record.notes}</div>}
            </>
          ) : activeSection === "moat" ? (
            <MoatChart records={data.records} currentYear={record.year} />
          ) : activeSection === "capitalAllocation" ? (
            <CapitalAllocationChart items={record.capitalAllocation ?? []} year={record.year} />
          ) : activeSection === "operations" && data.operationsLocations?.[record.year] ? (
            <WorldMap locations={data.operationsLocations[record.year]} />
          ) : undefined
        }
      />
    );
  }

  const openSection = (section: SectionKey) => {
    setActiveSection(section);
    setView("sectionSources");
  };

  if (view === "products") {
    return (
      <ProductReleasesPage
        year={record.year}
        releases={data.productReleases}
        onBack={() => setView("timeline")}
      />
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#0d0d1a", color: "#fff", fontFamily: "'Inter', system-ui, sans-serif", display: "flex", justifyContent: "center", padding: "40px 16px" }}>
      <div style={{ width: "100%", maxWidth: 720, display: "flex", flexDirection: "column", gap: 20 }}>

        {/* Top bar */}
        <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
          <button onClick={onBack} style={backTopBtn}>Back</button>
          <div style={{ display: "flex", gap: 10 }}>
            <div style={voteBtn}>
              <span onClick={() => setUserVote(v => (v === 1 ? 0 : 1))} style={{ fontSize: 14, lineHeight: 1, cursor: "pointer" }}>⇧</span>
              <span>{voteCount}</span>
              <span onClick={() => setUserVote(v => (v === -1 ? 0 : -1))} style={{ fontSize: 14, lineHeight: 1, cursor: "pointer" }}>⇩</span>
            </div>
            <button onClick={() => setView("forums")} style={forumsBtn}>Forums</button>
            <button onClick={() => setView("products")} style={outlineBtn}>Product Development/Releases</button>
            <button onClick={() => setView("sec")} style={outlineBtn}>SEC Filings</button>
            <button style={investBtn}>Invest</button>
          </div>
        </div>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button onClick={() => setIdx(i => Math.max(0, i - 1))} disabled={idx === 0} style={navBtn}>‹</button>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-0.03em" }}>{record.company}</div>
            <div style={{ fontSize: 42, fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 1 }}>{record.year}</div>
          </div>
          <button onClick={() => setIdx(i => Math.min(orderedRecords.length - 1, i + 1))} disabled={idx === orderedRecords.length - 1} style={navBtn}>›</button>
        </div>

        {/* Year dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, flexWrap: "wrap" }}>
          {orderedRecords.map((r, i) => (
            <button key={i} onClick={() => setIdx(i)} style={{ width: i === idx ? 28 : 8, height: 8, borderRadius: 4, border: "none", cursor: "pointer", background: i === idx ? "#6C8EF5" : "#333", transition: "all 0.2s", padding: 0 }} title={String(r.year)} />
          ))}
        </div>

        {/* Sources button */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={() => setView("sources")} style={sourcesBtn}>View Sources & Notes</button>
        </div>

        {/* CEO */}
        <div style={card}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={label}>Chief Executive Officer</div>
            <button onClick={() => openSection("ceo")} style={smallSourcesBtn}>Sources</button>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#2a2a4a", border: "2px solid #444", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 700, color: "#aaa", flexShrink: 0 }}>
              {record.ceo.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
            </div>
            <div>
              <div style={{ fontSize: 20, fontWeight: 700 }}>{record.ceo.name}</div>
              <div style={{ fontSize: 13, color: "#777", marginTop: 2 }}>{record.ceo.role}</div>
            </div>
          </div>
        </div>

        {/* Board */}
        <div style={card}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={label}>Board of Directors</div>
            <button onClick={() => openSection("board")} style={smallSourcesBtn}>Sources</button>
          </div>
          <BoardRow members={record.board} />
        </div>

        {/* Ownership chart */}
        <div style={card}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={label}>Ownership Stakes</div>
            <button onClick={() => openSection("ownership")} style={smallSourcesBtn}>Sources</button>
          </div>
          <DonutChart stakes={record.ownership} totalValue={record.valuation} stockUnitValue={record.stockUnitValue} company={record.company} />
        </div>

        {/* Valuation */}
        <div style={card}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={label}>Valuation</div>
            <button onClick={() => openSection("valuation")} style={smallSourcesBtn}>Sources</button>
          </div>
          <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.03em" }}>{fmt(record.valuation)}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16 }}>
            {record.ownership.map((s, i) => (
              <div key={i} style={{ background: "#1e1e30", borderRadius: 10, padding: "10px 14px", borderLeft: `3px solid ${s.color}` }}>
                <div style={{ fontSize: 12, color: "#888" }}>{s.name}</div>
                <div style={{ fontSize: 16, fontWeight: 700 }}>{fmt(s.shareValue)}</div>
                <div style={{ fontSize: 11, color: "#555" }}>{s.percentage}%</div>
              </div>
            ))}
          </div>
          {record.notes && <div style={{ marginTop: 16, fontSize: 12, color: "#555", fontStyle: "italic" }}>{record.notes}</div>}
        </div>

        {/* Moat */}
        <div style={card}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={label}>Economic Moat / Competitive Position Over Time</div>
            <button onClick={() => openSection("moat")} style={smallSourcesBtn}>Sources</button>
          </div>
          <MoatChart records={data.records} currentYear={record.year} />
        </div>

        {/* Capital Allocation */}
        <div style={card}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={label}>Capital Allocation</div>
            <button onClick={() => openSection("capitalAllocation")} style={smallSourcesBtn}>Sources</button>
          </div>
          <CapitalAllocationChart items={record.capitalAllocation ?? []} year={record.year} />
        </div>

        {/* Global Operations Map */}
        {data.operationsLocations?.[record.year] && (
          <div style={card}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={label}>Global Operations — Headquarters, Regional Offices & Plants</div>
              <button onClick={() => openSection("operations")} style={smallSourcesBtn}>Sources</button>
            </div>
            <WorldMap locations={data.operationsLocations[record.year]} />
          </div>
        )}

      </div>
    </div>
  );
}

const navBtn: React.CSSProperties = { background: "none", border: "1px solid #333", color: "#aaa", fontSize: 28, width: 44, height: 44, borderRadius: 10, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1 };
const backTopBtn: React.CSSProperties = { background: "none", border: "1px solid #333", color: "#aaa", fontSize: 13, fontWeight: 600, padding: "8px 20px", borderRadius: 20, cursor: "pointer", letterSpacing: "0.02em" };
const outlineBtn: React.CSSProperties = { background: "none", border: "1px solid #444", color: "#ccc", fontSize: 13, fontWeight: 600, padding: "8px 20px", borderRadius: 20, cursor: "pointer", letterSpacing: "0.02em" };
const investBtn: React.CSSProperties = { background: "linear-gradient(135deg, #6C8EF5, #8C6CF5)", border: "none", color: "#fff", fontSize: 13, fontWeight: 700, padding: "8px 20px", borderRadius: 20, cursor: "pointer", letterSpacing: "0.02em" };
const forumsBtn: React.CSSProperties = { background: "linear-gradient(135deg, #6C8EF5, #8C6CF5)", border: "none", color: "#fff", fontSize: 13, fontWeight: 700, padding: "8px 20px", borderRadius: 20, cursor: "pointer", letterSpacing: "0.02em" };
const voteBtn: React.CSSProperties = { background: "linear-gradient(135deg, #6C8EF5, #8C6CF5)", border: "none", color: "#fff", fontSize: 13, fontWeight: 700, padding: "8px 18px", borderRadius: 20, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 };
const sourcesBtn: React.CSSProperties = { background: "none", border: "1px solid #333", color: "#888", fontSize: 12, padding: "6px 14px", borderRadius: 8, cursor: "pointer" };
const smallSourcesBtn: React.CSSProperties = { background: "none", border: "1px solid #333", color: "#777", fontSize: 10, padding: "3px 10px", borderRadius: 8, cursor: "pointer" };
