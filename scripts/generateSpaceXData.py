import json, os

DIR = "src/data/spacex"
os.makedirs(DIR, exist_ok=True)

RECORDS = [
  {"company": "Space Exploration Technologies Corp.", "year": 2002,
   "ceo": {"name": "Elon Musk", "role": "Founder / CEO / CTO"},
   "board": [{"name": "Elon Musk", "role": "Founder / CEO"}],
   "ownership": [
     {"name": "Elon Musk", "percentage": 100, "color": "#E8734A", "shareValue": 100000000},
   ],
   "valuation": 100000000, "stockUnitValue": None,
   "notes": "SpaceX founded by Elon Musk in May 2002, funded with ~$100M from his PayPal sale proceeds, with the long-term goal of enabling Mars colonization."},

  {"company": "Space Exploration Technologies Corp.", "year": 2006,
   "ceo": {"name": "Elon Musk", "role": "CEO / CTO"},
   "board": [{"name": "Elon Musk", "role": "CEO"}, {"name": "Gwynne Shotwell", "role": "VP Business Development"}],
   "ownership": [
     {"name": "Elon Musk", "percentage": 75, "color": "#E8734A", "shareValue": 112500000},
     {"name": "Founders Fund", "percentage": 15, "color": "#4F86C6", "shareValue": 22500000},
     {"name": "Other Early Investors", "percentage": 10, "color": "#B0B0B0", "shareValue": 15000000},
   ],
   "valuation": 150000000, "stockUnitValue": None,
   "notes": "NASA awarded SpaceX a Commercial Orbital Transportation Services (COTS) contract in August 2006, worth up to $278M to develop the Falcon 9 and Dragon — a pivotal early validation."},

  {"company": "Space Exploration Technologies Corp.", "year": 2008,
   "ceo": {"name": "Elon Musk", "role": "CEO / CTO"},
   "board": [{"name": "Elon Musk", "role": "CEO"}, {"name": "Gwynne Shotwell", "role": "President"}],
   "ownership": [
     {"name": "Elon Musk", "percentage": 70, "color": "#E8734A", "shareValue": 175000000},
     {"name": "Founders Fund", "percentage": 18, "color": "#4F86C6", "shareValue": 45000000},
     {"name": "Other Early Investors", "percentage": 12, "color": "#B0B0B0", "shareValue": 30000000},
   ],
   "valuation": 250000000, "stockUnitValue": None,
   "notes": "Falcon 1 became the first privately-funded liquid-fueled rocket to reach orbit (Sept 28, 2008), after three earlier failures nearly bankrupted the company. NASA awarded a $1.6B CRS cargo contract in December 2008, saving SpaceX from collapse."},

  {"company": "Space Exploration Technologies Corp.", "year": 2010,
   "ceo": {"name": "Elon Musk", "role": "CEO / CTO"},
   "board": [{"name": "Elon Musk", "role": "CEO"}, {"name": "Gwynne Shotwell", "role": "President"}, {"name": "Steve Jurvetson", "role": "Director"}],
   "ownership": [
     {"name": "Elon Musk", "percentage": 65, "color": "#E8734A", "shareValue": 650000000},
     {"name": "Founders Fund", "percentage": 15, "color": "#4F86C6", "shareValue": 150000000},
     {"name": "Draper Fisher Jurvetson", "percentage": 10, "color": "#6ABF69", "shareValue": 100000000},
     {"name": "Other Investors", "percentage": 10, "color": "#B0B0B0", "shareValue": 100000000},
   ],
   "valuation": 1000000000, "stockUnitValue": None,
   "notes": "Falcon 9 debuted June 4, 2010; in December 2010, SpaceX became the first private company to launch, orbit, and recover a spacecraft (Dragon, COTS Demo Flight 1)."},

  {"company": "Space Exploration Technologies Corp.", "year": 2012,
   "ceo": {"name": "Elon Musk", "role": "CEO / CTO"},
   "board": [{"name": "Elon Musk", "role": "CEO"}, {"name": "Gwynne Shotwell", "role": "President"}, {"name": "Steve Jurvetson", "role": "Director"}],
   "ownership": [
     {"name": "Elon Musk", "percentage": 62, "color": "#E8734A", "shareValue": 1612000000},
     {"name": "Founders Fund", "percentage": 14, "color": "#4F86C6", "shareValue": 364000000},
     {"name": "Draper Fisher Jurvetson", "percentage": 9, "color": "#6ABF69", "shareValue": 234000000},
     {"name": "Valor Equity Partners", "percentage": 7, "color": "#F5C842", "shareValue": 182000000},
     {"name": "Other Investors", "percentage": 8, "color": "#B0B0B0", "shareValue": 208000000},
   ],
   "valuation": 2600000000, "stockUnitValue": None,
   "notes": "Dragon became the first commercial spacecraft to dock with the ISS (May 2012); first contracted CRS-1 NASA resupply mission launched October 8, 2012."},

  {"company": "Space Exploration Technologies Corp.", "year": 2015,
   "ceo": {"name": "Elon Musk", "role": "CEO / CTO"},
   "board": [{"name": "Elon Musk", "role": "CEO"}, {"name": "Gwynne Shotwell", "role": "President & COO"}, {"name": "Luke Nosek", "role": "Director (Founders Fund)"}],
   "ownership": [
     {"name": "Elon Musk", "percentage": 54, "color": "#E8734A", "shareValue": 6480000000},
     {"name": "Founders Fund", "percentage": 12, "color": "#4F86C6", "shareValue": 1440000000},
     {"name": "Google (Alphabet)", "percentage": 8, "color": "#6ABF69", "shareValue": 960000000},
     {"name": "Fidelity", "percentage": 8, "color": "#F5C842", "shareValue": 960000000},
     {"name": "Other Investors", "percentage": 18, "color": "#B0B0B0", "shareValue": 2160000000},
   ],
   "valuation": 12000000000, "stockUnitValue": None,
   "notes": "December 21, 2015: SpaceX achieved the first successful landing of an orbital-class rocket first stage (Falcon 9 Orbcomm-2 mission), a watershed moment for reusable rocketry. Google and Fidelity invested $1B in January 2015 for ~8.33% combined."},

  {"company": "Space Exploration Technologies Corp.", "year": 2018,
   "ceo": {"name": "Elon Musk", "role": "CEO / CTO"},
   "board": [{"name": "Elon Musk", "role": "CEO"}, {"name": "Gwynne Shotwell", "role": "President & COO"}, {"name": "Luke Nosek", "role": "Director"}],
   "ownership": [
     {"name": "Elon Musk", "percentage": 48, "color": "#E8734A", "shareValue": 13200000000},
     {"name": "Founders Fund", "percentage": 11, "color": "#4F86C6", "shareValue": 3025000000},
     {"name": "Google (Alphabet)", "percentage": 7, "color": "#6ABF69", "shareValue": 1925000000},
     {"name": "Fidelity", "percentage": 9, "color": "#F5C842", "shareValue": 2475000000},
     {"name": "Other Investors", "percentage": 25, "color": "#B0B0B0", "shareValue": 6875000000},
   ],
   "valuation": 27500000000, "stockUnitValue": None,
   "notes": "Falcon Heavy's maiden flight (Feb 6, 2018) launched a Tesla Roadster with \"Starman\" toward Mars orbit; two side boosters landed simultaneously. Series I round ($507M led by Fidelity) valued SpaceX at $27.5B."},

  {"company": "Space Exploration Technologies Corp.", "year": 2019,
   "ceo": {"name": "Elon Musk", "role": "CEO / CTO"},
   "board": [{"name": "Elon Musk", "role": "CEO"}, {"name": "Gwynne Shotwell", "role": "President & COO"}],
   "ownership": [
     {"name": "Elon Musk", "percentage": 47, "color": "#E8734A", "shareValue": 16450000000},
     {"name": "Founders Fund", "percentage": 11, "color": "#4F86C6", "shareValue": 3850000000},
     {"name": "Google (Alphabet)", "percentage": 7, "color": "#6ABF69", "shareValue": 2450000000},
     {"name": "Fidelity", "percentage": 9, "color": "#F5C842", "shareValue": 3150000000},
     {"name": "Other Investors", "percentage": 26, "color": "#B0B0B0", "shareValue": 9100000000},
   ],
   "valuation": 35000000000, "stockUnitValue": None,
   "notes": "First large batch of Starlink satellites launched May 2019, beginning what would become the world's largest satellite constellation, diversifying SpaceX's business beyond launch services."},

  {"company": "Space Exploration Technologies Corp.", "year": 2020,
   "ceo": {"name": "Elon Musk", "role": "CEO / CTO"},
   "board": [{"name": "Elon Musk", "role": "CEO"}, {"name": "Gwynne Shotwell", "role": "President & COO"}],
   "ownership": [
     {"name": "Elon Musk", "percentage": 47, "color": "#E8734A", "shareValue": 21150000000},
     {"name": "Founders Fund", "percentage": 11, "color": "#4F86C6", "shareValue": 4950000000},
     {"name": "Google (Alphabet)", "percentage": 7, "color": "#6ABF69", "shareValue": 3150000000},
     {"name": "Fidelity", "percentage": 9, "color": "#F5C842", "shareValue": 4050000000},
     {"name": "Other Investors", "percentage": 26, "color": "#B0B0B0", "shareValue": 11700000000},
   ],
   "valuation": 45000000000, "stockUnitValue": None,
   "notes": "May 30, 2020: Crew Dragon Demo-2 carried NASA astronauts to the ISS, the first crewed orbital flight by a commercial company — ending US reliance on Russian Soyuz for ISS crew transport since the Shuttle retired in 2011."},

  {"company": "Space Exploration Technologies Corp.", "year": 2021,
   "ceo": {"name": "Elon Musk", "role": "CEO / CTO"},
   "board": [{"name": "Elon Musk", "role": "CEO"}, {"name": "Gwynne Shotwell", "role": "President & COO"}],
   "ownership": [
     {"name": "Elon Musk", "percentage": 45, "color": "#E8734A", "shareValue": 45150000000},
     {"name": "Founders Fund", "percentage": 10, "color": "#4F86C6", "shareValue": 10030000000},
     {"name": "Google (Alphabet)", "percentage": 7, "color": "#6ABF69", "shareValue": 7021000000},
     {"name": "Fidelity", "percentage": 9, "color": "#F5C842", "shareValue": 9027000000},
     {"name": "Other Investors", "percentage": 29, "color": "#B0B0B0", "shareValue": 29087000000},
   ],
   "valuation": 100300000000, "stockUnitValue": None,
   "notes": "Inspiration4 (September 2021) was the first all-civilian orbital spaceflight. SpaceX crossed the $100B valuation mark for the first time in October 2021."},

  {"company": "Space Exploration Technologies Corp.", "year": 2022,
   "ceo": {"name": "Elon Musk", "role": "CEO / CTO"},
   "board": [{"name": "Elon Musk", "role": "CEO"}, {"name": "Gwynne Shotwell", "role": "President & COO"}, {"name": "Kimbal Musk", "role": "Director"}],
   "ownership": [
     {"name": "Elon Musk", "percentage": 44, "color": "#E8734A", "shareValue": 55880000000},
     {"name": "Founders Fund", "percentage": 10, "color": "#4F86C6", "shareValue": 12700000000},
     {"name": "Google (Alphabet)", "percentage": 7, "color": "#6ABF69", "shareValue": 8890000000},
     {"name": "Fidelity", "percentage": 9, "color": "#F5C842", "shareValue": 11430000000},
     {"name": "Other Investors", "percentage": 30, "color": "#B0B0B0", "shareValue": 38100000000},
   ],
   "valuation": 127000000000, "stockUnitValue": None,
   "notes": "A $1.68B round led by Mirae Asset valued SpaceX at $127B in June 2022. SpaceX flew a record-breaking 61 launches in the year, dominating global orbital launch volume."},

  {"company": "Space Exploration Technologies Corp.", "year": 2023,
   "ceo": {"name": "Elon Musk", "role": "CEO / CTO"},
   "board": [{"name": "Elon Musk", "role": "CEO"}, {"name": "Gwynne Shotwell", "role": "President & COO"}],
   "ownership": [
     {"name": "Elon Musk", "percentage": 43, "color": "#E8734A", "shareValue": 58910000000},
     {"name": "Founders Fund", "percentage": 10, "color": "#4F86C6", "shareValue": 13700000000},
     {"name": "Google (Alphabet)", "percentage": 7, "color": "#6ABF69", "shareValue": 9590000000},
     {"name": "Fidelity", "percentage": 9, "color": "#F5C842", "shareValue": 12330000000},
     {"name": "Other Investors", "percentage": 31, "color": "#B0B0B0", "shareValue": 42470000000},
   ],
   "valuation": 137000000000, "stockUnitValue": None,
   "notes": "Starship's first two integrated flight tests (April and November 2023) both ended in vehicle loss but achieved key milestones. A $750M round in January 2023 valued SpaceX at $137B."},

  {"company": "Space Exploration Technologies Corp.", "year": 2024,
   "ceo": {"name": "Elon Musk", "role": "CEO / CTO"},
   "board": [{"name": "Elon Musk", "role": "CEO"}, {"name": "Gwynne Shotwell", "role": "President & COO"}],
   "ownership": [
     {"name": "Elon Musk", "percentage": 42, "color": "#E8734A", "shareValue": 147000000000},
     {"name": "Founders Fund", "percentage": 9, "color": "#4F86C6", "shareValue": 31500000000},
     {"name": "Google (Alphabet)", "percentage": 7, "color": "#6ABF69", "shareValue": 24500000000},
     {"name": "Fidelity", "percentage": 9, "color": "#F5C842", "shareValue": 31500000000},
     {"name": "Other Investors", "percentage": 33, "color": "#B0B0B0", "shareValue": 115500000000},
   ],
   "valuation": 350000000000, "stockUnitValue": 185.0,
   "notes": "October 2024: Starship Flight 5 achieved the first-ever catch of the Super Heavy booster using the launch tower's \"chopsticks\" arms. A $1.25B secondary share sale in December 2024 valued SpaceX at $350B at $185/share, making it the world's most valuable private company."},

  {"company": "Space Exploration Technologies Corp.", "year": 2025,
   "ceo": {"name": "Elon Musk", "role": "CEO / CTO"},
   "board": [{"name": "Elon Musk", "role": "CEO"}, {"name": "Gwynne Shotwell", "role": "President & COO"}],
   "ownership": [
     {"name": "Elon Musk", "percentage": 42, "color": "#E8734A", "shareValue": 168000000000},
     {"name": "Founders Fund", "percentage": 9, "color": "#4F86C6", "shareValue": 36000000000},
     {"name": "Google (Alphabet)", "percentage": 7, "color": "#6ABF69", "shareValue": 28000000000},
     {"name": "Fidelity", "percentage": 9, "color": "#F5C842", "shareValue": 36000000000},
     {"name": "Other Investors", "percentage": 33, "color": "#B0B0B0", "shareValue": 132000000000},
   ],
   "valuation": 400000000000, "stockUnitValue": None,
   "notes": "July 2025: a $1B employee tender offer valued SpaceX at $400B. December 2025: an insider share sale at $421/share implied a valuation around $800B, reflecting continued investor enthusiasm for Starlink and Starship progress."},

  {"company": "SpaceX (merged with xAI)", "year": 2026,
   "ceo": {"name": "Elon Musk", "role": "CEO"},
   "board": [{"name": "Elon Musk", "role": "CEO"}, {"name": "Gwynne Shotwell", "role": "President & COO"}],
   "ownership": [
     {"name": "Elon Musk", "percentage": 42, "color": "#E8734A", "shareValue": 525000000000},
     {"name": "Founders Fund", "percentage": 8, "color": "#4F86C6", "shareValue": 100000000000},
     {"name": "Google (Alphabet)", "percentage": 6, "color": "#6ABF69", "shareValue": 75000000000},
     {"name": "Fidelity", "percentage": 8, "color": "#F5C842", "shareValue": 100000000000},
     {"name": "Other Investors / xAI Shareholders", "percentage": 36, "color": "#B0B0B0", "shareValue": 450000000000},
   ],
   "valuation": 1250000000000, "stockUnitValue": None,
   "notes": "February 2026: Elon Musk merged SpaceX with his AI company xAI in what was described as the largest corporate combination in history, valuing the combined entity at ~$1.25 trillion. By April 2026, the combined entity reportedly filed confidentially with the SEC for a potential IPO at a $1.75T valuation — if completed, this would be SpaceX's first public listing."},
]

