# ndl-isil-json

JSON version of NDL ISIL-LOD

# About

このレポジトリでは [国立国会図書館](https://www.ndl.go.jp/) が提供する
[図書館及び関連組織のための国際標準識別子（ISIL）試行版LOD](https://www.ndl.go.jp/jp/dlib/standards/opendataset/#ISIL_trial) を
JSON-LD および GeoJSON に変換して提供します。

# Download

以下からダウンロードできます。CORS が許可されているのでウェブブラウザから直接 `fetch` して利用することも可能です。

`*.[geo]json` と `*.min.[geo]json` は内容は同一ですが、`*.min.[geo]json` はインデントがないのでその分ダウンロードサイズが小さいです。

- [ndl-isil.json](https://frogcat.github.io/ndl-isil-json/ndl-isil.json) (JSON-LD, 約8.1Mbytes)
- [ndl-isil.min.json](https://frogcat.github.io/ndl-isil-json/ndl-isil.min.json) (JSON-LD, 約6.1Mbytes)
- [ndl-isil.geojson](https://frogcat.github.io/ndl-isil-json/ndl-isil.geojson) (GeoJSON, 約9.9Mbytes)
- [ndl-isil.min.geojson](https://frogcat.github.io/ndl-isil-json/ndl-isil.min.geojson) (GeoJSON,約6.8Mbytes)

これらのファイルの実体は [gh-pages](https://github.com/frogcat/ndl-isil-json/tree/gh-pages) ブランチに保存されています。

# Demo

`ndl-isil.min.geojson` をロードして地図上に全データをプロットするデモです。

小縮尺では [leaflet-areacodecluster](https://github.com/frogcat/leaflet-areacodecluster) を使って
都道府県・市区町村ごとにクラスタリング表示されます。

- <https://frogcat.github.io/ndl-isil-json/>

![preview](https://repository-images.githubusercontent.com/276288699/375cc700-bbc5-11ea-92ce-871aeb4b7aa9)

# Build

```bash
$ git clone https://github.com/frogcat/ndl-isil-json.git
$ cd ndl-isil-json
$ npm install
$ npm run build
$ npm run test
```
