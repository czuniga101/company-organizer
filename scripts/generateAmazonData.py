import json, os

DIR = "src/data/amazon"
os.makedirs(DIR, exist_ok=True)

RECORDS = [
  {"company": "Amazon.com, Inc.", "ticker": "AMZN", "year": 1994,
   "ceo": {"name": "Jeff Bezos", "role": "Founder / President & CEO"},
   "board": [{"name": "Jeff Bezos", "role": "Founder / President & CEO"}],
   "ownership": [{"name": "Jeff Bezos", "percentage": 100, "color": "#E8734A", "shareValue": 10000}],
   "valuation": 10000, "stockUnitValue": None,
   "notes": "Amazon founded July 5, 1994 by Jeff Bezos as \"Cadabra\" in Bellevue, Washington, renamed Amazon that November; the website launched to the public in July 1995 as an online bookstore."},

  {"company": "Amazon.com, Inc.", "ticker": "AMZN", "year": 1997,
   "ceo": {"name": "Jeff Bezos", "role": "Founder, President & CEO"},
   "board": [{"name": "Jeff Bezos", "role": "Founder, President & CEO"}, {"name": "Tom Alberg", "role": "Director"}, {"name": "John Doerr", "role": "Director (Kleiner Perkins)"}],
   "ownership": [
     {"name": "Jeff Bezos", "percentage": 41, "color": "#E8734A", "shareValue": 226000000},
     {"name": "Kleiner Perkins", "percentage": 13, "color": "#4F86C6", "shareValue": 72000000},
     {"name": "Public Float", "percentage": 46, "color": "#B0B0B0", "shareValue": 254000000},
   ],
   "valuation": 550000000, "stockUnitValue": 18.0,
   "notes": "Amazon IPO'd on Nasdaq May 15, 1997 at $18/share, raising $54 million."},

  {"company": "Amazon.com, Inc.", "ticker": "AMZN", "year": 2006,
   "ceo": {"name": "Jeff Bezos", "role": "Founder, President & CEO"},
   "board": [{"name": "Jeff Bezos", "role": "Founder, President & CEO"}, {"name": "Tom Alberg", "role": "Director"}, {"name": "L. John Doerr", "role": "Director"}, {"name": "Scott Cook", "role": "Director"}],
   "ownership": [
     {"name": "Jeff Bezos", "percentage": 24, "color": "#E8734A", "shareValue": 3360000000},
     {"name": "Institutional Investors", "percentage": 50, "color": "#4F86C6", "shareValue": 7000000000},
     {"name": "Public Float", "percentage": 26, "color": "#B0B0B0", "shareValue": 3640000000},
   ],
   "valuation": 14000000000, "stockUnitValue": 33.0,
   "notes": "Amazon Web Services (AWS) launched in March 2006 with S3 and later EC2, beginning what would become Amazon's most profitable business segment."},

  {"company": "Amazon.com, Inc.", "ticker": "AMZN", "year": 2012,
   "ceo": {"name": "Jeff Bezos", "role": "Founder, President & CEO"},
   "board": [{"name": "Jeff Bezos", "role": "Founder, President & CEO"}, {"name": "Tom Alberg", "role": "Director"}, {"name": "L. John Doerr", "role": "Director"}, {"name": "Jonathan Rubinstein", "role": "Director"}],
   "ownership": [
     {"name": "Jeff Bezos", "percentage": 19, "color": "#E8734A", "shareValue": 18050000000},
     {"name": "Institutional Investors", "percentage": 55, "color": "#4F86C6", "shareValue": 52250000000},
     {"name": "Public Float", "percentage": 26, "color": "#B0B0B0", "shareValue": 24700000000},
   ],
   "valuation": 95000000000, "stockUnitValue": 250.0,
   "notes": "Amazon acquired Kiva Systems for $775M in 2012, automating fulfillment-center robotics, while continuing rapid e-commerce and AWS growth."},

  {"company": "Amazon.com, Inc.", "ticker": "AMZN", "year": 2017,
   "ceo": {"name": "Jeff Bezos", "role": "Founder, President & CEO"},
   "board": [{"name": "Jeff Bezos", "role": "Founder, President & CEO"}, {"name": "Tom Alberg", "role": "Director"}, {"name": "Jamie Gorelick", "role": "Director"}, {"name": "Indra Nooyi", "role": "Director"}],
   "ownership": [
     {"name": "Jeff Bezos", "percentage": 17, "color": "#E8734A", "shareValue": 76500000000},
     {"name": "Institutional Investors", "percentage": 58, "color": "#4F86C6", "shareValue": 261000000000},
     {"name": "Public Float", "percentage": 25, "color": "#B0B0B0", "shareValue": 112500000000},
   ],
   "valuation": 450000000000, "stockUnitValue": 950.0,
   "notes": "Amazon acquired Whole Foods Market for $13.7B in 2017, its largest acquisition to date, expanding into physical grocery retail."},

  {"company": "Amazon.com, Inc.", "ticker": "AMZN", "year": 2018,
   "ceo": {"name": "Jeff Bezos", "role": "Founder, President & CEO"},
   "board": [{"name": "Jeff Bezos", "role": "Founder, President & CEO"}, {"name": "Tom Alberg", "role": "Director"}, {"name": "Jamie Gorelick", "role": "Director"}, {"name": "Indra Nooyi", "role": "Director"}],
   "ownership": [
     {"name": "Jeff Bezos", "percentage": 16, "color": "#E8734A", "shareValue": 128000000000},
     {"name": "Institutional Investors", "percentage": 59, "color": "#4F86C6", "shareValue": 472000000000},
     {"name": "Public Float", "percentage": 25, "color": "#B0B0B0", "shareValue": 200000000000},
   ],
   "valuation": 800000000000, "stockUnitValue": 1600.0,
   "notes": "Amazon stock briefly crossed a $1 trillion market cap in September 2018, becoming the second US company (after Apple) to reach that milestone, driven by AWS and advertising growth."},

  {"company": "Amazon.com, Inc.", "ticker": "AMZN", "year": 2020,
   "ceo": {"name": "Jeff Bezos", "role": "Founder, President & CEO"},
   "board": [{"name": "Jeff Bezos", "role": "Founder, President & CEO"}, {"name": "Jamie Gorelick", "role": "Director"}, {"name": "Indra Nooyi", "role": "Director"}, {"name": "Daniel Huttenlocher", "role": "Director"}],
   "ownership": [
     {"name": "Jeff Bezos", "percentage": 11, "color": "#E8734A", "shareValue": 176000000000},
     {"name": "Institutional Investors", "percentage": 62, "color": "#4F86C6", "shareValue": 992000000000},
     {"name": "Public Float", "percentage": 27, "color": "#B0B0B0", "shareValue": 432000000000},
   ],
   "valuation": 1600000000000, "stockUnitValue": 3200.0,
   "notes": "Pandemic-driven e-commerce demand pushed Amazon's market cap back above $1 trillion and toward $1.6T, with record Q4 2019/2020 earnings."},

  {"company": "Amazon.com, Inc.", "ticker": "AMZN", "year": 2021,
   "ceo": {"name": "Andy Jassy", "role": "President & CEO"},
   "board": [{"name": "Jeff Bezos", "role": "Executive Chair"}, {"name": "Andy Jassy", "role": "President & CEO"}, {"name": "Jamie Gorelick", "role": "Director"}, {"name": "Indra Nooyi", "role": "Director"}],
   "ownership": [
     {"name": "Jeff Bezos", "percentage": 10.3, "color": "#E8734A", "shareValue": 178000000000},
     {"name": "Institutional Investors", "percentage": 63, "color": "#4F86C6", "shareValue": 1090000000000},
     {"name": "Public Float", "percentage": 26.7, "color": "#B0B0B0", "shareValue": 462000000000},
   ],
   "valuation": 1730000000000, "stockUnitValue": 3350.0,
   "notes": "Andy Jassy became CEO on July 5, 2021 — the company's 27th anniversary — as Jeff Bezos transitioned to Executive Chair, per Amazon's February 2021 announcement."},

  {"company": "Amazon.com, Inc.", "ticker": "AMZN", "year": 2022,
   "ceo": {"name": "Andy Jassy", "role": "President & CEO"},
   "board": [{"name": "Jeff Bezos", "role": "Executive Chair"}, {"name": "Andy Jassy", "role": "President & CEO"}, {"name": "Jamie Gorelick", "role": "Director"}, {"name": "Indra Nooyi", "role": "Director"}],
   "ownership": [
     {"name": "Jeff Bezos", "percentage": 10, "color": "#E8734A", "shareValue": 85600000000},
     {"name": "Institutional Investors", "percentage": 64, "color": "#4F86C6", "shareValue": 547840000000},
     {"name": "Public Float", "percentage": 26, "color": "#B0B0B0", "shareValue": 222560000000},
   ],
   "valuation": 856000000000, "stockUnitValue": 84.0,
   "notes": "Amazon completed a 20-for-1 stock split in June 2022; shares fell sharply through the year amid the broad tech selloff and post-pandemic e-commerce slowdown, alongside major layoffs announced in November."},

  {"company": "Amazon.com, Inc.", "ticker": "AMZN", "year": 2023,
   "ceo": {"name": "Andy Jassy", "role": "President & CEO"},
   "board": [{"name": "Jeff Bezos", "role": "Executive Chair"}, {"name": "Andy Jassy", "role": "President & CEO"}, {"name": "Jamie Gorelick", "role": "Director"}, {"name": "Indra Nooyi", "role": "Director"}],
   "ownership": [
     {"name": "Jeff Bezos", "percentage": 9.9, "color": "#E8734A", "shareValue": 154440000000},
     {"name": "Institutional Investors", "percentage": 64, "color": "#4F86C6", "shareValue": 998400000000},
     {"name": "Public Float", "percentage": 26.1, "color": "#B0B0B0", "shareValue": 407160000000},
   ],
   "valuation": 1560000000000, "stockUnitValue": 151.0,
   "notes": "HQ2's first phase (Arlington, VA) opened in June 2023. Amazon stock recovered strongly through 2023 on AWS stabilization and cost-cutting."},

  {"company": "Amazon.com, Inc.", "ticker": "AMZN", "year": 2024,
   "ceo": {"name": "Andy Jassy", "role": "President & CEO"},
   "board": [{"name": "Jeff Bezos", "role": "Executive Chair"}, {"name": "Andy Jassy", "role": "President & CEO"}, {"name": "Jamie Gorelick", "role": "Director"}, {"name": "Indra Nooyi", "role": "Director"}, {"name": "Daniel Huttenlocher", "role": "Director"}],
   "ownership": [
     {"name": "Jeff Bezos", "percentage": 9.5, "color": "#E8734A", "shareValue": 190000000000},
     {"name": "BlackRock", "percentage": 6.8, "color": "#4F86C6", "shareValue": 136000000000},
     {"name": "Vanguard Group", "percentage": 6.8, "color": "#6ABF69", "shareValue": 136000000000},
     {"name": "Other Institutions / Public Float", "percentage": 76.9, "color": "#B0B0B0", "shareValue": 1538000000000},
   ],
   "valuation": 2000000000000, "stockUnitValue": 197.0,
   "notes": "Amazon's market cap crossed $2 trillion for the first time in June 2024, joining Apple, Microsoft, NVIDIA, and Alphabet in the $2T+ club, driven by AWS and advertising growth plus cost discipline."},

  {"company": "Amazon.com, Inc.", "ticker": "AMZN", "year": 2025,
   "ceo": {"name": "Andy Jassy", "role": "President & CEO"},
   "board": [{"name": "Jeff Bezos", "role": "Executive Chair"}, {"name": "Andy Jassy", "role": "President & CEO"}, {"name": "Jamie Gorelick", "role": "Director"}, {"name": "Indra Nooyi", "role": "Director"}, {"name": "Daniel Huttenlocher", "role": "Director"}],
   "ownership": [
     {"name": "Jeff Bezos", "percentage": 9.0, "color": "#E8734A", "shareValue": 222300000000},
     {"name": "BlackRock", "percentage": 6.8, "color": "#4F86C6", "shareValue": 167960000000},
     {"name": "Vanguard Group", "percentage": 6.8, "color": "#6ABF69", "shareValue": 167960000000},
     {"name": "Other Institutions / Public Float", "percentage": 77.4, "color": "#B0B0B0", "shareValue": 1911780000000},
   ],
   "valuation": 2470000000000, "stockUnitValue": 227.0,
   "notes": "Amazon's market cap climbed from roughly $2.31T in January to $2.47T by December 2025; Bezos's stake fell below 10% for the first time in company history amid continued periodic share sales."},

  {"company": "Amazon.com, Inc.", "ticker": "AMZN", "year": 2026,
   "ceo": {"name": "Andy Jassy", "role": "President & CEO"},
   "board": [{"name": "Jeff Bezos", "role": "Executive Chair"}, {"name": "Andy Jassy", "role": "President & CEO"}, {"name": "Jamie Gorelick", "role": "Director"}, {"name": "Indra Nooyi", "role": "Director"}, {"name": "Daniel Huttenlocher", "role": "Director"}],
   "ownership": [
     {"name": "Jeff Bezos", "percentage": 8.8, "color": "#E8734A", "shareValue": 229570000000},
     {"name": "BlackRock", "percentage": 6.8, "color": "#4F86C6", "shareValue": 177410000000},
     {"name": "Vanguard Capital Management", "percentage": 6.8, "color": "#6ABF69", "shareValue": 177410000000},
     {"name": "State Street", "percentage": 3.6, "color": "#F5C842", "shareValue": 93940000000},
     {"name": "Other Institutions / Public Float", "percentage": 74.0, "color": "#B0B0B0", "shareValue": 1930670000000},
   ],
   "valuation": 2609000000000, "stockUnitValue": 248.0,
   "notes": "Per Amazon's 2026 proxy statement, Jeff Bezos holds 950 million shares (8.8%) valued at roughly $255B, still the largest individual shareholder; Amazon's market cap stood at about $2.61T in mid-2026."},
]

