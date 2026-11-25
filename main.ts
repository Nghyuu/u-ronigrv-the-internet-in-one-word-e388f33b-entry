import { writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

// The internet in one word, invented fresh in this session.
const WORD = "feral";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const text = WORD + "\n";
if (text.length < 1 || text.length > 30 || !/\S/.test(text)) {
  throw new Error("entry must be 1-30 characters of non-whitespace text");
}
if (/\s/.test(WORD)) {
  throw new Error("entry must be a single word");
}

const entry = join(outDir, "entry.txt");
writeFileSync(entry, text, "utf8");
chmodSync(entry, 0o644);
