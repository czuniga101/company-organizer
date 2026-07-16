import json

MENLO_PARK_GARAGE = {"name": "Google Founding Garage", "city": "Menlo Park, CA", "country": "USA", "lat": 37.4538, "lng": -122.1822, "type": "headquarters", "note": "Google was incorporated in a rented Menlo Park garage in September 1998."}
GOOGLEPLEX = {"name": "Googleplex Headquarters", "city": "Mountain View, CA", "country": "USA", "lat": 37.4220, "lng": -122.0841, "type": "headquarters", "note": "Google moved to its Mountain View \"Googleplex\" campus in 2004, which remains Alphabet's headquarters."}
DUBLIN_HQ = {"name": "Google EMEA Headquarters", "city": "Dublin", "country": "Ireland", "lat": 53.3441, "lng": -6.2438, "type": "regional-hq", "note": "Google's European headquarters, coordinating Europe/Middle East/Africa operations since 2003."}
US_DATA_CENTERS = {"name": "US Data Center Network", "city": "Multiple US locations", "country": "USA", "lat": 45.5946, "lng": -121.1787, "type": "manufacturing", "note": "Google's hyperscale data center network (beginning with The Dalles, Oregon in 2006) supporting Search, Cloud, and AI infrastructure."}

YEAR_LOCATIONS = {
  1998: [MENLO_PARK_GARAGE],
  2004: [GOOGLEPLEX],
  2011: [GOOGLEPLEX, DUBLIN_HQ, US_DATA_CENTERS],
  2015: [GOOGLEPLEX, DUBLIN_HQ, US_DATA_CENTERS],
  2019: [GOOGLEPLEX, DUBLIN_HQ, US_DATA_CENTERS],
  2020: [GOOGLEPLEX, DUBLIN_HQ, US_DATA_CENTERS],
  2022: [GOOGLEPLEX, DUBLIN_HQ, US_DATA_CENTERS],
  2024: [GOOGLEPLEX, DUBLIN_HQ, US_DATA_CENTERS],
  2025: [GOOGLEPLEX, DUBLIN_HQ, US_DATA_CENTERS],
  2026: [GOOGLEPLEX, DUBLIN_HQ, US_DATA_CENTERS],
}

body = ",\n".join(f'  {y}: {json.dumps(locs)}' for y, locs in sorted(YEAR_LOCATIONS.items()))
ts = f'''import type {{ OperationLocation }} from "../../types";

export const googleOperationsLocations: Record<number, OperationLocation[]> = {{
{body}
}};
'''
with open("src/data/google/operations.ts", "w") as f:
    f.write(ts)
print("Done:", len(YEAR_LOCATIONS), "years")