MOAT = {
  2002: (1, "Pre-Product", "Startup with no flight history; founder funding only."),
  2006: (3, "Emerging", "NASA COTS contract provided crucial early validation and capital."),
  2008: (3, "At Risk / Validated", "Near-bankruptcy after 3 failed launches; Falcon 1 orbital success and NASA CRS contract saved the company in the same year."),
  2010: (5, "Building", "First private orbital launch-and-recovery established credibility no competitor had matched."),
  2012: (6, "Building", "First commercial ISS docking proved operational reliability NASA could depend on."),
  2015: (7, "Differentiated", "First orbital-class booster landing began the reusability cost advantage that no competitor has yet matched at scale."),
  2018: (8, "Strong", "Falcon Heavy proved heavy-lift capability; reusability cost advantage increasingly hard for ULA/Arianespace/Russia to counter."),
  2019: (8, "Strong", "Starlink began building a second, even larger moat: a vertically-integrated satellite internet constellation business."),
  2020: (9, "Dominant", "Crewed spaceflight capability eliminated the company's last major capability gap vs. legacy government providers."),
  2021: (9, "Dominant", "Civilian spaceflight and rapid launch cadence cemented SpaceX as the default global launch provider."),
  2022: (9, "Dominant", "61 launches in a single year — more than every national space program combined — an almost insurmountable scale/cost moat."),
  2023: (8, "Tested", "Starship setbacks (two losses) showed next-gen technology risk even as core Falcon/Starlink business remained dominant."),
  2024: (9, "Dominant", "Super Heavy booster catch was a genuine engineering breakthrough competitors are years from replicating; record launch cadence continued."),
  2025: (9, "Dominant", "Starlink revenue scale and launch dominance continued; valuation climbed toward $800B reflecting compounding moat strength."),
  2026: (9, "Dominant (Diversifying)", "xAI merger diversifies the business into AI compute, a new and unproven moat dimension layered atop the established space dominance."),
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
  2002: alloc(rd=60, capex=30, cash=10),
  2006: alloc(rd=55, capex=35, cash=10),
  2008: alloc(rd=50, capex=40, cash=10),
  2010: alloc(rd=45, capex=45, cash=10),
  2012: alloc(rd=40, capex=50, cash=10),
  2015: alloc(rd=40, capex=50, cash=10),
  2018: alloc(rd=35, capex=55, cash=10),
  2019: alloc(rd=30, capex=60, cash=10),
  2020: alloc(rd=28, capex=62, cash=10),
  2021: alloc(rd=25, capex=65, cash=10),
  2022: alloc(rd=25, capex=65, cash=10),
  2023: alloc(rd=28, capex=62, cash=10),
  2024: alloc(rd=25, capex=60, cash=15),
  2025: alloc(rd=25, capex=58, cash=17),
  2026: alloc(rd=30, capex=52, cash=10, ma=8),
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
ts = f'import type {{ CompanyYear }} from "../../types";\n\nexport const spacexRecords: CompanyYear[] = {records_str};\n'
with open(os.path.join(DIR, "records.ts"), "w") as f:
    f.write(ts)
print("Done.")
