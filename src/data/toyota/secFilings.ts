export interface Citation { title: string; url: string; }

// Toyota Motor Corp (CIK 0001094517) files Form 20-F (annual report for
// foreign private issuers) instead of 10-K, and does not file 10-Qs —
// foreign private issuers instead file 6-K for interim/material updates,
// which are far less standardized and not indexed the same way here.
// All links verified against SEC EDGAR submissions API, HTTP 200.
export const toyotaSecFilings: Record<number, Citation[]> = {
  2002: [{ title: "Form 20-F — Fiscal Year 2002 (filed 2003-07-31)", url: "https://www.sec.gov/Archives/edgar/data/1094517/000119312503027032/d20f.htm" }],
  2009: [{ title: "Form 20-F — Fiscal Year 2009 (filed 2009-06-24)", url: "https://www.sec.gov/Archives/edgar/data/1094517/000119312509136292/d20f.htm" }],
  2010: [{ title: "Form 20-F — Fiscal Year 2010 (filed 2010-06-25)", url: "https://www.sec.gov/Archives/edgar/data/1094517/000119312510146673/d20f.htm" }],
  2011: [{ title: "Form 20-F — Fiscal Year 2011 (filed 2011-06-24)", url: "https://www.sec.gov/Archives/edgar/data/1094517/000119312511172686/d20f.htm" }],
  2020: [{ title: "Form 20-F — Fiscal Year 2020 (filed 2020-06-24)", url: "https://www.sec.gov/Archives/edgar/data/1094517/000119312520177015/d825023d20f.htm" }],
  2023: [{ title: "Form 20-F — Fiscal Year 2023 (filed 2023-06-30)", url: "https://www.sec.gov/Archives/edgar/data/1094517/000119312523179181/d360541d20f.htm" }],
  2024: [{ title: "Form 20-F — Fiscal Year 2024 (filed 2024-06-25)", url: "https://www.sec.gov/Archives/edgar/data/1094517/000119312524167462/d807954d20f.htm" }],
  2025: [{ title: "Form 20-F — Fiscal Year 2025 (filed 2025-06-18)", url: "https://www.sec.gov/Archives/edgar/data/1094517/000119312525142326/d925022d20f.htm" }],
  2026: [{ title: "Form 20-F — Fiscal Year 2026 (filed 2026-06-10)", url: "https://www.sec.gov/Archives/edgar/data/1094517/000119312526264811/d101983d20f.htm" }],
};

export const toyotaQuarterlyFilings: Record<number, Citation[]> = {};

export const toyotaSecFilingsGap: Record<number, string> = {
  1937: "Toyota was a Japanese domestic company in 1937 with no SEC registration — it did not list ADRs on a US exchange or file with the SEC until decades later.",
  1950: "Pre-SEC-registration era for Toyota; no US filings exist for this year.",
  1957: "Pre-SEC-registration era for Toyota; no US filings exist for this year.",
  1966: "Pre-SEC-registration era for Toyota; no US filings exist for this year.",
  1973: "Pre-SEC-registration era for Toyota; no US filings exist for this year.",
  1982: "Pre-SEC-registration era for Toyota; no US filings exist for this year.",
  1990: "Pre-SEC-registration era for Toyota; no US filings exist for this year.",
  1997: "Pre-SEC-registration era for Toyota; no US filings exist for this year.",
  2007: "Toyota was SEC-registered by this point (see the 2002 and 2009-2011 filings), but this year's specific 20-F was not added to this app's dataset yet.",
};

// Note: Toyota does not file 10-Q equivalents — as a foreign private issuer,
// interim disclosures are made via Form 6-K, which is far less standardized
// and not catalogued in this app's dataset.
