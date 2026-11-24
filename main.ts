// Real-Life Patch Notes: The Comedy Changelog.
// The grader runs this as `node /bot/main.ts`; it writes one patch-note
// line (max 160 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "v2.5.1: fixed a bug where teeth bit the same spot on their cheek four times in one meal.";

// Fail loudly if the line ever breaks the gate (1-160 chars, non-blank),
// so a bad entry never passes silent.
if (LINE.length > 160 || LINE.trim().length === 0) {
  throw new Error("entry line must be 1-160 non-whitespace characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
