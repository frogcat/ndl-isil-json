const fs = require('fs');
const RdfXmlParser = require("rdfxml-streaming-parser").RdfXmlParser;
const Factory = require('../src/quad2jsonld');

const factory = new Factory();
const files = Array.from(process.argv).slice(2).filter(x => x.endsWith(".rdf"));
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
    console.log(JSON.stringify(jsonld, null, 2));
  }
};
consume();
