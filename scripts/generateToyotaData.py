import json, os

DIR = "src/data/toyota"
os.makedirs(DIR, exist_ok=True)

RECORDS = [
  {"company": "Toyota Motor Co., Ltd.", "year": 1937,
   "ceo": {"name": "Rizaburo Toyoda", "role": "President"},
   "board": [
     {"name": "Rizaburo Toyoda", "role": "President"},
     {"name": "Kiichiro Toyoda", "role": "Vice President / Founder"},
   ],
   "ownership": [
     {"name": "Toyoda Family", "percentage": 60, "color": "#E8734A", "shareValue": 3000000},
     {"name": "Toyota Industries (parent)", "percentage": 30, "color": "#4F86C6", "shareValue": 1500000},
     {"name": "Other", "percentage": 10, "color": "#B0B0B0", "shareValue": 500000},
   ],
   "valuation": 5000000, "stockUnitValue": None,
   "notes": "Toyota Motor Co. incorporated August 28, 1937 as a spinoff of Toyoda Automatic Loom Works, founded by Kiichiro Toyoda. Rizaburo Toyoda (adopted heir of founder Sakichi Toyoda) served as first president."},

  {"company": "Toyota Motor Co., Ltd.", "year": 1950,
   "ceo": {"name": "Taizo Ishida", "role": "President"},
   "board": [
     {"name": "Taizo Ishida", "role": "President"},
     {"name": "Kiichiro Toyoda", "role": "Resigned amid labor crisis"},
   ],
   "ownership": [
     {"name": "Toyoda Family", "percentage": 40, "color": "#E8734A", "shareValue": 2000000},
     {"name": "Banks / Keiretsu", "percentage": 45, "color": "#4F86C6", "shareValue": 2250000},
     {"name": "Other", "percentage": 15, "color": "#B0B0B0", "shareValue": 750000},
   ],
   "valuation": 5000000, "stockUnitValue": None,
   "notes": "Severe post-war financial crisis forced layoffs and Kiichiro Toyoda's resignation as president. Toyota Motor Sales Co. spun off as a separate entity the same year, with bank-led restructuring."},

  {"company": "Toyota Motor Co., Ltd.", "year": 1957,
   "ceo": {"name": "Fukio Nakagawa", "role": "President"},
   "board": [{"name": "Fukio Nakagawa", "role": "President"}, {"name": "Taizo Ishida", "role": "Chairman"}],
   "ownership": [
     {"name": "Toyoda Family / Group Companies", "percentage": 50, "color": "#E8734A", "shareValue": 10000000},
     {"name": "Banks / Institutional", "percentage": 40, "color": "#4F86C6", "shareValue": 8000000},
     {"name": "Other", "percentage": 10, "color": "#B0B0B0", "shareValue": 2000000},
   ],
   "valuation": 20000000, "stockUnitValue": None,
   "notes": "Toyota began exporting to the United States in 1957 with the Toyopet Crown, its first major step toward becoming a global automaker (though the Crown initially sold poorly in the US market)."},

  {"company": "Toyota Motor Co., Ltd.", "year": 1966,
   "ceo": {"name": "Fukio Nakagawa", "role": "President"},
   "board": [{"name": "Fukio Nakagawa", "role": "President"}, {"name": "Eiji Toyoda", "role": "Executive Vice President"}],
   "ownership": [
     {"name": "Toyoda Family / Group Companies", "percentage": 48, "color": "#E8734A", "shareValue": 96000000},
     {"name": "Banks / Institutional", "percentage": 42, "color": "#4F86C6", "shareValue": 84000000},
     {"name": "Other", "percentage": 10, "color": "#B0B0B0", "shareValue": 20000000},
   ],
   "valuation": 200000000, "stockUnitValue": None,
   "notes": "Toyota Corolla launched November 1966, becoming the best-selling car nameplate in automotive history over subsequent decades. Toyota Production System principles (kanban, JIT) were maturing under Taiichi Ohno."},

  {"company": "Toyota Motor Co., Ltd.", "year": 1973,
   "ceo": {"name": "Eiji Toyoda", "role": "President"},
   "board": [{"name": "Eiji Toyoda", "role": "President"}],
   "ownership": [
     {"name": "Toyoda Family / Group Companies", "percentage": 45, "color": "#E8734A", "shareValue": 450000000},
     {"name": "Banks / Institutional", "percentage": 45, "color": "#4F86C6", "shareValue": 450000000},
     {"name": "Other", "percentage": 10, "color": "#B0B0B0", "shareValue": 100000000},
   ],
   "valuation": 1000000000, "stockUnitValue": None,
   "notes": "1973 oil crisis boosted demand for Toyota's fuel-efficient small cars in the US and globally, accelerating Toyota's international expansion just as Detroit struggled with the same crisis."},

  {"company": "Toyota Motor Corporation", "year": 1982,
   "ceo": {"name": "Eiji Toyoda", "role": "Chairman (post-merger)"},
   "board": [{"name": "Eiji Toyoda", "role": "Chairman"}, {"name": "Shoichiro Toyoda", "role": "President"}],
   "ownership": [
     {"name": "Toyoda Family / Group Companies", "percentage": 42, "color": "#E8734A", "shareValue": 2100000000},
     {"name": "Banks / Institutional", "percentage": 48, "color": "#4F86C6", "shareValue": 2400000000},
     {"name": "Other", "percentage": 10, "color": "#B0B0B0", "shareValue": 500000000},
   ],
   "valuation": 5000000000, "stockUnitValue": None,
   "notes": "Toyota Motor Co. and Toyota Motor Sales Co. (separate since 1950) re-merged in 1982 to form Toyota Motor Corporation, with Shoichiro Toyoda (Kiichiro's son) becoming president."},

  {"company": "Toyota Motor Corporation", "year": 1990,
   "ceo": {"name": "Shoichiro Toyoda", "role": "President"},
   "board": [{"name": "Shoichiro Toyoda", "role": "President"}, {"name": "Eiji Toyoda", "role": "Chairman"}],
   "ownership": [
     {"name": "Toyoda Family / Group Companies", "percentage": 38, "color": "#E8734A", "shareValue": 11400000000},
     {"name": "Banks / Institutional", "percentage": 50, "color": "#4F86C6", "shareValue": 15000000000},
     {"name": "Other", "percentage": 12, "color": "#B0B0B0", "shareValue": 3600000000},
   ],
   "valuation": 30000000000, "stockUnitValue": None,
   "notes": "Lexus luxury division launched in 1989 to compete with Mercedes-Benz and BMW in the US market — a major strategic expansion beyond Toyota's mainstream brand."},

  {"company": "Toyota Motor Corporation", "year": 1997,
   "ceo": {"name": "Hiroshi Okuda", "role": "President"},
   "board": [{"name": "Hiroshi Okuda", "role": "President"}, {"name": "Shoichiro Toyoda", "role": "Chairman"}],
   "ownership": [
     {"name": "Toyoda Family / Group Companies", "percentage": 32, "color": "#E8734A", "shareValue": 28800000000},
     {"name": "Foreign Institutional Investors", "percentage": 20, "color": "#4F86C6", "shareValue": 18000000000},
     {"name": "Domestic Institutional / Banks", "percentage": 38, "color": "#6ABF69", "shareValue": 34200000000},
     {"name": "Other", "percentage": 10, "color": "#B0B0B0", "shareValue": 9000000000},
   ],
   "valuation": 90000000000, "stockUnitValue": None,
   "notes": "Toyota Prius launched December 10, 1997 — the world's first mass-produced hybrid gasoline-electric vehicle, a defining long-term technology bet that took years to become profitable."},

  {"company": "Toyota Motor Corporation", "year": 2002,
   "ceo": {"name": "Fujio Cho", "role": "President"},
   "board": [{"name": "Fujio Cho", "role": "President"}, {"name": "Hiroshi Okuda", "role": "Chairman"}],
   "ownership": [
     {"name": "Toyoda Family / Group Companies", "percentage": 28, "color": "#E8734A", "shareValue": 47600000000},
     {"name": "Foreign Institutional Investors", "percentage": 25, "color": "#4F86C6", "shareValue": 42500000000},
     {"name": "Domestic Institutional / Banks", "percentage": 37, "color": "#6ABF69", "shareValue": 62900000000},
     {"name": "Other", "percentage": 10, "color": "#B0B0B0", "shareValue": 17000000000},
   ],
   "valuation": 170000000000, "stockUnitValue": None,
   "notes": "Toyota entered Formula 1 racing in 2002 as part of a global brand-building push. Worldwide Prius and hybrid sales accelerating; first SEC-registered 20-F annual report filed in 2003 for FY2002 ahead of broader US listing presence."},

  {"company": "Toyota Motor Corporation", "year": 2007,
   "ceo": {"name": "Katsuaki Watanabe", "role": "President"},
   "board": [{"name": "Katsuaki Watanabe", "role": "President"}, {"name": "Fujio Cho", "role": "Chairman"}],
   "ownership": [
     {"name": "Toyoda Family / Group Companies", "percentage": 25, "color": "#E8734A", "shareValue": 51750000000},
     {"name": "Foreign Institutional Investors", "percentage": 28, "color": "#4F86C6", "shareValue": 57960000000},
     {"name": "Domestic Institutional / Banks", "percentage": 37, "color": "#6ABF69", "shareValue": 76590000000},
     {"name": "Other", "percentage": 10, "color": "#B0B0B0", "shareValue": 20700000000},
   ],
   "valuation": 207000000000, "stockUnitValue": None,
   "notes": "Toyota became the world's largest automaker by global vehicle sales in 2007/2008, surpassing General Motors for the first time after GM had held the title for ~77 years."},

  {"company": "Toyota Motor Corporation", "year": 2009,
   "ceo": {"name": "Akio Toyoda", "role": "President"},
   "board": [{"name": "Akio Toyoda", "role": "President"}, {"name": "Katsuaki Watanabe", "role": "Vice Chairman"}],
   "ownership": [
     {"name": "Toyoda Family / Group Companies", "percentage": 24, "color": "#E8734A", "shareValue": 31200000000},
     {"name": "Foreign Institutional Investors", "percentage": 27, "color": "#4F86C6", "shareValue": 35100000000},
     {"name": "Domestic Institutional / Banks", "percentage": 39, "color": "#6ABF69", "shareValue": 50700000000},
     {"name": "Other", "percentage": 10, "color": "#B0B0B0", "shareValue": 13000000000},
   ],
   "valuation": 130000000000, "stockUnitValue": None,
   "notes": "Akio Toyoda (grandson of founder Kiichiro) became president June 2009, immediately facing the unintended-acceleration recall crisis (~9 million vehicles recalled globally beginning Nov 2009) and the 2008-09 financial crisis."},

  {"company": "Toyota Motor Corporation", "year": 2010,
   "ceo": {"name": "Akio Toyoda", "role": "President"},
   "board": [{"name": "Akio Toyoda", "role": "President"}],
   "ownership": [
     {"name": "Toyoda Family / Group Companies", "percentage": 24, "color": "#E8734A", "shareValue": 33600000000},
     {"name": "Foreign Institutional Investors", "percentage": 27, "color": "#4F86C6", "shareValue": 37800000000},
     {"name": "Domestic Institutional / Banks", "percentage": 39, "color": "#6ABF69", "shareValue": 54600000000},
     {"name": "Other", "percentage": 10, "color": "#B0B0B0", "shareValue": 14000000000},
   ],
   "valuation": 140000000000, "stockUnitValue": None,
   "notes": "Akio Toyoda testified before US Congress in February 2010 over the recall crisis. Toyota paid a then-record $16.4M NHTSA fine for delayed recall notification."},

  {"company": "Toyota Motor Corporation", "year": 2011,
   "ceo": {"name": "Akio Toyoda", "role": "President"},
   "board": [{"name": "Akio Toyoda", "role": "President"}],
   "ownership": [
     {"name": "Toyoda Family / Group Companies", "percentage": 24, "color": "#E8734A", "shareValue": 28800000000},
     {"name": "Foreign Institutional Investors", "percentage": 27, "color": "#4F86C6", "shareValue": 32400000000},
     {"name": "Domestic Institutional / Banks", "percentage": 39, "color": "#6ABF69", "shareValue": 46800000000},
     {"name": "Other", "percentage": 10, "color": "#B0B0B0", "shareValue": 12000000000},
   ],
   "valuation": 120000000000, "stockUnitValue": None,
   "notes": "March 2011 Tohoku earthquake/tsunami severely disrupted Toyota's Japanese supply chain and production for much of the year, compounding recall-crisis recovery efforts."},

  {"company": "Toyota Motor Corporation", "year": 2020,
   "ceo": {"name": "Akio Toyoda", "role": "President"},
   "board": [{"name": "Akio Toyoda", "role": "President"}],
   "ownership": [
     {"name": "Toyoda Family / Group Companies", "percentage": 20, "color": "#E8734A", "shareValue": 40000000000},
     {"name": "Foreign Institutional Investors", "percentage": 30, "color": "#4F86C6", "shareValue": 60000000000},
     {"name": "Domestic Institutional / Banks", "percentage": 40, "color": "#6ABF69", "shareValue": 80000000000},
     {"name": "Other", "percentage": 10, "color": "#B0B0B0", "shareValue": 20000000000},
   ],
   "valuation": 200000000000, "stockUnitValue": None,
   "notes": "Toyota navigated COVID-19 supply chain disruption better than most rivals due to lessons learned from 2011 earthquake; remained the world's top-selling automaker by volume."},

  {"company": "Toyota Motor Corporation", "year": 2023,
   "ceo": {"name": "Koji Sato", "role": "President"},
   "board": [{"name": "Koji Sato", "role": "President"}, {"name": "Akio Toyoda", "role": "Chairman"}],
   "ownership": [
     {"name": "Toyoda Family / Group Companies", "percentage": 18, "color": "#E8734A", "shareValue": 41040000000},
     {"name": "Foreign Institutional Investors", "percentage": 32, "color": "#4F86C6", "shareValue": 72960000000},
     {"name": "Domestic Institutional / Banks", "percentage": 40, "color": "#6ABF69", "shareValue": 91200000000},
     {"name": "Other", "percentage": 10, "color": "#B0B0B0", "shareValue": 22800000000},
   ],
   "valuation": 228000000000, "stockUnitValue": None,
   "notes": "Akio Toyoda stepped down as president April 1, 2023, becoming chairman; former Lexus chief Koji Sato became president and CEO, the first non-Toyoda-family/non-engineer-track leadership change in years."},

  {"company": "Toyota Motor Corporation", "year": 2024,
   "ceo": {"name": "Koji Sato", "role": "President"},
   "board": [{"name": "Koji Sato", "role": "President"}, {"name": "Akio Toyoda", "role": "Chairman"}],
   "ownership": [
     {"name": "Toyoda Family / Group Companies", "percentage": 18, "color": "#E8734A", "shareValue": 41040000000},
     {"name": "Foreign Institutional Investors", "percentage": 32, "color": "#4F86C6", "shareValue": 72960000000},
     {"name": "Domestic Institutional / Banks", "percentage": 40, "color": "#6ABF69", "shareValue": 91200000000},
     {"name": "Other", "percentage": 10, "color": "#B0B0B0", "shareValue": 22800000000},
   ],
   "valuation": 228000000000, "stockUnitValue": None,
   "notes": "Estimated figures; Toyota Group faced a certification-testing scandal in 2024 involving improper safety testing at several subsidiaries (Daihatsu, Toyota Industries, Hino), prompting production halts and an apology from Akio Toyoda."},

  {"company": "Toyota Motor Corporation", "year": 2025,
   "ceo": {"name": "Koji Sato", "role": "President"},
   "board": [{"name": "Koji Sato", "role": "President"}, {"name": "Akio Toyoda", "role": "Chairman"}],
   "ownership": [
     {"name": "Toyoda Family / Group Companies", "percentage": 18, "color": "#E8734A", "shareValue": 41760000000},
     {"name": "Foreign Institutional Investors", "percentage": 32, "color": "#4F86C6", "shareValue": 74240000000},
     {"name": "Domestic Institutional / Banks", "percentage": 40, "color": "#6ABF69", "shareValue": 92800000000},
     {"name": "Other", "percentage": 10, "color": "#B0B0B0", "shareValue": 23200000000},
   ],
   "valuation": 232000000000, "stockUnitValue": None,
   "notes": "Estimated figures. Toyota continued battery-EV ramp-up (bZ series) while maintaining hybrid leadership; remained world's top-selling automaker by volume."},

  {"company": "Toyota Motor Corporation", "year": 2026,
   "ceo": {"name": "Kenta Kon", "role": "President"},
   "board": [{"name": "Kenta Kon", "role": "President"}, {"name": "Akio Toyoda", "role": "Chairman"}, {"name": "Koji Sato", "role": "Vice Chairman / Chief Industry Officer"}],
   "ownership": [
     {"name": "Toyoda Family / Group Companies", "percentage": 18, "color": "#E8734A", "shareValue": 40230000000},
     {"name": "Foreign Institutional Investors", "percentage": 32, "color": "#4F86C6", "shareValue": 71520000000},
     {"name": "Domestic Institutional / Banks", "percentage": 40, "color": "#6ABF69", "shareValue": 89400000000},
     {"name": "Other", "percentage": 10, "color": "#B0B0B0", "shareValue": 22350000000},
   ],
   "valuation": 223500000000, "stockUnitValue": None,
   "notes": "Koji Sato stepped down as president effective April 1, 2026 after three years, moving to vice chairman / chief industry officer; operating officer Kenta Kon became the new president. Market cap ~$223.5B as of June 2026, second among automakers behind Tesla."},
]

