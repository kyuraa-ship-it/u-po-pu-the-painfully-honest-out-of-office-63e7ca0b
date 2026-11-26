import { mkdirSync, writeFileSync } from "node:fs";

// The Painfully Honest Out-of-Office — one auto-reply, 164 chars, gate 1-200.
const ENTRY =
  "Out of office: I'm on leave until Monday and my inbox is a queue I won't touch before then. Your email is safe, unread, and third in line behind two hundred others.";

// Gate self-check: 1-200 chars, not whitespace-only (mirrors the sealed scorer).
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry violates gate: ${ENTRY.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
