const path = require("path");

console.log(path.sep);

const filePath = path.join(__dirname, "/parent//\\", "child", "text.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "sbfolder", "text.txt");
console.log(absolute);