MOAT = {
  1994: (1, "Pre-Product", "Startup online bookstore with no meaningful competitive advantage yet."),
  1997: (3, "Emerging", "First-mover advantage in online bookselling and early logistics investment, but still a single-category retailer facing well-funded competitors."),
  2006: (5, "Building", "AWS launch created a second, entirely distinct moat (cloud infrastructure) layered on top of Amazon's growing e-commerce logistics network."),
  2012: (6, "Building", "Prime membership and fulfillment-center scale/automation (Kiva acquisition) began compounding into a durable logistics cost advantage."),
  2017: (7, "Differentiated", "Whole Foods acquisition extended Amazon's reach into physical retail and groceries, broadening its ecosystem lock-in alongside Prime and AWS."),
  2018: (8, "Strong", "AWS's cloud infrastructure leadership plus Prime's massive membership base and logistics scale made Amazon's combined moat very difficult to replicate."),
  2020: (9, "Dominant", "Pandemic-driven e-commerce and cloud demand cemented Amazon's logistics and AWS infrastructure as close to indispensable for a huge share of digital commerce."),
  2021: (9, "Dominant", "AWS remained the clear cloud market share leader while Prime/logistics scale continued to compound, even as CEO transition began."),
  2022: (7, "Tested", "Post-pandemic demand normalization, inflation, and overbuilt fulfillment capacity forced major cost-cutting and layoffs, testing (but not breaking) the core moat."),
  2023: (8, "Strong", "Cost discipline and AWS stabilization restored profitability; logistics and cloud moats remained intact through the downturn."),
  2024: (9, "Dominant", "AWS, advertising, and Prime logistics combined to push Amazon past $2T market cap, reflecting a broad, multi-pronged moat across cloud, retail, and advertising."),
  2025: (9, "Dominant", "Continued AWS cloud/AI infrastructure leadership and advertising growth sustained Amazon's moat despite Bezos's declining ownership percentage."),
  2026: (9, "Dominant", "Amazon's combined AWS cloud, advertising, and logistics businesses continue to reinforce each other, sustaining a broad and durable competitive position."),
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
  1994: alloc(rd=60, capex=30, cash=10),
  1997: alloc(rd=55, capex=30, cash=15),
  2006: alloc(rd=45, capex=40, cash=15),
  2012: alloc(rd=40, capex=50, cash=10),
  2017: alloc(rd=30, capex=45, cash=5, ma=20),
  2018: alloc(rd=35, capex=50, cash=15),
  2020: alloc(rd=30, capex=60, cash=10),
  2021: alloc(rd=32, capex=58, cash=10),
  2022: alloc(rd=35, capex=55, cash=10),
  2023: alloc(rd=32, capex=48, cash=15, buybacks=5),
  2024: alloc(rd=30, capex=50, cash=13, buybacks=7),
  2025: alloc(rd=28, capex=52, cash=12, buybacks=8),
  2026: alloc(rd=27, capex=53, cash=10, buybacks=10),
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
ts = f'import type {{ CompanyYear }} from "../../types";\n\nexport const amazonRecords: CompanyYear[] = {records_str};\n'
with open(os.path.join(DIR, "records.ts"), "w") as f:
    f.write(ts)
print("Done.")
