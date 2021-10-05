const fs = require("fs");
const path = require("path");

const DATA_FILE = "./src/data/cards.json";
const INDEX_FILE = "./src/data/index.js";
const CARD_FILES = "./src/assets/cards/";
const IGNORE = [".DS_Store"];

const readDirectory = (base) => {
  const list = fs.readdirSync(base);

  return list
    .map((f) => {
      const file = [base, f].join("/");

      if (fs.statSync(file).isDirectory()) {
        return { [f]: readDirectory(file) };
      } else if (IGNORE.includes(f)) {
        return null;
      }
      return path.basename(f, ".svg");
    })
    .filter((i) => !!i);
};

const buildImports = (data) => {
  const imports = [].concat(
    ...Object.entries(data).map(([k, v]) =>
      v.map((i) => [[k, i].join("/"), `../assets/cards/${k}/${i}.svg`])
    )
  );

  const file = [];

  file.push('import cards from "./cards.json";');
  imports.forEach(([k, v], idx) => file.push(`import i${idx} from "${v}";`));

  file.push("");
  file.push("export const cardImages = {};");
  file.push("");

  imports.forEach(([k, v], idx) =>
    file.push(`cardImages[${JSON.stringify(k)}] = i${idx};`)
  );

  file.push("");
  file.push("export { cards };");

  fs.writeFileSync(INDEX_FILE, file.join("\n"));
};

const build = () => {
  const cards_data = Object.assign({}, ...readDirectory(CARD_FILES));

  buildImports(cards_data);

  fs.writeFileSync(DATA_FILE, JSON.stringify(cards_data, null, 2));
};

build();