MOAT = {
  1937: (3, "Emerging", "New entrant in Japanese auto market; backed by established Toyoda loom-making conglomerate's capital and engineering."),
  1950: (2, "At Risk", "Near-bankruptcy and labor crisis forced founder's resignation; survival uncertain without bank-led restructuring."),
  1957: (3, "Building", "First US export attempt (Toyopet Crown) was a commercial flop, but established the long-term internationalization strategy."),
  1966: (5, "Strong", "Corolla established Toyota as a credible mass-market global brand; Toyota Production System maturing into a structural cost advantage."),
  1973: (6, "Strong", "Oil crisis played directly to Toyota's small-car fuel efficiency advantage versus US automakers' larger vehicles."),
  1982: (6, "Strong", "Reunification of manufacturing and sales arms streamlined operations; TPS-driven quality/cost advantage widely recognized."),
  1990: (7, "Strong", "Lexus launch successfully extended Toyota's manufacturing excellence into the luxury segment, broadening the moat."),
  1997: (7, "Differentiated", "Prius gave Toyota a multi-decade head start in hybrid powertrain technology and patents, a durable technical moat."),
  2002: (8, "Dominant", "Global scale, TPS efficiency, and hybrid technology leadership combined into one of the strongest moats in autos."),
  2007: (8, "Dominant", "Became world's largest automaker by sales, surpassing GM — validating scale and reliability reputation as a durable moat."),
  2009: (5, "Tested", "Recall crisis directly damaged the reliability reputation that was Toyota's core brand asset."),
  2010: (5, "Tested", "Congressional testimony and ongoing recalls kept reputational damage in the spotlight through the year."),
  2011: (4, "Tested", "Earthquake-driven supply chain disruption compounded recall-era difficulties; production and sales fell sharply."),
  2020: (8, "Dominant", "Pandemic-era supply chain resilience (learned from 2011) reinforced Toyota's operational excellence reputation."),
  2023: (8, "Dominant", "Continued sales leadership and hybrid demand surge (as pure-EV demand cooled) validated Toyota's multi-powertrain strategy."),
  2024: (6, "Tested", "Certification testing scandal across Toyota Group subsidiaries (Daihatsu, Hino, Toyota Industries) damaged the trust/reliability moat."),
  2025: (7, "Recovering", "Sales leadership maintained; reputation recovering from 2024 scandal while EV transition continues cautiously."),
  2026: (7, "Stable", "Leadership transition to non-family president (Kon) continues post-Toyoda-era professionalization; moat largely intact but EV competition from BYD/Tesla a long-term risk."),
}

