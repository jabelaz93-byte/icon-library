import fs from "fs";
import path from "path";

const REPO = "https://cdn.jsdelivr.net/gh/jabelaz93-byte/icon-library@main";

const OUTPUT_FILE = "./indexes/icon-library.js";

const FOLDERS = [
  "core-icons",
  "calendar-icons",
  "socials",
  "corps",
  "big-icons",
];

const icons = {};

for (const folder of FOLDERS) {
  if (!fs.existsSync(folder)) continue;

  const files = fs.readdirSync(folder);

  for (const file of files) {
    const ext = path.extname(file);

    if (![".svg", ".png", ".jpg", ".jpeg", ".webp"].includes(ext)) {
      continue;
    }

    const iconName = path.basename(file, ext);

    icons[iconName] = `${REPO}/${folder}/${file}`;
  }
}

const sortedIcons = Object.keys(icons)
  .sort()
  .reduce((obj, key) => {
    obj[key] = icons[key];
    return obj;
  }, {});

const output = `window.IconLibrary = ${JSON.stringify(
  sortedIcons,
  null,
  2,
)};\n`;

fs.mkdirSync("./indexes", { recursive: true });
fs.writeFileSync(OUTPUT_FILE, output);

console.log(
  `Generated ${OUTPUT_FILE} with ${Object.keys(sortedIcons).length} icons`,
);
