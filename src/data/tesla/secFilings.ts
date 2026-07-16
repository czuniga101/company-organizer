export interface Citation { title: string; url: string; }

// Direct links to real SEC filings for Tesla, Inc. (CIK 0001318605),
// verified via SEC EDGAR submissions API.
export const teslaSecFilings: Record<number, Citation[]> = {
  2011: [{ title: "Form 10-K — Fiscal Year 2010", url: "https://www.sec.gov/Archives/edgar/data/1318605/000119312511054847/d10k.htm" }],
  2012: [{ title: "Form 10-K — Fiscal Year 2011", url: "https://www.sec.gov/Archives/edgar/data/1318605/000119312512081990/d279413d10k.htm" }],
  2013: [{ title: "Form 10-K — Fiscal Year 2012", url: "https://www.sec.gov/Archives/edgar/data/1318605/000119312513096241/d452995d10k.htm" }],
  2014: [{ title: "Form 10-K — Fiscal Year 2013", url: "https://www.sec.gov/Archives/edgar/data/1318605/000119312514069681/d668062d10k.htm" }],
  2015: [{ title: "Form 10-K — Fiscal Year 2014", url: "https://www.sec.gov/Archives/edgar/data/1318605/000156459015001031/tsla-10k_20141231.htm" }],
  2016: [{ title: "Form 10-K — Fiscal Year 2015", url: "https://www.sec.gov/Archives/edgar/data/1318605/000156459016013195/tsla-10k_20151231.htm" }],
  2017: [{ title: "Form 10-K — Fiscal Year 2016", url: "https://www.sec.gov/Archives/edgar/data/1318605/000156459017003118/tsla-10k_20161231.htm" }],
  2018: [{ title: "Form 10-K — Fiscal Year 2017", url: "https://www.sec.gov/Archives/edgar/data/1318605/000156459018002956/tsla-10k_20171231.htm" }],
  2019: [{ title: "Form 10-K — Fiscal Year 2018", url: "https://www.sec.gov/Archives/edgar/data/1318605/000156459019003165/tsla-10k_20181231.htm" }],
  2020: [{ title: "Form 10-K — Fiscal Year 2019", url: "https://www.sec.gov/Archives/edgar/data/1318605/000156459020004475/tsla-10k_20191231.htm" }],
  2021: [{ title: "Form 10-K — Fiscal Year 2020", url: "https://www.sec.gov/Archives/edgar/data/1318605/000156459021004599/tsla-10k_20201231.htm" }],
  2022: [{ title: "Form 10-K — Fiscal Year 2021", url: "https://www.sec.gov/Archives/edgar/data/1318605/000095017022000796/tsla-20211231.htm" }],
  2023: [{ title: "Form 10-K — Fiscal Year 2022", url: "https://www.sec.gov/Archives/edgar/data/1318605/000095017023001409/tsla-20221231.htm" }],
  2024: [{ title: "Form 10-K — Fiscal Year 2023", url: "https://www.sec.gov/Archives/edgar/data/1318605/000162828024002390/tsla-20231231.htm" }],
  2025: [{ title: "Form 10-K — Fiscal Year 2024", url: "https://www.sec.gov/Archives/edgar/data/1318605/000162828025003063/tsla-20241231.htm" }],
  2026: [{ title: "Form 10-K — Fiscal Year 2025", url: "https://www.sec.gov/Archives/edgar/data/1318605/000162828026003952/tsla-20251231.htm" }],
};