def alloc(rd=0, capex=0, cash=0, buybacks=0, dividends=0, ma=0):
    items = [
        ("R&D", rd, "#4E79A7"), ("Capital Expenditures", capex, "#76B7B2"),
        ("Cash Reserves Build", cash, "#EDC948"), ("Share Buybacks", buybacks, "#F28E2B"),
        ("Dividends", dividends, "#59A14F"), ("Acquisitions", ma, "#E15759"),
    ]
    items = [{"name": n, "percentage": p, "color": c} for n, p, c in items if p > 0]
    assert sum(i["percentage"] for i in items) == 100
    return items

CAPITAL = {
  1937: alloc(rd=20, capex=60, cash=20),
  1950: alloc(rd=15, capex=50, cash=35),
  1957: alloc(rd=20, capex=55, cash=25),
  1966: alloc(rd=20, capex=55, dividends=10, cash=15),
  1973: alloc(rd=18, capex=52, dividends=15, cash=15),
  1982: alloc(rd=20, capex=50, dividends=18, cash=12),
  1990: alloc(rd=22, capex=48, dividends=20, cash=10),
  1997: alloc(rd=25, capex=45, dividends=20, cash=10),
  2002: alloc(rd=22, capex=45, dividends=20, cash=13),
  2007: alloc(rd=20, capex=48, dividends=22, cash=10),
  2009: alloc(rd=20, capex=35, dividends=15, cash=30),
  2010: alloc(rd=20, capex=38, dividends=17, cash=25),
  2011: alloc(rd=20, capex=35, dividends=15, cash=30),
  2020: alloc(rd=18, capex=42, dividends=25, cash=15),
  2023: alloc(rd=18, capex=42, dividends=25, buybacks=10, cash=5),
  2024: alloc(rd=18, capex=42, dividends=25, buybacks=10, cash=5),
  2025: alloc(rd=18, capex=42, dividends=25, buybacks=10, cash=5),
  2026: alloc(rd=18, capex=42, dividends=25, buybacks=10, cash=5),
}

for record in RECORDS:
    year = record["year"]
    record["moatScore"] = MOAT[year][0]
    record["moatLabel"] = MOAT[year][1]
    record["moatNote"] = MOAT[year][2]
    record["capitalAllocation"] = CAPITAL[year]
    with open(os.path.join(DIR, f"{year}.json"), "w") as f:
        json.dump(record, f, indent=2)
    print(f"✓ {year}")

records_str = json.dumps(RECORDS, indent=2)
ts = f'import type {{ CompanyYear }} from "../../types";\n\nexport const toyotaRecords: CompanyYear[] = {records_str};\n'
with open(os.path.join(DIR, "records.ts"), "w") as f:
    f.write(ts)
print("Done.")
