export interface Citation { title: string; url: string; }

export const spacexBoardSources: Record<number, Citation[]> = {
  2026: [
    { title: "Roelof Botha joins SpaceX's board of directors — TechCrunch", url: "https://techcrunch.com/2026/06/17/roelof-botha-joins-spacexs-board-of-directors/" },
    { title: "SpaceX — Leadership (Investor Relations)", url: "https://ir.spacex.com/leadership/default.aspx" },
  ],
};

const FALLBACK = "SpaceX is a private company and, unlike public companies, has not been required to publicly disclose its full board composition or governance changes via SEC proxy filings for most of its history. Board membership details for this year are not independently verifiable from an official company source.";

export const spacexBoardSourcesGap: Record<number, string> = Object.fromEntries(
  [2002, 2006, 2008, 2010, 2012, 2015, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]
    .map((y) => [y, FALLBACK])
);
