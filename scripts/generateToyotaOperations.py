import json

TOYOTA_CITY_HQ = {"name": "Toyota Motor Corporation Global Headquarters", "city": "Toyota City, Aichi", "country": "Japan", "lat": 35.0833, "lng": 137.1560, "type": "headquarters", "note": "Toyota's global HQ, in the city renamed in the company's honor in 1959."}
NAGOYA_EARLY_HQ = {"name": "Toyoda Automatic Loom Works / Early Headquarters", "city": "Nagoya, Aichi", "country": "Japan", "lat": 35.1815, "lng": 136.9066, "type": "headquarters", "note": "Toyota Motor Co. was founded in 1937 as a spin-off of Toyoda Automatic Loom Works, based in the Nagoya area before the Koromo (later Toyota City) plant became the center of operations."}
PLANO_US_HQ = {"name": "Toyota Motor North America Headquarters", "city": "Plano, TX", "country": "USA", "lat": 33.0637, "lng": -96.7418, "type": "regional-hq", "note": "US headquarters relocated from Torrance, CA to Plano, TX, completed in 2017."}
TORRANCE_US_HQ = {"name": "Toyota Motor Sales USA Headquarters", "city": "Torrance, CA", "country": "USA", "lat": 33.8358, "lng": -118.3406, "type": "regional-hq", "note": "Toyota's longtime US sales headquarters before the 2017 move to Plano, Texas."}
GEORGETOWN_PLANT = {"name": "Toyota Motor Manufacturing Kentucky", "city": "Georgetown, KY", "country": "USA", "lat": 38.2098, "lng": -84.5410, "type": "manufacturing", "note": "First vehicle assembled May 26, 1988; Toyota's largest manufacturing plant in the world."}
SAN_ANTONIO_PLANT = {"name": "Toyota Motor Manufacturing Texas", "city": "San Antonio, TX", "country": "USA", "lat": 29.3350, "lng": -98.6240, "type": "manufacturing", "note": "Production began 2006; builds the Tundra and Tacoma pickup trucks."}
TOYOTA_CITY_PLANT = {"name": "Honsha / Motomachi Plant Complex", "city": "Toyota City, Aichi", "country": "Japan", "lat": 35.0833, "lng": 137.1560, "type": "manufacturing", "note": "The original Koromo plant opened in 1938; Motomachi (Japan's first purpose-built passenger car plant) opened 1959."}

YEAR_LOCATIONS = {}
YEAR_LOCATIONS[1937] = [NAGOYA_EARLY_HQ]
YEAR_LOCATIONS[1950] = [NAGOYA_EARLY_HQ, TOYOTA_CITY_PLANT]
YEAR_LOCATIONS[1957] = [TOYOTA_CITY_HQ, TOYOTA_CITY_PLANT]
YEAR_LOCATIONS[1966] = [TOYOTA_CITY_HQ, TOYOTA_CITY_PLANT]
YEAR_LOCATIONS[1973] = [TOYOTA_CITY_HQ, TOYOTA_CITY_PLANT, TORRANCE_US_HQ]
for y in [1982, 1990]:
    YEAR_LOCATIONS[y] = [TOYOTA_CITY_HQ, TOYOTA_CITY_PLANT, TORRANCE_US_HQ, GEORGETOWN_PLANT]
for y in [1997, 2002]:
    YEAR_LOCATIONS[y] = [TOYOTA_CITY_HQ, TOYOTA_CITY_PLANT, TORRANCE_US_HQ, GEORGETOWN_PLANT]
for y in [2007, 2009, 2010, 2011]:
    YEAR_LOCATIONS[y] = [TOYOTA_CITY_HQ, TOYOTA_CITY_PLANT, TORRANCE_US_HQ, GEORGETOWN_PLANT, SAN_ANTONIO_PLANT]
for y in [2020, 2023, 2024, 2025, 2026]:
    YEAR_LOCATIONS[y] = [TOYOTA_CITY_HQ, TOYOTA_CITY_PLANT, PLANO_US_HQ, GEORGETOWN_PLANT, SAN_ANTONIO_PLANT]

body = ",\n".join(f'  {y}: {json.dumps(locs)}' for y, locs in sorted(YEAR_LOCATIONS.items()))
ts = f'''import type {{ OperationLocation }} from "../../types";

export const toyotaOperationsLocations: Record<number, OperationLocation[]> = {{
{body}
}};
'''
with open("src/data/toyota/operations.ts", "w") as f:
    f.write(ts)
print("Done:", len(YEAR_LOCATIONS), "years")
