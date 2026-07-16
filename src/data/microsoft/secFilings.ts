export interface Citation { title: string; url: string; }

export const microsoftSecFilings: Record<number, Citation[]> = {
  1995: [{ title: "Form 10-K — FY1995", url: "https://www.sec.gov/Archives/edgar/data/789019/0000891020-95-000433.txt" }],
  2000: [{ title: "Form 10-K — FY2000", url: "https://www.sec.gov/Archives/edgar/data/789019/000103221000001961/0001.txt" }],
  2007: [{ title: "Form 10-K — FY2007", url: "https://www.sec.gov/Archives/edgar/data/789019/000119312507170817/d10k.htm" }],
  2014: [{ title: "Form 10-K — FY2014", url: "https://www.sec.gov/Archives/edgar/data/789019/000119312514289961/d722626d10k.htm" }],
  2019: [{ title: "Form 10-K — FY2019", url: "https://www.sec.gov/Archives/edgar/data/789019/000156459019027952/msft-10k_20190630.htm" }],
  2021: [{ title: "Form 10-K — FY2021", url: "https://www.sec.gov/Archives/edgar/data/789019/000156459021039151/msft-10k_20210630.htm" }],
  2024: [{ title: "Form 10-K — FY2024", url: "https://www.sec.gov/Archives/edgar/data/789019/000095017024087843/msft-20240630.htm" }],
  2025: [{ title: "Form 10-K — FY2025", url: "https://www.sec.gov/Archives/edgar/data/789019/000095017025100235/msft-20250630.htm" }],
};

export const microsoftQuarterlyFilings: Record<number, Citation[]> = {
  2024: [
    { title: "Form 10-Q — Q1 FY2025 (Oct 2024)", url: "https://www.sec.gov/Archives/edgar/data/789019/000095017024118967/msft-20240930.htm" },
    { title: "Form 10-Q — Q2 FY2025 (Jan 2025)", url: "https://www.sec.gov/Archives/edgar/data/789019/000095017025010491/msft-20241231.htm" },
  ],
  2025: [
    { title: "Form 10-Q — Q3 FY2025 (Apr 2025)", url: "https://www.sec.gov/Archives/edgar/data/789019/000095017025061046/msft-20250331.htm" },
    { title: "Form 10-Q — Q1 FY2026 (Oct 2025)", url: "https://www.sec.gov/Archives/edgar/data/789019/000119312525256321/msft-20250930.htm" },
  ],
  2026: [
    { title: "Form 10-Q — Q2 FY2026 (Jan 2026)", url: "https://www.sec.gov/Archives/edgar/data/789019/000119312526027207/msft-20251231.htm" },
    { title: "Form 10-Q — Q3 FY2026 (Apr 2026)", url: "https://www.sec.gov/Archives/edgar/data/789019/000119312526191507/msft-20260331.htm" },
  ],
};

export const microsoftSecFilingsGap: Record<number, string> = {
  1975: "Microsoft was a private startup in 1975, eleven years before its IPO — no SEC filings exist for this period.",
  1986: "Microsoft's IPO prospectus (Form S-1) predates SEC EDGAR's full-text digitization; consult SEC EDGAR directly for the earliest available filings from 1986.",
  1995: "No standalone quarterly filing highlighted for this year; consult EDGAR directly for the full FY1995 10-Q series.",
  2000: "No standalone quarterly filing highlighted for this year; consult EDGAR directly for the full FY2000 10-Q series.",
  2007: "No standalone quarterly filing highlighted for this year; consult EDGAR directly for the full FY2007 10-Q series.",
  2014: "No standalone quarterly filing highlighted for this year; consult EDGAR directly for the full FY2014 10-Q series.",
  2019: "No standalone quarterly filing highlighted for this year; consult EDGAR directly for the full FY2019 10-Q series.",
  2021: "No standalone quarterly filing highlighted for this year; consult EDGAR directly for the full FY2021 10-Q series.",
};
