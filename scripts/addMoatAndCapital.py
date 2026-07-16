import json
import os

DIR = "src/data/apple"

# Moat score (1-10) + label per year, grounded in known competitive history.
MOAT = {
    1976: (2, "Pre-Moat", "Hobbyist kit-computer market; no defensible advantage yet."),
    1977: (2, "Pre-Moat", "Apple II launch; differentiated but easily copied early PC design."),
    1978: (3, "Emerging", "Apple II gaining traction; VisiCalc not yet released."),
    1979: (4, "Emerging", "VisiCalc (1979) makes Apple II a business tool, first real lock-in."),
    1980: (4, "Emerging", "IPO year; strong brand but Apple II facing rising clone competition."),
    1981: (3, "Eroding", "IBM PC enters market (Aug 1981); Apple's lead starts narrowing."),
    1982: (3, "Eroding", "IBM PC and clones erode Apple's early personal computer dominance."),
    1983: (3, "Eroding", "Lisa underperforms; IBM PC compatibility becomes industry standard."),
    1984: (4, "Differentiated", "Macintosh GUI is a genuine technical differentiator vs. DOS PCs."),
    1985: (3, "Weak", "Internal turmoil, Jobs ousted; Mac sales disappoint expectations."),
    1986: (3, "Weak", "Niche GUI player; IBM-compatible PCs dominate volume market."),
    1987: (4, "Niche-Strong", "Desktop publishing + LaserWriter give Mac a defensible professional niche."),
    1988: (4, "Niche-Strong", "Strong margins in publishing/education niches; still small overall share."),
    1989: (4, "Niche-Strong", "\"First golden age\" of Macintosh; loyal niche but high prices limit growth."),
    1990: (3, "Pressured", "Low-cost Mac models needed as Windows 3.0 narrows the usability gap."),
    1991: (3, "Pressured", "Windows 3.0 closes GUI gap; Apple's differentiation shrinking."),
    1992: (3, "Pressured", "Margin pressure intensifies; clone licensing debates begin."),
    1993: (2, "Declining", "Sculley ousted; Newton flop; competitive position weakening badly."),
    1994: (2, "Declining", "PowerPC transition underway but Windows ecosystem dominates."),
    1995: (2, "Declining", "Windows 95 launch is a major blow to Mac's remaining differentiation."),
    1996: (1, "Crisis", "Near-failure; clone licensing fragmenting the platform further."),
    1997: (1, "Crisis", "Record losses; Microsoft invests $150M as a lifeline; moat near zero."),
    1998: (3, "Recovering", "iMac reignites brand loyalty and design-led differentiation."),
    1999: (4, "Recovering", "Consumer momentum building; iBook extends design-led appeal."),
    2000: (4, "Recovering", "Jobs made permanent CEO; OS X groundwork laid for a real platform moat."),
    2001: (5, "Building", "iPod + iTunes begin building an ecosystem lock-in beyond computers."),
    2002: (5, "Building", "Retail stores launch, reinforcing brand and direct customer relationship."),
    2003: (6, "Building", "iTunes Store creates a genuine digital-content ecosystem moat."),
    2004: (6, "Building", "iPod dominates portable music; switching costs via iTunes library rising."),
    2005: (6, "Building", "Intel transition strengthens hardware competitiveness without losing design edge."),
    2006: (6, "Building", "iPod halo effect boosting Mac sales; ecosystem flywheel forming."),
    2007: (8, "Strong", "iPhone launch creates a category-defining, hard-to-replicate moat."),
    2008: (8, "Strong", "App Store launches, deepening platform/ecosystem lock-in dramatically."),
    2009: (8, "Strong", "iPhone 3GS success; App Store ecosystem network effects compounding."),
    2010: (9, "Dominant", "iPad creates a new category; ecosystem (hardware+software+services) very strong."),
    2011: (9, "Dominant", "Massive scale, brand, and ecosystem moat; Cook succeeds Jobs smoothly."),
    2012: (9, "Dominant", "Peak smartphone/tablet share; supply-chain scale advantage immense."),
    2013: (9, "Dominant", "Services and ecosystem switching costs continue to widen the moat."),
    2014: (9, "Dominant", "Apple Pay, Apple Watch extend ecosystem into payments and wearables."),
    2015: (9, "Dominant", "Services revenue growing; ecosystem lock-in among the strongest in tech."),
    2016: (9, "Dominant", "iPhone growth slows but installed base monetization (services) accelerates."),
    2017: (9, "Dominant", "Services moat (App Store, iCloud, Apple Music) increasingly central to thesis."),
    2018: (10, "Fortress", "First $1T market cap; brand + ecosystem + scale form a near-fortress moat."),
    2019: (10, "Fortress", "Services segment becomes a major standalone moat alongside hardware."),
    2020: (10, "Fortress", "$2T market cap; M1 silicon transition strengthens hardware differentiation further."),
    2021: (10, "Fortress", "Vertical silicon integration (M1/A-series) widens the technical moat."),
    2022: (10, "Fortress", "$3T market cap; ecosystem switching costs and brand loyalty near-unmatched."),
    2023: (9, "Fortress (Tested)", "Regulatory pressure (App Store, antitrust) begins testing the ecosystem moat."),
    2024: (9, "Fortress (Tested)", "DOJ antitrust suit and EU DMA compliance pressure the platform moat."),
    2025: (9, "Fortress (Tested)", "AI competition raises questions about Apple's pace of platform innovation."),
    2026: (9, "Fortress (Tested)", "Leadership transition (Cook to Ternus) tests continuity of strategic moat."),
}

