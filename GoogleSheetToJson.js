const fs = require("fs-extra");
const unflatten = require("flat").unflatten;
const { extractSheets } = require("spreadsheet-to-json");
const path = require("path");

extractSheets(
  {
    spreadsheetKey: "1oZCmvAlERcNdR6a3VndXK8M8mduX9d8zYQnf8u_DS2I",
    credentials: require("./google/nuxt-test-402108-3854cb7b5d1a.json"),
    sheetsToExtract: ["index", "about"],
  },
  (err, data) => {
    if (err) throw err;
    const read = [...data["index"], ...data["about"]];
    const result = {};
    const files = [];

    for (const key in read[0]) {
      if (key !== "key") {
        files.push(key);
        result[key] = {};
      }
    }
    read.forEach((el) => {
      for (const file of files) {
        result[file][el["key"]] = el[file] ? el[file] : "";
      }
    });
    for (const fileName of files) {
      fs.ensureDirSync(
        path.dirname(path.resolve(__dirname, "./language", `${fileName}.json`))
      );
      fs.writeJSONSync(
        path.resolve(__dirname, "./language", `${fileName}.json`),
        unflatten(result[fileName], { object: true }),
        { spaces: 2 }
      );
    }
  }
);
