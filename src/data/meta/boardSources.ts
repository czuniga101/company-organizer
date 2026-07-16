export interface Citation { title: string; url: string; }

export const metaBoardSources: Record<number, Citation[]> = {
  2012: [{ title: "Facebook, Inc. — Form S-1 IPO Registration (management/board history) — SEC EDGAR", url: "https://www.sec.gov/Archives/edgar/data/1326801/000119312512034517/d287954ds1.htm" }],
  2022: [{ title: "Sheryl Sandberg will step down as Meta COO — TechCrunch", url: "https://techcrunch.com/2022/06/01/sheryl-sandberg-steps-down-facebook/" }],
  2024: [{ title: "Former Facebook COO Sheryl Sandberg announces intent to leave Meta's board of directors — Fox Business", url: "https://www.foxbusiness.com/technology/former-facebook-coo-sheryl-sandberg-announces-intent-leave-metas-board-directors" }],
};

const FALLBACK = "No board-specific citation has been individually verified for this year. For the most reliable record of Meta's board composition at any point in time, consult Meta's proxy statements (Form DEF 14A) filed with the SEC, the company's own official disclosure of board membership and changes.";

export const metaBoardSourcesGap: Record<number, string> = Object.fromEntries(
  [2004, 2014, 2018, 2021, 2025, 2026].map((y) => [y, FALLBACK])
);
