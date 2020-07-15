const cut = uri => uri.split(/[^[0-9-a-zA-Z]/).pop();

module.exports = function(store) {


  const context = {};

  // URI をキーとしてクラス、プロパティのコンテクスト定義を作成
  store.statementsMatching(undefined, undefined, undefined).forEach(t => {
    const p = t.predicate.uri;
    const o = t.object;
    if (p === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type") {
      context[o.value] = {
        "@id": o.value,
        "@language": new Set(),
        "@type": new Set()
      };
    } else {
      const a = context[p] || (context[p] = {
        "@id": p,
        "@language": new Set(),
        "@type": new Set()
      });
      if (o.language) a["@language"].add(o.language);
      a["@type"].add(o.datatype ? o.datatype.value : "@id");
    }
  });

  // @language プロパティの事後処理
  Object.values(context).forEach(def => {
    def["@language"] = Array.from(def["@language"]);
    if (def["@language"].length === 0) delete def["@language"];
    else if (def["@language"].length === 1) def["@language"] = def["@language"][0];
    else {
      delete def["@language"];
      def["@container"] = "@language";
    }
  });

  // @type プロパティの事後処理
  Object.values(context).forEach(def => {
    def["@type"] = Array.from(def["@type"]).filter(x => {
      if (x === "http://www.w3.org/2001/XMLSchema#string") return false;
      if (x === "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString") return false;
      return true;
    });
    if (def["@type"].length === 0) delete def["@type"];
    else if (def["@type"].length === 1) def["@type"] = def["@type"][0];
    else {
      def["@type"].forEach(type => {
        context[def["@id"] + cut(type)] = {
          "@id": def["@id"],
          "@type": type
        };
      });
      delete context[def["@id"]];
    }
  });

  // context のキーを URI から短縮名に変更する、短縮名でソートする
  Object.keys(context).sort((a, b) => cut(a) < cut(b) ? -1 : 1).forEach(key => {
    context[cut(key)] = context[key];
    delete context[key];
  });

  return context;
};
