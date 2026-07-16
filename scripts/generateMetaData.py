import json, os

DIR = "src/data/meta"
os.makedirs(DIR, exist_ok=True)

RECORDS = [
  {"company": "Facebook, Inc.", "ticker": None, "year": 2004,
   "ceo": {"name": "Mark Zuckerberg", "role": "Founder / CEO"},
   "board": [{"name": "Mark Zuckerberg", "role": "Founder / CEO"}],
   "ownership": [{"name": "Mark Zuckerberg", "percentage": 65, "color": "#E8734A", "shareValue": 6500}, {"name": "Eduardo Saverin", "percentage": 30, "color": "#4F86C6", "shareValue": 3000}, {"name": "Other Co-Founders", "percentage": 5, "color": "#B0B0B0", "shareValue": 500}],
   "valuation": 10000, "stockUnitValue": None,
   "notes": "Facebook founded February 4, 2004 by Mark Zuckerberg with Harvard classmates Dustin Moskovitz, Eduardo Saverin, Andrew McCollum, and Chris Hughes, launched as \"TheFacebook\" from Zuckerberg's dorm room."},

  {"company": "Facebook, Inc.", "ticker": "FB", "year": 2012,
   "ceo": {"name": "Mark Zuckerberg", "role": "Founder, Chairman & CEO"},
   "board": [{"name": "Mark Zuckerberg", "role": "Founder, Chairman & CEO"}, {"name": "Sheryl Sandberg", "role": "COO & Director"}, {"name": "Marc Andreessen", "role": "Director"}, {"name": "Peter Thiel", "role": "Director"}],
   "ownership": [
     {"name": "Mark Zuckerberg", "percentage": 28, "color": "#E8734A", "shareValue": 14000000000},
     {"name": "Institutional Investors", "percentage": 45, "color": "#4F86C6", "shareValue": 22500000000},
     {"name": "Public Float", "percentage": 27, "color": "#B0B0B0", "shareValue": 13500000000},
   ],
   "valuation": 50000000000, "stockUnitValue": 38.0,
   "notes": "Facebook IPO'd on Nasdaq May 18, 2012 at $38/share, one of the largest tech IPOs in history at the time."},

  {"company": "Facebook, Inc.", "ticker": "FB", "year": 2014,
   "ceo": {"name": "Mark Zuckerberg", "role": "Founder, Chairman & CEO"},
   "board": [{"name": "Mark Zuckerberg", "role": "Founder, Chairman & CEO"}, {"name": "Sheryl Sandberg", "role": "COO & Director"}, {"name": "Marc Andreessen", "role": "Director"}, {"name": "Peter Thiel", "role": "Director"}],
   "ownership": [
     {"name": "Mark Zuckerberg", "percentage": 24, "color": "#E8734A", "shareValue": 45840000000},
     {"name": "Institutional Investors", "percentage": 48, "color": "#4F86C6", "shareValue": 91680000000},
     {"name": "Public Float", "percentage": 28, "color": "#B0B0B0", "shareValue": 53480000000},
   ],
   "valuation": 191000000000, "stockUnitValue": 78.0,
   "notes": "Facebook acquired WhatsApp for approximately $19 billion in October 2014, one of the largest tech acquisitions of the decade, after acquiring Oculus VR for $2 billion earlier that year."},

  {"company": "Facebook, Inc.", "ticker": "FB", "year": 2018,
   "ceo": {"name": "Mark Zuckerberg", "role": "Founder, Chairman & CEO"},
   "board": [{"name": "Mark Zuckerberg", "role": "Founder, Chairman & CEO"}, {"name": "Sheryl Sandberg", "role": "COO & Director"}, {"name": "Marc Andreessen", "role": "Director"}, {"name": "Peter Thiel", "role": "Director"}, {"name": "Susan Desmond-Hellmann", "role": "Director"}],
   "ownership": [
     {"name": "Mark Zuckerberg", "percentage": 16, "color": "#E8734A", "shareValue": 60800000000},
     {"name": "Institutional Investors", "percentage": 57, "color": "#4F86C6", "shareValue": 216600000000},
     {"name": "Public Float", "percentage": 27, "color": "#B0B0B0", "shareValue": 102600000000},
   ],
   "valuation": 380000000000, "stockUnitValue": 131.0,
   "notes": "The Cambridge Analytica data-privacy scandal broke in March 2018, triggering a Congressional hearing, a historic single-day stock drop in July 2018, and heightened regulatory scrutiny of Facebook's data practices."},

  {"company": "Facebook, Inc.", "ticker": "FB", "year": 2021,
   "ceo": {"name": "Mark Zuckerberg", "role": "Founder, Chairman & CEO"},
   "board": [{"name": "Mark Zuckerberg", "role": "Founder, Chairman & CEO"}, {"name": "Sheryl Sandberg", "role": "COO & Director"}, {"name": "Marc Andreessen", "role": "Director"}, {"name": "Peter Thiel", "role": "Director"}, {"name": "Susan Desmond-Hellmann", "role": "Director"}],
   "ownership": [
     {"name": "Mark Zuckerberg", "percentage": 13, "color": "#E8734A", "shareValue": 121680000000},
     {"name": "Institutional Investors", "percentage": 60, "color": "#4F86C6", "shareValue": 561600000000},
     {"name": "Public Float", "percentage": 27, "color": "#B0B0B0", "shareValue": 252720000000},
   ],
   "valuation": 936000000000, "stockUnitValue": 336.0,
   "notes": "Facebook, Inc. renamed itself Meta Platforms, Inc. on October 28, 2021, at Connect 2021, reflecting Zuckerberg's strategic pivot toward the \"metaverse.\" Market cap approached $1.1 trillion in September 2021 before the rename."},

  {"company": "Meta Platforms, Inc.", "ticker": "META", "year": 2022,
   "ceo": {"name": "Mark Zuckerberg", "role": "Founder, Chairman & CEO"},
   "board": [{"name": "Mark Zuckerberg", "role": "Founder, Chairman & CEO"}, {"name": "Sheryl Sandberg", "role": "Director (outgoing COO)"}, {"name": "Marc Andreessen", "role": "Director"}, {"name": "Peter Thiel", "role": "Director"}],
   "ownership": [
     {"name": "Mark Zuckerberg", "percentage": 13.5, "color": "#E8734A", "shareValue": 36180000000},
     {"name": "Institutional Investors", "percentage": 59, "color": "#4F86C6", "shareValue": 158120000000},
     {"name": "Public Float", "percentage": 27.5, "color": "#B0B0B0", "shareValue": 73700000000},
   ],
   "valuation": 268000000000, "stockUnitValue": 120.0,
   "notes": "Sheryl Sandberg stepped down as COO in fall 2022 (announced June 1, 2022) after 14 years, remaining on the board; Javier Olivan became COO. Meta's stock fell roughly 64% in 2022 amid heavy Reality Labs losses and the broader tech selloff, with market value dropping to about $268B by late October."},

  {"company": "Meta Platforms, Inc.", "ticker": "META", "year": 2024,
   "ceo": {"name": "Mark Zuckerberg", "role": "Founder, Chairman & CEO"},
   "board": [{"name": "Mark Zuckerberg", "role": "Founder, Chairman & CEO"}, {"name": "Marc Andreessen", "role": "Director"}, {"name": "Peter Thiel", "role": "Director"}, {"name": "Robert Kimmitt", "role": "Director"}, {"name": "Tony Xu", "role": "Director"}],
   "ownership": [
     {"name": "Mark Zuckerberg", "percentage": 13.3, "color": "#E8734A", "shareValue": 186200000000},
     {"name": "Institutional Investors", "percentage": 59.7, "color": "#4F86C6", "shareValue": 835800000000},
     {"name": "Public Float", "percentage": 27, "color": "#B0B0B0", "shareValue": 378000000000},
   ],
   "valuation": 1400000000000, "stockUnitValue": 560.0,
   "notes": "Meta's market cap surpassed $1 trillion again in January 2024 and exceeded $1.4 trillion by September 2024, becoming the sixth US company to cross that threshold. Sheryl Sandberg announced in January 2024 she would not stand for re-election to the board."},

  {"company": "Meta Platforms, Inc.", "ticker": "META", "year": 2025,
   "ceo": {"name": "Mark Zuckerberg", "role": "Founder, Chairman & CEO"},
   "board": [{"name": "Mark Zuckerberg", "role": "Founder, Chairman & CEO"}, {"name": "Marc Andreessen", "role": "Director"}, {"name": "Peter Thiel", "role": "Director"}, {"name": "Robert Kimmitt", "role": "Director"}, {"name": "Tony Xu", "role": "Director"}, {"name": "Dana White", "role": "Director"}],
   "ownership": [
     {"name": "Mark Zuckerberg", "percentage": 13.1, "color": "#E8734A", "shareValue": 209600000000},
     {"name": "Institutional Investors", "percentage": 60, "color": "#4F86C6", "shareValue": 960000000000},
     {"name": "Public Float", "percentage": 26.9, "color": "#B0B0B0", "shareValue": 430400000000},
   ],
   "valuation": 1600000000000, "stockUnitValue": 640.0,
   "notes": "Meta continued heavy AI infrastructure and Reality Labs investment through 2025, with the stock holding above the $1.4-1.6T range reached in late 2024."},

  {"company": "Meta Platforms, Inc.", "ticker": "META", "year": 2026,
   "ceo": {"name": "Mark Zuckerberg", "role": "Founder, Chairman & CEO"},
   "board": [{"name": "Mark Zuckerberg", "role": "Founder, Chairman & CEO"}, {"name": "Marc Andreessen", "role": "Director"}, {"name": "Peter Thiel", "role": "Director"}, {"name": "Robert Kimmitt", "role": "Director"}, {"name": "Tony Xu", "role": "Director"}, {"name": "Dana White", "role": "Director"}],
   "ownership": [
     {"name": "Mark Zuckerberg", "percentage": 13, "color": "#E8734A", "shareValue": 202800000000},
     {"name": "Institutional Investors", "percentage": 60.5, "color": "#4F86C6", "shareValue": 943800000000},
     {"name": "Public Float", "percentage": 26.5, "color": "#B0B0B0", "shareValue": 413400000000},
   ],
   "valuation": 1560000000000, "stockUnitValue": 620.0,
   "notes": "Meta's market capitalization stood at roughly $1.56 trillion as of July 2026, with continued heavy capital expenditure on AI data centers and infrastructure."},
]

