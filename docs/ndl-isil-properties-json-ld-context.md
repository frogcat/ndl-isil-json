# JSON-LD Context Schema

```txt
undefined#/properties/@context
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                      |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [ndl-isil.schema.json\*](../../out/ndl-isil.schema.json "open original schema") |

## @context Type

`object` ([JSON-LD Context](ndl-isil-properties-json-ld-context.md))

# JSON-LD Context Properties

| Property                            | Type     | Required | Nullable       | Defined by                                                                                                                               |
| :---------------------------------- | -------- | -------- | -------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| [Organization](#Organization)       | `object` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-organization.md "undefined#/properties/@context/properties/Organization")       |
| [Site](#Site)                       | `object` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-site.md "undefined#/properties/@context/properties/Site")                       |
| [addressCountry](#addressCountry)   | `object` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-addresscountry.md "undefined#/properties/@context/properties/addressCountry")   |
| [addressLocality](#addressLocality) | `object` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-addresslocality.md "undefined#/properties/@context/properties/addressLocality") |
| [addressRegion](#addressRegion)     | `object` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-addressregion.md "undefined#/properties/@context/properties/addressRegion")     |
| [alternateName](#alternateName)     | `object` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-alternatename.md "undefined#/properties/@context/properties/alternateName")     |
| [areaServed](#areaServed)           | `object` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-areaserved.md "undefined#/properties/@context/properties/areaServed")           |
| [classification](#classification)   | `object` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-classification.md "undefined#/properties/@context/properties/classification")   |
| [comment](#comment)                 | `object` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-comment.md "undefined#/properties/@context/properties/comment")                 |
| [countryCode](#countryCode)         | `object` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-countrycode.md "undefined#/properties/@context/properties/countryCode")         |
| [creator](#creator)                 | `object` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-creator.md "undefined#/properties/@context/properties/creator")                 |
| [description](#description)         | `object` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-description.md "undefined#/properties/@context/properties/description")         |
| [faxNumber](#faxNumber)             | `object` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-faxnumber.md "undefined#/properties/@context/properties/faxNumber")             |
| [hasSite](#hasSite)                 | `object` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-hassite.md "undefined#/properties/@context/properties/hasSite")                 |
| [identifierISIL](#identifierISIL)   | `object` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-identifierisil.md "undefined#/properties/@context/properties/identifierISIL")   |
| [identifierISNI](#identifierISNI)   | `object` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-identifierisni.md "undefined#/properties/@context/properties/identifierISNI")   |
| [issued](#issued)                   | `object` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-issued.md "undefined#/properties/@context/properties/issued")                   |
| [language](#language)               | `object` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-language.md "undefined#/properties/@context/properties/language")               |
| [lat](#lat)                         | `object` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-lat.md "undefined#/properties/@context/properties/lat")                         |
| [long](#long)                       | `object` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-long.md "undefined#/properties/@context/properties/long")                       |
| [modified](#modified)               | `object` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-modified.md "undefined#/properties/@context/properties/modified")               |
| [name](#name)                       | `object` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-name.md "undefined#/properties/@context/properties/name")                       |
| [originalName](#originalName)       | `object` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-originalname.md "undefined#/properties/@context/properties/originalName")       |
| [postalCode](#postalCode)           | `object` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-postalcode.md "undefined#/properties/@context/properties/postalCode")           |
| [sameAs](#sameAs)                   | `object` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-sameas.md "undefined#/properties/@context/properties/sameAs")                   |
| [seeAlso](#seeAlso)                 | `object` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-seealso.md "undefined#/properties/@context/properties/seeAlso")                 |
| [siteAddress](#siteAddress)         | `object` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-siteaddress.md "undefined#/properties/@context/properties/siteAddress")         |
| [source](#source)                   | `object` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-source.md "undefined#/properties/@context/properties/source")                   |
| [streetAddress](#streetAddress)     | `object` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-streetaddress.md "undefined#/properties/@context/properties/streetAddress")     |
| [telephone](#telephone)             | `object` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-telephone.md "undefined#/properties/@context/properties/telephone")             |
| [title](#title)                     | `object` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-title.md "undefined#/properties/@context/properties/title")                     |
| [url](#url)                         | `object` | Required | cannot be null | [JSON-LD](ndl-isil-properties-json-ld-context-properties-url.md "undefined#/properties/@context/properties/url")                         |

## Organization




`Organization`

-   is required
-   Type: `object` ([Organization](ndl-isil-properties-json-ld-context-properties-organization.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-organization.md "undefined#/properties/@context/properties/Organization")

### Organization Type

`object` ([Organization](ndl-isil-properties-json-ld-context-properties-organization.md))

## Site




`Site`

-   is required
-   Type: `object` ([Site](ndl-isil-properties-json-ld-context-properties-site.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-site.md "undefined#/properties/@context/properties/Site")

### Site Type

`object` ([Site](ndl-isil-properties-json-ld-context-properties-site.md))

## addressCountry




`addressCountry`

-   is required
-   Type: `object` ([addressCountry](ndl-isil-properties-json-ld-context-properties-addresscountry.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-addresscountry.md "undefined#/properties/@context/properties/addressCountry")

### addressCountry Type

`object` ([addressCountry](ndl-isil-properties-json-ld-context-properties-addresscountry.md))

## addressLocality




`addressLocality`

-   is required
-   Type: `object` ([addressLocality](ndl-isil-properties-json-ld-context-properties-addresslocality.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-addresslocality.md "undefined#/properties/@context/properties/addressLocality")

### addressLocality Type

`object` ([addressLocality](ndl-isil-properties-json-ld-context-properties-addresslocality.md))

## addressRegion




`addressRegion`

-   is required
-   Type: `object` ([addressRegion](ndl-isil-properties-json-ld-context-properties-addressregion.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-addressregion.md "undefined#/properties/@context/properties/addressRegion")

### addressRegion Type

`object` ([addressRegion](ndl-isil-properties-json-ld-context-properties-addressregion.md))

## alternateName




`alternateName`

-   is required
-   Type: `object` ([alternateName](ndl-isil-properties-json-ld-context-properties-alternatename.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-alternatename.md "undefined#/properties/@context/properties/alternateName")

### alternateName Type

`object` ([alternateName](ndl-isil-properties-json-ld-context-properties-alternatename.md))

## areaServed




`areaServed`

-   is required
-   Type: `object` ([areaServed](ndl-isil-properties-json-ld-context-properties-areaserved.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-areaserved.md "undefined#/properties/@context/properties/areaServed")

### areaServed Type

`object` ([areaServed](ndl-isil-properties-json-ld-context-properties-areaserved.md))

## classification




`classification`

-   is required
-   Type: `object` ([classification](ndl-isil-properties-json-ld-context-properties-classification.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-classification.md "undefined#/properties/@context/properties/classification")

### classification Type

`object` ([classification](ndl-isil-properties-json-ld-context-properties-classification.md))

## comment




`comment`

-   is required
-   Type: `object` ([comment](ndl-isil-properties-json-ld-context-properties-comment.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-comment.md "undefined#/properties/@context/properties/comment")

### comment Type

`object` ([comment](ndl-isil-properties-json-ld-context-properties-comment.md))

## countryCode




`countryCode`

-   is required
-   Type: `object` ([countryCode](ndl-isil-properties-json-ld-context-properties-countrycode.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-countrycode.md "undefined#/properties/@context/properties/countryCode")

### countryCode Type

`object` ([countryCode](ndl-isil-properties-json-ld-context-properties-countrycode.md))

## creator




`creator`

-   is required
-   Type: `object` ([creator](ndl-isil-properties-json-ld-context-properties-creator.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-creator.md "undefined#/properties/@context/properties/creator")

### creator Type

`object` ([creator](ndl-isil-properties-json-ld-context-properties-creator.md))

## description




`description`

-   is required
-   Type: `object` ([description](ndl-isil-properties-json-ld-context-properties-description.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-description.md "undefined#/properties/@context/properties/description")

### description Type

`object` ([description](ndl-isil-properties-json-ld-context-properties-description.md))

## faxNumber




`faxNumber`

-   is required
-   Type: `object` ([faxNumber](ndl-isil-properties-json-ld-context-properties-faxnumber.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-faxnumber.md "undefined#/properties/@context/properties/faxNumber")

### faxNumber Type

`object` ([faxNumber](ndl-isil-properties-json-ld-context-properties-faxnumber.md))

## hasSite




`hasSite`

-   is required
-   Type: `object` ([hasSite](ndl-isil-properties-json-ld-context-properties-hassite.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-hassite.md "undefined#/properties/@context/properties/hasSite")

### hasSite Type

`object` ([hasSite](ndl-isil-properties-json-ld-context-properties-hassite.md))

## identifierISIL




`identifierISIL`

-   is required
-   Type: `object` ([identifierISIL](ndl-isil-properties-json-ld-context-properties-identifierisil.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-identifierisil.md "undefined#/properties/@context/properties/identifierISIL")

### identifierISIL Type

`object` ([identifierISIL](ndl-isil-properties-json-ld-context-properties-identifierisil.md))

## identifierISNI




`identifierISNI`

-   is required
-   Type: `object` ([identifierISNI](ndl-isil-properties-json-ld-context-properties-identifierisni.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-identifierisni.md "undefined#/properties/@context/properties/identifierISNI")

### identifierISNI Type

`object` ([identifierISNI](ndl-isil-properties-json-ld-context-properties-identifierisni.md))

## issued




`issued`

-   is required
-   Type: `object` ([issued](ndl-isil-properties-json-ld-context-properties-issued.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-issued.md "undefined#/properties/@context/properties/issued")

### issued Type

`object` ([issued](ndl-isil-properties-json-ld-context-properties-issued.md))

## language




`language`

-   is required
-   Type: `object` ([language](ndl-isil-properties-json-ld-context-properties-language.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-language.md "undefined#/properties/@context/properties/language")

### language Type

`object` ([language](ndl-isil-properties-json-ld-context-properties-language.md))

## lat




`lat`

-   is required
-   Type: `object` ([lat](ndl-isil-properties-json-ld-context-properties-lat.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-lat.md "undefined#/properties/@context/properties/lat")

### lat Type

`object` ([lat](ndl-isil-properties-json-ld-context-properties-lat.md))

## long




`long`

-   is required
-   Type: `object` ([long](ndl-isil-properties-json-ld-context-properties-long.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-long.md "undefined#/properties/@context/properties/long")

### long Type

`object` ([long](ndl-isil-properties-json-ld-context-properties-long.md))

## modified




`modified`

-   is required
-   Type: `object` ([modified](ndl-isil-properties-json-ld-context-properties-modified.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-modified.md "undefined#/properties/@context/properties/modified")

### modified Type

`object` ([modified](ndl-isil-properties-json-ld-context-properties-modified.md))

## name




`name`

-   is required
-   Type: `object` ([name](ndl-isil-properties-json-ld-context-properties-name.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-name.md "undefined#/properties/@context/properties/name")

### name Type

`object` ([name](ndl-isil-properties-json-ld-context-properties-name.md))

## originalName




`originalName`

-   is required
-   Type: `object` ([originalName](ndl-isil-properties-json-ld-context-properties-originalname.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-originalname.md "undefined#/properties/@context/properties/originalName")

### originalName Type

`object` ([originalName](ndl-isil-properties-json-ld-context-properties-originalname.md))

## postalCode




`postalCode`

-   is required
-   Type: `object` ([postalCode](ndl-isil-properties-json-ld-context-properties-postalcode.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-postalcode.md "undefined#/properties/@context/properties/postalCode")

### postalCode Type

`object` ([postalCode](ndl-isil-properties-json-ld-context-properties-postalcode.md))

## sameAs




`sameAs`

-   is required
-   Type: `object` ([sameAs](ndl-isil-properties-json-ld-context-properties-sameas.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-sameas.md "undefined#/properties/@context/properties/sameAs")

### sameAs Type

`object` ([sameAs](ndl-isil-properties-json-ld-context-properties-sameas.md))

## seeAlso




`seeAlso`

-   is required
-   Type: `object` ([seeAlso](ndl-isil-properties-json-ld-context-properties-seealso.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-seealso.md "undefined#/properties/@context/properties/seeAlso")

### seeAlso Type

`object` ([seeAlso](ndl-isil-properties-json-ld-context-properties-seealso.md))

## siteAddress




`siteAddress`

-   is required
-   Type: `object` ([siteAddress](ndl-isil-properties-json-ld-context-properties-siteaddress.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-siteaddress.md "undefined#/properties/@context/properties/siteAddress")

### siteAddress Type

`object` ([siteAddress](ndl-isil-properties-json-ld-context-properties-siteaddress.md))

## source




`source`

-   is required
-   Type: `object` ([source](ndl-isil-properties-json-ld-context-properties-source.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-source.md "undefined#/properties/@context/properties/source")

### source Type

`object` ([source](ndl-isil-properties-json-ld-context-properties-source.md))

## streetAddress




`streetAddress`

-   is required
-   Type: `object` ([streetAddress](ndl-isil-properties-json-ld-context-properties-streetaddress.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-streetaddress.md "undefined#/properties/@context/properties/streetAddress")

### streetAddress Type

`object` ([streetAddress](ndl-isil-properties-json-ld-context-properties-streetaddress.md))

## telephone




`telephone`

-   is required
-   Type: `object` ([telephone](ndl-isil-properties-json-ld-context-properties-telephone.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-telephone.md "undefined#/properties/@context/properties/telephone")

### telephone Type

`object` ([telephone](ndl-isil-properties-json-ld-context-properties-telephone.md))

## title




`title`

-   is required
-   Type: `object` ([title](ndl-isil-properties-json-ld-context-properties-title.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-title.md "undefined#/properties/@context/properties/title")

### title Type

`object` ([title](ndl-isil-properties-json-ld-context-properties-title.md))

## url




`url`

-   is required
-   Type: `object` ([url](ndl-isil-properties-json-ld-context-properties-url.md))
-   cannot be null
-   defined in: [JSON-LD](ndl-isil-properties-json-ld-context-properties-url.md "undefined#/properties/@context/properties/url")

### url Type

`object` ([url](ndl-isil-properties-json-ld-context-properties-url.md))
