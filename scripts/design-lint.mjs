#!/usr/bin/env node
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = path.resolve(process.argv[2] || process.cwd());
const extensions = new Set([".css", ".scss", ".tsx", ".ts", ".jsx", ".js", ".vue", ".svelte"]);
const ignored = new Set(["node_modules", ".next", "dist", "build", ".git", ".vercel", "coverage", "starter", "foundations"]);

const rules = [
  { name: "hard-coded hex color", regex: /#[0-9a-fA-F]{3,8}\b/g, advice: "Prefer semantic color tokens." },
  { name: "hard-coded rgb/hsl/oklch color", regex: /\b(?:rgb|rgba|hsl|hsla|oklch|lab|lch)\([^;\n]+\)/g, advice: "Prefer semantic color tokens." },
  { name: "suspicious arbitrary pixel value", regex: /\b(?:margin|padding|gap|border-radius|top|right|bottom|left|width|height|max-width|min-height)\s*:\s*(?:1[1379]|2[13579]|3[13579]|4[1379]|5[1379])px\b/g, advice: "Use the approved spacing/radius scale unless this value is deliberately documented." }
];

const findings = [];

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (ignored.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) { await walk(full); continue; }
    if (!extensions.has(path.extname(entry.name))) continue;
    if (full.includes(`${path.sep}design${path.sep}`) || full.includes(`${path.sep}foundations${path.sep}`)) continue;
    const text = await readFile(full, "utf8");
    const lines = text.split(/\r?\n/);
    lines.forEach((line, index) => {
      if (line.includes("design-lint-ignore")) return;
      for (const rule of rules) {
        rule.regex.lastIndex = 0;
        const matches = [...line.matchAll(rule.regex)];
        for (const match of matches) {
          findings.push({ file: path.relative(root, full), line: index + 1, rule: rule.name, value: match[0].trim(), advice: rule.advice });
        }
      }
    });
  }
}

await walk(root);

if (!findings.length) {
  console.log("Design lint: no suspicious hard-coded visual values found.");
  process.exit(0);
}

for (const f of findings) {
  console.log(`${f.file}:${f.line}  ${f.rule}  ${f.value}`);
  console.log(`  ${f.advice}`);
}
console.log(`\n${findings.length} design-lint finding(s).`);
process.exitCode = 1;
