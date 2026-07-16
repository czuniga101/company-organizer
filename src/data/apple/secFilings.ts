export interface Citation {
  title: string;
  url: string;
}

// Direct links to real SEC filings per year, pulled from SEC EDGAR's
// submissions API for Apple Inc. (CIK 0000320193) and verified to resolve
// with a 200 response. EDGAR's electronic filing archive only goes back to
// 1994 for Apple — years 1981-1993 predate that (paper-only filings, not
// digitized) and 1976-1979 predate Apple's SEC registration entirely.
// Both gaps are explained directly in SecFilingsPage rather than faked here.
export const appleSecFilings: Record<number, Citation[]> = {
  1980: [
    { title: "Apple Computer, Inc. — Initial Public Offering Prospectus (Dec 12, 1980)", url: "https://deramp.com/swtpc.com/Apple/Apple_IPO.pdf" },
  ],
  1994: [{ title: "Form 10-K — Fiscal Year 1994", url: "https://www.sec.gov/Archives/edgar/data/320193/0000320193-94-000016-index.html" }],
  1995: [{ title: "Form 10-K — Fiscal Year 1995", url: "https://www.sec.gov/Archives/edgar/data/320193/0000320193-95-000016-index.html" }],
  1996: [{ title: "Form 10-K — Fiscal Year 1996", url: "https://www.sec.gov/Archives/edgar/data/320193/0000320193-96-000023-index.html" }],
  1997: [{ title: "Form 10-K — Fiscal Year 1997", url: "https://www.sec.gov/Archives/edgar/data/320193/0001047469-97-006960-index.html" }],
  1998: [{ title: "Form 10-K405 — Fiscal Year 1998", url: "https://www.sec.gov/Archives/edgar/data/320193/0001047469-98-044981-index.html" }],
  1999: [{ title: "Form 10-K — Fiscal Year 1999", url: "https://www.sec.gov/Archives/edgar/data/320193/0000912057-99-010244-index.html" }],
  2000: [{ title: "Form 10-K — Fiscal Year 2000", url: "https://www.sec.gov/Archives/edgar/data/320193/000091205700053623/a2032880z10-k.txt" }],
  2001: [{ title: "Form 10-K405 — Fiscal Year 2001", url: "https://www.sec.gov/Archives/edgar/data/320193/000091205701544436/a2066171z10-k405.htm" }],
  2002: [{ title: "Form 10-K — Fiscal Year 2002", url: "https://www.sec.gov/Archives/edgar/data/320193/000104746902007674/a2096490z10-k.htm" }],
  2003: [
    { title: "Form 10-K — Fiscal Year 2003", url: "https://www.sec.gov/Archives/edgar/data/320193/000104746903041604/a2124888z10-k.htm" },
    { title: "Form 8-K — Al Gore elected to Board of Directors", url: "https://www.sec.gov/Archives/edgar/data/320193/000110465903004649/j8673_ex99d1.htm" },
  ],
  2004: [{ title: "Form 10-K — Fiscal Year 2004", url: "https://www.sec.gov/Archives/edgar/data/320193/000104746904035975/a2147337z10-k.htm" }],
  2005: [{ title: "Form 10-K — Fiscal Year 2005", url: "https://www.sec.gov/Archives/edgar/data/320193/000110465905058421/a05-20674_110k.htm" }],
  2006: [
    { title: "Form 10-K — Fiscal Year 2006", url: "https://www.sec.gov/Archives/edgar/data/320193/000110465906084288/a06-25759_210k.htm" },
    { title: "Form 8-K — Eric Schmidt elected to Board of Directors", url: "https://www.sec.gov/Archives/edgar/data/0000320193/000110465906058808/a06-19081_1ex99d1.htm" },
  ],
  2007: [{ title: "Form 10-K — Fiscal Year 2007", url: "https://www.sec.gov/Archives/edgar/data/320193/000104746907009340/a2181030z10-k.htm" }],
  2008: [{ title: "Form 10-K — Fiscal Year 2008", url: "https://www.sec.gov/Archives/edgar/data/320193/000119312508224958/d10k.htm" }],
  2009: [{ title: "Form 10-K — Fiscal Year 2009", url: "https://www.sec.gov/Archives/edgar/data/320193/000119312509214859/d10k.htm" }],
  2010: [{ title: "Form 10-K — Fiscal Year 2010", url: "https://www.sec.gov/Archives/edgar/data/320193/000119312510238044/d10k.htm" }],
  2011: [
    { title: "Form 10-K — Fiscal Year 2011", url: "https://www.sec.gov/Archives/edgar/data/320193/000119312511282113/d220209d10k.htm" },
    { title: "Form 8-K — CEO transition: Tim Cook named CEO", url: "https://www.sec.gov/Archives/edgar/data/0000320193/000118143111003847/rrd297847_33925.htm" },
  ],
  2012: [{ title: "Form 10-K — Fiscal Year 2012", url: "https://www.sec.gov/Archives/edgar/data/320193/000119312512444068/d411355d10k.htm" }],
  2013: [{ title: "Form 10-K — Fiscal Year 2013", url: "https://www.sec.gov/Archives/edgar/data/320193/000119312513416534/d590790d10k.htm" }],
  2014: [{ title: "Form 10-K — Fiscal Year 2014", url: "https://www.sec.gov/Archives/edgar/data/320193/000119312514383437/d783162d10k.htm" }],
  2015: [{ title: "Form 10-K — Fiscal Year 2015", url: "https://www.sec.gov/Archives/edgar/data/320193/000119312515356351/d17062d10k.htm" }],
  2016: [{ title: "Form 10-K — Fiscal Year 2016", url: "https://www.sec.gov/Archives/edgar/data/320193/000162828016020309/a201610-k9242016.htm" }],
  2017: [{ title: "Form 10-K — Fiscal Year 2017", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019317000070/a10-k20179302017.htm" }],
  2018: [{ title: "Form 10-K — Fiscal Year 2018", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019318000145/a10-k20189292018.htm" }],
  2019: [{ title: "Form 10-K — Fiscal Year 2019", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019319000119/a10-k20199282019.htm" }],
  2020: [{ title: "Form 10-K — Fiscal Year 2020", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019320000096/aapl-20200926.htm" }],
  2021: [{ title: "Form 10-K — Fiscal Year 2021", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019321000105/aapl-20210925.htm" }],
  2022: [{ title: "Form 10-K — Fiscal Year 2022", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019322000108/aapl-20220924.htm" }],
  2023: [{ title: "Form 10-K — Fiscal Year 2023", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019323000106/aapl-20230930.htm" }],
  2024: [{ title: "Form 10-K — Fiscal Year 2024", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019324000123/aapl-20240928.htm" }],
  2025: [{ title: "Form 10-K — Fiscal Year 2025", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/aapl-20250927.htm" }],
};

export const appleQuarterlyFilings: Record<number, Citation[]> = {
  1994: [
    { title: "Form 10-Q — filed 1994-01-26", url: "https://www.sec.gov/Archives/edgar/data/320193/0000320193-94-000002-index.html" },
    { title: "Form 10-Q — filed 1994-08-12", url: "https://www.sec.gov/Archives/edgar/data/320193/0000320193-94-000013-index.html" },
  ],
  1995: [
    { title: "Form 10-Q — filed 1995-02-09", url: "https://www.sec.gov/Archives/edgar/data/320193/0000320193-95-000003-index.html" },
    { title: "Form 10-Q — filed 1995-05-15", url: "https://www.sec.gov/Archives/edgar/data/320193/0000320193-95-000008-index.html" },
    { title: "Form 10-Q — filed 1995-08-11", url: "https://www.sec.gov/Archives/edgar/data/320193/0000320193-95-000011-index.html" },
  ],
  1996: [
    { title: "Form 10-Q — filed 1996-02-12", url: "https://www.sec.gov/Archives/edgar/data/320193/0000320193-96-000002-index.html" },
    { title: "Form 10-Q — filed 1996-05-13", url: "https://www.sec.gov/Archives/edgar/data/320193/0000320193-96-000011-index.html" },
    { title: "Form 10-Q — filed 1996-08-12", url: "https://www.sec.gov/Archives/edgar/data/320193/0000320193-96-000018-index.html" },
  ],
  1997: [
    { title: "Form 10-Q — filed 1997-02-10", url: "https://www.sec.gov/Archives/edgar/data/320193/0000320193-97-000002-index.html" },
    { title: "Form 10-Q — filed 1997-05-12", url: "https://www.sec.gov/Archives/edgar/data/320193/0000320193-97-000011-index.html" },
    { title: "Form 10-Q — filed 1997-08-11", url: "https://www.sec.gov/Archives/edgar/data/320193/0000320193-97-000014-index.html" },
    { title: "Form 10-Q/A — filed 1997-10-07", url: "https://www.sec.gov/Archives/edgar/data/320193/0000320193-97-000021-index.html" },
  ],
  1998: [
    { title: "Form 10-Q — filed 1998-02-09", url: "https://www.sec.gov/Archives/edgar/data/320193/0000320193-98-000003-index.html" },
    { title: "Form 10-Q — filed 1998-05-11", url: "https://www.sec.gov/Archives/edgar/data/320193/0000320193-98-000006-index.html" },
    { title: "Form 10-Q — filed 1998-08-10", url: "https://www.sec.gov/Archives/edgar/data/320193/0000320193-98-000008-index.html" },
  ],
  1999: [
    { title: "Form 10-Q — filed 1999-02-08", url: "https://www.sec.gov/Archives/edgar/data/320193/0000320193-99-000002-index.html" },
    { title: "Form 10-Q — filed 1999-05-11", url: "https://www.sec.gov/Archives/edgar/data/320193/0000320193-99-000004-index.html" },
    { title: "Form 10-Q — filed 1999-08-06", url: "https://www.sec.gov/Archives/edgar/data/320193/0000320193-99-000009-index.html" },
  ],
  2000: [
    { title: "Form 10-Q — filed 2000-02-01", url: "https://www.sec.gov/Archives/edgar/data/320193/0000912057-00-003201-index.html" },
    { title: "Form 10-Q — filed 2000-05-11", url: "https://www.sec.gov/Archives/edgar/data/320193/0000912057-00-023442-index.html" },
    { title: "Form 10-Q — filed 2000-07-31", url: "https://www.sec.gov/Archives/edgar/data/320193/000091205700033901/a10-q.txt" },
  ],
  2001: [
    { title: "Form 10-Q — filed 2001-02-12", url: "https://www.sec.gov/Archives/edgar/data/320193/000091205701004642/a2038036z10-q.txt" },
    { title: "Form 10-Q — filed 2001-05-14", url: "https://www.sec.gov/Archives/edgar/data/320193/000091205701515409/a2048698z10-q.htm" },
    { title: "Form 10-Q — filed 2001-08-13", url: "https://www.sec.gov/Archives/edgar/data/320193/000091205701528148/a2056203z10-q.htm" },
  ],
  2002: [
    { title: "Form 10-Q — filed 2002-02-11", url: "https://www.sec.gov/Archives/edgar/data/320193/000091205702004945/a2069685z10-q.htm" },
    { title: "Form 10-Q — filed 2002-05-14", url: "https://www.sec.gov/Archives/edgar/data/320193/000091205702020280/a2079853z10-q.htm" },
    { title: "Form 10-Q — filed 2002-08-09", url: "https://www.sec.gov/Archives/edgar/data/320193/000091205702030796/a2086025z10-q.htm" },
  ],
  2003: [
    { title: "Form 10-Q — filed 2003-02-10", url: "https://www.sec.gov/Archives/edgar/data/320193/000104746903004566/a2102387z10-q.htm" },
    { title: "Form 10-Q — filed 2003-05-13", url: "https://www.sec.gov/Archives/edgar/data/320193/000110465903009489/j0567_10q.htm" },
    { title: "Form 10-Q — filed 2003-08-12", url: "https://www.sec.gov/Archives/edgar/data/320193/000110465903017766/a03-2128_110q.htm" },
  ],
  2004: [
    { title: "Form 10-Q — filed 2004-02-10", url: "https://www.sec.gov/Archives/edgar/data/320193/000110465904003080/a04-1622_110q.htm" },
    { title: "Form 10-Q — filed 2004-05-06", url: "https://www.sec.gov/Archives/edgar/data/320193/000110465904013021/a04-5089_110q.htm" },
    { title: "Form 10-Q — filed 2004-08-05", url: "https://www.sec.gov/Archives/edgar/data/320193/000110465904022384/a04-8198_110q.htm" },
  ],
  2005: [
    { title: "Form 10-Q — filed 2005-02-01", url: "https://www.sec.gov/Archives/edgar/data/320193/000110465905003520/a05-2329_110q.htm" },
    { title: "Form 10-Q — filed 2005-05-04", url: "https://www.sec.gov/Archives/edgar/data/320193/000110465905020421/a05-7551_110q.htm" },
    { title: "Form 10-Q — filed 2005-08-03", url: "https://www.sec.gov/Archives/edgar/data/320193/000110465905035792/a05-12535_110q.htm" },
  ],
  2006: [
    { title: "Form 10-Q — filed 2006-02-03", url: "https://www.sec.gov/Archives/edgar/data/320193/000110465906005910/a06-3798_110q.htm" },
    { title: "Form 10-Q — filed 2006-05-05", url: "https://www.sec.gov/Archives/edgar/data/320193/000110465906031303/a06-10806_110q.htm" },
    { title: "Form 10-Q — filed 2006-12-29", url: "https://www.sec.gov/Archives/edgar/data/320193/000110465906084286/a06-23473_110q.htm" },
  ],
  2007: [
    { title: "Form 10-Q — filed 2007-02-02", url: "https://www.sec.gov/Archives/edgar/data/320193/000110465907006648/a07-2749_110q.htm" },
    { title: "Form 10-Q — filed 2007-05-10", url: "https://www.sec.gov/Archives/edgar/data/320193/000110465907037745/a07-13266_110q.htm" },
    { title: "Form 10-Q — filed 2007-08-08", url: "https://www.sec.gov/Archives/edgar/data/320193/000110465907059873/a07-19295_110q.htm" },
  ],
  2008: [
    { title: "Form 10-Q — filed 2008-02-01", url: "https://www.sec.gov/Archives/edgar/data/320193/000119312508017426/d10q.htm" },
    { title: "Form 10-Q — filed 2008-05-01", url: "https://www.sec.gov/Archives/edgar/data/320193/000119312508097759/d10q.htm" },
    { title: "Form 10-Q — filed 2008-07-23", url: "https://www.sec.gov/Archives/edgar/data/320193/000119312508156421/d10q.htm" },
  ],
  2009: [
    { title: "Form 10-Q — filed 2009-01-23", url: "https://www.sec.gov/Archives/edgar/data/320193/000119312509009937/d10q.htm" },
    { title: "Form 10-Q — filed 2009-04-23", url: "https://www.sec.gov/Archives/edgar/data/320193/000119312509085781/d10q.htm" },
    { title: "Form 10-Q/A — filed 2009-04-27", url: "https://www.sec.gov/Archives/edgar/data/320193/000119312509087629/d10qa.htm" },
    { title: "Form 10-Q — filed 2009-07-22", url: "https://www.sec.gov/Archives/edgar/data/320193/000119312509153165/d10q.htm" },
  ],
  2010: [
    { title: "Form 10-Q — filed 2010-01-25", url: "https://www.sec.gov/Archives/edgar/data/320193/000119312510012085/d10q.htm" },
    { title: "Form 10-Q — filed 2010-04-21", url: "https://www.sec.gov/Archives/edgar/data/320193/000119312510088957/d10q.htm" },
    { title: "Form 10-Q — filed 2010-07-21", url: "https://www.sec.gov/Archives/edgar/data/320193/000119312510162840/d10q.htm" },
  ],
  2011: [
    { title: "Form 10-Q — filed 2011-01-19", url: "https://www.sec.gov/Archives/edgar/data/320193/000119312511010144/d10q.htm" },
    { title: "Form 10-Q — filed 2011-04-21", url: "https://www.sec.gov/Archives/edgar/data/320193/000119312511104388/d10q.htm" },
    { title: "Form 10-Q — filed 2011-07-20", url: "https://www.sec.gov/Archives/edgar/data/320193/000119312511192493/d10q.htm" },
  ],
  2012: [
    { title: "Form 10-Q — filed 2012-01-25", url: "https://www.sec.gov/Archives/edgar/data/320193/000119312512023398/d267587d10q.htm" },
    { title: "Form 10-Q — filed 2012-04-25", url: "https://www.sec.gov/Archives/edgar/data/320193/000119312512182321/d297069d10q.htm" },
    { title: "Form 10-Q — filed 2012-07-25", url: "https://www.sec.gov/Archives/edgar/data/320193/000119312512314552/d365704d10q.htm" },
  ],
  2013: [
    { title: "Form 10-Q — filed 2013-01-24", url: "https://www.sec.gov/Archives/edgar/data/320193/000119312513022339/d453687d10q.htm" },
    { title: "Form 10-Q — filed 2013-04-24", url: "https://www.sec.gov/Archives/edgar/data/320193/000119312513168288/d501596d10q.htm" },
    { title: "Form 10-Q — filed 2013-07-24", url: "https://www.sec.gov/Archives/edgar/data/320193/000119312513300670/d552802d10q.htm" },
  ],
  2014: [
    { title: "Form 10-Q — filed 2014-01-28", url: "https://www.sec.gov/Archives/edgar/data/320193/000119312514024487/d644622d10q.htm" },
    { title: "Form 10-Q — filed 2014-04-24", url: "https://www.sec.gov/Archives/edgar/data/320193/000119312514157311/d694710d10q.htm" },
    { title: "Form 10-Q — filed 2014-07-23", url: "https://www.sec.gov/Archives/edgar/data/320193/000119312514277160/d740164d10q.htm" },
  ],
  2015: [
    { title: "Form 10-Q — filed 2015-01-28", url: "https://www.sec.gov/Archives/edgar/data/320193/000119312515023697/d835533d10q.htm" },
    { title: "Form 10-Q — filed 2015-04-28", url: "https://www.sec.gov/Archives/edgar/data/320193/000119312515153166/d892246d10q.htm" },
    { title: "Form 10-Q — filed 2015-07-22", url: "https://www.sec.gov/Archives/edgar/data/320193/000119312515259935/d927922d10q.htm" },
  ],
  2016: [
    { title: "Form 10-Q — filed 2016-01-27", url: "https://www.sec.gov/Archives/edgar/data/320193/000119312516439878/d66145d10q.htm" },
    { title: "Form 10-Q — filed 2016-04-27", url: "https://www.sec.gov/Archives/edgar/data/320193/000119312516559625/d165350d10q.htm" },
    { title: "Form 10-Q — filed 2016-07-27", url: "https://www.sec.gov/Archives/edgar/data/320193/000162828016017809/a10-qq320166252016.htm" },
  ],
  2017: [
    { title: "Form 10-Q — filed 2017-02-01", url: "https://www.sec.gov/Archives/edgar/data/320193/000162828017000717/a10-qq1201712312016.htm" },
    { title: "Form 10-Q — filed 2017-05-03", url: "https://www.sec.gov/Archives/edgar/data/320193/000162828017004790/a10-qq22017412017.htm" },
    { title: "Form 10-Q — filed 2017-08-02", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019317000009/a10-qq32017712017.htm" },
  ],
  2018: [
    { title: "Form 10-Q — filed 2018-02-02", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019318000007/a10-qq1201812302017.htm" },
    { title: "Form 10-Q — filed 2018-05-02", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019318000070/a10-qq220183312018.htm" },
    { title: "Form 10-Q — filed 2018-08-01", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019318000100/a10-qq320186302018.htm" },
  ],
  2019: [
    { title: "Form 10-Q — filed 2019-01-30", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019319000010/a10-qq1201912292018.htm" },
    { title: "Form 10-Q — filed 2019-05-01", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019319000066/a10-qq220193302019.htm" },
    { title: "Form 10-Q — filed 2019-07-31", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019319000076/a10-qq320196292019.htm" },
  ],
  2020: [
    { title: "Form 10-Q — filed 2020-01-29", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019320000010/a10-qq1202012282019.htm" },
    { title: "Form 10-Q — filed 2020-05-01", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019320000052/a10-qq220203282020.htm" },
    { title: "Form 10-Q — filed 2020-07-31", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019320000062/aapl-20200627.htm" },
  ],
  2021: [
    { title: "Form 10-Q — filed 2021-01-28", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019321000010/aapl-20201226.htm" },
    { title: "Form 10-Q — filed 2021-04-29", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019321000056/aapl-20210327.htm" },
    { title: "Form 10-Q — filed 2021-07-28", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019321000065/aapl-20210626.htm" },
  ],
  2022: [
    { title: "Form 10-Q — filed 2022-01-28", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019322000007/aapl-20211225.htm" },
    { title: "Form 10-Q — filed 2022-04-29", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019322000059/aapl-20220326.htm" },
    { title: "Form 10-Q — filed 2022-07-29", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019322000070/aapl-20220625.htm" },
  ],
  2023: [
    { title: "Form 10-Q — filed 2023-02-03", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019323000006/aapl-20221231.htm" },
    { title: "Form 10-Q — filed 2023-05-05", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019323000064/aapl-20230401.htm" },
    { title: "Form 10-Q — filed 2023-08-04", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019323000077/aapl-20230701.htm" },
  ],
  2024: [
    { title: "Form 10-Q — filed 2024-02-02", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019324000006/aapl-20231230.htm" },
    { title: "Form 10-Q — filed 2024-05-03", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019324000069/aapl-20240330.htm" },
    { title: "Form 10-Q — filed 2024-08-02", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019324000081/aapl-20240629.htm" },
  ],
  2025: [
    { title: "Form 10-Q — filed 2025-01-31", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019325000008/aapl-20241228.htm" },
    { title: "Form 10-Q — filed 2025-05-02", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019325000057/aapl-20250329.htm" },
    { title: "Form 10-Q — filed 2025-08-01", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019325000073/aapl-20250628.htm" },
  ],
  2026: [
    { title: "Form 10-Q — filed 2026-01-30", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019326000006/aapl-20251227.htm" },
    { title: "Form 10-Q — filed 2026-05-01", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019326000013/aapl-20260328.htm" },
  ],
};

// Years with no real, digitized SEC filing available.
export const appleSecFilingsGap: Record<number, string> = {
  1981: "No EDGAR-accessible annual (10-K) or quarterly (10-Q) filings — SEC's electronic archive for Apple only goes back to 1994; earlier reports were paper-only.",
  1982: "No EDGAR-accessible annual (10-K) or quarterly (10-Q) filings — SEC's electronic archive for Apple only goes back to 1994; earlier reports were paper-only.",
  1983: "No EDGAR-accessible annual (10-K) or quarterly (10-Q) filings — SEC's electronic archive for Apple only goes back to 1994; earlier reports were paper-only.",
  1984: "No EDGAR-accessible annual (10-K) or quarterly (10-Q) filings — SEC's electronic archive for Apple only goes back to 1994; earlier reports were paper-only.",
  1985: "No EDGAR-accessible annual (10-K) or quarterly (10-Q) filings — SEC's electronic archive for Apple only goes back to 1994; earlier reports were paper-only.",
  1986: "No EDGAR-accessible annual (10-K) or quarterly (10-Q) filings — SEC's electronic archive for Apple only goes back to 1994; earlier reports were paper-only.",
  1987: "No EDGAR-accessible annual (10-K) or quarterly (10-Q) filings — SEC's electronic archive for Apple only goes back to 1994; earlier reports were paper-only.",
  1988: "No EDGAR-accessible annual (10-K) or quarterly (10-Q) filings — SEC's electronic archive for Apple only goes back to 1994; earlier reports were paper-only.",
  1989: "No EDGAR-accessible annual (10-K) or quarterly (10-Q) filings — SEC's electronic archive for Apple only goes back to 1994; earlier reports were paper-only.",
  1990: "No EDGAR-accessible annual (10-K) or quarterly (10-Q) filings — SEC's electronic archive for Apple only goes back to 1994; earlier reports were paper-only.",
  1991: "No EDGAR-accessible annual (10-K) or quarterly (10-Q) filings — SEC's electronic archive for Apple only goes back to 1994; earlier reports were paper-only.",
  1992: "No EDGAR-accessible annual (10-K) or quarterly (10-Q) filings — SEC's electronic archive for Apple only goes back to 1994; earlier reports were paper-only.",
  1993: "No EDGAR-accessible annual (10-K) or quarterly (10-Q) filings — SEC's electronic archive for Apple only goes back to 1994; earlier reports were paper-only.",
  2026: "Apple's fiscal year 2026 10-K has not been filed yet — it's typically filed in late October/early November, after fiscal year-end in late September.",
};
