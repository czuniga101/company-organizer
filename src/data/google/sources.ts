export interface Citation { title: string; url: string; }

export const googleSources: Record<number, Citation[]> = {
  1998: [{ title: "How we started and where we are today — Google", url: "https://about.google/company-info/our-story/" }],
  2004: [{ title: "Google Inc. — Form S-1 IPO Registration Statement — SEC EDGAR", url: "https://www.sec.gov/Archives/edgar/data/1288776/000119312504142742/ds1.htm" }],
  2011: [{ title: "Google Inc. — Form 10-K (FY2011 era filings) — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001288776&type=10-K&dateb=&owner=include&count=40" }],
  2015: [{ title: "Alphabet Inc. — Form 10-K (FY2015) — SEC EDGAR", url: "https://www.sec.gov/Archives/edgar/data/1652044/000165204416000012/goog10-k2015.htm" }],
  2019: [{ title: "Larry Page steps down as CEO of Alphabet, Sundar Pichai to take over — CNBC", url: "https://www.cnbc.com/2019/12/03/larry-page-steps-down-as-ceo-of-alphabet.html" }],
  2020: [{ title: "Chart: Google's Climb Towards $1 Trillion — Statista", url: "https://www.statista.com/chart/15326/google---alphabet-market-capitalization/" }],
  2022: [{ title: "Alphabet (Google) (GOOG) Market Capitalization — companiesmarketcap.com", url: "https://companiesmarketcap.com/alphabet-google/marketcap/" }],
  2024: [{ title: "AI is powering Google to a $2 trillion market cap — Quartz", url: "https://qz.com/google-alphabet-stock-market-cap-ai-1851404173" }],
  2025: [{ title: "Alphabet Market Cap 2012-2026 — MacroTrends", url: "https://www.macrotrends.net/stocks/charts/GOOGL/alphabet/market-cap" }],
  2026: [{ title: "Alphabet (Google) (GOOG) Market Capitalization — companiesmarketcap.com", url: "https://companiesmarketcap.com/alphabet-google/marketcap/" }],
};