export const teslaQuarterlyFilings: Record<number, Citation[]> = {
  2010: [
    { title: "Form 10-Q — filed 2010-08-13", url: "https://www.sec.gov/Archives/edgar/data/1318605/000119312510188792/d10q.htm" },
    { title: "Form 10-Q — filed 2010-11-12", url: "https://www.sec.gov/Archives/edgar/data/1318605/000119312510259068/d10q.htm" },
  ],
  2011: [
    { title: "Form 10-Q — filed 2011-05-13", url: "https://www.sec.gov/Archives/edgar/data/1318605/000119312511139677/d10q.htm" },
    { title: "Form 10-Q — filed 2011-08-12", url: "https://www.sec.gov/Archives/edgar/data/1318605/000119312511221497/d10q.htm" },
    { title: "Form 10-Q — filed 2011-11-14", url: "https://www.sec.gov/Archives/edgar/data/1318605/000119312511308489/d226201d10q.htm" },
  ],
  2012: [
    { title: "Form 10-Q — filed 2012-05-10", url: "https://www.sec.gov/Archives/edgar/data/1318605/000119312512225825/d325967d10q.htm" },
    { title: "Form 10-Q — filed 2012-08-02", url: "https://www.sec.gov/Archives/edgar/data/1318605/000119312512332138/d364775d10q.htm" },
    { title: "Form 10-Q — filed 2012-11-07", url: "https://www.sec.gov/Archives/edgar/data/1318605/000119312512457610/d410318d10q.htm" },
  ],
  2013: [
    { title: "Form 10-Q — filed 2013-05-10", url: "https://www.sec.gov/Archives/edgar/data/1318605/000119312513212354/d511008d10q.htm" },
    { title: "Form 10-Q — filed 2013-08-09", url: "https://www.sec.gov/Archives/edgar/data/1318605/000119312513327916/d549636d10q.htm" },
    { title: "Form 10-Q — filed 2013-11-08", url: "https://www.sec.gov/Archives/edgar/data/1318605/000119312513435480/d588506d10q.htm" },
  ],
  2014: [
    { title: "Form 10-Q — filed 2014-05-09", url: "https://www.sec.gov/Archives/edgar/data/1318605/000119312514192606/d715897d10q.htm" },
    { title: "Form 10-Q — filed 2014-08-08", url: "https://www.sec.gov/Archives/edgar/data/1318605/000119312514303175/d766922d10q.htm" },
    { title: "Form 10-Q — filed 2014-11-07", url: "https://www.sec.gov/Archives/edgar/data/1318605/000119312514403635/d812482d10q.htm" },
  ],
  2015: [
    { title: "Form 10-Q — filed 2015-05-11", url: "https://www.sec.gov/Archives/edgar/data/1318605/000156459015003789/tsla-10q_20150331.htm" },
    { title: "Form 10-Q — filed 2015-08-07", url: "https://www.sec.gov/Archives/edgar/data/1318605/000156459015006666/tsla-10q_20150630.htm" },
    { title: "Form 10-Q — filed 2015-11-05", url: "https://www.sec.gov/Archives/edgar/data/1318605/000156459015009741/tsla-10q_20150930.htm" },
  ],
  2016: [
    { title: "Form 10-Q — filed 2016-05-10", url: "https://www.sec.gov/Archives/edgar/data/1318605/000156459016018886/tsla-10q_20160331.htm" },
    { title: "Form 10-Q — filed 2016-08-05", url: "https://www.sec.gov/Archives/edgar/data/1318605/000156459016023024/tsla-10q_20160630.htm" },
    { title: "Form 10-Q — filed 2016-11-02", url: "https://www.sec.gov/Archives/edgar/data/1318605/000156459016026820/tsla-10q_20160930.htm" },
  ],
  2017: [
    { title: "Form 10-Q — filed 2017-05-10", url: "https://www.sec.gov/Archives/edgar/data/1318605/000156459017009968/tsla-10q_20170331.htm" },
    { title: "Form 10-Q — filed 2017-08-04", url: "https://www.sec.gov/Archives/edgar/data/1318605/000156459017015705/tsla-10q_20170630.htm" },
    { title: "Form 10-Q — filed 2017-11-03", url: "https://www.sec.gov/Archives/edgar/data/1318605/000156459017021343/tsla-10q_20170930.htm" },
  ],
};

export const teslaSecFilingsGap: Record<number, string> = {
  2003: "Tesla was a private startup in 2003 with no SEC filings — it had not yet registered with the SEC.",
  2004: "Tesla was a private company in 2004 with no public SEC filings.",
  2005: "Tesla was a private company in 2005 with no public SEC filings.",
  2006: "Tesla was a private company in 2006 with no public SEC filings.",
  2007: "Tesla was a private company in 2007 with no public SEC filings.",
  2008: "Tesla was a private company in 2008 with no public SEC filings.",
  2009: "Tesla was a private company in 2009. It filed an S-1 registration statement in January 2010 in preparation for its IPO.",
  2018: "Quarterly filings for the 2018 fiscal year are available via the EDGAR full-text search for Tesla (CIK 0001318605) but were not included in the older archive file fetched for this app.",
  2019: "Quarterly filings for 2019 are available on EDGAR but not pre-loaded here — search EDGAR directly for Tesla CIK 0001318605.",
  2020: "Quarterly filings for 2020 are available on EDGAR — search Tesla CIK 0001318605.",
  2021: "Quarterly filings for 2021 are available on EDGAR — search Tesla CIK 0001318605.",
  2022: "Quarterly filings for 2022 are available on EDGAR — search Tesla CIK 0001318605.",
  2023: "Quarterly filings for 2023 are available on EDGAR — search Tesla CIK 0001318605.",
  2024: "Quarterly filings for 2024 are available on EDGAR — search Tesla CIK 0001318605.",
  2025: "Quarterly filings for 2025 are available on EDGAR — search Tesla CIK 0001318605.",
  2026: "Tesla's fiscal year 2026 10-K has not been filed yet. Quarterly filings for 2026 may be available on EDGAR.",
};
