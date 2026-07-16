export interface Citation { title: string; url: string; }

export const appleBoardSources: Record<number, Citation[]> = {
  1980: [{ title: "Apple Computer, Inc. — IPO Prospectus (Form S-1), 1980 — SEC EDGAR", url: "https://www.sec.gov/Archives/edgar/data/320193/000119312598050377/0001193125-98-050377.txt" }],
  1985: [{ title: "John Sculley Tells The Real Story of Steve Jobs' 'Firing' — Forbes", url: "https://www.forbes.com/sites/davidcoursey/2012/01/13/john-sculley-tells-the-real-story-of-steve-jobs-firing/" }],
  1997: [{ title: "Steve Jobs: The Return, 1997-2011 — Bloomberg", url: "https://www.bloomberg.com/news/articles/2011-10-06/steve-jobs-the-return-1997-2011" }],
  2011: [{ title: "Steve Jobs Resigns as CEO of Apple — Apple Newsroom", url: "https://www.apple.com/newsroom/2011/08/24Steve-Jobs-Resigns-as-CEO-of-Apple/" }],
  2024: [
    { title: "Apple Inc. — Notice of 2024 Annual Meeting and Proxy Statement (Form DEF 14A) — SEC EDGAR", url: "https://www.sec.gov/Archives/edgar/data/0000320193/000130817924000010/laapl2024_def14a.htm" },
    { title: "Apple Board of Directors shuffle sees Al Gore & James Bell retire — AppleInsider", url: "https://appleinsider.com/articles/24/01/11/apple-board-of-directors-shuffle-sees-al-gore-james-bell-retire" },
  ],
  2025: [{ title: "Apple Inc. — Notice of 2025 Annual Meeting and Proxy Statement (Form DEF 14A) — SEC EDGAR", url: "https://www.sec.gov/Archives/edgar/data/0000320193/000130817925000008/aapl4359751-def14a.htm" }],
  2026: [{ title: "Tim Cook to become Apple Executive Chairman; John Ternus to become Apple CEO — Apple Newsroom", url: "https://www.apple.com/newsroom/2026/04/tim-cook-to-become-apple-executive-chairman-john-ternus-to-become-apple-ceo/" }],
};

const FALLBACK = "No board-specific citation has been individually verified for this year. For the most reliable record of Apple's board composition at any point in time, consult Apple's proxy statements (Form DEF 14A) filed with the SEC, which are the company's own official disclosures of board membership and changes.";

export const appleBoardSourcesGap: Record<number, string> = Object.fromEntries(
  Array.from({ length: 2026 - 1976 + 1 }, (_, i) => 1976 + i)
    .filter((y) => !(y in appleBoardSources))
    .map((y) => [y, FALLBACK])
);
