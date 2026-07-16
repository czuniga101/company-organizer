import re

CUPERTINO_HQ_EARLY = {"name": "Apple Inc. Headquarters (Bandley Dr / Mariani Ave)", "city": "Cupertino, CA", "country": "USA", "lat": 37.3230, "lng": -122.0322, "type": "headquarters", "note": "Apple's original Cupertino corporate offices, used before the Infinite Loop campus opened in 1993."}
INFINITE_LOOP = {"name": "Apple Inc. Headquarters (1 Infinite Loop)", "city": "Cupertino, CA", "country": "USA", "lat": 37.3318, "lng": -122.0301, "type": "headquarters", "note": "Infinite Loop campus completed 1993; became official corporate HQ after Steve Jobs' return in 1997."}
APPLE_PARK = {"name": "Apple Park Headquarters", "city": "Cupertino, CA", "country": "USA", "lat": 37.3349, "lng": -122.0090, "type": "headquarters", "note": "Apple Park (\"the spaceship\") opened to employees in April 2017, designed by Norman Foster."}
FREMONT_PLANT = {"name": "Fremont Manufacturing Plant", "city": "Fremont, CA", "country": "USA", "lat": 37.5091, "lng": -121.9700, "type": "manufacturing", "note": "Opened January 1984 to build the original Macintosh; closed September 1992."}
CORK_PLANT = {"name": "Apple Cork (Hollyhill) Plant", "city": "Cork", "country": "Ireland", "lat": 51.8985, "lng": -8.4756, "type": "manufacturing", "note": "Opened November 1980, Apple's first facility outside the US and its only company-owned manufacturing site today."}
FOXCONN_SHENZHEN = {"name": "Foxconn Longhua Assembly Complex", "city": "Shenzhen", "country": "China", "lat": 22.6203, "lng": 113.9330, "type": "manufacturing", "note": "Major contract-manufacturing site for iPod/iPhone assembly, ramped up through the 2000s."}
FOXCONN_ZHENGZHOU = {"name": "Foxconn Zhengzhou (\"iPhone City\")", "city": "Zhengzhou", "country": "China", "lat": 34.7466, "lng": 113.6253, "type": "manufacturing", "note": "Opened around 2010; at peak produces over half of the world's iPhones."}
SINGAPORE_HQ = {"name": "Apple South Asia Regional Headquarters", "city": "Singapore", "country": "Singapore", "lat": 1.3048, "lng": 103.8318, "type": "regional-hq", "note": "Regional hub coordinating Apple's Asia-Pacific operations."}
AUSTIN_CAMPUS = {"name": "Austin Americas Operations Center", "city": "Austin, TX", "country": "USA", "lat": 30.4014, "lng": -97.7192, "type": "regional-hq", "note": "Apple's second-largest US site; a 3M sq ft expansion opened in 2021."}
INDIA_ASSEMBLY = {"name": "Wistron/Foxconn iPhone Assembly", "city": "Bengaluru", "country": "India", "lat": 12.9716, "lng": 77.5946, "type": "manufacturing", "note": "India iPhone assembly began 2017 (iPhone SE), expanding to flagship models by 2022."}
VIETNAM_ASSEMBLY = {"name": "Vietnam Assembly Operations", "city": "Bac Giang", "country": "Vietnam", "lat": 21.2731, "lng": 106.1946, "type": "manufacturing", "note": "Vietnam became Apple's largest Southeast Asian production base, with over $15B invested since 2019 (AirPods, iPad, Apple Watch)."}

def era(*locs):
    return list(locs)

YEAR_LOCATIONS = {}
for y in range(1976, 1980):
    YEAR_LOCATIONS[y] = era(CUPERTINO_HQ_EARLY)
for y in range(1980, 1984):
    YEAR_LOCATIONS[y] = era(CUPERTINO_HQ_EARLY, CORK_PLANT)
for y in range(1984, 1993):
    YEAR_LOCATIONS[y] = era(CUPERTINO_HQ_EARLY, CORK_PLANT, FREMONT_PLANT)
for y in range(1993, 2001):
    YEAR_LOCATIONS[y] = era(INFINITE_LOOP, CORK_PLANT)
for y in range(2001, 2010):
    YEAR_LOCATIONS[y] = era(INFINITE_LOOP, CORK_PLANT, FOXCONN_SHENZHEN, SINGAPORE_HQ)
for y in range(2010, 2017):
    YEAR_LOCATIONS[y] = era(INFINITE_LOOP, CORK_PLANT, FOXCONN_SHENZHEN, FOXCONN_ZHENGZHOU, SINGAPORE_HQ, AUSTIN_CAMPUS)
for y in range(2017, 2021):
    YEAR_LOCATIONS[y] = era(APPLE_PARK, CORK_PLANT, FOXCONN_SHENZHEN, FOXCONN_ZHENGZHOU, SINGAPORE_HQ, AUSTIN_CAMPUS, INDIA_ASSEMBLY)
for y in range(2021, 2027):
    YEAR_LOCATIONS[y] = era(APPLE_PARK, CORK_PLANT, FOXCONN_SHENZHEN, FOXCONN_ZHENGZHOU, SINGAPORE_HQ, AUSTIN_CAMPUS, INDIA_ASSEMBLY, VIETNAM_ASSEMBLY)

import json
body = ",\n".join(f'  {y}: {json.dumps(locs)}' for y, locs in sorted(YEAR_LOCATIONS.items()))
ts = f'''import type {{ OperationLocation }} from "../../types";

export const appleOperationsLocations: Record<number, OperationLocation[]> = {{
{body}
}};
'''
with open("src/data/apple/operations.ts", "w") as f:
    f.write(ts)
print("Done:", len(YEAR_LOCATIONS), "years")
