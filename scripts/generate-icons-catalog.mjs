import fs from "fs";
import path from "path";

const repoOwner = "jabelaz93-byte";
const repoName = "icon-library";
const branch = "main";

const rootDir = process.cwd();

const folders = ["All", "calendar_icons", "icon_library_outline", "socials"];

const allowedExtensions = [".svg", ".png"];

const categoryMap = {
  All: "all",
  calendar_icons: "calendar",
  icon_library_outline: "outline",
  socials: "social",
};

const getType = (file) => path.extname(file).replace(".", "");

const getName = (file) => path.basename(file, path.extname(file));

const createUrl = (folder, file) =>
  `https://cdn.jsdelivr.net/gh/${repoOwner}/${repoName}@${branch}/${folder}/${file}`;

const icons = [];

for (const folder of folders) {
  const folderPath = path.join(rootDir, folder);

  if (!fs.existsSync(folderPath)) continue;

  const files = fs
    .readdirSync(folderPath)
    .filter((file) => allowedExtensions.includes(path.extname(file)))
    .sort();

  for (const file of files) {
    icons.push({
      name: getName(file),
      file,
      folder,
      category: categoryMap[folder] ?? "uncategorized",
      type: getType(file),
      url: createUrl(folder, file),
      tags: getName(file).split("-"),
    });
  }
}

const catalog = {
  name: "Icon Library",
  repository: `https://github.com/${repoOwner}/${repoName}`,
  cdnProvider: "jsDelivr",
  cdnRoot: `https://cdn.jsdelivr.net/gh/${repoOwner}/${repoName}@${branch}/`,
  totalIcons: icons.length,
  folders,
  icons,
};

fs.writeFileSync(
  path.join(rootDir, "ICONS_CATALOG.json"),
  JSON.stringify(catalog, null, 2),
);

console.log(`Generated ICONS_CATALOG.json with ${icons.length} icons.`);
