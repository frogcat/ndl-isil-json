const fs = require('fs');
const RdfXmlParser = require("rdfxml-streaming-parser").RdfXmlParser;
const Factory = require('../src/quad2jsonld');

const argv = Array.from(process.argv).slice(2);
const factory = new Factory();
const files = argv.filter(x => x.endsWith(".rdf"));
const consume = function() {
  if (files.length > 0) {
    new RdfXmlParser()
      .import(fs.createReadStream(files.pop()))
      .on('data', function(quad) {
        factory.push(quad);
      })
      .on('error', console.error)
      .on('end', function() {
        consume();
      });
  } else {
    const jsonld = factory.finalize();
    if (argv.indexOf("--context") !== -1)
      delete jsonld["@graph"];
    if (argv.indexOf("--graph") !== -1)
      jsonld["@context"] = "https://frogcat.github.io/ndl-isil-json/ndl-isil.context.json";
    console.log(JSON.stringify(jsonld, null, 2));
  }
};
consume();
