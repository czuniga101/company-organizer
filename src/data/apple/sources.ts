export interface Citation {
  title: string;
  url: string;
}

// Citations gathered via live web search (June 2026) and matched to the
// specific facts asserted in each year's record (CEO/board changes, IPO,
// market-cap milestones, product launches that drove valuation, etc).
// Where a single historical event or era spans multiple years, the same
// citation is reused across those years rather than re-searched per year.

const founding: Citation[] = [
  { title: "The Founding of Apple Computer, Inc. — Library of Congress", url: "https://guides.loc.gov/this-month-in-business-history/april/apple-computer-founded" },
  { title: "History of Apple Inc. — Wikipedia", url: "https://en.wikipedia.org/wiki/History_of_Apple_Inc." },
  { title: "How the Founders of Apple Got Rich — Mac History", url: "https://www.mac-history.net/how-the-founders-of-apple-got-rich/" },
];

const earlyBoard: Citation[] = [
  { title: "Arthur Rock — Apple Wiki (Fandom)", url: "https://apple.fandom.com/wiki/Arthur_Rock" },
  { title: "Henry Earl Singleton — Wikipedia", url: "https://en.wikipedia.org/wiki/Henry_Earl_Singleton" },
  { title: "Arthur Rock — Encyclopedia.com", url: "https://www.encyclopedia.com/history/encyclopedias-almanacs-transcripts-and-maps/arthur-rock" },
];

const ipo: Citation[] = [
  { title: "Apple Computer Initial Public Offering Prospectus (original SEC filing scan)", url: "https://deramp.com/swtpc.com/Apple/Apple_IPO.pdf" },
  { title: "The Folks Who Brought You Apple — Fortune (1981)", url: "https://fortune.com/article/folks-who-brought-you-apple/" },
  { title: "Apple IPO mints instant millionaires — Cult of Mac", url: "https://www.cultofmac.com/apple-history/apple-ipo-goes-public" },
];

const markkulaCeo1981: Citation[] = [
  { title: "Mike Markkula — Wikipedia", url: "https://en.wikipedia.org/wiki/Mike_Markkula" },
  { title: "Apple at 50: Michael Scott, the first CEO — AppleInsider", url: "https://appleinsider.com/articles/26/02/27/apple-at-50-michael-scott-the-companys-first-ceo-made-bold-and-bad-choices" },
  { title: "Apple at 50: Mike Markkula, Apple's second CEO — AppleInsider", url: "https://appleinsider.com/articles/26/03/13/apple-at-50-mike-markkula-apples-second-ceo-was-as-important-as-steve-jobs" },
];

const sculleyHired: Citation[] = [
  { title: "John Sculley — Wikipedia", url: "https://en.wikipedia.org/wiki/John_Sculley" },
  { title: "John Sculley becomes Apple CEO — Cult of Mac", url: "https://www.cultofmac.com/apple-history/john-sculley-becomes-apple-ceo" },
  { title: "Growing Apple with the Macintosh: The Sculley Years — Low End Mac", url: "https://lowendmac.com/2006/growing-apple-with-the-macintosh-the-sculley-years/" },
];

const jobsOusted: Citation[] = [
  { title: "Why did Apple's board fire Steve Jobs in 1985? — Corporate Governance Institute", url: "https://www.thecorporategovernanceinstitute.com/insights/case-studies/why-did-apples-board-fire-steve-jobs-in-1985/" },
  { title: "Steve Jobs — Wikipedia", url: "https://en.wikipedia.org/wiki/Steve_Jobs" },
  { title: "Showdown at Apple: John Sculley vs. Steve Jobs — Mac History", url: "https://www.mac-history.net/showdown-at-apple-john-sculley-vs-steve-jobs/" },
];

