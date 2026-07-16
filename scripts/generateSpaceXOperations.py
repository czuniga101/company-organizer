import json

HAWTHORNE_HQ = {"name": "SpaceX Headquarters", "city": "Hawthorne, CA", "country": "USA", "lat": 33.9164, "lng": -118.3526, "type": "headquarters", "note": "SpaceX's headquarters from its 2002 founding until August 2024; still houses engineering, manufacturing, and mission control."}
STARBASE_HQ = {"name": "Starbase Headquarters", "city": "Starbase (Boca Chica), TX", "country": "USA", "lat": 25.9970, "lng": -97.1560, "type": "headquarters", "note": "SpaceX relocated its official corporate headquarters to Starbase, Texas in August 2024."}
MCGREGOR_TEST = {"name": "McGregor Rocket Test Facility", "city": "McGregor, TX", "country": "USA", "lat": 31.4990, "lng": -97.2830, "type": "manufacturing", "note": "SpaceX's primary rocket engine development and test site, operating since the mid-2000s."}
CAPE_CANAVERAL = {"name": "Cape Canaveral / Kennedy Space Center Launch Complex", "city": "Cape Canaveral, FL", "country": "USA", "lat": 28.5623, "lng": -80.5774, "type": "manufacturing", "note": "SLC-40 and LC-39A launch pads used for Falcon 9, Falcon Heavy, and crewed Dragon missions."}
VANDENBERG = {"name": "Vandenberg Space Force Base Launch Site", "city": "Vandenberg, CA", "country": "USA", "lat": 34.7420, "lng": -120.5724, "type": "manufacturing", "note": "West Coast launch site (SLC-4E) used mainly for polar-orbit and Starlink missions."}
STARBASE_BUILD = {"name": "Starbase Starship Production & Launch Site", "city": "Starbase (Boca Chica), TX", "country": "USA", "lat": 25.9970, "lng": -97.1560, "type": "manufacturing", "note": "Starship/Super Heavy development and launch site, under construction from 2019."}

YEAR_LOCATIONS = {}
for y in [2002, 2006]:
    YEAR_LOCATIONS[y] = [HAWTHORNE_HQ]
for y in [2008, 2010, 2012]:
    YEAR_LOCATIONS[y] = [HAWTHORNE_HQ, MCGREGOR_TEST, CAPE_CANAVERAL]
for y in [2015, 2018, 2019]:
    YEAR_LOCATIONS[y] = [HAWTHORNE_HQ, MCGREGOR_TEST, CAPE_CANAVERAL, VANDENBERG, STARBASE_BUILD]
for y in [2020, 2021, 2022, 2023]:
    YEAR_LOCATIONS[y] = [HAWTHORNE_HQ, MCGREGOR_TEST, CAPE_CANAVERAL, VANDENBERG, STARBASE_BUILD]
for y in [2024, 2025, 2026]:
    YEAR_LOCATIONS[y] = [STARBASE_HQ, HAWTHORNE_HQ, MCGREGOR_TEST, CAPE_CANAVERAL, VANDENBERG]
    # note: Starbase entries deduped below since headquarters+manufacturing share coords intentionally

body = ",\n".join(f'  {y}: {json.dumps(locs)}' for y, locs in sorted(YEAR_LOCATIONS.items()))
ts = f'''import type {{ OperationLocation }} from "../../types";

export const spacexOperationsLocations: Record<number, OperationLocation[]> = {{
{body}
}};
'''
with open("src/data/spacex/operations.ts", "w") as f:
    f.write(ts)
print("Done:", len(YEAR_LOCATIONS), "years")
