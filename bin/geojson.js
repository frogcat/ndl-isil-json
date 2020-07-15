const fs = require('fs');
const jsonld = JSON.parse(fs.readFileSync(process.argv[2], "UTF-8"));

const geojson = {
  "type": "FeatureCollection",
  "features": jsonld["@graph"].filter(a => a.hasSite && a.hasSite.long).map(a => {
    return {
      "type": "Feature",
      "properties": a,
      "geometry": {
        "type": "Point",
        "coordinates": [
          parseFloat(a.hasSite.long),
          parseFloat(a.hasSite.lat)
        ]
      }
    };
  })
};

console.log(JSON.stringify(geojson, null, 2));
