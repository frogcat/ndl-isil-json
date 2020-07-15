# Organization Schema

```txt
undefined#/properties/@graph/items
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                      |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [ndl-isil.schema.json\*](../../out/ndl-isil.schema.json "open original schema") |

## items Type

`object` ([Organization](ndl-isil-properties-json-ld-graph-organization.md))

# Organization Properties

| Property                          | Type     | Required | Nullable       | Defined by                                                                                                                                            |
| :-------------------------------- | -------- | -------- | -------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@id](#@id)                       | `string` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-id.md "undefined#/properties/@graph/items/properties/@id")                        |
| [url](#url)                       | `string` | Optional | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-url.md "undefined#/properties/@graph/items/properties/url")                       |
| [name](#name)                     | `object` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-name.md "undefined#/properties/@graph/items/properties/name")                     |
| [classification](#classification) | `string` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-classification.md "undefined#/properties/@graph/items/properties/classification") |
| [originalName](#originalName)     | `string` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-originalname.md "undefined#/properties/@graph/items/properties/originalName")     |
| [@type](#@type)                   | `string` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-type.md "undefined#/properties/@graph/items/properties/@type")                    |
| [hasSite](#hasSite)               | `object` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-hassite.md "undefined#/properties/@graph/items/properties/hasSite")               |
| [identifierISIL](#identifierISIL) | `string` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-identifierisil.md "undefined#/properties/@graph/items/properties/identifierISIL") |
| [sameAs](#sameAs)                 | Merged   | Optional | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-sameas.md "undefined#/properties/@graph/items/properties/sameAs")                 |
| [seeAlso](#seeAlso)               | `string` | Optional | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-seealso.md "undefined#/properties/@graph/items/properties/seeAlso")               |
| [alternateName](#alternateName)   | `string` | Optional | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-alternatename.md "undefined#/properties/@graph/items/properties/alternateName")   |
| [identifierISNI](#identifierISNI) | `string` | Optional | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-identifierisni.md "undefined#/properties/@graph/items/properties/identifierISNI") |

## @id




`@id`

-   is required
-   Type: `string` ([@id](ndl-isil-properties-json-ld-graph-organization-properties-id.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-id.md "undefined#/properties/@graph/items/properties/@id")

### @id Type

`string` ([@id](ndl-isil-properties-json-ld-graph-organization-properties-id.md))

## url




`url`

-   is optional
-   Type: `string` ([url](ndl-isil-properties-json-ld-graph-organization-properties-url.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-url.md "undefined#/properties/@graph/items/properties/url")

### url Type

`string` ([url](ndl-isil-properties-json-ld-graph-organization-properties-url.md))

## name




`name`

-   is required
-   Type: `object` ([name](ndl-isil-properties-json-ld-graph-organization-properties-name.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-name.md "undefined#/properties/@graph/items/properties/name")

### name Type

`object` ([name](ndl-isil-properties-json-ld-graph-organization-properties-name.md))

## classification




`classification`

-   is required
-   Type: `string` ([classification](ndl-isil-properties-json-ld-graph-organization-properties-classification.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-classification.md "undefined#/properties/@graph/items/properties/classification")

### classification Type

`string` ([classification](ndl-isil-properties-json-ld-graph-organization-properties-classification.md))

### classification Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                                           | Explanation |
| :-------------------------------------------------------------- | ----------- |
| `"http://id.ndl.go.jp/vocab/libtype#PublicLibraries"`           |             |
| `"http://id.ndl.go.jp/vocab/libtype#SpecialLibraries"`          |             |
| `"http://id.ndl.go.jp/vocab/libtype#AcademicLibraries"`         |             |
| `"http://id.ndl.go.jp/vocab/libtype#RelatedOrganizations"`      |             |
| `"http://id.ndl.go.jp/vocab/libtype#SchoolLibraryMediaCenters"` |             |
| `"http://id.ndl.go.jp/vocab/libtype#NationalLibraries"`         |             |

## originalName




`originalName`

-   is required
-   Type: `string` ([originalName](ndl-isil-properties-json-ld-graph-organization-properties-originalname.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-originalname.md "undefined#/properties/@graph/items/properties/originalName")

### originalName Type

`string` ([originalName](ndl-isil-properties-json-ld-graph-organization-properties-originalname.md))

## @type




`@type`

-   is required
-   Type: `string` ([@type](ndl-isil-properties-json-ld-graph-organization-properties-type.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-type.md "undefined#/properties/@graph/items/properties/@type")

### @type Type

`string` ([@type](ndl-isil-properties-json-ld-graph-organization-properties-type.md))

### @type Constraints

**constant**: the value of this property must be equal to:

```json
"Organization"
```

## hasSite




`hasSite`

-   is required
-   Type: `object` ([hasSite](ndl-isil-properties-json-ld-graph-organization-properties-hassite.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-hassite.md "undefined#/properties/@graph/items/properties/hasSite")

### hasSite Type

`object` ([hasSite](ndl-isil-properties-json-ld-graph-organization-properties-hassite.md))

## identifierISIL




`identifierISIL`

-   is required
-   Type: `string` ([identifierISIL](ndl-isil-properties-json-ld-graph-organization-properties-identifierisil.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-identifierisil.md "undefined#/properties/@graph/items/properties/identifierISIL")

### identifierISIL Type

`string` ([identifierISIL](ndl-isil-properties-json-ld-graph-organization-properties-identifierisil.md))

## sameAs




`sameAs`

-   is optional
-   Type: merged type ([Details](ndl-isil-properties-json-ld-graph-organization-properties-sameas.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-sameas.md "undefined#/properties/@graph/items/properties/sameAs")

### sameAs Type

merged type ([Details](ndl-isil-properties-json-ld-graph-organization-properties-sameas.md))

one (and only one) of

-   [sameAs](ndl-isil-properties-json-ld-graph-organization-properties-sameas-oneof-sameas.md "check type definition")
-   [Untitled array in JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-sameas-oneof-1.md "check type definition")

## seeAlso




`seeAlso`

-   is optional
-   Type: `string` ([seeAlso](ndl-isil-properties-json-ld-graph-organization-properties-seealso.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-seealso.md "undefined#/properties/@graph/items/properties/seeAlso")

### seeAlso Type

`string` ([seeAlso](ndl-isil-properties-json-ld-graph-organization-properties-seealso.md))

## alternateName




`alternateName`

-   is optional
-   Type: `string` ([alternateName](ndl-isil-properties-json-ld-graph-organization-properties-alternatename.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-alternatename.md "undefined#/properties/@graph/items/properties/alternateName")

### alternateName Type

`string` ([alternateName](ndl-isil-properties-json-ld-graph-organization-properties-alternatename.md))

## identifierISNI




`identifierISNI`

-   is optional
-   Type: `string` ([identifierISNI](ndl-isil-properties-json-ld-graph-organization-properties-identifierisni.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-identifierisni.md "undefined#/properties/@graph/items/properties/identifierISNI")

### identifierISNI Type

`string` ([identifierISNI](ndl-isil-properties-json-ld-graph-organization-properties-identifierisni.md))
