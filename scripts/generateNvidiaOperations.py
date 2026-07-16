import json

SANTA_CLARA_HQ_EARLY = {"name": "NVIDIA Headquarters (Santa Clara, early campus)", "city": "Santa Clara, CA", "country": "USA", "lat": 37.3897, "lng": -121.9695, "type": "headquarters", "note": "NVIDIA's Santa Clara headquarters prior to the Endeavor/Voyager purpose-built campus opening in 2017."}
NVIDIA_ENDEAVOR = {"name": "NVIDIA Endeavor & Voyager Headquarters", "city": "Santa Clara, CA", "country": "USA", "lat": 37.3706, "lng": -121.9647, "type": "headquarters", "note": "Purpose-built HQ campus (Endeavor building opened 2017, Voyager building opened 2022) in the heart of Silicon Valley."}
TAIWAN_OFFICE = {"name": "NVIDIA Taiwan (Manufacturing Partnerships)", "city": "Taipei", "country": "Taiwan", "lat": 25.0330, "lng": 121.5654, "type": "regional-hq", "note": "Coordinates fabrication partnerships with TSMC and other Asia-Pacific supply chain partners."}
ISRAEL_RD = {"name": "NVIDIA Israel R&D Center (Mellanox)", "city": "Yokneam / Tel Aviv", "country": "Israel", "lat": 32.6598, "lng": 35.1101, "type": "regional-hq", "note": "Became NVIDIA's most important international engineering hub following the $7B Mellanox acquisition, completed April 2020."}
INDIA_OFFICE = {"name": "NVIDIA India Engineering Center", "city": "Bengaluru / Pune / Hyderabad", "country": "India", "lat": 12.9716, "lng": 77.5946, "type": "regional-hq", "note": "Major software and chip design engineering hub supporting global product development."}

YEAR_LOCATIONS = {}
for y in [1993, 1999, 2006, 2012, 2016]:
    YEAR_LOCATIONS[y] = [SANTA_CLARA_HQ_EARLY, TAIWAN_OFFICE]
for y in [2018]:
    YEAR_LOCATIONS[y] = [NVIDIA_ENDEAVOR, TAIWAN_OFFICE, INDIA_OFFICE]
for y in [2020, 2022, 2023, 2024, 2025, 2026]:
    YEAR_LOCATIONS[y] = [NVIDIA_ENDEAVOR, TAIWAN_OFFICE, ISRAEL_RD, INDIA_OFFICE]

body = ",\n".join(f'  {y}: {json.dumps(locs)}' for y, locs in sorted(YEAR_LOCATIONS.items()))
ts = f'''import type {{ OperationLocation }} from "../../types";

export const nvidiaOperationsLocations: Record<number, OperationLocation[]> = {{
{body}
}};
'''
with open("src/data/nvidia/operations.ts", "w") as f:
    f.write(ts)
print("Done:", len(YEAR_LOCATIONS), "years")
