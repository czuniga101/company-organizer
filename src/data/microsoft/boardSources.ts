export interface Citation { title: string; url: string; }

export const microsoftBoardSources: Record<number, Citation[]> = {
  2000: [{ title: "Microsoft CEO History: From Gates to Nadella — HistoryOasis", url: "https://www.historyoasis.com/post/microsoft-ceo-history" }],
  2014: [{ title: "Microsoft Board names Satya Nadella as CEO — Microsoft Source", url: "https://news.microsoft.com/source/2014/02/04/microsoft-board-names-satya-nadella-as-ceo/" }],
  2021: [{ title: "Microsoft CEOs & Top Shareholders 2026 — FourWeekMBA (Gates board departure context)", url: "https://fourweekmba.com/who-owns-microsoft/" }],
};

const FALLBACK = "No board-specific citation has been individually verified for this year. For the most reliable record of Microsoft's board composition at any point in time, consult Microsoft's proxy statements (Form DEF 14A) filed with the SEC, the company's own official disclosure of board membership and changes.";

export const microsoftBoardSourcesGap: Record<number, string> = Object.fromEntries(
  [1975, 1986, 1995, 2007, 2019, 2024, 2025, 2026].map((y) => [y, FALLBACK])
);