const sculleyEra: Citation[] = [
  { title: "John Sculley — Wikipedia", url: "https://en.wikipedia.org/wiki/John_Sculley" },
  { title: "Looking back at John Sculley's rise as Apple's CEO, and fall — AppleInsider", url: "https://appleinsider.com/articles/25/10/15/looking-back-at-john-sculleys-rise-as-apples-ceo-and-fall-an-october-15-1993" },
  { title: "History of Apple Inc. — Wikipedia", url: "https://en.wikipedia.org/wiki/History_of_Apple_Inc." },
];

const spindlerEra: Citation[] = [
  { title: "Michael Spindler — Wikipedia", url: "https://en.wikipedia.org/wiki/Michael_Spindler" },
  { title: "Apple at 50: Michael Spindler, the CEO who brought in the clones — AppleInsider", url: "https://appleinsider.com/articles/26/04/03/apple-at-50-michael-spindler-the-ceo-who-brought-in-the-clones" },
];

const amelioEra: Citation[] = [
  { title: "Gil Amelio becomes Apple CEO — Cult of Mac", url: "https://www.cultofmac.com/apple-history/gil-amelio-apple-ceo" },
  { title: "Gil Amelio — Wikipedia", url: "https://en.wikipedia.org/wiki/Gil_Amelio" },
];

const jobsReturn: Citation[] = [
  { title: "SOMETHING'S ROTTEN IN CUPERTINO — Fortune Archive (March 3, 1997)", url: "https://archive.fortune.com/magazines/fortune/fortune_archive/1997/03/03/222710/index.htm" },
  { title: "Gil Amelio resigned at Apple CEO 21 years ago — AppleInsider", url: "https://appleinsider.com/articles/18/07/10/gil-amelio-resigned-at-apple-ceo-21-years-ago-paving-the-way-for-steve-jobs-ascension-as-ceo" },
  { title: "Today in History: Steve Jobs returns to Apple — TechCrunch", url: "https://techcrunch.com/2008/09/16/today-in-history-steve-jobs-returns-to-apple/" },
];

const iMacEra: Citation[] = [
  { title: "How Steve Jobs saved Apple with the iMac — AppleInsider", url: "https://appleinsider.com/articles/23/05/06/how-steve-jobs-saved-apple-with-the-imac-25-years-ago" },
  { title: "iMac G3 — Wikipedia", url: "https://en.wikipedia.org/wiki/IMac_G3" },
  { title: "20 years ago the iMac changed the world — AppleInsider", url: "https://appleinsider.com/articles/18/05/06/20-years-ago-the-imac-changed-the-world" },
];

const permanentCeo2000: Citation[] = [
  { title: "Steve Jobs — Wikipedia (permanent CEO, Macworld 2000)", url: "https://en.wikipedia.org/wiki/Steve_Jobs" },
  { title: "Timeline: Steve Jobs — Mac History", url: "https://www.mac-history.net/2020/01/29/timeline-steve-jobs-from-college-dropout-to-ceo-of-the-decade/" },
];

const ipodEra: Citation[] = [
  { title: "iPod — Wikipedia", url: "https://en.wikipedia.org/wiki/IPod" },
  { title: "An illustrated history of Apple's products and executives — Marketplace", url: "https://www.marketplace.org/story/2011/08/24/illustrated-history-apples-products-and-executives" },
];

const goreJoinsBoard: Citation[] = [
  { title: "Former Vice President Al Gore Joins Apple's Board — SEC EDGAR 8-K filing", url: "https://www.sec.gov/Archives/edgar/data/320193/000110465903004649/j8673_ex99d1.htm" },
];

const midDecadeBoard2006: Citation[] = [
  { title: "Apple Board of Directors — Apple Wiki (Fandom)", url: "https://apple.fandom.com/wiki/Apple_Board_of_Directors" },
  { title: "Apple Inc. Form 8-K (Eric Schmidt elected to board) — SEC EDGAR", url: "https://www.sec.gov/Archives/edgar/data/0000320193/000110465906058808/a06-19081_1ex99d1.htm" },
];

