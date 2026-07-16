import json, os

DIR = "src/data/microsoft"
os.makedirs(DIR, exist_ok=True)

RECORDS = [
  {"company": "Microsoft Corporation", "ticker": "MSFT", "year": 1975,
   "ceo": {"name": "Bill Gates", "role": "Co-Founder / CEO"},
   "board": [{"name": "Bill Gates", "role": "Co-Founder / CEO"}, {"name": "Paul Allen", "role": "Co-Founder"}],
   "ownership": [{"name": "Bill Gates", "percentage": 60, "color": "#E8734A", "shareValue": 6000}, {"name": "Paul Allen", "percentage": 40, "color": "#4F86C6", "shareValue": 4000}],
   "valuation": 10000, "stockUnitValue": None,
   "notes": "Microsoft founded in 1975 by Bill Gates and Paul Allen in Albuquerque, New Mexico, to develop a BASIC interpreter for the Altair 8800."},

  {"company": "Microsoft Corporation", "ticker": "MSFT", "year": 1986,
   "ceo": {"name": "Bill Gates", "role": "Co-Founder, President & CEO"},
   "board": [{"name": "Bill Gates", "role": "Co-Founder, President & CEO"}, {"name": "Paul Allen", "role": "Director"}, {"name": "Jon Shirley", "role": "Director / President & COO"}],
   "ownership": [
     {"name": "Bill Gates", "percentage": 45, "color": "#E8734A", "shareValue": 234000000},
     {"name": "Paul Allen", "percentage": 25, "color": "#4F86C6", "shareValue": 130000000},
     {"name": "Public Float", "percentage": 30, "color": "#B0B0B0", "shareValue": 156000000},
   ],
   "valuation": 520000000, "stockUnitValue": 21.0,
   "notes": "Microsoft moved onto its Redmond, WA campus on February 26, 1986, and IPO'd on Nasdaq at $21/share on March 13, 1986, creating an estimated three billionaires and ~12,000 millionaires among employees over time."},

  {"company": "Microsoft Corporation", "ticker": "MSFT", "year": 1995,
   "ceo": {"name": "Bill Gates", "role": "Co-Founder, Chairman & CEO"},
   "board": [{"name": "Bill Gates", "role": "Chairman & CEO"}, {"name": "Paul Allen", "role": "Director"}, {"name": "Jon Shirley", "role": "Director"}],
   "ownership": [
     {"name": "Bill Gates", "percentage": 24, "color": "#E8734A", "shareValue": 2400000000},
     {"name": "Institutional Investors", "percentage": 45, "color": "#4F86C6", "shareValue": 4500000000},
     {"name": "Public Float", "percentage": 31, "color": "#B0B0B0", "shareValue": 3100000000},
   ],
   "valuation": 10000000000, "stockUnitValue": 87.0,
   "notes": "Windows 95 launched August 24, 1995 with unprecedented marketing fanfare, cementing Microsoft's dominance of the PC operating system market."},

  {"company": "Microsoft Corporation", "ticker": "MSFT", "year": 2000,
   "ceo": {"name": "Steve Ballmer", "role": "President & CEO"},
   "board": [{"name": "Bill Gates", "role": "Chairman & Chief Software Architect"}, {"name": "Steve Ballmer", "role": "President & CEO"}, {"name": "Paul Allen", "role": "Director"}],
   "ownership": [
     {"name": "Bill Gates", "percentage": 15, "color": "#E8734A", "shareValue": 82500000000},
     {"name": "Institutional Investors", "percentage": 55, "color": "#4F86C6", "shareValue": 302500000000},
     {"name": "Public Float", "percentage": 30, "color": "#B0B0B0", "shareValue": 165000000000},
   ],
   "valuation": 550000000000, "stockUnitValue": 58.0,
   "notes": "Steve Ballmer became CEO in January 2000 as Bill Gates transitioned to Chairman and Chief Software Architect; the U.S. v. Microsoft antitrust case concluded with a ruling against the company that year."},

  {"company": "Microsoft Corporation", "ticker": "MSFT", "year": 2007,
   "ceo": {"name": "Steve Ballmer", "role": "CEO"},
   "board": [{"name": "Bill Gates", "role": "Chairman"}, {"name": "Steve Ballmer", "role": "CEO"}, {"name": "James Cash", "role": "Director"}],
   "ownership": [
     {"name": "Bill Gates", "percentage": 9, "color": "#E8734A", "shareValue": 27900000000},
     {"name": "Institutional Investors", "percentage": 60, "color": "#4F86C6", "shareValue": 186000000000},
     {"name": "Public Float", "percentage": 31, "color": "#B0B0B0", "shareValue": 96100000000},
   ],
   "valuation": 310000000000, "stockUnitValue": 35.0,
   "notes": "Windows Vista and Office 2007 launched, though Vista received a mixed reception; Microsoft's market cap held around $300B through the mid-2000s."},

  {"company": "Microsoft Corporation", "ticker": "MSFT", "year": 2014,
   "ceo": {"name": "Satya Nadella", "role": "CEO"},
   "board": [{"name": "John W. Thompson", "role": "Chairman"}, {"name": "Satya Nadella", "role": "CEO"}, {"name": "Bill Gates", "role": "Founder & Technology Advisor / Director"}],
   "ownership": [
     {"name": "Bill Gates", "percentage": 4, "color": "#E8734A", "shareValue": 15200000000},
     {"name": "Institutional Investors", "percentage": 65, "color": "#4F86C6", "shareValue": 247000000000},
     {"name": "Public Float", "percentage": 31, "color": "#B0B0B0", "shareValue": 117800000000},
   ],
   "valuation": 380000000000, "stockUnitValue": 42.0,
   "notes": "Satya Nadella became Microsoft's third CEO on February 4, 2014, succeeding Steve Ballmer; Bill Gates stepped down as Chairman (replaced by John W. Thompson) to become Founder and Technology Advisor."},

  {"company": "Microsoft Corporation", "ticker": "MSFT", "year": 2019,
   "ceo": {"name": "Satya Nadella", "role": "Chairman & CEO"},
   "board": [{"name": "Satya Nadella", "role": "Chairman & CEO"}, {"name": "Bill Gates", "role": "Director"}, {"name": "John W. Thompson", "role": "Lead Independent Director"}],
   "ownership": [
     {"name": "Bill Gates", "percentage": 1.3, "color": "#E8734A", "shareValue": 13000000000},
     {"name": "Institutional Investors", "percentage": 71, "color": "#4F86C6", "shareValue": 710000000000},
     {"name": "Public Float", "percentage": 27.7, "color": "#B0B0B0", "shareValue": 277000000000},
   ],
   "valuation": 1000000000000, "stockUnitValue": 133.0,
   "notes": "Microsoft crossed a $1 trillion market capitalization in April 2019, driven by Azure cloud growth and Office 365 subscription momentum under Nadella."},

  {"company": "Microsoft Corporation", "ticker": "MSFT", "year": 2021,
   "ceo": {"name": "Satya Nadella", "role": "Chairman & CEO"},
   "board": [{"name": "Satya Nadella", "role": "Chairman & CEO"}, {"name": "John W. Thompson", "role": "Lead Independent Director"}, {"name": "Reid Hoffman", "role": "Director"}],
   "ownership": [
     {"name": "Institutional Investors", "percentage": 73, "color": "#4F86C6", "shareValue": 1460000000000},
     {"name": "Public Float", "percentage": 27, "color": "#B0B0B0", "shareValue": 540000000000},
   ],
   "valuation": 2000000000000, "stockUnitValue": 267.0,
   "notes": "Microsoft closed above $2 trillion market cap for the first time on June 22-24, 2021, becoming the second US company (after Apple) to reach that milestone; Bill Gates had stepped down from the board in March 2020."},

  {"company": "Microsoft Corporation", "ticker": "MSFT", "year": 2024,
   "ceo": {"name": "Satya Nadella", "role": "Chairman & CEO"},
   "board": [{"name": "Satya Nadella", "role": "Chairman & CEO"}, {"name": "John W. Thompson", "role": "Lead Independent Director"}, {"name": "Reid Hoffman", "role": "Director"}],
   "ownership": [
     {"name": "Steve Ballmer", "percentage": 4.4, "color": "#E8734A", "shareValue": 132000000000},
     {"name": "Institutional Investors", "percentage": 71, "color": "#4F86C6", "shareValue": 2130000000000},
     {"name": "Public Float", "percentage": 24.6, "color": "#B0B0B0", "shareValue": 738000000000},
   ],
   "valuation": 3000000000000, "stockUnitValue": 404.0,
   "notes": "Microsoft's market cap hit $3 trillion in January 2024, second only to Apple, driven heavily by Azure/AI infrastructure growth and its OpenAI partnership. Satya Nadella marked his 10th anniversary as CEO in February 2024."},

  {"company": "Microsoft Corporation", "ticker": "MSFT", "year": 2025,
   "ceo": {"name": "Satya Nadella", "role": "Chairman & CEO"},
   "board": [{"name": "Satya Nadella", "role": "Chairman & CEO"}, {"name": "John W. Thompson", "role": "Lead Independent Director"}, {"name": "Reid Hoffman", "role": "Director"}],
   "ownership": [
     {"name": "Steve Ballmer", "percentage": 4.4, "color": "#E8734A", "shareValue": 176000000000},
     {"name": "Vanguard Group", "percentage": 9.6, "color": "#4F86C6", "shareValue": 384000000000},
     {"name": "BlackRock", "percentage": 8.1, "color": "#6ABF69", "shareValue": 324000000000},
     {"name": "Other Institutions / Public Float", "percentage": 77.9, "color": "#B0B0B0", "shareValue": 3116000000000},
   ],
   "valuation": 4000000000000, "stockUnitValue": 538.0,
   "notes": "Microsoft became the second company (after NVIDIA) to surpass a $4 trillion market value in July 2025, driven by continued AI/Azure infrastructure investment and the $80B FY2025 AI capex plan."},

  {"company": "Microsoft Corporation", "ticker": "MSFT", "year": 2026,
   "ceo": {"name": "Satya Nadella", "role": "Chairman & CEO"},
   "board": [{"name": "Satya Nadella", "role": "Chairman & CEO"}, {"name": "John W. Thompson", "role": "Lead Independent Director"}, {"name": "Reid Hoffman", "role": "Director"}],
   "ownership": [
     {"name": "Steve Ballmer", "percentage": 4.4, "color": "#E8734A", "shareValue": 124960000000},
     {"name": "Vanguard Group", "percentage": 9.6, "color": "#4F86C6", "shareValue": 272640000000},
     {"name": "BlackRock", "percentage": 8.1, "color": "#6ABF69", "shareValue": 230040000000},
     {"name": "State Street", "percentage": 4.2, "color": "#F5C842", "shareValue": 119280000000},
     {"name": "Other Institutions / Public Float", "percentage": 73.7, "color": "#B0B0B0", "shareValue": 2093080000000},
   ],
   "valuation": 2840000000000, "stockUnitValue": 382.0,
   "notes": "Microsoft's market cap pulled back from its $4T peak (October 2025) to roughly $2.84T by July 2026, after touching $3T again in early March 2026, amid broader AI-capex-spending scrutiny across the sector."},
]

