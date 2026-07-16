import json, os

DIR = "src/data/google"
os.makedirs(DIR, exist_ok=True)

RECORDS = [
  {"company": "Google", "ticker": None, "year": 1998,
   "ceo": {"name": "Larry Page", "role": "Co-Founder / CEO"},
   "board": [{"name": "Larry Page", "role": "Co-Founder / CEO"}, {"name": "Sergey Brin", "role": "Co-Founder / President"}],
   "ownership": [{"name": "Larry Page", "percentage": 50, "color": "#E8734A", "shareValue": 50000}, {"name": "Sergey Brin", "percentage": 50, "color": "#4F86C6", "shareValue": 50000}],
   "valuation": 100000, "stockUnitValue": None,
   "notes": "Google founded September 4, 1998 by Stanford PhD students Larry Page and Sergey Brin, incorporated in a Menlo Park garage after a $100,000 check from Andy Bechtolsheim."},

  {"company": "Google Inc.", "ticker": "GOOG", "year": 2004,
   "ceo": {"name": "Eric Schmidt", "role": "Chairman & CEO"},
   "board": [{"name": "Eric Schmidt", "role": "Chairman & CEO"}, {"name": "Larry Page", "role": "Co-Founder / President, Products"}, {"name": "Sergey Brin", "role": "Co-Founder / President, Technology"}],
   "ownership": [
     {"name": "Larry Page", "percentage": 24, "color": "#E8734A", "shareValue": 6720000000},
     {"name": "Sergey Brin", "percentage": 24, "color": "#4F86C6", "shareValue": 6720000000},
     {"name": "Institutional Investors", "percentage": 30, "color": "#6ABF69", "shareValue": 8400000000},
     {"name": "Public Float", "percentage": 22, "color": "#B0B0B0", "shareValue": 6160000000},
   ],
   "valuation": 28000000000, "stockUnitValue": 85.0,
   "notes": "Google IPO'd on Nasdaq August 19, 2004 via an unusual Dutch-auction process at $85/share, with Eric Schmidt serving as Chairman and CEO alongside founders Page and Brin."},

  {"company": "Google Inc.", "ticker": "GOOG", "year": 2011,
   "ceo": {"name": "Larry Page", "role": "Co-Founder & CEO"},
   "board": [{"name": "Larry Page", "role": "Co-Founder & CEO"}, {"name": "Eric Schmidt", "role": "Executive Chairman"}, {"name": "Sergey Brin", "role": "Co-Founder / Director of Special Projects"}],
   "ownership": [
     {"name": "Larry Page", "percentage": 16, "color": "#E8734A", "shareValue": 30400000000},
     {"name": "Sergey Brin", "percentage": 16, "color": "#4F86C6", "shareValue": 30400000000},
     {"name": "Institutional Investors", "percentage": 45, "color": "#6ABF69", "shareValue": 85500000000},
     {"name": "Public Float", "percentage": 23, "color": "#B0B0B0", "shareValue": 43700000000},
   ],
   "valuation": 190000000000, "stockUnitValue": 300.0,
   "notes": "Larry Page returned to the CEO role in April 2011, with Eric Schmidt transitioning to Executive Chairman; Google+ launched later that year."},

  {"company": "Alphabet Inc.", "ticker": "GOOGL", "year": 2015,
   "ceo": {"name": "Larry Page", "role": "Co-Founder & CEO of Alphabet"},
   "board": [{"name": "Larry Page", "role": "CEO, Alphabet"}, {"name": "Sergey Brin", "role": "President, Alphabet"}, {"name": "Sundar Pichai", "role": "CEO, Google"}, {"name": "Eric Schmidt", "role": "Executive Chairman"}],
   "ownership": [
     {"name": "Larry Page", "percentage": 15, "color": "#E8734A", "shareValue": 76500000000},
     {"name": "Sergey Brin", "percentage": 15, "color": "#4F86C6", "shareValue": 76500000000},
     {"name": "Institutional Investors", "percentage": 47, "color": "#6ABF69", "shareValue": 239700000000},
     {"name": "Public Float", "percentage": 23, "color": "#B0B0B0", "shareValue": 117300000000},
   ],
   "valuation": 510000000000, "stockUnitValue": 758.0,
   "notes": "Google restructured into Alphabet Inc., a new holding company, completed October 2, 2015. Sundar Pichai became CEO of Google, while Larry Page became CEO of Alphabet and Sergey Brin became President."},

  {"company": "Alphabet Inc.", "ticker": "GOOGL", "year": 2019,
   "ceo": {"name": "Sundar Pichai", "role": "CEO of Alphabet & Google"},
   "board": [{"name": "Sundar Pichai", "role": "CEO, Alphabet & Google"}, {"name": "Larry Page", "role": "Director (outgoing CEO)"}, {"name": "Sergey Brin", "role": "Director (outgoing President)"}, {"name": "John Hennessy", "role": "Chairman"}],
   "ownership": [
     {"name": "Larry Page", "percentage": 12.5, "color": "#E8734A", "shareValue": 112500000000},
     {"name": "Sergey Brin", "percentage": 12.5, "color": "#4F86C6", "shareValue": 112500000000},
     {"name": "Institutional Investors", "percentage": 51, "color": "#6ABF69", "shareValue": 459000000000},
     {"name": "Public Float", "percentage": 24, "color": "#B0B0B0", "shareValue": 216000000000},
   ],
   "valuation": 900000000000, "stockUnitValue": 1339.0,
   "notes": "On December 3, 2019, Larry Page stepped down as CEO of Alphabet and Sergey Brin stepped down as President; Sundar Pichai became CEO of both Alphabet and Google, consolidating the role for the first time."},

  {"company": "Alphabet Inc.", "ticker": "GOOGL", "year": 2020,
   "ceo": {"name": "Sundar Pichai", "role": "CEO of Alphabet & Google"},
   "board": [{"name": "Sundar Pichai", "role": "CEO, Alphabet & Google"}, {"name": "John Hennessy", "role": "Chairman"}, {"name": "Ruth Porat", "role": "CFO"}],
   "ownership": [
     {"name": "Larry Page", "percentage": 11.5, "color": "#E8734A", "shareValue": 115000000000},
     {"name": "Sergey Brin", "percentage": 11.5, "color": "#4F86C6", "shareValue": 115000000000},
     {"name": "Institutional Investors", "percentage": 53, "color": "#6ABF69", "shareValue": 530000000000},
     {"name": "Public Float", "percentage": 24, "color": "#B0B0B0", "shareValue": 240000000000},
   ],
   "valuation": 1000000000000, "stockUnitValue": 1450.0,
   "notes": "Alphabet's Class A shares closed at $1,450.16 in January 2020, pushing market capitalization to $1 trillion for the first time, the fourth US tech company to reach that milestone."},

  {"company": "Alphabet Inc.", "ticker": "GOOGL", "year": 2022,
   "ceo": {"name": "Sundar Pichai", "role": "CEO of Alphabet & Google"},
   "board": [{"name": "Sundar Pichai", "role": "CEO, Alphabet & Google"}, {"name": "John Hennessy", "role": "Chairman"}, {"name": "Ruth Porat", "role": "CFO"}],
   "ownership": [
     {"name": "Larry Page", "percentage": 11, "color": "#E8734A", "shareValue": 143000000000},
     {"name": "Sergey Brin", "percentage": 11, "color": "#4F86C6", "shareValue": 143000000000},
     {"name": "Institutional Investors", "percentage": 54, "color": "#6ABF69", "shareValue": 702000000000},
     {"name": "Public Float", "percentage": 24, "color": "#B0B0B0", "shareValue": 312000000000},
   ],
   "valuation": 1300000000000, "stockUnitValue": 88.0,
   "notes": "Alphabet completed a 20-for-1 stock split in July 2022. Shares fell sharply through the year amid the broader tech selloff and slowing ad revenue growth."},

  {"company": "Alphabet Inc.", "ticker": "GOOGL", "year": 2024,
   "ceo": {"name": "Sundar Pichai", "role": "CEO of Alphabet & Google"},
   "board": [{"name": "Sundar Pichai", "role": "CEO, Alphabet & Google"}, {"name": "John Hennessy", "role": "Chairman"}, {"name": "Ruth Porat", "role": "President & Chief Investment Officer"}],
   "ownership": [
     {"name": "Larry Page", "percentage": 10.5, "color": "#E8734A", "shareValue": 210000000000},
     {"name": "Sergey Brin", "percentage": 10.5, "color": "#4F86C6", "shareValue": 210000000000},
     {"name": "Institutional Investors", "percentage": 55, "color": "#6ABF69", "shareValue": 1100000000000},
     {"name": "Public Float", "percentage": 24, "color": "#B0B0B0", "shareValue": 480000000000},
   ],
   "valuation": 2000000000000, "stockUnitValue": 165.0,
   "notes": "Alphabet's market capitalization approached and then crossed $2 trillion in 2024, driven by AI (Gemini) investment and continued Search/Cloud/YouTube growth."},

  {"company": "Alphabet Inc.", "ticker": "GOOGL", "year": 2025,
   "ceo": {"name": "Sundar Pichai", "role": "CEO of Alphabet & Google"},
   "board": [{"name": "Sundar Pichai", "role": "CEO, Alphabet & Google"}, {"name": "John Hennessy", "role": "Chairman"}, {"name": "Ruth Porat", "role": "President & Chief Investment Officer"}],
   "ownership": [
     {"name": "Larry Page", "percentage": 10, "color": "#E8734A", "shareValue": 300000000000},
     {"name": "Sergey Brin", "percentage": 10, "color": "#4F86C6", "shareValue": 300000000000},
     {"name": "Institutional Investors", "percentage": 56, "color": "#6ABF69", "shareValue": 1680000000000},
     {"name": "Public Float", "percentage": 24, "color": "#B0B0B0", "shareValue": 720000000000},
   ],
   "valuation": 3000000000000, "stockUnitValue": 248.0,
   "notes": "Alphabet's market cap continued climbing through 2025 on strong Cloud and AI (Gemini) momentum, crossing $3 trillion during the year."},

  {"company": "Alphabet Inc.", "ticker": "GOOGL", "year": 2026,
   "ceo": {"name": "Sundar Pichai", "role": "CEO of Alphabet & Google"},
   "board": [{"name": "Sundar Pichai", "role": "CEO, Alphabet & Google"}, {"name": "John Hennessy", "role": "Chairman"}, {"name": "Ruth Porat", "role": "President & Chief Investment Officer"}],
   "ownership": [
     {"name": "Larry Page", "percentage": 9.8, "color": "#E8734A", "shareValue": 434860000000},
     {"name": "Sergey Brin", "percentage": 9.8, "color": "#4F86C6", "shareValue": 434860000000},
     {"name": "Institutional Investors", "percentage": 56.4, "color": "#6ABF69", "shareValue": 2502468000000},
     {"name": "Public Float", "percentage": 24, "color": "#B0B0B0", "shareValue": 1064880000000},
   ],
   "valuation": 4437000000000, "stockUnitValue": 365.0,
   "notes": "Alphabet's market cap reached roughly $4.437 trillion by July 2026, making it the world's third most valuable company, driven by continued AI (Gemini), Cloud, and Search/YouTube advertising strength."},
]