const jobsCancerIntel: Citation[] = [
  { title: "Steve Jobs — Wikipedia", url: "https://en.wikipedia.org/wiki/Steve_Jobs" },
  { title: "Steve Jobs — Britannica", url: "https://www.britannica.com/money/Steve-Jobs/Saving-Apple" },
];

const iphoneLaunch: Citation[] = [
  { title: "Steve Jobs debuts the iPhone — HISTORY.com", url: "https://www.history.com/this-day-in-history/january-9/steve-jobs-debuts-the-iphone" },
  { title: "History of the iPhone — Wikipedia", url: "https://en.wikipedia.org/wiki/History_of_the_iPhone" },
];

const iphone3gLawsuit: Citation[] = [
  { title: "History of the iPhone — Wikipedia", url: "https://en.wikipedia.org/wiki/History_of_the_iPhone" },
  { title: "The evolution of Apple's iPhone — Computerworld", url: "https://www.computerworld.com/article/1622162/evolution-of-apple-iphone.html" },
];

const jobsLeave2009: Citation[] = [
  { title: "Steve Jobs — Wikipedia (2009 medical leave)", url: "https://en.wikipedia.org/wiki/Steve_Jobs" },
  { title: "History of the iPhone — Wikipedia (iPhone 3GS, 2009)", url: "https://en.wikipedia.org/wiki/History_of_the_iPhone" },
];

const cookBecomesCeo: Citation[] = [
  { title: "Apple Inc. Form 8-K — SEC EDGAR (CEO transition filing)", url: "https://www.sec.gov/Archives/edgar/data/0000320193/000118143111003847/rrd297847_33925.htm" },
  { title: "Steve Jobs Resigns as CEO of Apple — Apple Newsroom", url: "https://www.apple.com/newsroom/2011/08/24Steve-Jobs-Resigns-as-CEO-of-Apple/" },
  { title: "Apple's COO Tim Cook Replaces Steve Jobs As CEO — TechCrunch", url: "https://techcrunch.com/2011/08/24/apples-coo-tim-cook-replaces-steve-jobs-as-ceo/" },
];

const igerWagnerBoard: Citation[] = [
  { title: "Bob Iger — Apple Wiki (Fandom)", url: "https://apple.fandom.com/wiki/Bob_Iger" },
  { title: "Apple Board of Directors — Apple Wiki (Fandom)", url: "https://apple.fandom.com/wiki/Apple_Board_of_Directors" },
];

const boardRoster2016: Citation[] = [
  { title: "Meet the Apple Board of Directors — AdvisoryCloud", url: "https://www.advisorycloud.com/blog/meet-the-apple-board-of-directors" },
  { title: "Apple Board of Directors — Apple Wiki (Fandom)", url: "https://apple.fandom.com/wiki/Apple_Board_of_Directors" },
];

const trillionDollar: Citation[] = [
  { title: "Chart: Apple's Road to $3 Trillion — Statista", url: "https://www.statista.com/chart/14953/apple-market-capitalization/" },
  { title: "Apple (AAPL) Market Capitalization — companiesmarketcap.com", url: "https://companiesmarketcap.com/apple/marketcap/" },
];

const threeTrillion2022: Citation[] = [
  { title: "Apple becomes first U.S. company to reach $3 trillion market cap — NBC News", url: "https://www.nbcnews.com/tech/apple/apple-becomes-first-us-company-reach-3-trillion-market-cap-rcna10767" },
  { title: "Apple becomes first U.S. company to reach $3 trillion market cap — CNBC", url: "https://www.cnbc.com/2022/01/03/apple-becomes-first-us-company-to-reach-3-trillion-market-cap.html" },
  { title: "Apple's market cap tops $3 trillion — Fortune", url: "https://fortune.com/2022/01/03/apple-market-cap-3-trillion-dollars/" },
];

const valuationDebate2023: Citation[] = [
  { title: "Is Apple really worth $3 trillion? The math suggests no — Fortune", url: "https://fortune.com/2023/07/04/apple-stock-market-cap-forcast/" },
];

