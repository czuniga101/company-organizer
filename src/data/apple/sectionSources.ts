export interface Citation { title: string; url: string; }

const ALL_YEARS = Array.from({ length: 2026 - 1976 + 1 }, (_, i) => 1976 + i);
const gapFor = (specific: Record<number, unknown>, note: string): Record<number, string> =>
  Object.fromEntries(ALL_YEARS.filter((y) => !(y in specific)).map((y) => [y, note]));

// --- CEO sources (reuses the same verified CEO-transition events as the Board section) ---
export const appleCeoSources: Record<number, Citation[]> = {
  1980: [{ title: "Apple at 50: Michael Scott, the company's first CEO — AppleInsider", url: "https://appleinsider.com/articles/26/02/27/apple-at-50-michael-scott-the-companys-first-ceo-made-bold-and-bad-choices" }],
  1985: [{ title: "John Sculley Tells The Real Story of Steve Jobs' 'Firing' — Forbes", url: "https://www.forbes.com/sites/davidcoursey/2012/01/13/john-sculley-tells-the-real-story-of-steve-jobs-firing/" }],
  1997: [{ title: "Gil Amelio resigned at Apple CEO 21 years ago — AppleInsider", url: "https://appleinsider.com/articles/18/07/10/gil-amelio-resigned-at-apple-ceo-21-years-ago-paving-the-way-for-steve-jobs-ascension-as-ceo" }],
  2011: [
    { title: "Apple Inc. Form 8-K — SEC EDGAR (CEO transition filing)", url: "https://www.sec.gov/Archives/edgar/data/0000320193/000118143111003847/rrd297847_33925.htm" },
    { title: "Steve Jobs Resigns as CEO of Apple — Apple Newsroom", url: "https://www.apple.com/newsroom/2011/08/24Steve-Jobs-Resigns-as-CEO-of-Apple/" },
  ],
  2026: [{ title: "Tim Cook to become Apple Executive Chairman; John Ternus to become Apple CEO — Apple Newsroom", url: "https://www.apple.com/newsroom/2026/04/tim-cook-to-become-apple-executive-chairman-john-ternus-to-become-apple-ceo/" }],
};
export const appleCeoSourcesGap = gapFor(appleCeoSources, "No CEO-transition-specific citation has been individually verified for this year. Apple's CEO for this period is documented in the company's SEC filings (Forms 10-K/8-K) and proxy statements.");

// --- Ownership / shareholder sources ---
export const appleOwnershipSources: Record<number, Citation[]> = {
  1980: [{ title: "Apple Computer Initial Public Offering Prospectus (original SEC filing scan)", url: "https://deramp.com/swtpc.com/Apple/Apple_IPO.pdf" }],
  2026: [
    { title: "Apple Inc. Institutional Ownership — Business Quant", url: "https://businessquant.com/stocks/aapl/institutional-ownership" },
    { title: "Vanguard Group Inc ownership in AAPL — Fintel 13F tracker", url: "https://fintel.io/so/us/aapl/vanguard-group" },
    { title: "BlackRock, Inc. ownership in AAPL — Fintel 13F tracker", url: "https://fintel.io/so/us/aapl/blackrock" },
  ],
};
export const appleOwnershipSourcesGap = gapFor(appleOwnershipSources, "No independently sourced ownership breakdown has been verified for this year specifically; ownership percentages are estimated from historical 13F/proxy disclosure patterns. For exact institutional holdings at any point in time, consult Apple's SEC Schedule 13F/13D filings via EDGAR.");

// --- Valuation / market-cap sources ---
export const appleValuationSources: Record<number, Citation[]> = {
  2018: [{ title: "Apple (AAPL) Market Capitalization — companiesmarketcap.com", url: "https://companiesmarketcap.com/apple/marketcap/" }],
  2022: [
    { title: "Apple becomes first U.S. company to reach $3 trillion market cap — NBC News", url: "https://www.nbcnews.com/tech/apple/apple-becomes-first-us-company-reach-3-trillion-market-cap-rcna10767" },
    { title: "Apple becomes first U.S. company to reach $3 trillion market cap — CNBC", url: "https://www.cnbc.com/2022/01/03/apple-becomes-first-us-company-to-reach-3-trillion-market-cap.html" },
  ],
  2023: [{ title: "Is Apple really worth $3 trillion? The math suggests no — Fortune", url: "https://fortune.com/2023/07/04/apple-stock-market-cap-forcast/" }],
};
export const appleValuationSourcesGap = gapFor(appleValuationSources, "No independently sourced valuation citation has been verified for this year specifically. For historical Apple market capitalization by date, consult companiesmarketcap.com or Apple's own SEC filings (Forms 10-K/10-Q), which report shares outstanding and stock price each period.");

// --- Moat / competitive-position sources (internal editorial analysis, not externally sourced) ---
export const appleMoatSourcesGap = gapFor({}, "The economic moat score and label shown for this year are an internal editorial estimate produced for this application, not derived from a single external report or filing. They are informed by the general historical facts cited on the Sources page but are not independently citable.");

// --- Capital allocation sources (internal editorial estimate, not externally sourced) ---
export const appleCapitalAllocationSourcesGap = gapFor({}, "The capital allocation breakdown shown for this year is an internal editorial estimate, not pulled directly from Apple's audited cash flow statements. For Apple's actual capital allocation (R&D, capex, buybacks, dividends), consult the Form 10-K for this fiscal year on SEC EDGAR.");

// --- Global operations map sources ---
export const appleOperationsSources: Record<number, Citation[]> = {
  1993: [{ title: "Before the spaceship: A look back at the previous campuses Apple called home — 9to5Mac", url: "https://9to5mac.com/2017/11/13/apple-original-campus-headquarters/" }],
  1984: [{ title: "Former Apple Factory, Birthplace of the Mac, Up For Historic Status — TheNextWeb", url: "https://thenextweb.com/news/steve-jobs-designed-apple-factory-the-birthplace-of-the-macintosh-considered-for-historic-status" }],
  1980: [{ title: "Apple's Cork campus celebrates 40 years of community and looks to the future — Apple Newsroom (Ireland)", url: "https://www.apple.com/ie/newsroom/2020/11/apples-cork-campus-celebrates-40-years-of-community-and-looks-to-the-future/" }],
  2017: [{ title: "5 Years Ago: Apple Park Opens — AppleInsider", url: "https://appleinsider.com/articles/22/04/12/5-years-ago-apple-employees-began-moving-into-apple-park" }],
  2020: [{ title: "Apple's Production Strategy Expansion in India — Vietnam Briefing (Apple supply chain coverage)", url: "https://www.vietnam-briefing.com/news/apples-production-strategy-in-vietnam.html/" }],
};
export const appleOperationsSourcesGap = gapFor(appleOperationsSources, "The facilities shown on this year's map are compiled from verified public reporting on Apple's real estate and manufacturing history, but no single citation has been individually attached for this specific year.");
