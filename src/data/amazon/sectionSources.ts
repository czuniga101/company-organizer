export interface Citation { title: string; url: string; }

const ALL_YEARS = [1994, 1997, 2006, 2012, 2017, 2018, 2020, 2021, 2022, 2023, 2024, 2025, 2026];
const gapFor = (specific: Record<number, unknown>, note: string): Record<number, string> =>
  Object.fromEntries(ALL_YEARS.filter((y) => !(y in specific)).map((y) => [y, note]));

export const amazonCeoSources: Record<number, Citation[]> = {
  2021: [
    { title: "Amazon.com Announces Financial Results and CEO Transition — Amazon Press Center", url: "https://press.aboutamazon.com/2021/2/amazon-com-announces-financial-results-and-ceo-transition" },
    { title: "Jeff Bezos to step down as Amazon CEO, Andy Jassy to take over — CNBC", url: "https://www.cnbc.com/2021/02/02/jeff-bezos-to-step-down-as-amazon-ceo-andy-jassy-to-take-over-in-q3.html" },
  ],
};
export const amazonCeoSourcesGap = gapFor(amazonCeoSources, "No CEO-transition-specific citation has been individually verified for this year. Amazon's CEO history is documented in its SEC filings (Forms 10-K/8-K) and proxy statements (Form DEF 14A).");

export const amazonOwnershipSources: Record<number, Citation[]> = {
  1997: [{ title: "Amazon.com, Inc. — Form S-1 IPO Registration Statement — SEC EDGAR", url: "https://www.sec.gov/Archives/edgar/data/1018724/0000891618-97-001309.txt" }],
  2026: [{ title: "Does Jeff Bezos Still Own Amazon in 2026? — WisePPC", url: "https://wiseppc.com/blog/does-jeff-bezos-still-own-amazon/" }],
};
export const amazonOwnershipSourcesGap = gapFor(amazonOwnershipSources, "No independently sourced ownership breakdown has been verified for this year specifically. For exact institutional and insider holdings at any point in time, consult Amazon's SEC Schedule 13F/13D/4 filings via EDGAR.");

export const amazonValuationSources: Record<number, Citation[]> = {
  2018: [{ title: "Amazon (AMZN) Market Capitalization — companiesmarketcap.com", url: "https://companiesmarketcap.com/amazon/marketcap/" }],
  2024: [{ title: "Amazon market cap reaches $2 trillion — Retail Dive", url: "https://www.retaildive.com/news/amazon-market-cap-reaches-two-trillion/720052/" }],
};
export const amazonValuationSourcesGap = gapFor(amazonValuationSources, "No independently sourced valuation citation has been verified for this year specifically. For Amazon's historical market capitalization, consult its Form 10-K/10-Q filings on SEC EDGAR.");

export const amazonMoatSourcesGap = gapFor({}, "The economic moat score and label shown for this year are an internal editorial estimate produced for this application, not derived from a single external report or filing.");

export const amazonCapitalAllocationSourcesGap = gapFor({}, "The capital allocation breakdown shown for this year is an internal editorial estimate. For Amazon's actual capital allocation, consult the Form 10-K for this fiscal year on SEC EDGAR.");

export const amazonOperationsSources: Record<number, Citation[]> = {
  2017: [{ title: "Amazon HQ2 — Arlington Historical Society", url: "https://arlingtonhistorical.com/items/show/269" }],
  2023: [{ title: "Why Amazon built a second headquarters and how the pandemic reshaped HQ2 — CNBC", url: "https://www.cnbc.com/2023/06/19/why-amazon-built-hq2-and-how-covid-pandemic-reshaped-it.html" }],
};
export const amazonOperationsSourcesGap = gapFor(amazonOperationsSources, "The facilities shown on this year's map are compiled from verified public reporting on Amazon's real estate and logistics/data-center history, but no single citation has been individually attached for this specific year.");
