module.exports = function(store, context, subjects) {

  const shorten = function(uri) {
    if (uri === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type") return "@type";
    const key = Object.keys(context).find(key => uri.indexOf(context[key]) === 0);
    return key ? uri.replace(context[key], key + ":") : uri;
  };

  const dig = function(subject, target) {
    if (target["@id"] === undefined && subject.uri) target["@id"] = subject.uri;
    store.statementsMatching(subject, undefined, undefined).forEach(t => {
      const p = shorten(t.predicate.uri);
      const o = t.object;
      let v;
      switch (o.termType) {
        case "Literal":
          if (o.datatype.value === "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString") {
            v = {
              "@value": o.value,
              "@language": o.language
            };
            if (context[p] && context[p]["@language"] && context[p]["@language"] === v["@language"])
              v = v["@value"];
          } else if (o.datatype.value === "http://www.w3.org/2001/XMLSchema#string") {
            v = o.value;
          } else {
            v = {
              "@value": o.value,
              "@type": shorten(o.datatype.value)
            };
            if (context[p] && context[p]["@type"] && context[p]["@type"] === v["@type"])
              v = v["@value"];
          }
          break;
        case "NamedNode":
          if (p === "@type" || (context[p] && context[p]["@type"] === "@id"))
            v = shorten(o.value);
          else v = {
            "@id": shorten(o.value)
          };
          break;
        case "BlankNode":
          v = dig(o, {});
          break;
        default:
          console.error(o.termType);
          return;
      }
      if (target[p] === undefined) {
        target[p] = v;
      } else if (Array.isArray(target[p])) {
        if (target[p].indexOf(v) === -1)
          target[p].push(v);
      } else if (target[p] !== v) {
        target[p] = [target[p], v];
      }
    });
    return target;
  };

  const graph = [];

  subjects.forEach(s => {
    graph.push(dig(s, {}))
  });
  return {
    "@context": context,
    "@graph": graph
  };
};
