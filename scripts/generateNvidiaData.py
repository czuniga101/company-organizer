import json, os

DIR = "src/data/nvidia"
os.makedirs(DIR, exist_ok=True)

RECORDS = [
  {"company": "NVIDIA Corporation", "ticker": "NVDA", "year": 1993,
   "ceo": {"name": "Jensen Huang", "role": "Co-Founder / President & CEO"},
   "board": [{"name": "Jensen Huang", "role": "President & CEO"}, {"name": "Chris Malachowsky", "role": "Co-Founder"}, {"name": "Curtis Priem", "role": "Co-Founder"}],
   "ownership": [
     {"name": "Jensen Huang", "percentage": 35, "color": "#E8734A", "shareValue": 350000},
     {"name": "Chris Malachowsky", "percentage": 25, "color": "#4F86C6", "shareValue": 250000},
     {"name": "Curtis Priem", "percentage": 25, "color": "#6ABF69", "shareValue": 250000},
     {"name": "Early Investors", "percentage": 15, "color": "#B0B0B0", "shareValue": 150000},
   ],
   "valuation": 1000000, "stockUnitValue": None,
   "notes": "NVIDIA founded April 5, 1993 by Jensen Huang, Chris Malachowsky, and Curtis Priem, reportedly agreed upon at a Denny's diner in East San Jose, to build chips for accelerated computing and 3D graphics."},

  {"company": "NVIDIA Corporation", "ticker": "NVDA", "year": 1999,
   "ceo": {"name": "Jensen Huang", "role": "President & CEO"},
   "board": [{"name": "Jensen Huang", "role": "President & CEO"}, {"name": "Mark Stevens", "role": "Director (Sequoia Capital)"}, {"name": "A. Brooke Seawell", "role": "Director"}],
   "ownership": [
     {"name": "Jensen Huang", "percentage": 12, "color": "#E8734A", "shareValue": 144000000},
     {"name": "Sequoia Capital", "percentage": 15, "color": "#4F86C6", "shareValue": 180000000},
     {"name": "Institutional Investors", "percentage": 40, "color": "#6ABF69", "shareValue": 480000000},
     {"name": "Public Float", "percentage": 33, "color": "#B0B0B0", "shareValue": 396000000},
   ],
   "valuation": 1200000000, "stockUnitValue": 12.0,
   "notes": "NVIDIA IPO'd on Nasdaq January 22, 1999 at $12/share. Later that year it launched the GeForce 256, marketed as the world's first \"GPU.\""},

  {"company": "NVIDIA Corporation", "ticker": "NVDA", "year": 2006,
   "ceo": {"name": "Jensen Huang", "role": "President & CEO"},
   "board": [{"name": "Jensen Huang", "role": "President & CEO"}, {"name": "Mark Stevens", "role": "Director"}, {"name": "A. Brooke Seawell", "role": "Director"}, {"name": "James Gaither", "role": "Director"}],
   "ownership": [
     {"name": "Jensen Huang", "percentage": 8, "color": "#E8734A", "shareValue": 720000000},
     {"name": "Institutional Investors", "percentage": 62, "color": "#4F86C6", "shareValue": 5580000000},
     {"name": "Public Float", "percentage": 30, "color": "#B0B0B0", "shareValue": 2700000000},
   ],
   "valuation": 9000000000, "stockUnitValue": 27.5,
   "notes": "NVIDIA launched CUDA in 2006, opening the GPU's parallel-processing power to general-purpose computing — widely viewed as the foundation of NVIDIA's later AI dominance."},

  {"company": "NVIDIA Corporation", "ticker": "NVDA", "year": 2012,
   "ceo": {"name": "Jensen Huang", "role": "President & CEO"},
   "board": [{"name": "Jensen Huang", "role": "President & CEO"}, {"name": "Mark Stevens", "role": "Director"}, {"name": "A. Brooke Seawell", "role": "Director"}, {"name": "Harvey Jones", "role": "Director"}, {"name": "William Miller", "role": "Director"}],
   "ownership": [
     {"name": "Jensen Huang", "percentage": 4, "color": "#E8734A", "shareValue": 360000000},
     {"name": "Institutional Investors", "percentage": 68, "color": "#4F86C6", "shareValue": 6120000000},
     {"name": "Public Float", "percentage": 28, "color": "#B0B0B0", "shareValue": 2520000000},
   ],
   "valuation": 9000000000, "stockUnitValue": 12.5,
   "notes": "AlexNet, trained on NVIDIA GPUs, won the 2012 ImageNet competition by a huge margin — proving GPUs were dramatically more efficient than CPUs for deep learning, and igniting the modern AI boom."},

  {"company": "NVIDIA Corporation", "ticker": "NVDA", "year": 2016,
   "ceo": {"name": "Jensen Huang", "role": "President & CEO"},
   "board": [{"name": "Jensen Huang", "role": "President & CEO"}, {"name": "Mark Stevens", "role": "Director"}, {"name": "Tench Coxe", "role": "Director"}, {"name": "Persis Drell", "role": "Director"}, {"name": "A. Brooke Seawell", "role": "Director"}],
   "ownership": [
     {"name": "Jensen Huang", "percentage": 3.5, "color": "#E8734A", "shareValue": 945000000},
     {"name": "Institutional Investors", "percentage": 70, "color": "#4F86C6", "shareValue": 18900000000},
     {"name": "Public Float", "percentage": 26.5, "color": "#B0B0B0", "shareValue": 7155000000},
   ],
   "valuation": 27000000000, "stockUnitValue": 27.0,
   "notes": "Stock roughly tripled in 2016 as data-center and AI training demand for NVIDIA GPUs (Pascal architecture, Tesla P100) accelerated sharply."},

  {"company": "NVIDIA Corporation", "ticker": "NVDA", "year": 2018,
   "ceo": {"name": "Jensen Huang", "role": "President & CEO"},
   "board": [{"name": "Jensen Huang", "role": "President & CEO"}, {"name": "Mark Stevens", "role": "Director"}, {"name": "Tench Coxe", "role": "Director"}, {"name": "Persis Drell", "role": "Director"}, {"name": "Dawn Hudson", "role": "Director"}],
   "ownership": [
     {"name": "Jensen Huang", "percentage": 3.6, "color": "#E8734A", "shareValue": 5292000000},
     {"name": "Institutional Investors", "percentage": 68, "color": "#4F86C6", "shareValue": 99960000000},
     {"name": "Public Float", "percentage": 28.4, "color": "#B0B0B0", "shareValue": 41748000000},
   ],
   "valuation": 147000000000, "stockUnitValue": 145.0,
   "notes": "Datacenter and gaming GPU demand drove NVIDIA's valuation past $150B intraday before a crypto-mining demand crash hit the stock late in the year."},

  {"company": "NVIDIA Corporation", "ticker": "NVDA", "year": 2020,
   "ceo": {"name": "Jensen Huang", "role": "President & CEO"},
   "board": [{"name": "Jensen Huang", "role": "President & CEO"}, {"name": "Mark Stevens", "role": "Director"}, {"name": "Tench Coxe", "role": "Director"}, {"name": "Persis Drell", "role": "Director"}, {"name": "Dawn Hudson", "role": "Director"}, {"name": "Stephen Neal", "role": "Director"}],
   "ownership": [
     {"name": "Jensen Huang", "percentage": 3.5, "color": "#E8734A", "shareValue": 10500000000},
     {"name": "Institutional Investors", "percentage": 66, "color": "#4F86C6", "shareValue": 198000000000},
     {"name": "Public Float", "percentage": 30.5, "color": "#B0B0B0", "shareValue": 91500000000},
   ],
   "valuation": 300000000000, "stockUnitValue": 130.0,
   "notes": "NVIDIA announced a $40B acquisition of Arm Holdings from SoftBank in September 2020 (later abandoned in 2022 amid regulatory opposition). Ampere architecture and pandemic-era GPU demand drove the stock sharply higher."},

  {"company": "NVIDIA Corporation", "ticker": "NVDA", "year": 2022,
   "ceo": {"name": "Jensen Huang", "role": "President & CEO"},
   "board": [{"name": "Jensen Huang", "role": "President & CEO"}, {"name": "Mark Stevens", "role": "Director"}, {"name": "Tench Coxe", "role": "Director"}, {"name": "Persis Drell", "role": "Director"}, {"name": "Dawn Hudson", "role": "Director"}, {"name": "Stephen Neal", "role": "Director"}],
   "ownership": [
     {"name": "Jensen Huang", "percentage": 3.5, "color": "#E8734A", "shareValue": 13650000000},
     {"name": "Institutional Investors", "percentage": 65, "color": "#4F86C6", "shareValue": 253500000000},
     {"name": "Public Float", "percentage": 31.5, "color": "#B0B0B0", "shareValue": 122850000000},
   ],
   "valuation": 390000000000, "stockUnitValue": 15.6,
   "notes": "NVIDIA's $40B Arm acquisition was formally abandoned in February 2022 amid regulatory pushback. Stock fell sharply in 2022's broad tech selloff and crypto-mining demand collapse, even as AI/datacenter demand kept building."},

  {"company": "NVIDIA Corporation", "ticker": "NVDA", "year": 2023,
   "ceo": {"name": "Jensen Huang", "role": "President & CEO"},
   "board": [{"name": "Jensen Huang", "role": "President & CEO"}, {"name": "Mark Stevens", "role": "Director"}, {"name": "Tench Coxe", "role": "Director"}, {"name": "Persis Drell", "role": "Director"}, {"name": "Dawn Hudson", "role": "Director"}, {"name": "Mark Perry", "role": "Director"}],
   "ownership": [
     {"name": "Jensen Huang", "percentage": 3.5, "color": "#E8734A", "shareValue": 36750000000},
     {"name": "Institutional Investors", "percentage": 64, "color": "#4F86C6", "shareValue": 672000000000},
     {"name": "Public Float", "percentage": 32.5, "color": "#B0B0B0", "shareValue": 341250000000},
   ],
   "valuation": 1050000000000, "stockUnitValue": 495.0,
   "notes": "Generative AI demand (ChatGPT-driven) for NVIDIA's H100 datacenter GPUs sent the stock up roughly 240% in 2023; NVIDIA crossed the $1 trillion market cap mark for the first time in May 2023."},

  {"company": "NVIDIA Corporation", "ticker": "NVDA", "year": 2024,
   "ceo": {"name": "Jensen Huang", "role": "President & CEO"},
   "board": [{"name": "Jensen Huang", "role": "President & CEO"}, {"name": "Mark Stevens", "role": "Director"}, {"name": "Tench Coxe", "role": "Director"}, {"name": "Persis Drell", "role": "Director"}, {"name": "Dawn Hudson", "role": "Director"}, {"name": "Mark Perry", "role": "Director"}, {"name": "John O. Dabiri", "role": "Director"}],
   "ownership": [
     {"name": "Jensen Huang", "percentage": 3.5, "color": "#E8734A", "shareValue": 111300000000},
     {"name": "Institutional Investors", "percentage": 64, "color": "#4F86C6", "shareValue": 2035200000000},
     {"name": "Public Float", "percentage": 32.5, "color": "#B0B0B0", "shareValue": 1034550000000},
   ],
   "valuation": 3180000000000, "stockUnitValue": 134.29,
   "notes": "NVIDIA crossed $2T market cap on Feb 23, 2024 and $3T on June 5, 2024, briefly becoming the world's most valuable company. A 10-for-1 stock split took effect June 7, 2024, driven by explosive Hopper/Blackwell-architecture AI datacenter GPU demand."},

  {"company": "NVIDIA Corporation", "ticker": "NVDA", "year": 2025,
   "ceo": {"name": "Jensen Huang", "role": "President & CEO"},
   "board": [{"name": "Jensen Huang", "role": "President & CEO"}, {"name": "Mark Stevens", "role": "Director"}, {"name": "Tench Coxe", "role": "Director"}, {"name": "Persis Drell", "role": "Director"}, {"name": "Dawn Hudson", "role": "Director"}, {"name": "Mark Perry", "role": "Director"}, {"name": "John O. Dabiri", "role": "Director"}],
   "ownership": [
     {"name": "Jensen Huang", "percentage": 3.5, "color": "#E8734A", "shareValue": 122500000000},
     {"name": "Vanguard Group", "percentage": 8.7, "color": "#4F86C6", "shareValue": 304500000000},
     {"name": "BlackRock", "percentage": 7.4, "color": "#6ABF69", "shareValue": 259000000000},
     {"name": "Other Institutions", "percentage": 50.4, "color": "#F5C842", "shareValue": 1764000000000},
     {"name": "Public Float", "percentage": 30, "color": "#B0B0B0", "shareValue": 1050000000000},
   ],
   "valuation": 3500000000000, "stockUnitValue": 134.29,
   "notes": "NVIDIA's Blackwell-architecture GPUs ramped through 2025 amid continued hyperscaler AI capex growth, even as export restrictions on China and supply-chain constraints created periodic volatility."},

  {"company": "NVIDIA Corporation", "ticker": "NVDA", "year": 2026,
   "ceo": {"name": "Jensen Huang", "role": "President & CEO"},
   "board": [{"name": "Jensen Huang", "role": "President & CEO"}, {"name": "Mark Stevens", "role": "Director"}, {"name": "Tench Coxe", "role": "Director"}, {"name": "Persis Drell", "role": "Director"}, {"name": "Dawn Hudson", "role": "Director"}, {"name": "Mark Perry", "role": "Director"}, {"name": "John O. Dabiri", "role": "Director"}],
   "ownership": [
     {"name": "Jensen Huang", "percentage": 3.3, "color": "#E8734A", "shareValue": 159000000000},
     {"name": "Vanguard Group", "percentage": 9.32, "color": "#4F86C6", "shareValue": 449000000000},
     {"name": "BlackRock", "percentage": 7.38, "color": "#6ABF69", "shareValue": 355600000000},
     {"name": "Other Institutions / Insiders", "percentage": 50.6, "color": "#F5C842", "shareValue": 2438500000000},
     {"name": "Public Float", "percentage": 29.4, "color": "#B0B0B0", "shareValue": 1416900000000},
   ],
   "valuation": 4819000000000, "stockUnitValue": 197.5,
   "notes": "NVIDIA became the first company to reach a $4 trillion market cap in July 2025 and continued climbing through early 2026, reaching roughly $4.8T by mid-2026, driven by sustained hyperscaler and sovereign AI infrastructure spending on Blackwell/Rubin-generation GPUs."},
]

