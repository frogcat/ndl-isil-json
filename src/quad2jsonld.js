const cut = uri => uri.split(/[^[0-9-a-zA-Z]/).pop();
const isEqual = function(a, b) {
  if (typeof a === 'string') return a === b;
  if (a["@id"]) return a["@id"] === b["@id"];
  if (a["@value"] && a["@type"]) return a["@value"] === b["@value"] && a["@type"] === b["@type"];
  if (a["@value"] && a["@language"]) return a["@value"] === b["@value"] && a["@language"] === b["@language"];
  return false;
};

module.exports = class Factory {
  constructor() {
    this.rev = {};
    this.map = {};
  }
  push(quad) {
    const rev = this.rev;
    const map = this.map;

    const s = quad.subject.value;
    const p = quad.predicate.value;
    const o = quad.object;

    if (rev[p] === undefined) {
      rev[p] = {
        "@id": p,
        "@label": cut(p),
        "@language": new Set(),
        "@type": new Set()
      };
    }
    if (p === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type") {
      rev[p]["@label"] = "@type";
      if (rev[o.value] === undefined) rev[o.value] = {
        "@id": o.value,
        "@label": cut(o.value),
        "@language": new Set(),
        "@type": new Set()
      }
    }

    const def = rev[p];
    const label = def["@label"];

    let v = null;
    if (o.datatype) {
      switch (o.datatype.value) {
        case "http://www.w3.org/2001/XMLSchema#string":
          v = o.value;
          break;
        case "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString":
          v = {
            "@value": o.value,
            "@language": o.language
          };
          def["@language"].add(o.language);
          break;
        default:
          v = {
            "@value": o.value,
            "@type": o.datatype.value
          };
          def["@type"].add(o.datatype.value);
          break;
      }
    } else {
      v = {
        "@id": o.value
      };
      def["@type"].add("@id");
    }

    if (map[s] === undefined) {
      map[s] = {};
      if (quad.subject.termType === "NamedNode") map[s]["@id"] = s;
    }
    if (map[s][label] === undefined) {
      map[s][label] = v;
    } else if (Array.isArray(map[s][label])) {
      if (!map[s][label].find(x => isEqual(x, v))) map[s][label].push(v);
    } else if (!isEqual(map[s][label], v)) {
      map[s][label] = [map[s][label], v];
    }
  }
  finalize() {
    const rev = this.rev;
    const map = this.map;

    const context = {};
    Object.values(rev).sort((a, b) => a["@label"] < b["@label"] ? -1 : 1).forEach(a => {
      a["@type"] = Array.from(a["@type"]);

      if (a["@type"].length === 0) delete a["@type"];
      else if (a["@type"].length === 1) a["@type"] = a["@type"][0];
      else {
        a["@type"].forEach(x => {
          context[a["@label"] + cut(x)] = {
            "@id": a["@id"],
            "@type": x
          };
        });
        return;
      }

      a["@language"] = Array.from(a["@language"]);
      if (a["@language"].length === 0) delete a["@language"];
      else if (a["@language"].length === 1) a["@language"] = a["@language"][0];
      else {
        delete a["@language"];
        a["@container"] = "@language";
      }

      const key = a["@label"];
      delete a["@label"];
      if (key !== "@type") context[key] = a;
    });

    Object.values(map).forEach(f => {
      Object.keys(f).forEach(k => {
        let v = Array.isArray(f[k]) ? f[k] : [f[k]];
        if (k === "@id") {
          // do nothing
        } else if (k === "@type") {
          v = v.map(x => Object.keys(context).find(y => context[y]["@id"] === x["@id"]));
        } else {
          const def = context[k];
          if (def === undefined) {
            delete f[k];
            v.forEach(a => {
              const k2 = k + cut(a["@type"]);
              if (context[k2]) {
                if (f[k2] === undefined) f[k2] = a["@value"];
                else if (Array.isArray(f[k2])) f[k2].push(a["@value"]);
                else f[k2] = [f[k2], a["@value"]];
              }
            });
            return;
          } else if (def["@type"] === "@id") {
            v = v.map(x => map[x["@id"]] || x["@id"]);
          } else if (def["@language"]) {
            v = v.map(x => x["@language"] === def["@language"] ? x["@value"] : x);
          } else if (def["@container"] === "@language") {
            const obj = {};
            v.forEach(a => {
              const lang = a["@language"];
              const val = a["@value"];
              if (obj[lang] === undefined) obj[lang] = val;
              else if (Array.isArray(obj[lang])) obj[lang].push(val);
              else obj[lang] = [obj[lang], val];
            });
            v = [obj];
          }
        }
        if (v.length === 0) delete f[k];
        else if (v.length === 1) f[k] = v[0];
        else f[k] = v;
      });
    });

    const graph = Object.values(map).filter(x => x["@type"] === "Organization");

    return {
      "@context": context,
      "@graph": graph
    };

  }
}
