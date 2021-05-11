# JSON-LD Schema

```txt
undefined
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                    |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [ndl-isil.schema.json](../../out/ndl-isil.schema.json "open original schema") |

## JSON-LD Type

`object` ([JSON-LD](ndl-isil.md))

# JSON-LD Properties

| Property             | Type     | Required | Nullable       | Defined by                                                                         |
| :------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------- |
| [@context](#context) | `string` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context.md "undefined#/properties/@context") |
| [@graph](#graph)     | `array`  | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-graph.md "undefined#/properties/@graph")     |

## @context



`@context`

*   is required

*   Type: `string` ([JSON-LD Context](ndl-isil-properties-json-ld-context.md))

*   cannot be null

*   defined in: [JSON-LD](ndl-isil-properties-json-ld-context.md "undefined#/properties/@context")

### @context Type

`string` ([JSON-LD Context](ndl-isil-properties-json-ld-context.md))

### @context Constraints

**constant**: the value of this property must be equal to:

```json
"https://frogcat.github.io/ndl-isil-json/ndl-isil.context.json"
```

## @graph



`@graph`

*   is required

*   Type: `object[]` ([Organization](ndl-isil-properties-json-ld-graph-organization.md))

*   cannot be null

*   defined in: [JSON-LD](ndl-isil-properties-json-ld-graph.md "undefined#/properties/@graph")

### @graph Type

`object[]` ([Organization](ndl-isil-properties-json-ld-graph-organization.md))

### @graph Constraints

**maximum number of items**: the maximum number of items for this array is: `7581`

**minimum number of items**: the minimum number of items for this array is: `7581`
