import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";

const client = new Anthropic(); // reads ANTHROPIC_API_KEY from env

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

async function generateYearChunk(company: string, years: number[]): Promise<any[]> {
  const prompt = `You are a financial historian with expertise in corporate ownership and governance.

Return a JSON array of records for ${company} covering the years: ${years.join(", ")}.

Each record must follow this exact TypeScript shape:
{
  company: string,        // full legal name at that year
  year: number,
  ceo: { name: string, role: string },
  board: [{ name: string, role: string }],   // all board members
  ownership: [
    { name: string, percentage: number, color: string, shareValue: number }
  ],
  valuation: number,      // total company value in USD
  stockUnitValue: number, // value of one share/unit
  notes: string           // cite source or note if estimated
}

Rules:
- ownership percentages must sum to exactly 100
- shareValue = valuation * (percentage / 100)
- assign distinct, visually pleasing hex colors to each owner
- use historical records where possible; for modern years where founders have sold/diluted holdings, reflect institutional/public ownership (e.g. "Public Shareholders", "Vanguard", "BlackRock") instead of forcing founder percentages
- note estimates clearly in "notes"
- return ONLY a valid JSON array, no markdown fences, no commentary

Return the array now:`;

  const stream = client.messages.stream({
    model: "claude-opus-4-8",
    max_tokens: 16000,
    thinking: { type: "adaptive" },
    messages: [{ role: "user", content: prompt }],
  });

  const response = await stream.finalMessage();

  let text = response.content
    .filter((b) => b.type === "text")
    .map((b) => (b as { type: "text"; text: string }).text)
    .join("")
    .trim();

  // strip ```json ... ``` fences if the model adds them anyway
  if (text.startsWith("```")) {
    text = text.replace(/^```[a-z]*\n?/i, "").replace(/```$/, "").trim();
  }

  return JSON.parse(text);
}

async function generateCompanyData(company: string, years: number[]) {
  console.log(`Generating data for ${company}: ${years[0]}–${years[years.length - 1]} (${years.length} years)...`);

  const slug = company.toLowerCase().replace(/\s+/g, "_");
  const dir = path.join("src", "data", slug);
  fs.mkdirSync(dir, { recursive: true });

  const remaining = years.filter((y) => !fs.existsSync(path.join(dir, `${y}.json`)));
  const skipped = years.length - remaining.length;
  if (skipped > 0) console.log(`  Skipping ${skipped} already-generated year(s).`);

  const batches = chunk(remaining, 5); // ~5 years per request keeps output well within limits
  const allRecords: any[] = years
    .filter((y) => fs.existsSync(path.join(dir, `${y}.json`)))
    .map((y) => JSON.parse(fs.readFileSync(path.join(dir, `${y}.json`), "utf-8")));

  for (const batch of batches) {
    console.log(`  Requesting ${batch.join(", ")}...`);
    const records = await generateYearChunk(company, batch);
    for (const record of records) {
      fs.writeFileSync(
        path.join(dir, `${record.year}.json`),
        JSON.stringify(record, null, 2)
      );
      console.log(`    ✓ ${record.year}`);
    }
    allRecords.push(...records);
  }

  allRecords.sort((a, b) => a.year - b.year);

  const ts = `import type { CompanyYear } from "../../types";\n\nexport const ${slug}Records: CompanyYear[] = ${JSON.stringify(allRecords, null, 2)};\n`;
  fs.writeFileSync(path.join(dir, "records.ts"), ts);
  console.log(`✓ Wrote ${dir}/records.ts (${allRecords.length} years)`);
}

// --- Run ---
// Usage: npm run generate -- "Apple" 1976 2026   (treated as a range if exactly 2 args and second > first)
// Or:    npm run generate -- "Apple" 1976 1977 1980 1984   (explicit list)
const [, , companyArg, ...yearArgs] = process.argv;
if (!companyArg) {
  console.error('Usage: npm run generate -- "Apple" 1976 2026');
  process.exit(1);
}

let years: number[];
if (yearArgs.length === 2 && Number(yearArgs[1]) > Number(yearArgs[0]) + 2) {
  const start = Number(yearArgs[0]);
  const end = Number(yearArgs[1]);
  years = Array.from({ length: end - start + 1 }, (_, i) => start + i);
} else {
  years = yearArgs.length ? yearArgs.map(Number) : [1976, 1977, 1978, 1979, 1980];
}

generateCompanyData(companyArg, years);
