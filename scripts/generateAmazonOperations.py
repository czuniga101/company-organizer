import json

SEATTLE_HQ_EARLY = {"name": "Amazon Headquarters (SoDo, Seattle)", "city": "Seattle, WA", "country": "USA", "lat": 47.5807, "lng": -122.3340, "type": "headquarters", "note": "Amazon's early Seattle headquarters in the SoDo neighborhood, prior to the South Lake Union campus."}
SEATTLE_HQ = {"name": "Amazon Headquarters (South Lake Union)", "city": "Seattle, WA", "country": "USA", "lat": 47.6205, "lng": -122.3382, "type": "headquarters", "note": "Amazon's primary headquarters, anchored at 410 Terry Avenue North in the South Lake Union campus."}
ARLINGTON_HQ2 = {"name": "Amazon HQ2 (Arlington, VA)", "city": "Arlington, VA", "country": "USA", "lat": 38.8567, "lng": -77.0525, "type": "headquarters", "note": "Second headquarters selected November 2018; first phase (Jasper and Merlin towers) opened June 2023."}
FULFILLMENT_NETWORK = {"name": "US Fulfillment Center Network", "city": "Multiple US locations", "country": "USA", "lat": 39.8283, "lng": -98.5795, "type": "manufacturing", "note": "Amazon's continent-spanning fulfillment and logistics network, its core e-commerce operations moat."}
AWS_DATA_CENTERS = {"name": "AWS Data Center Region (US-East, N. Virginia)", "city": "Ashburn, VA", "country": "USA", "lat": 39.0438, "lng": -77.4874, "type": "manufacturing", "note": "Northern Virginia is AWS's largest and original cloud infrastructure region, launched with S3/EC2 in 2006."}

YEAR_LOCATIONS = {}
for y in [1994, 1997]:
    YEAR_LOCATIONS[y] = [SEATTLE_HQ_EARLY]
for y in [2006, 2012]:
    YEAR_LOCATIONS[y] = [SEATTLE_HQ_EARLY, AWS_DATA_CENTERS, FULFILLMENT_NETWORK]
for y in [2017, 2018, 2020]:
    YEAR_LOCATIONS[y] = [SEATTLE_HQ, AWS_DATA_CENTERS, FULFILLMENT_NETWORK]
for y in [2021, 2022]:
    YEAR_LOCATIONS[y] = [SEATTLE_HQ, ARLINGTON_HQ2, AWS_DATA_CENTERS, FULFILLMENT_NETWORK]
for y in [2023, 2024, 2025, 2026]:
    YEAR_LOCATIONS[y] = [SEATTLE_HQ, ARLINGTON_HQ2, AWS_DATA_CENTERS, FULFILLMENT_NETWORK]

body = ",\n".join(f'  {y}: {json.dumps(locs)}' for y, locs in sorted(YEAR_LOCATIONS.items()))
ts = f'''import type {{ OperationLocation }} from "../../types";

export const amazonOperationsLocations: Record<number, OperationLocation[]> = {{
{body}
}};
'''
with open("src/data/amazon/operations.ts", "w") as f:
    f.write(ts)
print("Done:", len(YEAR_LOCATIONS), "years")
