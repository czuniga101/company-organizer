export interface Citation { title: string; url: string; }

export const spacexSources: Record<number, Citation[]> = {
  2002: [{ title: "SpaceX — Wikipedia", url: "https://en.wikipedia.org/wiki/SpaceX" }],
  2006: [{ title: "SpaceX — Wikipedia (COTS contract)", url: "https://en.wikipedia.org/wiki/SpaceX" }],
  2008: [{ title: "SpaceX Successfully Launches Falcon 1 to Orbit — SpaceNews", url: "https://spacenews.com/spacex-successfully-launches-falcon-1-to-orbit/" }],
  2010: [
    { title: "SpaceX COTS Demo Flight 1 — Wikipedia", url: "https://en.wikipedia.org/wiki/SpaceX_COTS_Demo_Flight_1" },
    { title: "Falcon 9 — Wikipedia", url: "https://en.wikipedia.org/wiki/Falcon_9" },
  ],
  2012: [
    { title: "SpaceX CRS-1 — Wikipedia", url: "https://en.wikipedia.org/wiki/SpaceX_CRS-1" },
    { title: "First Contracted SpaceX Resupply Mission — NASA", url: "https://www.nasa.gov/news-release/first-contracted-spacex-resupply-mission-launches-with-nasa-cargo-to-space-station/" },
  ],
  2015: [{ title: "SpaceX — Wikipedia (first booster landing, funding)", url: "https://en.wikipedia.org/wiki/SpaceX" }],
  2018: [
    { title: "Falcon Heavy test flight — Wikipedia", url: "https://en.wikipedia.org/wiki/Falcon_Heavy_test_flight" },
    { title: "5 Years Ago: First Flight of the Falcon Heavy Rocket — NASA", url: "https://www.nasa.gov/history/5-years-ago-first-flight-of-the-falcon-heavy-rocket/" },
  ],
  2019: [{ title: "SpaceX — Wikipedia (Starlink)", url: "https://en.wikipedia.org/wiki/SpaceX" }],
  2020: [{ title: "SpaceX — Wikipedia (Crew Dragon Demo-2)", url: "https://en.wikipedia.org/wiki/SpaceX" }],
  2021: [
    { title: "SpaceX Ownership — Pestel-analysis.com", url: "https://pestel-analysis.com/blogs/owners/spacex" },
    { title: "SpaceX revenue, valuation & funding — Sacra", url: "https://sacra.com/c/spacex/" },
  ],
  2022: [{ title: "SpaceX Funding Rounds — SpaceXStock.com", url: "https://spacexstock.com/spacex-funding-rounds-key-investors-by-stage/" }],
  2023: [{ title: "SpaceX Funding Rounds — SpaceXStock.com", url: "https://spacexstock.com/spacex-funding-rounds-key-investors-by-stage/" }],
  2024: [
    { title: "Starlink launch concludes record-breaking 2024 — NASASpaceFlight.com", url: "https://www.nasaspaceflight.com/2024/12/record-breaking-2024/" },
    { title: "SpaceX Valuation 2026 — PremierAlts.com", url: "https://www.premieralts.com/companies/spacex/valuation" },
  ],
  2025: [{ title: "Who Owns SpaceX in 2026? — KeepTrack", url: "https://keeptrack.space/deep-dive/who-owns-spacex" }],
  2026: [
    { title: "Who is Gwynne Shotwell? SpaceX IPO — Fortune", url: "https://fortune.com/2026/04/02/what-to-know-about-gwynne-shotwell-the-woman-behind-spacexs-monster-ipo/" },
    { title: "Gwynne Shotwell helped turn SpaceX into an IPO giant — CNBC", url: "https://www.cnbc.com/2026/06/16/gwynne-shotwell-spacex-elon-musk-ipo.html" },
  ],
};
