export interface Citation { title: string; url: string; }

export const toyotaBoardSources: Record<number, Citation[]> = {
  2009: [{ title: "TMC Announces Changes to Executive Structure — Toyota Global Newsroom", url: "https://global.toyota/en/newsroom/corporate/38666519.html" }],
  2023: [{ title: "TMC Announces Changes to Executive Structure (Toyoda to Chairman, Sato to President/CEO) — Toyota Global Newsroom", url: "https://global.toyota/en/newsroom/corporate/38666519.html" }],
  2024: [{ title: "Toyota Global Newsroom — Corporate Announcements", url: "https://global.toyota/en/newsroom/corporate/" }],
  2025: [{ title: "Toyota Global Newsroom — Corporate Announcements", url: "https://global.toyota/en/newsroom/corporate/" }],
  2026: [{ title: "Toyota Global Newsroom — Corporate Announcements", url: "https://global.toyota/en/newsroom/corporate/" }],
};

const FALLBACK = "No board/executive-structure citation has been individually verified for this year. Toyota, as a Japanese company, discloses board and executive changes via its Corporate Governance Report (filed with the Tokyo Stock Exchange) and the Toyota Global Newsroom (global.toyota/en/newsroom/corporate/), both official company channels, rather than a US-style SEC proxy statement.";

export const toyotaBoardSourcesGap: Record<number, string> = Object.fromEntries(
  [1937, 1950, 1957, 1966, 1973, 1982, 1990, 1997, 2002, 2007, 2010, 2011, 2020]
    .filter((y) => !(y in toyotaBoardSources))
    .map((y) => [y, FALLBACK])
);
