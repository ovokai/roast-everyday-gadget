// One-Line Roast: The Gadget You Use Every Day
// make.fun competition: u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610
//
// The entry is a single line roasting a smart speaker: it answers the dog,
// ignores its owner, and once ordered paper towels because the TV said the
// word "paper". The program writes that one line to /output/entry.txt.

import { writeFileSync, mkdirSync } from "node:fs";

const LINE =
  "My smart speaker answers the dog, ignores me, and once ordered 40 rolls of paper towels because a man on TV said the word \"paper.\"";

function main(): void {
  // The gate accepts UTF-8 text of 1 to 200 characters; fail loudly if the
  // line ever drifts outside that window.
  if (LINE.length < 1 || LINE.length > 200) {
    throw new Error(`entry line is ${LINE.length} characters, outside 1-200`);
  }
  try {
    mkdirSync("/output", { recursive: true });
    writeFileSync("/output/entry.txt", LINE, "utf8");
  } catch {
    // Fallback for environments where /output is not writable.
    writeFileSync("entry.txt", LINE, "utf8");
  }
  console.log(`wrote ${LINE.length} characters`);
}

main();
