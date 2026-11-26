// Make the AI Judge Laugh
// Writes one office-life joke, a single line, to /output/entry.txt
// (MAKEFUN_OUTPUT_DIR overrides /output outside the grader)
import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

const line =
  "The printer only jams when the deadline is real, which is how I know it understands this job better than my boss does.";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
