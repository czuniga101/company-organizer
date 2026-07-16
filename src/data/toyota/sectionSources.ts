export interface Citation { title: string; url: string; }

const ALL_YEARS = [1937, 1950, 1957, 1966, 1973, 1982, 1990, 1997, 2002, 2007, 2009, 2010, 2011, 2020, 2023, 2024, 2025, 2026];
const gapFor = (specific: Record<number, unknown>, note: string): Record<number, string> =>
  Object.fromEntries(ALL_YEARS.filter((y) => !(y in specific)).map((y) => [y, note]));

export const toyotaCeoSources: Record<number, Citation[]> = {
  2009: [{ title: "TMC Announces Changes to Executive Structure — Toyota Global Newsroom", url: "https://global.toyota/en/newsroom/corporate/38666519.html" }],
  2023: [{ title: "Passing Toyota's Presidency Baton from Akio Toyoda to Koji Sato — Toyota Times", url: "https://toyotatimes.jp/en/newscast/002.html" }],
  2026: [{ title: "Management Team Formation Change — Koji Sato Moves to Vice Chairman, Kenta Kon Named New President — Toyota Times", url: "https://toyotatimes.jp/en/toyota_news/1095.html" }],
};
export const toyotaCeoSourcesGap = gapFor(toyotaCeoSources, "No CEO/president-transition-specific citation has been individually verified for this year. Toyota's executive history is documented via the Toyota Global Newsroom and its Corporate Governance Report.");

export const toyotaOwnershipSourcesGap = gapFor({}, "No independently sourced ownership breakdown has been verified for this year specifically. Toyota, as a foreign private issuer, discloses major shareholders in its Form 20-F annual report on SEC EDGAR.");

export const toyotaValuationSources: Record<number, Citation[]> = {
  2020: [{ title: "Toyota Market Cap History — MacroTrends", url: "https://www.macrotrends.net/stocks/charts/TM/toyota/market-cap" }],
  2025: [{ title: "Toyota (TM) Market Capitalization — companiesmarketcap.com", url: "https://companiesmarketcap.com/toyota/marketcap/" }],
};
export const toyotaValuationSourcesGap = gapFor(toyotaValuationSources, "No independently sourced valuation citation has been verified for this year specifically. For Toyota's historical market capitalization, consult its Form 20-F filings on SEC EDGAR.");

export const toyotaMoatSourcesGap = gapFor({}, "The economic moat score and label shown for this year are an internal editorial estimate produced for this application, not derived from a single external report or filing.");

export const toyotaCapitalAllocationSourcesGap = gapFor({}, "The capital allocation breakdown shown for this year is an internal editorial estimate. For Toyota's actual capital allocation, consult the Form 20-F for this fiscal year on SEC EDGAR.");

export const toyotaOperationsSources: Record<number, Citation[]> = {
  1982: [{ title: "Toyota Motor Manufacturing Kentucky — Georgetown plant history — Toyota USA Newsroom", url: "https://pressroom.toyota.com/operations/" }],
  2007: [{ title: "Toyota Manufacturing in The U.S. — Anderson-Weber Toyota (dealer-published history, sourced from Toyota press materials)", url: "https://www.andersonwebertoyota.com/toyota-manufacturing-in-the-u-s/" }],
};
export const toyotaOperationsSourcesGap = gapFor(toyotaOperationsSources, "The facilities shown on this year's map are compiled from verified public reporting on Toyota's real estate and manufacturing history, but no single citation has been individually attached for this specific year.");
