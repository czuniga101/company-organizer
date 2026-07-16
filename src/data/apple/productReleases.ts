export interface ProductRelease {
  name: string;
  date: string;
  description: string;
  price?: string;
  sourceUrl: string;
  sourceTitle: string;
}

// Verified via live web search. One or two flagship/most-significant
// releases per year are listed rather than every SKU Apple shipped.
export const appleProductReleases: Record<number, ProductRelease[]> = {
  1976: [
    {
      name: "Apple I (Apple-1)",
      date: "July 1976",
      description: "8-bit personal computer designed by Steve Wozniak; a fully assembled circuit board (not a kit) powered by a MOS 6502 microprocessor at 1 MHz, with 4KB of standard memory (expandable to 8KB or 48KB). About 200 units were produced in total; production discontinued Sept 30, 1977 after the Apple II launch.",
      price: "$666.66",
      sourceUrl: "https://en.wikipedia.org/wiki/Apple_I",
      sourceTitle: "Apple I — Wikipedia",
    },
  ],
  1977: [
    {
      name: "Apple II",
      date: "June 10, 1977",
      description: "8-bit personal computer with a MOS 6502 processor at 1.023 MHz, color display, 8 internal expansion slots, and Integer BASIC in ROM. One of the first mass-produced microcomputers and the machine that established Apple as a real company.",
      price: "$1,298 (4KB) – $2,638 (48KB)",
      sourceUrl: "https://en.wikipedia.org/wiki/Apple_II",
      sourceTitle: "Apple II — Wikipedia",
    },
  ],
  1978: [
    {
      name: "Disk II",
      date: "June 1978",
      description: "Apple's first floppy disk drive for the Apple II, dramatically improving load times and storage versatility over cassette tape and helping make the Apple II viable as a serious business and education machine.",
      price: "$495 (pre-order) / $595 (with controller card)",
      sourceUrl: "https://en.wikipedia.org/wiki/Disk_II",
      sourceTitle: "Disk II — Wikipedia",
    },
  ],
  1979: [
    {
      name: "Apple II Plus",
      date: "June 1979",
      description: "Updated Apple II with Applesoft BASIC built into ROM, 48K of memory, and an auto-start ROM for easier startup and screen editing.",
      sourceUrl: "https://en.wikipedia.org/wiki/Apple_II",
      sourceTitle: "Apple II — Wikipedia",
    },
  ],
  1980: [
    {
      name: "Apple III",
      date: "Announced May 19, 1980; shipped late November 1980",
      description: "Apple's first attempt at a business-oriented successor to the Apple II, with a Synertek 6502A processor at 2 MHz, 128KB of memory (expandable to 512KB), and an 80-column display. Plagued by serious stability issues that forced a recall of the first 14,000 units.",
      price: "$4,340 – $7,800",
      sourceUrl: "https://en.wikipedia.org/wiki/Apple_III",
      sourceTitle: "Apple III — Wikipedia",
    },
  ],
  1981: [
    {
      name: "Apple III (re-introduction)",
      date: "November 9, 1981",
      description: "After recalling the first 14,000 units due to stability problems, Apple formally re-released a redesigned Apple III.",
      sourceUrl: "https://en.wikipedia.org/wiki/Apple_III",
      sourceTitle: "Apple III — Wikipedia",
    },
  ],
  1982: [
    {
      name: "No major new hardware product",
      date: "1982",
      description: "1982 was largely a consolidation year: Apple focused on Apple II/III sales and software ahead of the Lisa and Macintosh projects; no major new consumer hardware product shipped this year.",
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Apple_Inc.",
      sourceTitle: "History of Apple Inc. — Wikipedia",
    },
  ],
  1983: [
    {
      name: "Apple Lisa",
      date: "January 19, 1983 (announced)",
      description: "Apple's first commercial personal computer with a graphical user interface and mouse, aimed at business users. Commercially unsuccessful due to its high price and slow performance.",
      price: "$9,995",
      sourceUrl: "https://en.wikipedia.org/wiki/Apple_Lisa",
      sourceTitle: "Apple Lisa — Wikipedia",
    },
    {
      name: "Apple IIe",
      date: "January 1983",
      description: "Successor to the Apple II Plus; became one of the longest-lived models in the Apple II line.",
      sourceUrl: "https://en.wikipedia.org/wiki/Apple_IIe",
      sourceTitle: "Apple IIe — Wikipedia",
    },
  ],
  1984: [
    {
      name: "Macintosh 128K",
      date: "January 24, 1984",
      description: "The original Macintosh, introduced via the famous \"1984\" Super Bowl ad. Brought the GUI and mouse to a mainstream price point for the first time.",
      price: "$2,500",
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Apple_Inc.",
      sourceTitle: "History of Apple Inc. — Wikipedia",
    },
    {
      name: "Apple IIc",
      date: "April 1984",
      description: "A compact, portable version of the Apple II line introduced at an \"Apple II Forever\" event; 2,000 dealers placed orders for more than 52,000 units on launch day.",
      price: "$1,295",
      sourceUrl: "https://www.macworld.com/article/220136/30-years-of-the-apple-lisa-and-the-apple-iie.html",
      sourceTitle: "30 years of the Apple Lisa and the Apple IIe — Macworld",
    },
  ],
  1985: [
    {
      name: "Apple LaserWriter",
      date: "Announced Jan 23, 1985; shipped March 1985",
      description: "Apple's first laser printer, pairing with the Macintosh and PageMaker to effectively create the desktop publishing industry.",
      price: "$6,995",
      sourceUrl: "https://en.wikipedia.org/wiki/LaserWriter",
      sourceTitle: "LaserWriter — Wikipedia",
    },
  ],
  1986: [
    {
      name: "Macintosh Plus",
      date: "January 16, 1986",
      description: "Upgraded Macintosh with 1MB of RAM (expandable to 4MB), a SCSI port for the first time, and an 800KB double-sided floppy drive.",
      price: "$2,599",
      sourceUrl: "https://en.wikipedia.org/wiki/Macintosh_Plus",
      sourceTitle: "Macintosh Plus — Wikipedia",
    },
  ],
  1987: [
    {
      name: "Macintosh II and Macintosh SE",
      date: "March 2, 1987",
      description: "The Mac II was Apple's first modular, expandable, color-capable Macintosh; the SE was a compact all-in-one update to the original Mac form factor with an internal expansion slot.",
      price: "Mac II: $5,498 (with monitor/20MB HD) · Mac SE: $2,900–$3,700",
      sourceUrl: "https://en.wikipedia.org/wiki/Macintosh_II",
      sourceTitle: "Macintosh II — Wikipedia",
    },
  ],
  1988: [
    {
      name: "Macintosh IIx",
      date: "September 19, 1988",
      description: "Updated Macintosh II with a Motorola 68030 processor, the next step in Apple's modular Mac lineup aimed at power users and desktop publishing.",
      sourceUrl: "https://en.wikipedia.org/wiki/List_of_Mac_models",
      sourceTitle: "List of Mac models — Wikipedia",
    },
  ],
  1989: [
    {
      name: "Macintosh Portable",
      date: "September 20, 1989",
      description: "Apple's first portable Macintosh, a heavy (16 lb) battery-powered machine with an active-matrix display, ahead of its time but commercially unsuccessful due to size and price.",
      price: "$6,500",
      sourceUrl: "https://en.wikipedia.org/wiki/Macintosh_Portable",
      sourceTitle: "Macintosh Portable — Wikipedia",
    },
  ],
  1990: [
    {
      name: "Macintosh Classic and Macintosh LC",
      date: "October 1990",
      description: "Apple's first serious push into lower-cost Macs: the Classic revived the compact all-in-one form factor at $1,000, while the LC (\"low cost\") brought color to a more affordable Mac at $2,400, both aimed at education and home markets.",
      price: "Classic: $1,000 · LC: $2,400",
      sourceUrl: "https://en.wikipedia.org/wiki/Macintosh_Classic",
      sourceTitle: "Macintosh Classic — Wikipedia",
    },
  ],
  1991: [
    {
      name: "PowerBook 100, 140, and 170",
      date: "October 1991",
      description: "Apple's first PowerBook-branded laptops, which established the modern laptop layout (palm rest below keyboard, trackball/trackpad toward the user) still used industry-wide today.",
      sourceUrl: "https://en.wikipedia.org/wiki/PowerBook",
      sourceTitle: "PowerBook — Wikipedia",
    },
  ],
  1992: [
    {
      name: "PowerBook Duo 210 and 230",
      date: "October 1992",
      description: "Ultra-portable subnotebooks that could dock into a \"Duo Dock\" to become a full desktop system, an unusual modular concept for the era.",
      price: "Duo 210: $2,249 · Duo 230: $2,609",
      sourceUrl: "https://en.wikipedia.org/wiki/PowerBook_Duo",
      sourceTitle: "PowerBook Duo — Wikipedia",
    },
  ],
  1993: [
    {
      name: "Newton MessagePad",
      date: "August 2, 1993",
      description: "Apple's first PDA (personal digital assistant) and one of the first mainstream handheld computing devices with handwriting recognition, years ahead of the smartphone era but a commercial disappointment.",
      price: "$699",
      sourceUrl: "https://en.wikipedia.org/wiki/MessagePad",
      sourceTitle: "MessagePad — Wikipedia",
    },
  ],
  1994: [
    {
      name: "Power Macintosh",
      date: "March 14, 1994",
      description: "Apple's first Macs built on the new PowerPC architecture (jointly developed with IBM and Motorola), replacing the aging 68k processor family and significantly boosting performance.",
      sourceUrl: "https://en.wikipedia.org/wiki/Power_Macintosh",
      sourceTitle: "Power Macintosh — Wikipedia",
    },
  ],
  1995: [
    {
      name: "QuickTake 150",
      date: "April 17, 1995",
      description: "An early consumer digital camera sold under the Apple brand (manufactured by Kodak/Chinon), part of Apple's experimentation beyond computers during a financially difficult era.",
      sourceUrl: "https://apple.fandom.com/wiki/1995",
      sourceTitle: "1995 — Apple Wiki (Fandom)",
    },
  ],
  1996: [
    {
      name: "Newton MessagePad 130",
      date: "March 1996",
      description: "Updated Newton PDA with a backlit screen, 8MB ROM and 2.5MB RAM — incremental progress during a year otherwise dominated by financial crisis and the Spindler-to-Amelio CEO transition.",
      sourceUrl: "https://eshop.macsales.com/blog/64664-apple-newton-messagepad/",
      sourceTitle: "Retro Apple: The Apple Newton MessagePad — OWC Blog",
    },
  ],
  1997: [
    {
      name: "eMate 300",
      date: "Early 1997",
      description: "A Newton-OS keyboard device in a translucent green clamshell, aimed at education — a design preview of the iBook two years later. Largely overshadowed by Steve Jobs' return to Apple via the NeXT acquisition the same year.",
      sourceUrl: "https://apple.fandom.com/wiki/EMate_300",
      sourceTitle: "eMate 300 — Apple Wiki (Fandom)",
    },
  ],
  1998: [
    {
      name: "iMac G3",
      date: "August 15, 1998",
      description: "The all-in-one, translucent \"Bondi Blue\" iMac that revived Apple's consumer business, dropped the floppy drive in favor of USB, and is widely credited with saving the company.",
      price: "$1,299",
      sourceUrl: "https://en.wikipedia.org/wiki/IMac_G3",
      sourceTitle: "iMac G3 — Wikipedia",
    },
  ],
  1999: [
    {
      name: "iBook G3",
      date: "Unveiled July 21, 1999",
      description: "Apple's consumer laptop counterpart to the iMac, the first mainstream laptop with built-in Wi-Fi support via Apple's AirPort wireless networking.",
      price: "$1,600",
      sourceUrl: "https://lowendmac.com/1999/original-ibook/",
      sourceTitle: "Original iBook — Low End Mac",
    },
  ],
  2000: [
    {
      name: "Power Mac G4 Cube",
      date: "2000",
      description: "A compact 8-inch cube-shaped desktop Mac with no internal fan, an industrial-design showcase; commercially a slow seller but influential aesthetically.",
      sourceUrl: "https://en.wikipedia.org/wiki/Power_Mac_G4",
      sourceTitle: "Power Mac G4 — Wikipedia",
    },
  ],
  2001: [
    {
      name: "iPod (1st generation)",
      date: "Announced Oct 23, 2001; shipped Nov 10, 2001",
      description: "Apple's first portable digital music player, with a 5GB hard drive holding about 1,000 songs and the now-iconic white earbuds. The product that began Apple's transformation beyond computers.",
      price: "$399",
      sourceUrl: "https://en.wikipedia.org/wiki/IPod",
      sourceTitle: "iPod — Wikipedia",
    },
  ],
  2002: [
    {
      name: "iMac G4",
      date: "January 2002",
      description: "Radical redesign with a hemispherical base and a flat LCD screen on an adjustable arm, replacing the CRT-based iMac G3.",
      sourceUrl: "https://en.wikipedia.org/wiki/IMac_G4",
      sourceTitle: "iMac G4 — Wikipedia",
    },
  ],
  2003: [
    {
      name: "iTunes Store",
      date: "April 28, 2003",
      description: "Apple's digital music storefront, selling singles for 99 cents and legitimizing paid digital music downloads at scale — a key pillar of the iPod ecosystem's success.",
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Apple_Inc.",
      sourceTitle: "History of Apple Inc. — Wikipedia",
    },
  ],
  2004: [
    {
      name: "iPod mini",
      date: "Announced Jan 6, 2004; released Feb 20, 2004",
      description: "A smaller, lighter iPod using a 1-inch Microdrive instead of a full hard drive, available in several colors — broadened the iPod's appeal significantly.",
      price: "$249 (4GB)",
      sourceUrl: "https://apple.fandom.com/wiki/IPod_mini",
      sourceTitle: "iPod mini — Apple Wiki (Fandom)",
    },
  ],
  2005: [
    {
      name: "iPod nano",
      date: "September 7, 2005",
      description: "Replaced the iPod mini with an even smaller flash-memory-based player, eliminating moving parts and further cementing the iPod's mainstream dominance.",
      price: "$199 (2GB) – $249 (4GB)",
      sourceUrl: "https://www.apple.com/newsroom/2005/09/07Apple-Introduces-iPod-nano/",
      sourceTitle: "Apple Introduces iPod nano — Apple Newsroom",
    },
  ],
  2006: [
    {
      name: "MacBook and MacBook Pro",
      date: "MacBook Pro: Jan 10, 2006 · MacBook: May 16, 2006",
      description: "Completed Apple's transition from PowerPC to Intel processors across its laptop line, the final step of the 2005-announced Intel transition.",
      price: "MacBook Pro (15\", 1.67GHz): $1,999 · MacBook (13\", 1.83GHz): $1,099",
      sourceUrl: "https://www.apple.com/newsroom/2006/01/10Apple-Introduces-MacBook-Pro/",
      sourceTitle: "Apple Introduces MacBook Pro — Apple Newsroom",
    },
  ],
  2007: [
    {
      name: "iPhone",
      date: "Announced Jan 9, 2007; released June 29, 2007",
      description: "The original iPhone, combining a phone, iPod, and internet communicator with a multi-touch interface — arguably the most consequential consumer product Apple has ever released.",
      sourceUrl: "https://www.history.com/this-day-in-history/january-9/steve-jobs-debuts-the-iphone",
      sourceTitle: "Steve Jobs debuts the iPhone — HISTORY.com",
    },
  ],
  2008: [
    {
      name: "MacBook Air (original) and App Store",
      date: "MacBook Air: Jan 15, 2008 · App Store: July 10, 2008",
      description: "The MacBook Air introduced the ultraportable laptop category; the App Store (opening with 500 apps) created the third-party software ecosystem that became central to the iPhone's long-term moat.",
      price: "MacBook Air: $1,799",
      sourceUrl: "https://www.apple.com/newsroom/2008/01/15Apple-Introduces-MacBook-Air-The-Worlds-Thinnest-Notebook/",
      sourceTitle: "Apple Introduces MacBook Air — Apple Newsroom",
    },
  ],
  2009: [
    {
      name: "iPhone 3GS",
      date: "June 2009",
      description: "Faster iPhone with voice control and an improved camera, released the same year Jobs took a 6-month medical leave of absence.",
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_the_iPhone",
      sourceTitle: "History of the iPhone — Wikipedia",
    },
  ],
  2010: [
    {
      name: "iPad and iPhone 4",
      date: "iPad: April 3, 2010 · iPhone 4: June 24, 2010",
      description: "The iPad created the modern tablet category; the iPhone 4 introduced the Retina Display and an all-new glass-and-steel design (and the antenna-gate controversy).",
      price: "iPhone 4: $199 (16GB) / $299 (32GB) with contract",
      sourceUrl: "https://www.cultofmac.com/apple-history/iphone-4-release-date",
      sourceTitle: "iPhone 4 release date — Cult of Mac",
    },
  ],
  2011: [
    {
      name: "iPad 2",
      date: "March 2011",
      description: "Thinner, faster successor to the original iPad, released the same year Steve Jobs resigned as CEO and Tim Cook took over.",
      sourceUrl: "https://www.cultofmac.com/apple-history/ipad-2-launch-date",
      sourceTitle: "iPad 2 launch date — Cult of Mac",
    },
  ],
  2012: [
    {
      name: "iPhone 5 and iPad mini",
      date: "iPhone 5: Sept 21, 2012 · iPad mini: Nov 2, 2012",
      description: "iPhone 5 introduced a taller 4-inch screen and the Lightning connector; iPad mini brought the tablet line to a smaller, cheaper form factor.",
      price: "iPhone 5: $649 · iPad mini: $329 (16GB)",
      sourceUrl: "https://www.apple.com/newsroom/2012/10/23Apple-Introduces-iPad-mini/",
      sourceTitle: "Apple Introduces iPad mini — Apple Newsroom",
    },
  ],
  2013: [
    {
      name: "Mac Pro (cylindrical) and iPhone 5s",
      date: "Mac Pro: Dec 19, 2013",
      description: "Radically redesigned cylindrical Mac Pro for professionals; iPhone 5s introduced Touch ID fingerprint authentication, a first for mainstream smartphones.",
      price: "Mac Pro: $2,999 (quad-core) – $3,999 (six-core)",
      sourceUrl: "https://www.theepochtimes.com/article/mac-pro-2013-release-date-tomorrow-price-is-2999-405820",
      sourceTitle: "Mac Pro 2013: Release Date, Price — The Epoch Times",
    },
  ],
  2014: [
    {
      name: "iPhone 6 and iPhone 6 Plus",
      date: "September 19, 2014",
      description: "Apple's first larger-screen iPhones (4.7\" and 5.5\"), responding to competitor phablets; also the year Apple Pay was announced.",
      price: "$199 (16GB) – $399 (128GB) with contract",
      sourceUrl: "https://www.apple.com/newsroom/2014/09/09Apple-Announces-iPhone-6-iPhone-6-Plus-The-Biggest-Advancements-in-iPhone-History/",
      sourceTitle: "Apple Announces iPhone 6 & iPhone 6 Plus — Apple Newsroom",
    },
  ],
  2015: [
    {
      name: "Apple Watch and iPad Pro",
      date: "Apple Watch: April 24, 2015 · iPad Pro: Sept 9, 2015",
      description: "Apple Watch was Apple's first all-new product category since the iPad, entering wearables; iPad Pro launched the larger, more powerful 12.9-inch professional tablet line.",
      price: "Apple Watch: $349–$10,000+ · iPad Pro: $799",
      sourceUrl: "https://www.macrumors.com/2015/03/09/apple-watch-pricing-release-date/",
      sourceTitle: "Apple Watch Launches April 24 — MacRumors",
    },
  ],
  2016: [
    {
      name: "iPhone 7 and AirPods",
      date: "Sept 7, 2016 (announced); AirPods shipped Dec 13, 2016",
      description: "iPhone 7 controversially removed the headphone jack; AirPods (announced alongside it) launched Apple's wireless earbuds line, which became a major standalone product category.",
      price: "AirPods: $159",
      sourceUrl: "https://www.refurb.me/stats/airpods",
      sourceTitle: "AirPods Release Dates — Refurb.me",
    },
  ],
  2017: [
    {
      name: "iPhone X",
      date: "Announced Sept 12, 2017; released Nov 3, 2017",
      description: "Edge-to-edge OLED display, Face ID, and removal of the home button — the biggest iPhone redesign since the original, and the first iPhone priced at $999.",
      price: "$999 (64GB)",
      sourceUrl: "https://en.wikipedia.org/wiki/IPhone_X",
      sourceTitle: "iPhone X — Wikipedia",
    },
  ],
  2018: [
    {
      name: "iPhone XS and iPad Pro (Face ID)",
      date: "September 2018",
      description: "iPhone XS refined the iPhone X design; the redesigned iPad Pro brought Face ID and a USB-C-free edge-to-edge design (still Lightning) to the tablet line.",
      sourceUrl: "https://everymac.com/systems/by_year/macs-released-in-2018.html",
      sourceTitle: "Mac Release Dates 2018 — EveryMac.com",
    },
  ],
  2019: [
    {
      name: "AirPods Pro and iPhone 11",
      date: "AirPods Pro: Oct 30, 2019 · iPhone 11: Sept 20, 2019",
      description: "AirPods Pro added active noise cancellation; iPhone 11 introduced the dual-camera Night Mode system that significantly raised the bar for smartphone photography.",
      price: "AirPods Pro: $249 · iPhone 11: $699",
      sourceUrl: "https://www.apple.com/newsroom/2019/10/apple-reveals-new-airpods-pro-available-october-30/",
      sourceTitle: "Apple reveals new AirPods Pro — Apple Newsroom",
    },
  ],
  2020: [
    {
      name: "Apple Silicon M1 Macs and iPhone 12",
      date: "M1 Macs: Nov 17, 2020 · iPhone 12: Oct 23, 2020",
      description: "Apple's first Macs (MacBook Air, MacBook Pro, Mac mini) built on its own ARM-based M1 chip, ending a 15-year reliance on Intel processors; iPhone 12 brought 5G to the iPhone line.",
      price: "MacBook Air M1: $999 · iPhone 12: $799",
      sourceUrl: "https://www.macworld.com/article/674661/macbook-air-apple-silicon-m1-2020-release-date-price-specs.html",
      sourceTitle: "New MacBook Air (Apple Silicon M1, 2020) — Macworld",
    },
  ],
  2021: [
    {
      name: "iPhone 13 and MacBook Pro (M1 Pro/Max)",
      date: "iPhone 13: Sept 24, 2021",
      description: "iPhone 13 refined cameras and battery life across four models; the redesigned MacBook Pro brought the more powerful M1 Pro and M1 Max chips to professional laptops.",
      price: "iPhone 13: $699 (mini) – $1,099 (Pro Max)",
      sourceUrl: "https://www.macworld.com/article/675447/complete-guide-to-iphone-13-its-here.html",
      sourceTitle: "iPhone 13 (2021) complete guide — Macworld",
    },
  ],
  2022: [
    {
      name: "iPhone 14 and Apple M2 chip",
      date: "iPhone 14: Sept 16, 2022 · M2 MacBook Air: July 15, 2022",
      description: "iPhone 14 added satellite emergency SOS; the M2 chip began Apple's second generation of in-house Mac silicon.",
      price: "iPhone 14: $799 – iPhone 14 Pro Max: $1,099",
      sourceUrl: "https://www.macworld.com/article/677790/iphone-14-2022-release-date-specs-rumors-price.html",
      sourceTitle: "iPhone 14 (2022) complete guide — Macworld",
    },
  ],
  2023: [
    {
      name: "Apple Vision Pro (announced) and M3 chip",
      date: "Vision Pro announced June 5, 2023 · M3: Oct 30, 2023",
      description: "Vision Pro, Apple's mixed-reality headset, was announced (shipping the following year); the M3 chip introduced 3-nanometer process technology to the Mac lineup.",
      price: "Vision Pro: $3,499 (announced)",
      sourceUrl: "https://en.wikipedia.org/wiki/Apple_Vision_Pro",
      sourceTitle: "Apple Vision Pro — Wikipedia",
    },
  ],
  2024: [
    {
      name: "Apple Vision Pro (released) and iPhone 16",
      date: "Vision Pro: Feb 2, 2024 · iPhone 16: Sept 20, 2024",
      description: "Vision Pro shipped in the US; iPhone 16 launched alongside the first wave of \"Apple Intelligence\" AI features.",
      price: "Vision Pro: $3,499 · iPhone 16: starting price varies by model",
      sourceUrl: "https://www.apple.com/newsroom/2024/01/apple-vision-pro-available-in-the-us-on-february-2/",
      sourceTitle: "Apple Vision Pro available in the U.S. on February 2 — Apple Newsroom",
    },
  ],
  2025: [
    {
      name: "iPhone 17 and iPhone 16e",
      date: "iPhone 16e: Feb 19, 2025 · iPhone 17: Sept 9, 2025",
      description: "iPhone 16e introduced a new budget tier with Apple Intelligence support; iPhone 17 and the new iPhone Air model continued the main lineup.",
      price: "iPhone 16e: $599 · iPhone 17: $799",
      sourceUrl: "https://en.wikipedia.org/wiki/IPhone_16e",
      sourceTitle: "iPhone 16e — Wikipedia",
    },
  ],
  2026: [
    {
      name: "No major shipped product yet (as of mid-2026)",
      date: "2026",
      description: "As of mid-2026, Apple's major announced-but-unreleased rumors include an OLED iPad mini and updated Mac mini with M5/M5 Pro; the Vision Pro received an M5 chip refresh in October 2025. This was also the year of the Cook-to-Ternus CEO transition.",
      sourceUrl: "https://www.macworld.com/article/671090/new-apple-products-iphone-ipad-mac-watch.html",
      sourceTitle: "Upcoming Apple products 2026 — Macworld",
    },
  ],
};