MOAT = {
  1993: (1, "Pre-Product", "Startup founded to build graphics accelerator chips in a crowded, commodity-prone market."),
  1999: (3, "Emerging", "GeForce 256 and the IPO established NVIDIA as a leading PC graphics chip maker, but the GPU market was still fragmented and competitive."),
  2006: (5, "Building", "CUDA opened NVIDIA's hardware to general-purpose programming, planting the seed of a software/hardware moat competitors lacked."),
  2012: (6, "Building", "AlexNet's ImageNet win proved GPUs were the de facto platform for deep learning, beginning a structural shift in NVIDIA's favor."),
  2016: (7, "Differentiated", "CUDA's developer ecosystem and architecture lead made NVIDIA the default choice for AI training, a hard-to-replicate software moat."),
  2018: (7, "Differentiated", "Datacenter/AI demand diversified revenue beyond gaming, though crypto-driven demand swings showed continued cyclicality."),
  2020: (8, "Strong", "Ampere architecture and surging cloud AI/datacenter demand widened NVIDIA's lead over AMD and custom silicon competitors."),
  2022: (7, "Tested", "Crypto demand collapse and the failed Arm deal showed real cyclical and regulatory risk even as AI datacenter demand kept building underneath."),
  2023: (9, "Dominant", "Generative AI demand for H100 GPUs created severe supply shortages — NVIDIA held an estimated 80-90%+ share of AI training silicon."),
  2024: (9, "Dominant", "CUDA software lock-in plus Hopper/Blackwell hardware leadership made NVIDIA the indispensable AI infrastructure supplier to every major hyperscaler."),
  2025: (9, "Dominant", "Continued near-monopoly position in AI training/inference silicon, though geopolitical export controls and hyperscaler custom-silicon efforts represent emerging long-term threats."),
  2026: (9, "Dominant", "NVIDIA remains the central AI infrastructure bottleneck for hyperscalers and sovereign AI buildouts, sustaining an unprecedented valuation despite rising competitive and regulatory pressure."),
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
  1993: alloc(rd=70, capex=20, cash=10),
  1999: alloc(rd=55, capex=20, cash=25),
  2006: alloc(rd=50, capex=20, cash=20, buybacks=10),
  2012: alloc(rd=45, capex=15, cash=15, buybacks=20, dividends=5),
  2016: alloc(rd=40, capex=15, cash=15, buybacks=25, dividends=5),
  2018: alloc(rd=35, capex=15, cash=10, buybacks=35, dividends=5),
  2020: alloc(rd=30, capex=15, cash=10, buybacks=40, dividends=5),
  2022: alloc(rd=35, capex=15, cash=10, buybacks=37, dividends=3),
  2023: alloc(rd=30, capex=15, cash=15, buybacks=37, dividends=3),
  2024: alloc(rd=25, capex=20, cash=10, buybacks=42, dividends=3),
  2025: alloc(rd=25, capex=25, cash=10, buybacks=38, dividends=2),
  2026: alloc(rd=25, capex=30, cash=10, buybacks=33, dividends=2),
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
ts = f'import type {{ CompanyYear }} from "../../types";\n\nexport const nvidiaRecords: CompanyYear[] = {records_str};\n'
with open(os.path.join(DIR, "records.ts"), "w") as f:
    f.write(ts)
print("Done.")
