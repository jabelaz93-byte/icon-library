import fs from "fs";
import path from "path";

const CDN_ROOT =
  "https://cdn.jsdelivr.net/gh/jabelaz93-byte/icon-library@main/";
const ROOT = process.cwd();

const folders = [
  "big-icons",
  "calendar-icons",
  "core-icons",
  "corps",
  "socials",
];

const allowedExtensions = [".svg", ".png", ".jpg", ".jpeg", ".webp"];

function titleCase(value) {
  return value
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function getCategory(folder) {
  if (folder === "calendar-icons") return "calendar";
  if (folder === "core-icons") return "core";
  if (folder === "socials") return "social";
  if (folder === "corps") return "corporate";
  if (folder === "big-icons") return "large";
  return "general";
}

function getFiles(folder) {
  const folderPath = path.join(ROOT, folder);

  if (!fs.existsSync(folderPath)) return [];

  return fs
    .readdirSync(folderPath)
    .filter((file) =>
      allowedExtensions.includes(path.extname(file).toLowerCase()),
    )
    .sort((a, b) => a.localeCompare(b));
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

const iconsIndex = {};
const corpsIndex = {};
const catalogItems = [];

for (const folder of folders) {
  const files = getFiles(folder);

  for (const file of files) {
    const ext = path.extname(file).replace(".", "").toLowerCase();
    const name = path.basename(file, path.extname(file));
    const url = `${CDN_ROOT}${folder}/${file}`;

    iconsIndex[name] = url;

    if (folder === "corps") {
      corpsIndex[name] = url;
    }

    catalogItems.push({
      name,
      label: titleCase(file),
      file,
      folder,
      category: getCategory(folder),
      type: ext,
      url,
      tags: name.split("-"),
    });
  }
}

const catalog = {
  name: "Icon Library",
  repository: "https://github.com/jabelaz93-byte/icon-library",
  cdnProvider: "jsDelivr",
  cdnRoot: CDN_ROOT,
  totalAssets: catalogItems.length,
  folders,
  generatedAt: new Date().toISOString(),
  icons: catalogItems,
};

const iconLibraryJs = `window.IconLibrary = ${JSON.stringify(iconsIndex, null, 2)};`;

writeJson(path.join(ROOT, "indexes", "icons-index.json"), iconsIndex);
writeJson(path.join(ROOT, "indexes", "corps-index.json"), corpsIndex);
writeJson(path.join(ROOT, "indexes", "icons-catalog.json"), catalog);

fs.writeFileSync(path.join(ROOT, "indexes", "icon-library.js"), iconLibraryJs);

console.log(
  `Generated indexes/icons-index.json: ${Object.keys(iconsIndex).length} assets`,
);
console.log(
  `Generated indexes/corps-index.json: ${Object.keys(corpsIndex).length} logos`,
);
console.log(
  `Generated indexes/icons-catalog.json: ${catalogItems.length} catalog items`,
);
console.log("Generated indexes/icon-library.js");
