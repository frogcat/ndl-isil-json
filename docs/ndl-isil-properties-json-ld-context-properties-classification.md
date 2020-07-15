# classification Schema

```txt
undefined#/properties/@context/properties/classification
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                      |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [ndl-isil.schema.json\*](../../out/ndl-isil.schema.json "open original schema") |

## classification Type

`object` ([classification](ndl-isil-properties-json-ld-context-properties-classification.md))

# classification Properties

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                                              |
| :-------------- | -------- | -------- | -------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@id](#@id)     | `string` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-classification-properties-id.md "undefined#/properties/@context/properties/classification/properties/@id")     |
| [@type](#@type) | `string` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-classification-properties-type.md "undefined#/properties/@context/properties/classification/properties/@type") |

## @id




`@id`

-   is required
-   Type: `string` ([@id](ndl-isil-properties-json-ld-context-properties-classification-properties-id.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-classification-properties-id.md "undefined#/properties/@context/properties/classification/properties/@id")

### @id Type

`string` ([@id](ndl-isil-properties-json-ld-context-properties-classification-properties-id.md))

### @id Constraints

**constant**: the value of this property must be equal to:

```json
"http://www.w3.org/ns/org#classification"
```

## @type




`@type`

-   is required
-   Type: `string` ([@type](ndl-isil-properties-json-ld-context-properties-classification-properties-type.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-classification-properties-type.md "undefined#/properties/@context/properties/classification/properties/@type")

### @type Type

`string` ([@type](ndl-isil-properties-json-ld-context-properties-classification-properties-type.md))

### @type Constraints

**constant**: the value of this property must be equal to:

```json
"@id"
```
