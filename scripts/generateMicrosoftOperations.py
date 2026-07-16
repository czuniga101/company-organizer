import json

ALBUQUERQUE_HQ = {"name": "Microsoft Founding Office", "city": "Albuquerque, NM", "country": "USA", "lat": 35.0844, "lng": -106.6504, "type": "headquarters", "note": "Microsoft's original 1975 headquarters, before relocating to the Seattle area in 1979."}
REDMOND_HQ = {"name": "Microsoft Headquarters (One Microsoft Way)", "city": "Redmond, WA", "country": "USA", "lat": 47.6396, "lng": -122.1281, "type": "headquarters", "note": "Microsoft's main campus since February 1986, now spanning 500 acres and 8M+ sq ft across 125+ buildings."}
DUBLIN_HQ = {"name": "Microsoft EMEA Headquarters", "city": "Dublin", "country": "Ireland", "lat": 53.3498, "lng": -6.2603, "type": "regional-hq", "note": "Microsoft's European headquarters, coordinating Europe/Middle East/Africa operations."}
REDMOND_DATACENTER = {"name": "Redmond Ridge Data Center", "city": "Redmond, WA", "country": "USA", "lat": 47.6740, "lng": -122.0090, "type": "manufacturing", "note": "A 57,000 sq ft data center near Microsoft's HQ campus, built in July 2009, part of the Azure global infrastructure network." }

YEAR_LOCATIONS = {
  1975: [ALBUQUERQUE_HQ],
  1986: [REDMOND_HQ],
  1995: [REDMOND_HQ, DUBLIN_HQ],
  2000: [REDMOND_HQ, DUBLIN_HQ],
  2007: [REDMOND_HQ, DUBLIN_HQ, REDMOND_DATACENTER],
  2014: [REDMOND_HQ, DUBLIN_HQ, REDMOND_DATACENTER],
  2019: [REDMOND_HQ, DUBLIN_HQ, REDMOND_DATACENTER],
  2021: [REDMOND_HQ, DUBLIN_HQ, REDMOND_DATACENTER],
  2024: [REDMOND_HQ, DUBLIN_HQ, REDMOND_DATACENTER],
  2025: [REDMOND_HQ, DUBLIN_HQ, REDMOND_DATACENTER],
  2026: [REDMOND_HQ, DUBLIN_HQ, REDMOND_DATACENTER],
}

body = ",\n".join(f'  {y}: {json.dumps(locs)}' for y, locs in sorted(YEAR_LOCATIONS.items()))
ts = f'''import type {{ OperationLocation }} from "../../types";

export const microsoftOperationsLocations: Record<number, OperationLocation[]> = {{
{body}
}};
'''
with open("src/data/microsoft/operations.ts", "w") as f:
    f.write(ts)
print("Done:", len(YEAR_LOCATIONS), "years")