const boardShakeup2024: Citation[] = [
  { title: "Apple Board of Directors shuffle sees Al Gore & James Bell retire — AppleInsider", url: "https://appleinsider.com/articles/24/01/11/apple-board-of-directors-shuffle-sees-al-gore-james-bell-retire" },
  { title: "Apple undergoes its biggest board shakeup in years — Fortune", url: "https://fortune.com/2024/01/11/apple-board-shakeup-al-gore/" },
];

const boardTransition2025: Citation[] = [
  { title: "Apple Board of Directors Faces Leadership Shift by 2026 — TUAW", url: "https://www.tuaw.com/2025/01/28/apple-board-of-directors-faces-leadership-shift-by-2026/" },
  { title: "Potential new leadership for Apple's board of directors by 2026 — AppleInsider", url: "https://appleinsider.com/articles/25/01/26/apple-will-be-on-the-hunt-for-two-new-board-members-soon" },
];

const ternusCeo2026: Citation[] = [
  { title: "Tim Cook to become Apple Executive Chairman; John Ternus to become Apple CEO — Apple Newsroom", url: "https://www.apple.com/newsroom/2026/04/tim-cook-to-become-apple-executive-chairman-john-ternus-to-become-apple-ceo/" },
  { title: "Tim Cook to become Apple Executive Chairman; John Ternus to become Apple CEO — Business Wire", url: "https://www.businesswire.com/news/home/20260420318241/en/Tim-Cook-to-become-Apple-Executive-Chairman-John-Ternus-to-become-Apple-CEO" },
  { title: "Apple announces first CEO transition in 15 years — HCAMag", url: "https://www.hcamag.com/us/news/general/apple-announces-first-ceo-transition-in-15-years-as-leadership-era-shifts/572413" },
  { title: "Apple Inc. Institutional Ownership — Business Quant", url: "https://businessquant.com/stocks/aapl/institutional-ownership" },
  { title: "Vanguard Group Inc ownership in AAPL — Fintel 13F tracker", url: "https://fintel.io/so/us/aapl/vanguard-group" },
  { title: "BlackRock, Inc. ownership in AAPL — Fintel 13F tracker", url: "https://fintel.io/so/us/aapl/blackrock" },
];

export const appleSources: Record<number, Citation[]> = {
  1976: founding,
  1977: founding,
  1978: earlyBoard,
  1979: earlyBoard,
  1980: ipo,
  1981: markkulaCeo1981,
  1982: markkulaCeo1981,
  1983: sculleyHired,
  1984: sculleyHired,
  1985: jobsOusted,
  1986: sculleyEra,
  1987: sculleyEra,
  1988: sculleyEra,
  1989: sculleyEra,
  1990: sculleyEra,
  1991: sculleyEra,
  1992: sculleyEra,
  1993: spindlerEra,
  1994: spindlerEra,
  1995: spindlerEra,
  1996: amelioEra,
  1997: jobsReturn,
  1998: iMacEra,
  1999: iMacEra,
  2000: permanentCeo2000,
  2001: ipodEra,
  2002: ipodEra,
  2003: goreJoinsBoard,
  2004: jobsCancerIntel,
  2005: jobsCancerIntel,
  2006: midDecadeBoard2006,
  2007: iphoneLaunch,
  2008: iphone3gLawsuit,
  2009: jobsLeave2009,
  2010: iphone3gLawsuit,
  2011: cookBecomesCeo,
  2012: igerWagnerBoard,
  2013: igerWagnerBoard,
  2014: igerWagnerBoard,
  2015: igerWagnerBoard,
  2016: boardRoster2016,
  2017: boardRoster2016,
  2018: trillionDollar,
  2019: boardRoster2016,
  2020: trillionDollar,
  2021: boardRoster2016,
  2022: threeTrillion2022,
  2023: valuationDebate2023,
  2024: boardShakeup2024,
  2025: boardTransition2025,
  2026: ternusCeo2026,
};
