import { cpSync, existsSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const source = resolve("frontend/.vercel/output");
const destination = resolve(".vercel/output");

if (!existsSync(source)) {
  throw new Error(`Missing Vercel build output at ${source}`);
}

rmSync(destination, { recursive: true, force: true });
cpSync(source, destination, { recursive: true });