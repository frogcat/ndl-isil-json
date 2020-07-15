const fs = require('fs');
const $rdf = require("rdflib");
const store2context = require("../src/store2context");

const store = $rdf.graph();

Array.from(process.argv).slice(2).filter(file => file.endsWith(".rdf")).forEach(file => {
  try {
    let body = fs.readFileSync(file, "UTF-8");
    // owl:sameAs の特例を回避するためパース前に namespace を書き換える
    body = body.replace("http://www.w3.org/2002/07/owl#", "http://example.org/");
    $rdf.parse(body, store, "http://example.org/", "application/rdf+xml");
  } catch (err) {
    console.error(err);
    return;
  }
});

const context = store2context(store);
Object.values(context).forEach(a => {
  a["@id"] = a["@id"].replace("http://example.org/", "http://www.w3.org/2002/07/owl#");
});
console.log(JSON.stringify(context, null, 2));
