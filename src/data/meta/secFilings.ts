export interface Citation { title: string; url: string; }

export const metaSecFilings: Record<number, Citation[]> = {
  2012: [{ title: "Form S-1 — IPO Registration Statement", url: "https://www.sec.gov/Archives/edgar/data/1326801/000119312512034517/d287954ds1.htm" }],
  2014: [{ title: "Form 10-K — FY2014", url: "https://www.sec.gov/Archives/edgar/data/1326801/000132680115000006/fb-12312014x10k.htm" }],
  2018: [{ title: "Form 10-K — FY2018", url: "https://www.sec.gov/Archives/edgar/data/1326801/000132680119000009/fb-12312018x10k.htm" }],
  2021: [{ title: "Form 10-K — FY2021", url: "https://www.sec.gov/Archives/edgar/data/1326801/000132680122000018/fb-20211231.htm" }],
  2022: [{ title: "Form 10-K — FY2022", url: "https://www.sec.gov/Archives/edgar/data/1326801/000132680123000013/meta-20221231.htm" }],
  2024: [{ title: "Form 10-K — FY2023", url: "https://www.sec.gov/Archives/edgar/data/1326801/000132680124000012/meta-20231231.htm" }],
  2025: [{ title: "Form 10-K — FY2024", url: "https://www.sec.gov/Archives/edgar/data/1326801/000132680125000017/meta-20241231.htm" }],
  2026: [{ title: "Form 10-K — FY2025", url: "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm" }],
};

export const metaQuarterlyFilings: Record<number, Citation[]> = {
  2024: [
    { title: "Form 10-Q — Q2 2024 (Aug 2024)", url: "https://www.sec.gov/Archives/edgar/data/1326801/000132680124000069/meta-20240630.htm" },
    { title: "Form 10-Q — Q3 2024 (Oct 2024)", url: "https://www.sec.gov/Archives/edgar/data/1326801/000132680124000081/meta-20240930.htm" },
  ],
  2025: [
    { title: "Form 10-Q — Q1 2025 (May 2025)", url: "https://www.sec.gov/Archives/edgar/data/1326801/000132680125000054/meta-20250331.htm" },
    { title: "Form 10-Q — Q2 2025 (Jul 2025)", url: "https://www.sec.gov/Archives/edgar/data/1326801/000162828025036791/meta-20250630.htm" },
    { title: "Form 10-Q — Q3 2025 (Oct 2025)", url: "https://www.sec.gov/Archives/edgar/data/1326801/000162828025047240/meta-20250930.htm" },
  ],
  2026: [{ title: "Form 10-Q — Q1 2026 (Apr 2026)", url: "https://www.sec.gov/Archives/edgar/data/1326801/000162828026028526/meta-20260331.htm" }],
};

export const metaSecFilingsGap: Record<number, string> = {
  2004: "Facebook was a private startup in 2004, eight years before its IPO — no SEC filings exist for this period.",
  2012: "No standalone quarterly filing highlighted for this year; consult EDGAR directly for the full FY2012 10-Q series.",
  2014: "No standalone quarterly filing highlighted for this year; consult EDGAR directly for the full FY2014 10-Q series.",
  2018: "No standalone quarterly filing highlighted for this year; consult EDGAR directly for the full FY2018 10-Q series.",
  2021: "No standalone quarterly filing highlighted for this year; consult EDGAR directly for the full FY2021 10-Q series.",
  2022: "No standalone quarterly filing highlighted for this year; consult EDGAR directly for the full FY2022 10-Q series.",
};
