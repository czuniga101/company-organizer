export interface Citation { title: string; url: string; }

const ALL_YEARS = [1975, 1986, 1995, 2000, 2007, 2014, 2019, 2021, 2024, 2025, 2026];
const gapFor = (specific: Record<number, unknown>, note: string): Record<number, string> =>
  Object.fromEntries(ALL_YEARS.filter((y) => !(y in specific)).map((y) => [y, note]));

export const microsoftCeoSources: Record<number, Citation[]> = {
  2000: [{ title: "Microsoft CEO History: From Gates to Nadella — HistoryOasis", url: "https://www.historyoasis.com/post/microsoft-ceo-history" }],
  2014: [
    { title: "Microsoft Board names Satya Nadella as CEO — Microsoft Source", url: "https://news.microsoft.com/source/2014/02/04/microsoft-board-names-satya-nadella-as-ceo/" },
    { title: "Microsoft Names Satya Nadella Its New CEO — TechCrunch", url: "https://techcrunch.com/2014/02/04/microsofts-new-ceo-is-officially-satya-nadella/" },
  ],
};
export const microsoftCeoSourcesGap = gapFor(microsoftCeoSources, "No CEO-transition-specific citation has been individually verified for this year. Microsoft's CEO history is documented in its SEC filings (Forms 10-K/8-K) and proxy statements (Form DEF 14A).");

export const microsoftOwnershipSources: Record<number, Citation[]> = {
  2025: [{ title: "Microsoft shareholders: who owns the most MSFT shares — Capital.com", url: "https://capital.com/en-int/analysis/microsoft-shareholder-who-owns-most-msft-stock" }],
  2026: [{ title: "Who Owns Microsoft? Biggest MSFT Stockholders in 2026 — CoinCodex", url: "https://coincodex.com/article/29185/who-owns-microsoft/" }],
};
export const microsoftOwnershipSourcesGap = gapFor(microsoftOwnershipSources, "No independently sourced ownership breakdown has been verified for this year specifically. For exact institutional and insider holdings at any point in time, consult Microsoft's SEC Schedule 13F/13D/4 filings via EDGAR.");

export const microsoftValuationSources: Record<number, Citation[]> = {
  2019: [{ title: "Microsoft (MSFT) Market Capitalization — companiesmarketcap.com", url: "https://companiesmarketcap.com/microsoft/marketcap/" }],
  2021: [{ title: "Microsoft closes above $2 trillion market cap for the first time — CNBC", url: "https://www.cnbc.com/2021/06/24/microsoft-closes-above-2-trillion-market-cap-for-the-first-time.html" }],
  2025: [{ title: "Microsoft becomes second company to surpass $4 trillion in market value — Al Jazeera", url: "https://www.aljazeera.com/economy/2025/7/31/microsoft-becomes-second-company-to-surpass-4-trillion-in-market-value" }],
};
export const microsoftValuationSourcesGap = gapFor(microsoftValuationSources, "No independently sourced valuation citation has been verified for this year specifically. For Microsoft's historical market capitalization, consult its Form 10-K/10-Q filings on SEC EDGAR.");

export const microsoftMoatSourcesGap = gapFor({}, "The economic moat score and label shown for this year are an internal editorial estimate produced for this application, not derived from a single external report or filing.");

export const microsoftCapitalAllocationSourcesGap = gapFor({}, "The capital allocation breakdown shown for this year is an internal editorial estimate. For Microsoft's actual capital allocation, consult the Form 10-K for this fiscal year on SEC EDGAR.");

export const microsoftOperationsSources: Record<number, Citation[]> = {
  1986: [{ title: "Microsoft campus — Wikipedia (relocation to Redmond)", url: "https://en.wikipedia.org/wiki/Microsoft_campus" }],
  2007: [{ title: "Microsoft Redmond Ridge Data Center — Baxtel", url: "https://baxtel.com/data-center/microsoft-redmond-ridge" }],
};
export const microsoftOperationsSourcesGap = gapFor(microsoftOperationsSources, "The facilities shown on this year's map are compiled from verified public reporting on Microsoft's real estate and data-center history, but no single citation has been individually attached for this specific year.");
