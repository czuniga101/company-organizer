export interface Citation { title: string; url: string; }

const ALL_YEARS = [1998, 2004, 2011, 2015, 2019, 2020, 2022, 2024, 2025, 2026];
const gapFor = (specific: Record<number, unknown>, note: string): Record<number, string> =>
  Object.fromEntries(ALL_YEARS.filter((y) => !(y in specific)).map((y) => [y, note]));

export const googleCeoSources: Record<number, Citation[]> = {
  2011: [{ title: "Larry Page — Wikipedia (2011 CEO return)", url: "https://en.wikipedia.org/wiki/Larry_Page" }],
  2015: [{ title: "Google CEO Sundar Pichai appointed CEO of Alphabet as Sergey Brin and Larry Page quit — Zee Business", url: "https://www.zeebiz.com/companies/news-google-ceo-sundar-pichai-appointed-ceo-of-alphabet-as-sergey-brin-and-larry-page-quit-115190" }],
  2019: [
    { title: "Larry Page steps down as CEO of Alphabet, Sundar Pichai to take over — CNBC", url: "https://www.cnbc.com/2019/12/03/larry-page-steps-down-as-ceo-of-alphabet.html" },
    { title: "Sundar Pichai is taking over as CEO of Alphabet — TechCrunch", url: "https://techcrunch.com/2019/12/03/sundar-pichai-alphabet-ceo/" },
  ],
};
export const googleCeoSourcesGap = gapFor(googleCeoSources, "No CEO-transition-specific citation has been individually verified for this year. Alphabet's CEO history is documented in its SEC filings (Forms 10-K/8-K) and proxy statements (Form DEF 14A).");

export const googleOwnershipSources: Record<number, Citation[]> = {
  2004: [{ title: "Google Inc. — Form S-1 IPO Registration Statement — SEC EDGAR", url: "https://www.sec.gov/Archives/edgar/data/1288776/000119312504142742/ds1.htm" }],
};
export const googleOwnershipSourcesGap = gapFor(googleOwnershipSources, "No independently sourced ownership breakdown has been verified for this year specifically. For exact institutional and insider holdings at any point in time, consult Alphabet's SEC Schedule 13F/13D/4 filings via EDGAR.");

export const googleValuationSources: Record<number, Citation[]> = {
  2020: [{ title: "Chart: Google's Climb Towards $1 Trillion — Statista", url: "https://www.statista.com/chart/15326/google---alphabet-market-capitalization/" }],
  2024: [{ title: "AI is powering Google to a $2 trillion market cap — Quartz", url: "https://qz.com/google-alphabet-stock-market-cap-ai-1851404173" }],
};
export const googleValuationSourcesGap = gapFor(googleValuationSources, "No independently sourced valuation citation has been verified for this year specifically. For Alphabet's historical market capitalization, consult its Form 10-K/10-Q filings on SEC EDGAR.");

export const googleMoatSourcesGap = gapFor({}, "The economic moat score and label shown for this year are an internal editorial estimate produced for this application, not derived from a single external report or filing.");

export const googleCapitalAllocationSourcesGap = gapFor({}, "The capital allocation breakdown shown for this year is an internal editorial estimate. For Alphabet's actual capital allocation, consult the Form 10-K for this fiscal year on SEC EDGAR.");

export const googleOperationsSources: Record<number, Citation[]> = {
  2004: [{ title: "How we started and where we are today — Google (Googleplex history)", url: "https://about.google/company-info/our-story/" }],
};
export const googleOperationsSourcesGap = gapFor(googleOperationsSources, "The facilities shown on this year's map are compiled from verified public reporting on Google's real estate and data-center history, but no single citation has been individually attached for this specific year.");
