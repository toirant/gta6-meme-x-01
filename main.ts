// main.ts — gta6-meme-x-01 entry program.
//
// Copies POST.json from this repository into the output directory.
// That is the program's whole job: the house reads the X post itself
// from the URL in POST.json, so nothing this program writes is judged.
//
// The grader runs this program twice, each time with
// MAKEFUN_OUTPUT_DIR set to a fresh directory, and both runs must
// write identical bytes. So the program copies the file byte for
// byte, reads no clock and no network, and prints nothing.
//
// Run it the way the grader does:
//
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// The repository root is the directory this file lives in, unless the
// harness points elsewhere with MAKEFUN_BOT_DIR.
const repoRoot = resolve(
  process.env.MAKEFUN_BOT_DIR ?? dirname(fileURLToPath(import.meta.url)),
);

// The grader sets MAKEFUN_OUTPUT_DIR; /output is the documented default.
const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");

const sourcePath = join(repoRoot, "POST.json");
const targetPath = join(outputDir, "POST.json");

if (!existsSync(sourcePath)) {
  throw new Error(`POST.json not found in ${repoRoot}`);
}

// Read the file once and check it holds a JSON object with a url, so a
// broken placeholder fails loudly here instead of shipping bad bytes.
const bytes = readFileSync(sourcePath);
const parsed: unknown = JSON.parse(bytes.toString("utf8"));
if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) {
  throw new Error("POST.json must hold a JSON object");
}
if (typeof (parsed as { url?: unknown }).url !== "string") {
  throw new Error("POST.json must hold a url string");
}
const postUrl = (parsed as { url: string }).url;

// The house only reads an X post address: x.com or twitter.com, an
// optional www./mobile. prefix, a handle, then /status/<digits> (or
// /i/web/status/<digits>). A placeholder that does not look like one
// fails here, before anything is shipped.
const postAddress =
  /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/\s]+\/(?:i\/web\/)?status\/\d+$/;
if (!postAddress.test(postUrl)) {
  throw new Error(`POST.json url is not an X post address: ${postUrl}`);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(sourcePath, targetPath);
