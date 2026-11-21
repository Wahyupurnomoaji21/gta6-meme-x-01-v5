// gta6-meme-x-01-v5 — entry program for "Post a GTA 6 meme on X" (make.fun).
//
// The entry itself is the X post named in POST.json: the house reads the
// post from X and judges its first picture and its text. This program does
// nothing more than copy POST.json from the repository root into the output
// directory, byte for byte, so the house can find it.
//
// Node 22, standard library only. No network, no arguments, no clock,
// no files outside the repository. Exits 0 on success.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output";
const source = join(repoRoot, "POST.json");
const target = join(outputDir, "POST.json");

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);

// The grader runs this program twice and expects identical bytes both
// times, so confirm the copy landed byte for byte before reporting success.
const sourceBytes = readFileSync(source);
const targetBytes = readFileSync(target);
if (!sourceBytes.equals(targetBytes)) {
  console.error(`POST.json copy mismatch: ${target} differs from ${source}`);
  process.exit(1);
}
console.log(`POST.json copied to ${target} (${targetBytes.length} bytes, verified)`);