MOAT = {
  1998: (1, "Pre-Product", "Two-founder startup with a single search algorithm (PageRank) and no revenue model yet."),
  2004: (6, "Building", "Google's search-quality lead and the AdWords auction advertising model had become a highly profitable, defensible moat by IPO."),
  2011: (8, "Strong", "Search dominance, Android's rapid smartphone-market growth, and AdWords/AdSense advertising scale created a very durable, multi-pronged moat."),
  2015: (8, "Strong", "The Alphabet restructuring formalized separating the core profitable Google business from speculative \"Other Bets,\" without diminishing Google's core search/ads moat."),
  2019: (8, "Strong", "Consolidating Pichai as CEO of both Alphabet and Google streamlined governance without weakening Search/YouTube/Cloud's competitive position."),
  2020: (9, "Dominant", "Search, YouTube, Android, and the emerging Google Cloud business combined into a broad, mutually reinforcing moat, pushing market cap past $1 trillion."),
  2022: (7, "Tested", "Slowing ad revenue growth, a broader tech selloff, and early competitive pressure from generative AI (ChatGPT) tested Google's search-dominance narrative for the first time in years."),
  2024: (8, "Strong (Rebuilding)", "Gemini AI model investment and continued Cloud/YouTube growth helped Alphabet push past $2 trillion, addressing generative-AI competitive concerns."),
  2025: (8, "Strong", "Continued AI (Gemini), Cloud, and advertising business strength sustained Alphabet's moat as the stock climbed past $3 trillion."),
  2026: (9, "Dominant", "Alphabet's combined Search, Cloud, YouTube, and AI (Gemini) businesses reinforce a broad and durable competitive position, sustaining its position among the world's most valuable companies."),
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
  1998: alloc(rd=75, capex=15, cash=10),
  2004: alloc(rd=50, capex=25, cash=25),
  2011: alloc(rd=40, capex=30, cash=15, ma=15),
  2015: alloc(rd=35, capex=25, cash=15, buybacks=25),
  2019: alloc(rd=30, capex=30, cash=10, buybacks=30),
  2020: alloc(rd=28, capex=28, cash=12, buybacks=32),
  2022: alloc(rd=28, capex=25, cash=10, buybacks=37),
  2024: alloc(rd=22, capex=40, cash=8, buybacks=30),
  2025: alloc(rd=20, capex=45, cash=8, buybacks=27),
  2026: alloc(rd=18, capex=48, cash=8, buybacks=24, dividends=2),
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
ts = f'import type {{ CompanyYear }} from "../../types";\n\nexport const googleRecords: CompanyYear[] = {records_str};\n'
with open(os.path.join(DIR, "records.ts"), "w") as f:
    f.write(ts)
print("Done.")
