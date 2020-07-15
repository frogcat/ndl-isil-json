const dig = function(json, schema) {

  const type = Array.isArray(json) ? 'array' : typeof json;

  if (schema.type && schema.type !== type) {
    const copy = {};
    Object.keys(schema).forEach(key => {
      copy[key] = schema[key];
      delete schema[key];
    });
    schema.oneOf = [copy, dig(json, {})];
    return schema;
  }

  if (schema.oneOf) {
    const a = schema.oneOf.find(x => x.type === type);
    if (a) {
      dig(json, a);
    } else {
      schema.oneOf.push(dig(json, {}));
    }
    return schema;
  }

  if (type === 'number') {
    if (schema.type === undefined) {
      schema.type = 'number';
    }
    return schema;
  }

  if (type === 'string') {
    if (schema.type === undefined) {
      schema.type = 'string';
      schema.const = json;
    }
    if (schema.const && schema.const !== json) {
      schema.enum = [schema.const, json];
      delete schema.const;
    } else if (schema.enum && schema.enum.indexOf(json) === -1) {
      schema.enum.push(json);
      if (schema.enum.length > 10) delete schema.enum;
    }
    return schema;
  }
  if (type === 'array') {
    if (schema.type === undefined) {
      schema.type = 'array';
      schema.minItems = json.length;
      schema.maxItems = json.length;
      schema.items = {};
    }
    schema.minItems = Math.min(schema.minItems, json.length);
    schema.maxItems = Math.max(schema.maxItems, json.length);
    json.forEach(a => {
      dig(a, schema.items);
    });
    return schema;
  }
  if (type === 'object') {
    const properties = Object.keys(json);
    if (schema.type === undefined) {
      schema.type = "object";
      schema.required = properties;
      schema.additionalProperties = false;
      schema.properties = {};
    }
    schema.required = schema.required.filter(x => properties.indexOf(x) !== -1);

    properties.forEach(p => {
      if (schema.properties[p] === undefined)
        schema.properties[p] = {
          "title": p
        };
      dig(json[p], schema.properties[p]);
    });

    return schema;
  }

  console.error(typeof json);
  return schema;

};

module.exports = function(root) {
  const schema = dig(root, {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "JSON-LD"
  });
  schema.properties["@context"].title = "JSON-LD Context";
  schema.properties["@graph"].title = "JSON-LD Graph";
  schema.properties["@graph"].items.title = "Organization";

  return schema;
};
