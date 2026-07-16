export interface Citation { title: string; url: string; }

export const metaSources: Record<number, Citation[]> = {
  2004: [{ title: "Mark Zuckerberg — Wikipedia (founding history)", url: "https://en.wikipedia.org/wiki/Mark_Zuckerberg" }],
  2012: [{ title: "Facebook, Inc. — Form S-1 IPO Registration Statement — SEC EDGAR", url: "https://www.sec.gov/Archives/edgar/data/1326801/000119312512034517/d287954ds1.htm" }],
  2014: [{ title: "Facebook, Inc. — Form 10-K (FY2014) — SEC EDGAR", url: "https://www.sec.gov/Archives/edgar/data/1326801/000132680115000006/fb-12312014x10k.htm" }],
  2018: [{ title: "Meta Platforms | Facebook, Instagram, WhatsApp, & AI — Britannica Money", url: "https://www.britannica.com/money/Meta-Platforms" }],
  2021: [
    { title: "The Facebook Company Is Now Meta — Meta Newsroom", url: "https://about.fb.com/news/2021/10/facebook-company-is-now-meta/" },
    { title: "Facebook is changing its name to Meta, Zuckerberg announces — NPR", url: "https://www.npr.org/2021/10/28/1049813246/facebook-new-name-meta-mark-zuckerberg" },
  ],
  2022: [{ title: "Sheryl Sandberg will step down as Meta COO — TechCrunch", url: "https://techcrunch.com/2022/06/01/sheryl-sandberg-steps-down-facebook/" }],
  2024: [{ title: "Meta passes $1 trillion in market cap — CNBC", url: "https://www.cnbc.com/2024/01/24/meta-passes-1-trillion-in-market-cap.html" }],
  2025: [{ title: "Meta Platforms Market Cap 2012-2026 — MacroTrends", url: "https://www.macrotrends.net/stocks/charts/META/meta-platforms/market-cap" }],
  2026: [{ title: "Meta Platforms (Facebook) (META) Market Capitalization — companiesmarketcap.com", url: "https://companiesmarketcap.com/meta-platforms/marketcap/" }],
};
