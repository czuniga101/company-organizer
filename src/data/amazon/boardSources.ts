export interface Citation { title: string; url: string; }

export const amazonBoardSources: Record<number, Citation[]> = {
  1997: [{ title: "Amazon.com, Inc. — Form S-1 IPO Registration (management/board history) — SEC EDGAR", url: "https://www.sec.gov/Archives/edgar/data/1018724/0000891618-97-001309.txt" }],
  2021: [
    { title: "Amazon.com Announces Financial Results and CEO Transition — Amazon Press Center", url: "https://press.aboutamazon.com/2021/2/amazon-com-announces-financial-results-and-ceo-transition" },
    { title: "Jeff Bezos to hand over Amazon CEO role to Andy Jassy on July 5 — GeekWire", url: "https://www.geekwire.com/2021/jeff-bezos-hand-amazon-ceo-role-andy-jassy-july-5-anniversary-companys-creation/" },
  ],
};

const FALLBACK = "No board-specific citation has been individually verified for this year. For the most reliable record of Amazon's board composition at any point in time, consult Amazon's proxy statements (Form DEF 14A) filed with the SEC, the company's own official disclosure of board membership and changes.";

export const amazonBoardSourcesGap: Record<number, string> = Object.fromEntries(
  [1994, 2006, 2012, 2017, 2018, 2020, 2022, 2023, 2024, 2025, 2026].map((y) => [y, FALLBACK])
);
