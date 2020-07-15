# seeAlso Schema

```txt
undefined#/properties/@context/properties/seeAlso
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                      |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [ndl-isil.schema.json\*](../../out/ndl-isil.schema.json "open original schema") |

## seeAlso Type

`object` ([seeAlso](ndl-isil-properties-json-ld-context-properties-seealso.md))

# seeAlso Properties

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                                |
| :-------------- | -------- | -------- | -------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@id](#@id)     | `string` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-seealso-properties-id.md "undefined#/properties/@context/properties/seeAlso/properties/@id")     |
| [@type](#@type) | `string` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-seealso-properties-type.md "undefined#/properties/@context/properties/seeAlso/properties/@type") |

## @id




`@id`

-   is required
-   Type: `string` ([@id](ndl-isil-properties-json-ld-context-properties-seealso-properties-id.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-seealso-properties-id.md "undefined#/properties/@context/properties/seeAlso/properties/@id")

### @id Type

`string` ([@id](ndl-isil-properties-json-ld-context-properties-seealso-properties-id.md))

### @id Constraints

**constant**: the value of this property must be equal to:

```json
"http://www.w3.org/2000/01/rdf-schema#seeAlso"
```

## @type




`@type`

-   is required
-   Type: `string` ([@type](ndl-isil-properties-json-ld-context-properties-seealso-properties-type.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-seealso-properties-type.md "undefined#/properties/@context/properties/seeAlso/properties/@type")

### @type Type

`string` ([@type](ndl-isil-properties-json-ld-context-properties-seealso-properties-type.md))

### @type Constraints

**constant**: the value of this property must be equal to:

```json
"@id"
```
