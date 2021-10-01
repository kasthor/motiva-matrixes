const fs = require("fs");
const path = require("path");

const DATA_FILE = "./src/data/cards.json";
const CARD_FILES = "./public/cards/";
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

const build = () => {
  fs.writeFileSync(
    DATA_FILE,
    JSON.stringify(Object.assign({}, ...readDirectory(CARD_FILES)), null, 2)
  );
};

build();
