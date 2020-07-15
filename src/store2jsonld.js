module.exports = function(store, context, subjects) {

  const dig = function(subject, target) {
    if (target["@id"] === undefined && subject.uri) target["@id"] = subject.uri;
    store.statementsMatching(subject, undefined, undefined).forEach(t => {

      const o = t.object;

      let name = Object.keys(context).find(key => {
        const val = context[key];
        if (val["@id"] !== t.predicate.uri) return false;
        if (val["@container"] === "@language" && t.object.language) return true;
        if (val["@language"]) {
          return val["@language"] === t.object.language;
        }
        if (val["@type"]) {
          if (val["@type"] === "@id")
            return t.object.datatype === undefined;
          return val["@type"] === t.object.datatype.value;
        }
        return t.object.datatype.value === "http://www.w3.org/2001/XMLSchema#string";
      });

      if (t.predicate.uri === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type") {
        name = "@type";
      }

      if (name === undefined) {
        console.error(`unknown predicate ${t.predicate.uri}`);
        return;
      }

      const def = context[name];
      let v;
      if (name === "@type") {
        v = Object.keys(context).find(x => context[x]["@id"] === o.value);
      } else if (def["@type"] === "@id") {
        if (o.termType === "NamedNode") {
          v = o.value;
        } else {
          v = dig(o, {});
        }
      } else if (def["@container"] === "@language" && o.language) {
        if (target[name] === undefined)
          target[name] = {};
        if (target[name][o.language] === undefined)
          target[name][o.language] = o.value;
        else if (Array.isArray(target[name][o.language]))
          target[name][o.language].push(o.value);
        else target[name][o.language] = [target[name][o.language], o.value];
        return;
      } else {
        v = o.value;
      }

      if (target[name] === undefined) {
        target[name] = v;
      } else if (Array.isArray(target[name])) {
        if (target[name].indexOf(v) === -1)
          target[name].push(v);
      } else if (target[name] !== v) {
        target[name] = [target[name], v];
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
