# hasSite Schema

```txt
undefined#/properties/@graph/items/properties/hasSite
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                      |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [ndl-isil.schema.json\*](../../out/ndl-isil.schema.json "open original schema") |

## hasSite Type

`object` ([hasSite](ndl-isil-properties-json-ld-graph-organization-properties-hassite.md))

# hasSite Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                            |
| :-------------------------- | -------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [siteAddress](#siteaddress) | `object` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-siteaddress.md "undefined#/properties/@graph/items/properties/hasSite/properties/siteAddress") |
| [long](#long)               | `string` | Optional | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-long.md "undefined#/properties/@graph/items/properties/hasSite/properties/long")               |
| [lat](#lat)                 | `string` | Optional | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-lat.md "undefined#/properties/@graph/items/properties/hasSite/properties/lat")                 |
| [telephone](#telephone)     | `string` | Optional | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-telephone.md "undefined#/properties/@graph/items/properties/hasSite/properties/telephone")     |
| [faxNumber](#faxnumber)     | `string` | Optional | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-faxnumber.md "undefined#/properties/@graph/items/properties/hasSite/properties/faxNumber")     |
| [@type](#type)              | `string` | Optional | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-type.md "undefined#/properties/@graph/items/properties/hasSite/properties/@type")              |

## siteAddress




`siteAddress`

-   is required
-   Type: `object` ([siteAddress](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-siteaddress.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-siteaddress.md "undefined#/properties/@graph/items/properties/hasSite/properties/siteAddress")

### siteAddress Type

`object` ([siteAddress](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-siteaddress.md))

## long




`long`

-   is optional
-   Type: `string` ([long](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-long.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-long.md "undefined#/properties/@graph/items/properties/hasSite/properties/long")

### long Type

`string` ([long](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-long.md))

## lat




`lat`

-   is optional
-   Type: `string` ([lat](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-lat.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-lat.md "undefined#/properties/@graph/items/properties/hasSite/properties/lat")

### lat Type

`string` ([lat](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-lat.md))

## telephone




`telephone`

-   is optional
-   Type: `string` ([telephone](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-telephone.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-telephone.md "undefined#/properties/@graph/items/properties/hasSite/properties/telephone")

### telephone Type

`string` ([telephone](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-telephone.md))

## faxNumber




`faxNumber`

-   is optional
-   Type: `string` ([faxNumber](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-faxnumber.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-faxnumber.md "undefined#/properties/@graph/items/properties/hasSite/properties/faxNumber")

### faxNumber Type

`string` ([faxNumber](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-faxnumber.md))

## @type




`@type`

-   is optional
-   Type: `string` ([@type](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-type.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-type.md "undefined#/properties/@graph/items/properties/hasSite/properties/@type")

### @type Type

`string` ([@type](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-type.md))

### @type Constraints

**constant**: the value of this property must be equal to:

```json
"Site"
```