# Capital allocation mix (%) per year: R&D, Buybacks, Dividends, M&A, CapEx, Cash Reserves
def alloc(rd=0, buybacks=0, dividends=0, ma=0, capex=0, cash=0):
    items = [
        ("R&D", rd, "#4E79A7"),
        ("Share Buybacks", buybacks, "#F28E2B"),
        ("Dividends", dividends, "#59A14F"),
        ("Acquisitions", ma, "#E15759"),
        ("Capital Expenditures", capex, "#76B7B2"),
        ("Cash Reserves Build", cash, "#EDC948"),
    ]
    items = [{"name": n, "percentage": p, "color": c} for n, p, c in items if p > 0]
    total = sum(i["percentage"] for i in items)
    assert total == 100, f"sum={total} for {items}"
    return items

CAPITAL = {
    # Early years: virtually all reinvested into growth/R&D and building cash; no dividends/buybacks.
    1976: alloc(rd=40, capex=20, cash=40),
    1977: alloc(rd=45, capex=20, cash=35),
    1978: alloc(rd=40, capex=25, cash=35),
    1979: alloc(rd=35, capex=25, cash=40),
    1980: alloc(rd=35, capex=30, cash=35),
    1981: alloc(rd=35, capex=30, cash=35),
    1982: alloc(rd=35, capex=30, cash=35),
    1983: alloc(rd=40, capex=30, cash=30),
    1984: alloc(rd=40, capex=35, cash=25),
    1985: alloc(rd=35, capex=25, cash=40),
    1986: alloc(rd=35, capex=25, cash=40),
    1987: alloc(rd=30, dividends=10, capex=30, cash=30),
    1988: alloc(rd=30, dividends=10, capex=30, cash=30),
    1989: alloc(rd=30, dividends=10, capex=30, cash=30),
    1990: alloc(rd=35, dividends=10, capex=25, cash=30),
    1991: alloc(rd=35, dividends=10, capex=25, cash=30),
    1992: alloc(rd=35, dividends=10, capex=25, cash=30),
    1993: alloc(rd=40, dividends=10, capex=20, cash=30),
    1994: alloc(rd=40, dividends=10, capex=20, cash=30),
    1995: alloc(rd=35, dividends=10, capex=25, cash=30),
    1996: alloc(rd=45, dividends=5, capex=15, cash=35),
    1997: alloc(rd=40, ma=10, capex=15, cash=35),  # NeXT acquisition
    1998: alloc(rd=35, capex=20, cash=45),
    1999: alloc(rd=35, capex=25, cash=40),
    2000: alloc(rd=35, capex=25, cash=40),
    2001: alloc(rd=35, capex=25, cash=40),
    2002: alloc(rd=35, capex=25, cash=40),
    2003: alloc(rd=35, capex=25, cash=40),
    2004: alloc(rd=30, capex=25, cash=45),
    2005: alloc(rd=25, capex=30, cash=45),
    2006: alloc(rd=25, capex=30, cash=45),
    2007: alloc(rd=25, capex=30, cash=45),
    2008: alloc(rd=20, capex=35, cash=45),
    2009: alloc(rd=20, capex=30, cash=50),
    2010: alloc(rd=20, capex=35, cash=45),
    2011: alloc(rd=20, capex=35, cash=45),
    2012: alloc(rd=15, dividends=20, capex=30, cash=35),  # dividend reinstated 2012
    2013: alloc(rd=15, buybacks=30, dividends=20, capex=25, cash=10),
    2014: alloc(rd=15, buybacks=35, dividends=20, capex=25, cash=5),
    2015: alloc(rd=15, buybacks=40, dividends=20, capex=20, cash=5),
    2016: alloc(rd=15, buybacks=40, dividends=20, capex=20, cash=5),
    2017: alloc(rd=15, buybacks=40, dividends=20, capex=20, cash=5),
    2018: alloc(rd=15, buybacks=45, dividends=15, capex=20, cash=5),
    2019: alloc(rd=15, buybacks=45, dividends=15, capex=20, cash=5),
    2020: alloc(rd=15, buybacks=45, dividends=15, capex=20, cash=5),
    2021: alloc(rd=15, buybacks=50, dividends=12, capex=18, cash=5),
    2022: alloc(rd=15, buybacks=50, dividends=12, capex=18, cash=5),
    2023: alloc(rd=18, buybacks=48, dividends=12, capex=17, cash=5),
    2024: alloc(rd=18, buybacks=48, dividends=12, capex=17, cash=5),
    2025: alloc(rd=20, buybacks=45, dividends=12, capex=18, cash=5),
    2026: alloc(rd=20, buybacks=45, dividends=12, capex=18, cash=5),
}

for year, (score, label, note) in MOAT.items():
    path = os.path.join(DIR, f"{year}.json")
    with open(path) as f:
        record = json.load(f)
    record["moatScore"] = score
    record["moatLabel"] = label
    record["moatNote"] = note
    record["capitalAllocation"] = CAPITAL[year]
    with open(path, "w") as f:
        json.dump(record, f, indent=2)
    print(f"✓ {year}")

print(f"Done. Updated {len(MOAT)} years.")
