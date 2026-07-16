export interface Citation { title: string; url: string; }

export const teslaBoardSources: Record<number, Citation[]> = {
  2010: [{ title: "Tesla Motors, Inc. — IPO Registration Statement (Form S-1) — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001318605&type=S-1&dateb=&owner=include&count=40" }],
  2018: [
    { title: "Tesla, Inc. — 2018 Proxy Statement (Form DEF 14A) — SEC EDGAR", url: "https://www.sec.gov/Archives/edgar/data/0001318605/000156459018009339/tsla-def14a_20180606.htm" },
    { title: "Tesla, Inc. — SEC Settlement Related Disclosure (Form DEFA14A) — SEC EDGAR", url: "https://www.sec.gov/Archives/edgar/data/1318605/000156459020040039/tsla-defa14a_20200922.htm" },
  ],
  2023: [{ title: "Corporate Governance — Tesla Investor Relations", url: "https://ir.tesla.com/corporate" }],
  2024: [
    { title: "Tesla, Inc. — 2024 Proxy Statement Supplement (Form DEFA14A) — SEC EDGAR", url: "https://www.sec.gov/Archives/edgar/data/1318605/000110465924068792/tm2413800d20_defa14a.htm" },
    { title: "Elon Musk's Drug Use Is the Latest Headache for Tesla's Board — Claims Journal (Reuters)", url: "https://www.claimsjournal.com/news/national/2024/01/09/321382.htm" },
  ],
  2025: [{ title: "Tesla, Inc. — 2025 Proxy Statement Supplement (Form DEFA14A) — SEC EDGAR", url: "https://www.sec.gov/Archives/edgar/data/1318605/000110465925087882/tm2525295d1_defa14a.htm" }],
  2026: [{ title: "Corporate Governance — Tesla Investor Relations", url: "https://ir.tesla.com/corporate" }],
};

const FALLBACK = "No board-specific citation has been individually verified for this year. For the most reliable record of Tesla's board composition at any point in time, consult Tesla's proxy statements (Form DEF 14A) filed with the SEC or the Corporate Governance section of Tesla Investor Relations (ir.tesla.com/corporate), both official company disclosures.";

export const teslaBoardSourcesGap: Record<number, string> = Object.fromEntries(
  Array.from({ length: 2026 - 2003 + 1 }, (_, i) => 2003 + i)
    .filter((y) => !(y in teslaBoardSources))
    .map((y) => [y, FALLBACK])
);
