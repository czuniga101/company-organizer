export interface Citation { title: string; url: string; }

export const nvidiaSecFilings: Record<number, Citation[]> = {
  1999: [{ title: "Form 10-K405 — FY ended Jan 1999", url: "https://www.sec.gov/Archives/edgar/data/0001045810/000101287000001346/0001012870-00-001346.txt" }],
  2006: [{ title: "Form 10-K — FY2006", url: "https://www.sec.gov/Archives/edgar/data/0001045810/000104581006000014/fy2006annualreportonform10-k.htm" }],
  2012: [{ title: "Form 10-K — FY2012", url: "https://www.sec.gov/Archives/edgar/data/1045810/000104581012000013/nvda-2012x10k.htm" }],
  2016: [{ title: "Form 10-K — FY2016", url: "https://www.sec.gov/Archives/edgar/data/1045810/000104581016000205/nvda-2016x10k.htm" }],
  2018: [{ title: "Form 10-K — FY2018", url: "https://www.sec.gov/Archives/edgar/data/1045810/000104581018000010/nvda-2018x10k.htm" }],
  2020: [{ title: "Form 10-K — FY2020", url: "https://www.sec.gov/Archives/edgar/data/1045810/000104581020000010/nvda-2020x10k.htm" }],
  2022: [{ title: "Form 10-K — FY2022", url: "https://www.sec.gov/Archives/edgar/data/1045810/000104581022000036/nvda-20220130.htm" }],
  2023: [{ title: "Form 10-K — FY2023", url: "https://www.sec.gov/Archives/edgar/data/1045810/000104581023000017/nvda-20230129.htm" }],
  2024: [{ title: "Form 10-K — FY2024", url: "https://www.sec.gov/Archives/edgar/data/1045810/000104581024000029/nvda-20240128.htm" }],
  2025: [{ title: "Form 10-K — FY2025", url: "https://www.sec.gov/Archives/edgar/data/1045810/000104581025000023/nvda-20250126.htm" }],
  2026: [{ title: "Form 10-K — FY2026", url: "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000021/nvda-20260125.htm" }],
};

export const nvidiaQuarterlyFilings: Record<number, Citation[]> = {
  2020: [
    { title: "Form 10-Q — Q2 FY2021 (Aug 2020)", url: "https://www.sec.gov/Archives/edgar/data/1045810/000104581020000147/nvda-20200726.htm" },
    { title: "Form 10-Q — Q3 FY2021 (Nov 2020)", url: "https://www.sec.gov/Archives/edgar/data/1045810/000104581020000189/nvda-20201025.htm" },
  ],
  2022: [
    { title: "Form 10-Q — Q1 FY2023 (May 2022)", url: "https://www.sec.gov/Archives/edgar/data/1045810/000104581022000079/nvda-20220501.htm" },
    { title: "Form 10-Q — Q2 FY2023 (Aug 2022)", url: "https://www.sec.gov/Archives/edgar/data/1045810/000104581022000147/nvda-20220731.htm" },
    { title: "Form 10-Q — Q3 FY2023 (Nov 2022)", url: "https://www.sec.gov/Archives/edgar/data/1045810/000104581022000166/nvda-20221030.htm" },
  ],
  2023: [
    { title: "Form 10-Q — Q1 FY2024 (May 2023)", url: "https://www.sec.gov/Archives/edgar/data/1045810/000104581023000093/nvda-20230430.htm" },
    { title: "Form 10-Q — Q2 FY2024 (Aug 2023)", url: "https://www.sec.gov/Archives/edgar/data/1045810/000104581023000175/nvda-20230730.htm" },
    { title: "Form 10-Q — Q3 FY2024 (Nov 2023)", url: "https://www.sec.gov/Archives/edgar/data/1045810/000104581023000227/nvda-20231029.htm" },
  ],
  2024: [
    { title: "Form 10-Q — Q1 FY2025 (May 2024)", url: "https://www.sec.gov/Archives/edgar/data/1045810/000104581024000124/nvda-20240428.htm" },
    { title: "Form 10-Q — Q2 FY2025 (Aug 2024)", url: "https://www.sec.gov/Archives/edgar/data/1045810/000104581024000264/nvda-20240728.htm" },
    { title: "Form 10-Q — Q3 FY2025 (Nov 2024)", url: "https://www.sec.gov/Archives/edgar/data/1045810/000104581024000316/nvda-20241027.htm" },
  ],
  2025: [
    { title: "Form 10-Q — Q1 FY2026 (May 2025)", url: "https://www.sec.gov/Archives/edgar/data/1045810/000104581025000116/nvda-20250427.htm" },
    { title: "Form 10-Q — Q2 FY2026 (Aug 2025)", url: "https://www.sec.gov/Archives/edgar/data/1045810/000104581025000209/nvda-20250727.htm" },
    { title: "Form 10-Q — Q3 FY2026 (Nov 2025)", url: "https://www.sec.gov/Archives/edgar/data/1045810/000104581025000230/nvda-20251026.htm" },
  ],
  2026: [{ title: "Form 10-Q — Q1 FY2027 (May 2026)", url: "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000052/nvda-20260426.htm" }],
};

export const nvidiaSecFilingsGap: Record<number, string> = {
  1993: "NVIDIA was a private startup in 1993, five years before its IPO — no SEC filings exist for this period.",
  2018: "No standalone quarterly filing highlighted for this year; consult EDGAR directly for the full FY2019 10-Q series.",
  2020: "Only a sample of FY2021 10-Q filings is shown; consult EDGAR directly for the complete quarterly filing history before 2020.",
};
