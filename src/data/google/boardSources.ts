export interface Citation { title: string; url: string; }

export const googleBoardSources: Record<number, Citation[]> = {
  2004: [{ title: "Google Inc. — Form S-1 IPO Registration (management/board history) — SEC EDGAR", url: "https://www.sec.gov/Archives/edgar/data/1288776/000119312504142742/ds1.htm" }],
  2011: [{ title: "Larry Page — Wikipedia (2011 CEO return context)", url: "https://en.wikipedia.org/wiki/Larry_Page" }],
  2015: [{ title: "Alphabet Inc. — Form 10-K (FY2015), first filing under the new holding company structure — SEC EDGAR", url: "https://www.sec.gov/Archives/edgar/data/1652044/000165204416000012/goog10-k2015.htm" }],
  2019: [
    { title: "Larry Page steps down as CEO of Alphabet, Sundar Pichai to take over — CNBC", url: "https://www.cnbc.com/2019/12/03/larry-page-steps-down-as-ceo-of-alphabet.html" },
    { title: "Sundar Pichai is taking over as CEO of Alphabet — TechCrunch", url: "https://techcrunch.com/2019/12/03/sundar-pichai-alphabet-ceo/" },
  ],
};

const FALLBACK = "No board-specific citation has been individually verified for this year. For the most reliable record of Alphabet's board composition at any point in time, consult Alphabet's proxy statements (Form DEF 14A) filed with the SEC, the company's own official disclosure of board membership and changes.";

export const googleBoardSourcesGap: Record<number, string> = Object.fromEntries(
  [1998, 2020, 2022, 2024, 2025, 2026].map((y) => [y, FALLBACK])
);
