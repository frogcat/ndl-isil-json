const fs = require('fs');
const $rdf = require("rdflib");
const store2context = require("../src/store2context");
const store2jsonld = require("../src/store2jsonld");

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

const subjects = store.statementsMatching(
  undefined,
  $rdf.sym("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
  $rdf.sym("http://schema.org/Organization")
).map(t => t.subject);

const jsonld = store2jsonld(store, context, subjects);
// owl の namespace を正常化する
Object.values(jsonld["@context"]).forEach(a => {
  a["@id"] = a["@id"].replace("http://example.org/", "http://www.w3.org/2002/07/owl#");
});

console.log(JSON.stringify(jsonld, null, 2));
