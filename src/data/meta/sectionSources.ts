export interface Citation { title: string; url: string; }

const ALL_YEARS = [2004, 2012, 2014, 2018, 2021, 2022, 2024, 2025, 2026];
const gapFor = (specific: Record<number, unknown>, note: string): Record<number, string> =>
  Object.fromEntries(ALL_YEARS.filter((y) => !(y in specific)).map((y) => [y, note]));

export const metaCeoSources: Record<number, Citation[]> = {};
export const metaCeoSourcesGap = gapFor({}, "Meta has had a single CEO (Mark Zuckerberg) throughout its history; no separate transition citation applies. Meta's executive officers are documented in its proxy statements (Form DEF 14A) on SEC EDGAR.");

export const metaOwnershipSources: Record<number, Citation[]> = {
  2012: [{ title: "Facebook, Inc. — Form S-1 IPO Registration Statement — SEC EDGAR", url: "https://www.sec.gov/Archives/edgar/data/1326801/000119312512034517/d287954ds1.htm" }],
  2026: [{ title: "Who Owns Meta (Facebook): The Largest Shareholders Overview — Kamil Franek Business Analytics", url: "https://www.kamilfranek.com/who-owns-meta-largest-shareholders/" }],
};
export const metaOwnershipSourcesGap = gapFor(metaOwnershipSources, "No independently sourced ownership breakdown has been verified for this year specifically. For exact institutional and insider holdings at any point in time, consult Meta's SEC Schedule 13F/13D/4 filings via EDGAR.");

export const metaValuationSources: Record<number, Citation[]> = {
  2024: [{ title: "Meta passes $1 trillion in market cap — CNBC", url: "https://www.cnbc.com/2024/01/24/meta-passes-1-trillion-in-market-cap.html" }],
  2026: [{ title: "Meta Platforms (Facebook) (META) Market Capitalization — companiesmarketcap.com", url: "https://companiesmarketcap.com/meta-platforms/marketcap/" }],
};
export const metaValuationSourcesGap = gapFor(metaValuationSources, "No independently sourced valuation citation has been verified for this year specifically. For Meta's historical market capitalization, consult its Form 10-K/10-Q filings on SEC EDGAR.");

export const metaMoatSourcesGap = gapFor({}, "The economic moat score and label shown for this year are an internal editorial estimate produced for this application, not derived from a single external report or filing.");

export const metaCapitalAllocationSourcesGap = gapFor({}, "The capital allocation breakdown shown for this year is an internal editorial estimate. For Meta's actual capital allocation, consult the Form 10-K for this fiscal year on SEC EDGAR.");

export const metaOperationsSources: Record<number, Citation[]> = {
  2012: [{ title: "Meta Platforms — Britannica Money (Menlo Park campus history)", url: "https://www.britannica.com/money/Meta-Platforms" }],
};
export const metaOperationsSourcesGap = gapFor(metaOperationsSources, "The facilities shown on this year's map are compiled from verified public reporting on Meta's real estate and data-center history, but no single citation has been individually attached for this specific year.");
