# source Schema

```txt
undefined#/properties/@context/properties/source
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                      |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [ndl-isil.schema.json\*](../../out/ndl-isil.schema.json "open original schema") |

## source Type

`object` ([source](ndl-isil-properties-json-ld-context-properties-source.md))

# source Properties

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                              |
| :-------------- | -------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [@id](#@id)     | `string` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-source-properties-id.md "undefined#/properties/@context/properties/source/properties/@id")     |
| [@type](#@type) | `string` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-source-properties-type.md "undefined#/properties/@context/properties/source/properties/@type") |

## @id




`@id`

-   is required
-   Type: `string` ([@id](ndl-isil-properties-json-ld-context-properties-source-properties-id.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-source-properties-id.md "undefined#/properties/@context/properties/source/properties/@id")

### @id Type

`string` ([@id](ndl-isil-properties-json-ld-context-properties-source-properties-id.md))

### @id Constraints

**constant**: the value of this property must be equal to:

```json
"http://purl.org/dc/terms/source"
```

## @type




`@type`

-   is required
-   Type: `string` ([@type](ndl-isil-properties-json-ld-context-properties-source-properties-type.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-source-properties-type.md "undefined#/properties/@context/properties/source/properties/@type")

### @type Type

`string` ([@type](ndl-isil-properties-json-ld-context-properties-source-properties-type.md))

### @type Constraints

**constant**: the value of this property must be equal to:

```json
"@id"
```
