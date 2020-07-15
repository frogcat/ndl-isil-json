const fs = require("fs");
const json2schema = require('../src/json2schema');
const root = JSON.parse(fs.readFileSync(process.argv[2], "UTF-8"));

console.log(JSON.stringify(json2schema(root), null, 2));
