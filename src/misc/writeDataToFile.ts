import fs from "fs";

/**
 * Write to a file.
 * @param {string} filename
 * @param {object} content
 */
export const writeDataToFile = (filename: string, content: object) => {
  console.log(filename, content);
  fs.writeFileSync("./user.json", JSON.stringify(content), "utf8");
};
