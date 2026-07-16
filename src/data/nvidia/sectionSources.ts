export interface Citation { title: string; url: string; }

const ALL_YEARS = [1993, 1999, 2006, 2012, 2016, 2018, 2020, 2022, 2023, 2024, 2025, 2026];
const gapFor = (specific: Record<number, unknown>, note: string): Record<number, string> =>
  Object.fromEntries(ALL_YEARS.filter((y) => !(y in specific)).map((y) => [y, note]));

export const nvidiaCeoSourcesGap = gapFor({}, "NVIDIA has had a single CEO (Jensen Huang) throughout its history; no separate transition citation applies. NVIDIA's executive officers are documented in its proxy statements (Form DEF 14A) on SEC EDGAR.");

export const nvidiaOwnershipSources: Record<number, Citation[]> = {
  2025: [{ title: "Who owns Nvidia? Top insiders & institutional investors — TheStreet", url: "https://www.thestreet.com/investing/stocks/who-owns-nvidia" }],
  2026: [{ title: "Nvidia Stock Ownership — Who Owns Nvidia in 2026? — WallStreetZen", url: "https://www.wallstreetzen.com/stocks/us/nasdaq/nvda/ownership" }],
};
export const nvidiaOwnershipSourcesGap = gapFor(nvidiaOwnershipSources, "No independently sourced ownership breakdown has been verified for this year specifically. For exact institutional holdings at any point in time, consult NVIDIA's SEC Schedule 13F/13D filings via EDGAR.");

export const nvidiaValuationSources: Record<number, Citation[]> = {
  2023: [{ title: "The Architect of the Intelligence Age: A 2026 Deep-Dive into Nvidia (NVDA) — FinancialContent", url: "https://www.financialcontent.com/article/finterra-2026-4-1-the-architect-of-the-intelligence-age-a-2026-deep-dive-into-nvidia-nvda" }],
  2024: [{ title: "4 Charts on Nvidia's Record $4 Trillion Market Cap — Morningstar", url: "https://www.morningstar.com/stocks/4-charts-nvidias-record-4-trillion-market-cap" }],
  2025: [{ title: "Nvidia becomes first company to hit $4 trillion valuation — NBC News", url: "https://www.nbcnews.com/business/business-news/nvidia-becomes-first-company-worth-4-trillion-what-to-know-rcna217721" }],
};
export const nvidiaValuationSourcesGap = gapFor(nvidiaValuationSources, "No independently sourced valuation citation has been verified for this year specifically. For NVIDIA's historical market capitalization, consult its Form 10-K/10-Q filings on SEC EDGAR.");

export const nvidiaMoatSourcesGap = gapFor({}, "The economic moat score and label shown for this year are an internal editorial estimate produced for this application, not derived from a single external report or filing.");

export const nvidiaCapitalAllocationSourcesGap = gapFor({}, "The capital allocation breakdown shown for this year is an internal editorial estimate. For NVIDIA's actual capital allocation, consult the Form 10-K for this fiscal year on SEC EDGAR.");

export const nvidiaOperationsSources: Record<number, Citation[]> = {
  2020: [{ title: "Contact Us: Americas Locations & Regional Offices — NVIDIA", url: "https://www.nvidia.com/en-us/contact/" }],
};
export const nvidiaOperationsSourcesGap = gapFor(nvidiaOperationsSources, "The facilities shown on this year's map are compiled from verified public reporting on NVIDIA's real estate and engineering-center history, but no single citation has been individually attached for this specific year.");
