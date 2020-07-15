const fs = require('fs');
const json = JSON.parse(fs.readFileSync(process.argv[2], "UTF-8"));
console.log(JSON.stringify(json));
