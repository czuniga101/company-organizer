export interface Citation { title: string; url: string; }

const ALL_YEARS = [2002, 2006, 2008, 2010, 2012, 2015, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026];
const gapFor = (specific: Record<number, unknown>, note: string): Record<number, string> =>
  Object.fromEntries(ALL_YEARS.filter((y) => !(y in specific)).map((y) => [y, note]));

export const spacexCeoSourcesGap = gapFor({}, "SpaceX has had a single CEO (Elon Musk) throughout its history; no separate transition citation applies. As a private company, SpaceX does not file SEC proxy statements documenting executive changes.");

export const spacexOwnershipSources: Record<number, Citation[]> = {
  2026: [
    { title: "Musk's SpaceX stake is worth over $1 trillion. Here are the other billionaire shareholders — CNBC", url: "https://www.cnbc.com/2026/06/19/musk-spacex-billionaire-shareholders.html" },
    { title: "SpaceX — Leadership (Investor Relations)", url: "https://ir.spacex.com/leadership/default.aspx" },
  ],
};
export const spacexOwnershipSourcesGap = gapFor(spacexOwnershipSources, "SpaceX is a private company and has not been required to publicly disclose a full capitalization table for most of its history; the ownership percentages shown are estimated from reported funding-round terms rather than a single independently verifiable filing.");

export const spacexValuationSources: Record<number, Citation[]> = {
  2026: [{ title: "Musk's SpaceX stake is worth over $1 trillion. Here are the other billionaire shareholders — CNBC", url: "https://www.cnbc.com/2026/06/19/musk-spacex-billionaire-shareholders.html" }],
};
export const spacexValuationSourcesGap = gapFor(spacexValuationSources, "No independently sourced valuation citation has been verified for this year specifically. SpaceX's valuation figures for private funding rounds and tender offers are reported by financial news outlets rather than disclosed directly by the company.");

export const spacexMoatSourcesGap = gapFor({}, "The economic moat score and label shown for this year are an internal editorial estimate produced for this application, not derived from a single external report or filing.");

export const spacexCapitalAllocationSourcesGap = gapFor({}, "The capital allocation breakdown shown for this year is an internal editorial estimate. SpaceX, as a private company, does not publicly disclose audited capital allocation figures.");

export const spacexOperationsSources: Record<number, Citation[]> = {
  2024: [{ title: "Where is Starbase, Texas? A look into the SpaceX facility soon to be the company's headquarters — WFAA", url: "https://www.wfaa.com/article/money/business/where-is-starbase-texas-spacex-facility-headquarters-brownsville/287-000814ac-1be0-40ee-9f26-247a9acd73b8" }],
};
export const spacexOperationsSourcesGap = gapFor(spacexOperationsSources, "The facilities shown on this year's map are compiled from verified public reporting on SpaceX's real estate and launch-site history, but no single citation has been individually attached for this specific year.");