MOAT = {
  2004: (1, "Pre-Product", "College social network with no meaningful moat yet, competing against Myspace and Friendster."),
  2012: (5, "Building", "Network effects from ~1 billion users provided a meaningful moat, though monetization and mobile transition were still unproven at IPO."),
  2014: (7, "Differentiated", "WhatsApp and Oculus acquisitions extended Facebook's reach and diversified its platform ecosystem beyond the core social network."),
  2018: (6, "Tested", "Cambridge Analytica scandal and regulatory scrutiny damaged trust and invited regulation, testing the network-effect moat without breaking user growth."),
  2021: (8, "Strong", "Facebook/Instagram/WhatsApp's combined ~3.5 billion users and advertising data moat remained dominant even as the company rebranded to pursue the metaverse."),
  2022: (6, "Tested", "Apple's App Tracking Transparency changes hurt ad targeting, Reality Labs burned billions with no clear payoff, and the stock lost roughly 64% of its value."),
  2024: (8, "Strong", "Cost discipline (the \"Year of Efficiency\") plus AI-driven ad-targeting improvements restored profitability and pushed market cap past $1.4 trillion."),
  2025: (8, "Strong", "Continued AI infrastructure investment and ad-business strength sustained Meta's moat despite heavy Reality Labs spending."),
  2026: (8, "Strong", "Meta's ad business and AI infrastructure buildout continue to reinforce its competitive position, though Reality Labs and open-model AI competition remain ongoing risks."),
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
  2004: alloc(rd=70, capex=20, cash=10),
  2012: alloc(rd=45, capex=30, cash=25),
  2014: alloc(rd=30, capex=25, cash=5, ma=40),
  2018: alloc(rd=35, capex=35, cash=30),
  2021: alloc(rd=30, capex=35, cash=10, buybacks=25),
  2022: alloc(rd=28, capex=32, cash=15, buybacks=25),
  2024: alloc(rd=25, capex=42, cash=8, buybacks=23, dividends=2),
  2025: alloc(rd=22, capex=48, cash=8, buybacks=20, dividends=2),
  2026: alloc(rd=20, capex=52, cash=8, buybacks=18, dividends=2),
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
ts = f'import type {{ CompanyYear }} from "../../types";\n\nexport const metaRecords: CompanyYear[] = {records_str};\n'
with open(os.path.join(DIR, "records.ts"), "w") as f:
    f.write(ts)
print("Done.")
