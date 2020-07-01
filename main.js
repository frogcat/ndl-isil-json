const fs = require('fs');
const $rdf = require("rdflib");
const store2jsonld = require("./src/store2jsonld");

const context = {
  "link": "http://www.w3.org/2007/ont/link#",
  "gn": "http://www.geonames.org/ontology#",
  "schema": "http://schema.org/",
  "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
  "geo": "http://www.w3.org/2003/01/geo/wgs84_pos#",
  "dbpedia": "http://dbpedia.org/ontology/",
  "owl": "http://example.org/",
  "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
  "org": "http://www.w3.org/ns/org#",
  "dcterms": "http://purl.org/dc/terms/",
  "org:classification": {
    "@type": "@id"
  },
  "owl:sameAs": {
    "@type": "@id"
  },
  "schema:url": {
    "@type": "@id"
  },
  "schema:areaServed": {
    "@type": "@id"
  },
  "rdfs:seeAlso": {
    "@type": "@id"
  }
};

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

const subjects = store.statementsMatching(
  undefined,
  $rdf.sym("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
  $rdf.sym("http://schema.org/Organization")
).map(t => t.subject);

const jsonld = store2jsonld(store, context, subjects);
// owl の namespace を正常化する
jsonld["@context"].owl = "http://www.w3.org/2002/07/owl#";

const geojson = {
  "type": "FeatureCollection",
  "features": jsonld["@graph"].filter(a => a["org:hasSite"] && a["org:hasSite"]["geo:long"]).map(a => {
    return {
      "type": "Feature",
      "properties": a,
      "geometry": {
        "type": "Point",
        "coordinates": [
          parseFloat(a["org:hasSite"]["geo:long"]),
          parseFloat(a["org:hasSite"]["geo:lat"])
        ]
      }
    };
  })
};

fs.writeFileSync(`${__dirname}/dist/ndl-isil-geojson.json`, JSON.stringify(geojson, null, 2), "UTF-8");
fs.writeFileSync(`${__dirname}/dist/ndl-isil-geojson.min.json`, JSON.stringify(geojson), "UTF-8");
fs.writeFileSync(`${__dirname}/dist/ndl-isil-jsonld.json`, JSON.stringify(jsonld, null, 2), "UTF-8");
fs.writeFileSync(`${__dirname}/dist/ndl-isil-jsonld.min.json`, JSON.stringify(jsonld), "UTF-8");
