#!/usr/bin/env node
import { cp, mkdir, access } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const source = path.resolve(here, "../starter/project-design");
const targetRoot = path.resolve(process.argv[2] || process.cwd());
const target = path.join(targetRoot, "design");

try {
  await access(target);
  console.error(`Refusing to overwrite existing design directory: ${target}`);
  process.exit(1);
} catch {}

await mkdir(targetRoot, { recursive: true });
await cp(source, target, { recursive: true });
console.log(`Created ${target}`);
console.log("Next: complete BRAND.md and design.md before implementing UI.");
