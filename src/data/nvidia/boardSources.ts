export interface Citation { title: string; url: string; }

export const nvidiaBoardSources: Record<number, Citation[]> = {
  2020: [{ title: "NVIDIA Corporation — 2020 Proxy Statement (Form DEF 14A) — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001045810&type=DEF+14A&dateb=&owner=include&count=40" }],
  2023: [{ title: "NVIDIA Corporation — 2023 Proxy Statement (Form DEF 14A) — SEC EDGAR", url: "https://www.sec.gov/Archives/edgar/data/1045810/000104581023000080/nvda-20230508.htm" }],
  2024: [{ title: "NVIDIA Corporation — 2024 Proxy Statement (Form DEF 14A) — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001045810&type=DEF+14A&dateb=&owner=include&count=40" }],
  2025: [{ title: "NVIDIA Corporation — 2025 Proxy Statement (Form DEF 14A) — SEC EDGAR", url: "https://www.sec.gov/Archives/edgar/data/1045810/000104581025000095/nvda-20250512.htm" }],
  2026: [{ title: "NVIDIA Corporation — 2026 Proxy Statement (Form DEF 14A) — SEC EDGAR", url: "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000036/nvda-20260512.htm" }],
};

const FALLBACK = "No board-specific citation has been individually verified for this year. For the most reliable record of NVIDIA's board composition at any point in time, consult NVIDIA's proxy statements (Form DEF 14A) filed with the SEC, the company's own official disclosure of board membership and changes.";

export const nvidiaBoardSourcesGap: Record<number, string> = Object.fromEntries(
  [1993, 1999, 2006, 2012, 2016, 2018, 2022]
    .map((y) => [y, FALLBACK])
);
