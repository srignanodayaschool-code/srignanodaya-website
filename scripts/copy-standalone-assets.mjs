import { cp, mkdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const standaloneDir = path.join(".next", "standalone");

async function copyIfExists(source, target) {
  if (!existsSync(source)) {
    return;
  }

  await rm(target, { recursive: true, force: true });
  await mkdir(path.dirname(target), { recursive: true });
  await cp(source, target, { recursive: true });
}

if (!existsSync(standaloneDir)) {
  console.warn("Standalone output was not found; skipping asset copy.");
  process.exit(0);
}

await copyIfExists("public", path.join(standaloneDir, "public"));
await copyIfExists(path.join(".next", "static"), path.join(standaloneDir, ".next", "static"));
