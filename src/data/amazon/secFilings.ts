export interface Citation { title: string; url: string; }

export const amazonSecFilings: Record<number, Citation[]> = {
  1997: [{ title: "Form 10-K405 — FY1997", url: "https://www.sec.gov/Archives/edgar/data/1018724/0000891020-98-000448.txt" }],
  2006: [{ title: "Form 10-K — FY2006", url: "https://www.sec.gov/Archives/edgar/data/1018724/000119312507034081/d10k.htm" }],
  2012: [{ title: "Form 10-K — FY2012", url: "https://www.sec.gov/Archives/edgar/data/1018724/000119312513028520/d445434d10k.htm" }],
  2017: [{ title: "Form 10-K — FY2017", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872418000005/amzn-20171231x10k.htm" }],
  2018: [{ title: "Form 10-K — FY2018", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872419000004/amzn-20181231x10k.htm" }],
  2020: [{ title: "Form 10-K — FY2019", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872420000004/amzn-20191231x10k.htm" }],
  2021: [{ title: "Form 10-K — FY2020", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001018724&type=10-K&dateb=&owner=include&count=40" }],
  2022: [{ title: "Form 10-K — FY2021", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001018724&type=10-K&dateb=&owner=include&count=40" }],
  2023: [{ title: "Form 10-K — FY2022", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001018724&type=10-K&dateb=&owner=include&count=40" }],
  2024: [{ title: "Form 10-K — FY2023", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872424000008/amzn-20231231.htm" }],
  2025: [{ title: "Form 10-K — FY2024", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872425000004/amzn-20241231.htm" }],
  2026: [{ title: "Form 10-K — FY2025", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm" }],
};

export const amazonQuarterlyFilings: Record<number, Citation[]> = {
  2023: [
    { title: "Form 10-Q — Q2 2023 (Aug 2023)", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872423000012/amzn-20230630.htm" },
    { title: "Form 10-Q — Q3 2023 (Oct 2023)", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872423000018/amzn-20230930.htm" },
  ],
  2024: [
    { title: "Form 10-Q — Q1 2024 (May 2024)", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872424000083/amzn-20240331.htm" },
    { title: "Form 10-Q — Q2 2024 (Aug 2024)", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872424000130/amzn-20240630.htm" },
    { title: "Form 10-Q — Q3 2024 (Nov 2024)", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872424000161/amzn-20240930.htm" },
  ],
  2025: [
    { title: "Form 10-Q — Q1 2025 (May 2025)", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872425000036/amzn-20250331.htm" },
    { title: "Form 10-Q — Q2 2025 (Aug 2025)", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872425000086/amzn-20250630.htm" },
    { title: "Form 10-Q — Q3 2025 (Oct 2025)", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872425000123/amzn-20250930.htm" },
  ],
  2026: [{ title: "Form 10-Q — Q1 2026 (Apr 2026)", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000014/amzn-20260331.htm" }],
};

export const amazonSecFilingsGap: Record<number, string> = {
  1994: "Amazon was a private startup in 1994, three years before its IPO — no SEC filings exist for this period.",
  2006: "No standalone quarterly filing highlighted for this year; consult EDGAR directly for the full FY2006 10-Q series.",
  2012: "No standalone quarterly filing highlighted for this year; consult EDGAR directly for the full FY2012 10-Q series.",
  2017: "No standalone quarterly filing highlighted for this year; consult EDGAR directly for the full FY2017 10-Q series.",
  2018: "No standalone quarterly filing highlighted for this year; consult EDGAR directly for the full FY2018 10-Q series.",
  2020: "No standalone quarterly filing highlighted for this year; consult EDGAR directly for the full FY2019/2020 10-Q series.",
  2021: "No standalone quarterly filing highlighted for this year; consult EDGAR directly for the full FY2021 10-Q series.",
  2022: "No standalone quarterly filing highlighted for this year; consult EDGAR directly for the full FY2022 10-Q series.",
};