MOAT = {
  1975: (1, "Pre-Product", "Two-person startup with a single BASIC interpreter product and no meaningful competitive position."),
  1986: (4, "Emerging", "MS-DOS's OEM licensing deals with IBM and clone makers gave Microsoft a strong early distribution advantage in the nascent PC market."),
  1995: (7, "Strong", "Windows 95's near-universal PC OS adoption plus Office's productivity-suite lock-in created a powerful, self-reinforcing platform moat."),
  2000: (7, "Strong (Tested)", "Windows/Office dominance remained intact, but the US v. Microsoft antitrust ruling exposed real regulatory and reputational risk to the platform moat."),
  2007: (6, "Tested", "Vista's mixed reception and the rise of Google and Apple's iPhone (2007) began eroding Microsoft's perceived innovation edge, even as Windows/Office cash flows stayed strong."),
  2014: (6, "Rebuilding", "Nadella's CEO transition began a strategic pivot toward cloud (Azure) and mobile-first/cloud-first priorities, rebuilding the moat around infrastructure rather than just desktop software."),
  2019: (8, "Strong", "Azure's rise to a strong #2 cloud infrastructure position alongside continued Office 365/Windows dominance pushed Microsoft past $1T in market cap."),
  2021: (9, "Dominant", "Azure, Teams (pandemic-driven), and Office 365 combined to create a broad, mutually reinforcing enterprise software and cloud moat."),
  2024: (9, "Dominant", "The OpenAI partnership and Copilot AI integration across Office/Azure extended Microsoft's moat into generative AI, driving the stock past $3T."),
  2025: (9, "Dominant", "Continued AI infrastructure leadership (Azure, OpenAI partnership, Copilot) sustained Microsoft's position as one of the two most valuable companies in the world."),
  2026: (8, "Strong (Tested)", "A pullback from the $4T peak reflected broader market scrutiny of AI capital-expenditure sustainability, though Microsoft's core Azure/Office moat remained intact."),
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
  1975: alloc(rd=80, capex=10, cash=10),
  1986: alloc(rd=55, capex=20, cash=25),
  1995: alloc(rd=40, capex=15, cash=45),
  2000: alloc(rd=35, capex=15, cash=30, buybacks=20),
  2007: alloc(rd=30, capex=15, cash=15, buybacks=30, dividends=10),
  2014: alloc(rd=28, capex=20, cash=12, buybacks=25, dividends=15),
  2019: alloc(rd=25, capex=25, cash=10, buybacks=25, dividends=15),
  2021: alloc(rd=22, capex=30, cash=8, buybacks=25, dividends=15),
  2024: alloc(rd=20, capex=38, cash=8, buybacks=20, dividends=14),
  2025: alloc(rd=18, capex=45, cash=7, buybacks=17, dividends=13),
  2026: alloc(rd=18, capex=48, cash=7, buybacks=15, dividends=12),
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
ts = f'import type {{ CompanyYear }} from "../../types";\n\nexport const microsoftRecords: CompanyYear[] = {records_str};\n'
with open(os.path.join(DIR, "records.ts"), "w") as f:
    f.write(ts)
print("Done.")
