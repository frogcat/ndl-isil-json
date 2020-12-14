# siteAddress Schema

```txt
undefined#/properties/@graph/items/properties/hasSite/properties/siteAddress
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                      |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [ndl-isil.schema.json\*](../../out/ndl-isil.schema.json "open original schema") |

## siteAddress Type

`object` ([siteAddress](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-siteaddress.md))

# siteAddress Properties

| Property                            | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                  |
| :---------------------------------- | -------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [postalCode](#postalcode)           | `string` | Optional | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-siteaddress-properties-postalcode.md "undefined#/properties/@graph/items/properties/hasSite/properties/siteAddress/properties/postalCode")           |
| [addressCountry](#addresscountry)   | `string` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-siteaddress-properties-addresscountry.md "undefined#/properties/@graph/items/properties/hasSite/properties/siteAddress/properties/addressCountry")   |
| [countryCode](#countrycode)         | `string` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-siteaddress-properties-countrycode.md "undefined#/properties/@graph/items/properties/hasSite/properties/siteAddress/properties/countryCode")         |
| [areaServed](#areaserved)           | `string` | Optional | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-siteaddress-properties-areaserved.md "undefined#/properties/@graph/items/properties/hasSite/properties/siteAddress/properties/areaServed")           |
| [addressRegion](#addressregion)     | `string` | Optional | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-siteaddress-properties-addressregion.md "undefined#/properties/@graph/items/properties/hasSite/properties/siteAddress/properties/addressRegion")     |
| [addressLocality](#addresslocality) | `string` | Optional | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-siteaddress-properties-addresslocality.md "undefined#/properties/@graph/items/properties/hasSite/properties/siteAddress/properties/addressLocality") |
| [streetAddress](#streetaddress)     | `string` | Optional | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-siteaddress-properties-streetaddress.md "undefined#/properties/@graph/items/properties/hasSite/properties/siteAddress/properties/streetAddress")     |

## postalCode




`postalCode`

-   is optional
-   Type: `string` ([postalCode](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-siteaddress-properties-postalcode.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-siteaddress-properties-postalcode.md "undefined#/properties/@graph/items/properties/hasSite/properties/siteAddress/properties/postalCode")

### postalCode Type

`string` ([postalCode](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-siteaddress-properties-postalcode.md))

## addressCountry




`addressCountry`

-   is required
-   Type: `string` ([addressCountry](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-siteaddress-properties-addresscountry.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-siteaddress-properties-addresscountry.md "undefined#/properties/@graph/items/properties/hasSite/properties/siteAddress/properties/addressCountry")

### addressCountry Type

`string` ([addressCountry](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-siteaddress-properties-addresscountry.md))

### addressCountry Constraints

**constant**: the value of this property must be equal to:

```json
"Japan"
```

## countryCode




`countryCode`

-   is required
-   Type: `string` ([countryCode](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-siteaddress-properties-countrycode.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-siteaddress-properties-countrycode.md "undefined#/properties/@graph/items/properties/hasSite/properties/siteAddress/properties/countryCode")

### countryCode Type

`string` ([countryCode](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-siteaddress-properties-countrycode.md))

### countryCode Constraints

**constant**: the value of this property must be equal to:

```json
"JP"
```

## areaServed




`areaServed`

-   is optional
-   Type: `string` ([areaServed](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-siteaddress-properties-areaserved.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-siteaddress-properties-areaserved.md "undefined#/properties/@graph/items/properties/hasSite/properties/siteAddress/properties/areaServed")

### areaServed Type

`string` ([areaServed](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-siteaddress-properties-areaserved.md))

## addressRegion




`addressRegion`

-   is optional
-   Type: `string` ([addressRegion](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-siteaddress-properties-addressregion.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-siteaddress-properties-addressregion.md "undefined#/properties/@graph/items/properties/hasSite/properties/siteAddress/properties/addressRegion")

### addressRegion Type

`string` ([addressRegion](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-siteaddress-properties-addressregion.md))

## addressLocality




`addressLocality`

-   is optional
-   Type: `string` ([addressLocality](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-siteaddress-properties-addresslocality.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-siteaddress-properties-addresslocality.md "undefined#/properties/@graph/items/properties/hasSite/properties/siteAddress/properties/addressLocality")

### addressLocality Type

`string` ([addressLocality](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-siteaddress-properties-addresslocality.md))

## streetAddress




`streetAddress`

-   is optional
-   Type: `string` ([streetAddress](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-siteaddress-properties-streetaddress.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-siteaddress-properties-streetaddress.md "undefined#/properties/@graph/items/properties/hasSite/properties/siteAddress/properties/streetAddress")

### streetAddress Type

`string` ([streetAddress](ndl-isil-properties-json-ld-graph-organization-properties-hassite-properties-siteaddress-properties-streetaddress.md))
