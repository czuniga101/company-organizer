export interface Citation { title: string; url: string; }

// SpaceX has been a private company throughout its history and has never
// filed standard SEC annual/quarterly reports (10-K/10-Q). It has filed
// limited Form D exempt-offering notices for funding rounds, which are
// brief and don't disclose financials the way a 10-K does.
export const spacexSecFilings: Record<number, Citation[]> = {};
export const spacexQuarterlyFilings: Record<number, Citation[]> = {};

export const spacexSecFilingsGap: Record<number, string> = {
  2002: "SpaceX is a private company and has never filed SEC annual or quarterly reports.",
  2006: "SpaceX is a private company and has never filed SEC annual or quarterly reports.",
  2008: "SpaceX is a private company and has never filed SEC annual or quarterly reports.",
  2010: "SpaceX is a private company and has never filed SEC annual or quarterly reports. (Funding rounds are sometimes disclosed via brief Form D exempt-offering notices on EDGAR, which contain minimal financial detail.)",
  2012: "SpaceX is a private company and has never filed SEC annual or quarterly reports.",
  2015: "SpaceX is a private company and has never filed SEC annual or quarterly reports.",
  2018: "SpaceX is a private company and has never filed SEC annual or quarterly reports.",
  2019: "SpaceX is a private company and has never filed SEC annual or quarterly reports.",
  2020: "SpaceX is a private company and has never filed SEC annual or quarterly reports.",
  2021: "SpaceX is a private company and has never filed SEC annual or quarterly reports.",
  2022: "SpaceX is a private company and has never filed SEC annual or quarterly reports.",
  2023: "SpaceX is a private company and has never filed SEC annual or quarterly reports.",
  2024: "SpaceX is a private company and has never filed SEC annual or quarterly reports.",
  2025: "SpaceX is a private company and has never filed SEC annual or quarterly reports.",
  2026: "As of mid-2026, SpaceX (now merged with xAI) has reportedly filed confidentially with the SEC for a potential IPO, but confidential draft registration statements are not publicly accessible on EDGAR until the company chooses to make them public ahead of an offering.",
};
