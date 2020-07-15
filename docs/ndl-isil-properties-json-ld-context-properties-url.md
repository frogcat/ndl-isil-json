# url Schema

```txt
undefined#/properties/@context/properties/url
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                      |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [ndl-isil.schema.json\*](../../out/ndl-isil.schema.json "open original schema") |

## url Type

`object` ([url](ndl-isil-properties-json-ld-context-properties-url.md))

# url Properties

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                        |
| :-------------- | -------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| [@id](#@id)     | `string` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-url-properties-id.md "undefined#/properties/@context/properties/url/properties/@id")     |
| [@type](#@type) | `string` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-url-properties-type.md "undefined#/properties/@context/properties/url/properties/@type") |

## @id




`@id`

-   is required
-   Type: `string` ([@id](ndl-isil-properties-json-ld-context-properties-url-properties-id.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-url-properties-id.md "undefined#/properties/@context/properties/url/properties/@id")

### @id Type

`string` ([@id](ndl-isil-properties-json-ld-context-properties-url-properties-id.md))

### @id Constraints

**constant**: the value of this property must be equal to:

```json
"http://schema.org/url"
```

## @type




`@type`

-   is required
-   Type: `string` ([@type](ndl-isil-properties-json-ld-context-properties-url-properties-type.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-url-properties-type.md "undefined#/properties/@context/properties/url/properties/@type")

### @type Type

`string` ([@type](ndl-isil-properties-json-ld-context-properties-url-properties-type.md))

### @type Constraints

**constant**: the value of this property must be equal to:

```json
"@id"
```
