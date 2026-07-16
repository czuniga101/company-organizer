export interface Citation { title: string; url: string; }

const ALL_YEARS = Array.from({ length: 2026 - 2003 + 1 }, (_, i) => 2003 + i);
const gapFor = (specific: Record<number, unknown>, note: string): Record<number, string> =>
  Object.fromEntries(ALL_YEARS.filter((y) => !(y in specific)).map((y) => [y, note]));

export const teslaCeoSources: Record<number, Citation[]> = {
  2008: [{ title: "Tesla, Inc. — SEC Form S-1 IPO Registration (management history)", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001318605&type=S-1&dateb=&owner=include&count=40" }],
  2018: [{ title: "Elon Musk SEC settlement (steps down as Chairman) — SEC Press Release", url: "https://www.sec.gov/litigation/litreleases/2018/lr24239.htm" }],
};
export const teslaCeoSourcesGap = gapFor(teslaCeoSources, "No CEO-transition-specific citation has been individually verified for this year. Tesla's CEO history is documented in its SEC filings (Forms 10-K/8-K) and proxy statements (Form DEF 14A).");

export const teslaOwnershipSources: Record<number, Citation[]> = {
  2010: [{ title: "Tesla S-1 / IPO Prospectus — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001318605&type=S-1&dateb=&owner=include&count=40" }],
};
export const teslaOwnershipSourcesGap = gapFor(teslaOwnershipSources, "No independently sourced ownership breakdown has been verified for this year specifically. For exact institutional and insider holdings at any point in time, consult Tesla's SEC Schedule 13F/13D/4 filings via EDGAR.");

export const teslaValuationSources: Record<number, Citation[]> = {
  2020: [{ title: "S&P 500 Index Addition of Tesla, Inc. — S&P Global", url: "https://www.spglobal.com/spdji/en/documents/additional-material/tesla-sp-500-addition.pdf" }],
};
export const teslaValuationSourcesGap = gapFor(teslaValuationSources, "No independently sourced valuation citation has been verified for this year specifically. For Tesla's historical market capitalization, consult its Form 10-K/10-Q filings on SEC EDGAR.");

export const teslaMoatSourcesGap = gapFor({}, "The economic moat score and label shown for this year are an internal editorial estimate produced for this application, not derived from a single external report or filing.");

export const teslaCapitalAllocationSourcesGap = gapFor({}, "The capital allocation breakdown shown for this year is an internal editorial estimate. For Tesla's actual capital allocation, consult the Form 10-K for this fiscal year on SEC EDGAR.");

export const teslaOperationsSources: Record<number, Citation[]> = {
  2010: [{ title: "Tesla Fremont Factory celebrates 15 years of electric vehicle production — Teslarati", url: "https://www.teslarati.com/tesla-celebrates-15-years-fremont-factory/" }],
  2016: [{ title: "Tesla sets July 29 as grand opening date for Nevada gigafactory — Utility Dive", url: "https://www.utilitydive.com/news/tesla-sets-july-29-as-grand-opening-date-for-nevada-gigafactory/420073/" }],
  2019: [{ title: "Timeline: Tesla's Construction of Gigafactories — Manufacturing Digital", url: "https://manufacturingdigital.com/digital-factory/timeline-teslas-construction-gigafactories" }],
  2022: [
    { title: "Gigafactory Berlin: Tesla CEO Elon Musk dances and opens EV plant — CNBC", url: "https://www.cnbc.com/2022/03/22/gigafactory-berlin-tesla-ceo-elon-musk-opens-electric-vehicle-plant.html" },
    { title: "Tesla Now Runs the Most Productive Auto Factory in America — Bloomberg", url: "https://www.bloomberg.com/graphics/2022-tesla-factory-california-texas-car-production/" },
  ],
};
export const teslaOperationsSourcesGap = gapFor(teslaOperationsSources, "The facilities shown on this year's map are compiled from verified public reporting on Tesla's real estate and manufacturing history, but no single citation has been individually attached for this specific year.");
