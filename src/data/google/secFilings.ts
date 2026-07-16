export interface Citation { title: string; url: string; }

export const googleSecFilings: Record<number, Citation[]> = {
  2004: [{ title: "Form S-1 — IPO Registration Statement", url: "https://www.sec.gov/Archives/edgar/data/1288776/000119312504142742/ds1.htm" }],
  2011: [{ title: "Form 10-K — FY2012 (earliest available in this EDGAR range)", url: "https://www.sec.gov/Archives/edgar/data/1288776/000119312513028362/d452134d10k.htm" }],
  2015: [{ title: "Form 10-K — FY2015 (first as Alphabet Inc.)", url: "https://www.sec.gov/Archives/edgar/data/1652044/000165204416000012/goog10-k2015.htm" }],
  2019: [{ title: "Form 10-K — FY2019", url: "https://www.sec.gov/Archives/edgar/data/1652044/000165204420000008/goog10-k2019.htm" }],
  2020: [{ title: "Form 10-K — FY2020", url: "https://www.sec.gov/Archives/edgar/data/1652044/000165204421000010/goog-20201231.htm" }],
  2022: [{ title: "Form 10-K — FY2022", url: "https://www.sec.gov/Archives/edgar/data/1652044/000165204423000016/goog-20221231.htm" }],
  2024: [{ title: "Form 10-K — FY2023", url: "https://www.sec.gov/Archives/edgar/data/1652044/000165204424000022/goog-20231231.htm" }],
  2025: [{ title: "Form 10-K — FY2024", url: "https://www.sec.gov/Archives/edgar/data/1652044/000165204425000014/goog-20241231.htm" }],
  2026: [{ title: "Form 10-K — FY2025", url: "https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm" }],
};

export const googleQuarterlyFilings: Record<number, Citation[]> = {
  2024: [
    { title: "Form 10-Q — Q1 2024 (Apr 2024)", url: "https://www.sec.gov/Archives/edgar/data/1652044/000165204424000053/goog-20240331.htm" },
    { title: "Form 10-Q — Q2 2024 (Jul 2024)", url: "https://www.sec.gov/Archives/edgar/data/1652044/000165204424000079/goog-20240630.htm" },
    { title: "Form 10-Q — Q3 2024 (Oct 2024)", url: "https://www.sec.gov/Archives/edgar/data/1652044/000165204424000118/goog-20240930.htm" },
  ],
  2025: [
    { title: "Form 10-Q — Q1 2025 (Apr 2025)", url: "https://www.sec.gov/Archives/edgar/data/1652044/000165204425000043/goog-20250331.htm" },
    { title: "Form 10-Q — Q2 2025 (Jul 2025)", url: "https://www.sec.gov/Archives/edgar/data/1652044/000165204425000062/goog-20250630.htm" },
    { title: "Form 10-Q — Q3 2025 (Oct 2025)", url: "https://www.sec.gov/Archives/edgar/data/1652044/000165204425000091/goog-20250930.htm" },
  ],
  2026: [{ title: "Form 10-Q — Q1 2026 (Apr 2026)", url: "https://www.sec.gov/Archives/edgar/data/1652044/000165204426000048/goog-20260331.htm" }],
};

export const googleSecFilingsGap: Record<number, string> = {
  1998: "Google was a private startup in 1998, six years before its IPO — no SEC filings exist for this period.",
  2011: "No standalone quarterly filing highlighted for this year; consult EDGAR directly for the full FY2011 10-Q series.",
  2015: "No standalone quarterly filing highlighted for this year; consult EDGAR directly for the full FY2015 10-Q series.",
  2019: "No standalone quarterly filing highlighted for this year; consult EDGAR directly for the full FY2019 10-Q series.",
  2020: "No standalone quarterly filing highlighted for this year; consult EDGAR directly for the full FY2020 10-Q series.",
  2022: "No standalone quarterly filing highlighted for this year; consult EDGAR directly for the full FY2022 10-Q series.",
};
