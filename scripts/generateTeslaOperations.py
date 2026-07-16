import json

PALO_ALTO_HQ = {"name": "Tesla Motors Headquarters", "city": "Palo Alto, CA", "country": "USA", "lat": 37.4419, "lng": -122.1430, "type": "headquarters", "note": "Tesla's corporate HQ from its early years until the move to Austin in late 2021."}
AUSTIN_HQ = {"name": "Tesla Global Headquarters (Gigafactory Texas)", "city": "Austin, TX", "country": "USA", "lat": 30.2226, "lng": -97.6180, "type": "headquarters", "note": "Tesla relocated its global corporate HQ to Gigafactory Texas in December 2021."}
FREMONT_FACTORY = {"name": "Fremont Factory", "city": "Fremont, CA", "country": "USA", "lat": 37.4930, "lng": -121.9448, "type": "manufacturing", "note": "Former GM/NUMMI plant; Tesla took possession Oct 2010, its first vehicle assembly plant."}
GIGA_NEVADA = {"name": "Gigafactory Nevada", "city": "Sparks, NV", "country": "USA", "lat": 39.5380, "lng": -119.4430, "type": "manufacturing", "note": "Grand opening July 29, 2016; battery cell production with Panasonic began January 2017."}
GIGA_SHANGHAI = {"name": "Gigafactory Shanghai", "city": "Shanghai", "country": "China", "lat": 30.9195, "lng": 121.8895, "type": "manufacturing", "note": "Construction began Jan 2019; first vehicles produced December 2019, Tesla's first factory outside the US."}
GIGA_BERLIN = {"name": "Gigafactory Berlin-Brandenburg", "city": "Grünheide", "country": "Germany", "lat": 52.3877, "lng": 13.7894, "type": "manufacturing", "note": "Announced Nov 2019; officially opened March 22, 2022, serving the European market."}
GIGA_TEXAS_PLANT = {"name": "Gigafactory Texas (Manufacturing)", "city": "Austin, TX", "country": "USA", "lat": 30.2226, "lng": -97.6180, "type": "manufacturing", "note": "Construction began July 2020; officially opened April 7, 2022 (\"Cyber Rodeo\"), producing Model Y and Cybertruck."}

YEAR_LOCATIONS = {}
for y in range(2003, 2011):
    YEAR_LOCATIONS[y] = [PALO_ALTO_HQ]
for y in range(2011, 2017):
    YEAR_LOCATIONS[y] = [PALO_ALTO_HQ, FREMONT_FACTORY]
for y in range(2017, 2020):
    YEAR_LOCATIONS[y] = [PALO_ALTO_HQ, FREMONT_FACTORY, GIGA_NEVADA]
for y in [2020]:
    YEAR_LOCATIONS[y] = [PALO_ALTO_HQ, FREMONT_FACTORY, GIGA_NEVADA, GIGA_SHANGHAI]
for y in [2021]:
    YEAR_LOCATIONS[y] = [AUSTIN_HQ, FREMONT_FACTORY, GIGA_NEVADA, GIGA_SHANGHAI]
for y in range(2022, 2027):
    YEAR_LOCATIONS[y] = [AUSTIN_HQ, FREMONT_FACTORY, GIGA_NEVADA, GIGA_SHANGHAI, GIGA_BERLIN, GIGA_TEXAS_PLANT]

body = ",\n".join(f'  {y}: {json.dumps(locs)}' for y, locs in sorted(YEAR_LOCATIONS.items()))
ts = f'''import type {{ OperationLocation }} from "../../types";

export const teslaOperationsLocations: Record<number, OperationLocation[]> = {{
{body}
}};
'''
with open("src/data/tesla/operations.ts", "w") as f:
    f.write(ts)
print("Done:", len(YEAR_LOCATIONS), "years")
