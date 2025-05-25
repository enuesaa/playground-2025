# tsgo

- 話題の件
- tsc が Go ベースで作り直される（移植）らしい
- tsgo がコマンドになるのかな？
  - `tsgo tsc` が `tsc` と同じ振る舞いをする？
  - https://github.com/microsoft/typescript-go?tab=readme-ov-file#running-tsgo
- バージョンとしては TypeScript 7 になるらしい
  - 移行期間が1年くらいあるらしい

## Commands
```bash
git clone --recurse-submodules https://github.com/microsoft/typescript-go.git
cd typescript-go
npm ci
npm run build

./build/local/tsgo tsc a.ts # a.js ができる
```

たぶんまだ検証段階だろうけど、普通に tsc でトランスパイルできた

## Links
- https://github.com/microsoft/typescript-go
- https://zenn.dev/dinii/articles/typescript-go

## コード
- まだ TODO っぽいのが見受けられる
- この vfs は自分も同じようなものを用意することあるから興味深い。これ参考にしたいなあ。
  - https://github.com/microsoft/typescript-go/blob/main/internal/vfs/vfs.go
- 当たり前だがコード量が多く、何やってるかさっぱり分からない
- 一つのパッケージだけでみると、意外にも分量は少なめ。見ようと思ったら見れる

## 実行時間 (2025-05-25)
tsgo が TypeScript Native Previews として公開されたので、どのくらい早くなっているのか検証

### 事前準備
cmdgate の tsc がどのくらい早くなっているか検証する
```console
$ gh repo clone enuesaa/cmdgate
$ cd cmdgate
$ pnpm i
```

tsgo を入れる
```console
$ pnpm add -D @typescript/native-preview
```

### tsc
`--extendedDiagnostics` で実行時間を確認できるらしい

```console
$ pnpm tsc --extendedDiagnostics
Files:                         158
Lines of Library:            39735
Lines of Definitions:        48158
Lines of TypeScript:           304
Lines of JavaScript:             0
Lines of JSON:                   0
Lines of Other:                  0
Identifiers:                 77800
Symbols:                     95580
Types:                       43010
Instantiations:              45269
Memory used:               172784K
Assignability cache size:    17667
Identity cache size:           112
Subtype cache size:              8
Strict subtype cache size:       4
I/O Read time:               0.01s
Parse time:                  0.11s
ResolveModule time:          0.01s
ResolveTypeReference time:   0.00s
ResolveLibrary time:         0.00s
Program time:                0.14s
Bind time:                   0.06s
Check time:                  0.43s
transformTime time:          0.00s
Source Map time:             0.00s
commentTime time:            0.00s
I/O Write time:              0.00s
printTime time:              0.01s
Emit time:                   0.01s
Total time:                  0.64s
```

### tsgo
```console
$ pnpm tsgo --extendedDiagnostics
Files:              158
Lines:            88099
Identifiers:      78803
Symbols:         105579
Types:            54041
Instantiations:   48557
Memory used:    106888K
Memory allocs:   750310
Parse time:      0.016s
Bind time:       0.005s
Check time:      0.119s
Emit time:       0.000s
Total time:      0.140s
```

- d.ts の emit はまだできないらしい
- [tsgo の README](https://github.com/microsoft/typescript-go) に進捗が書いてある
- Parse Time だけ比べると10分の1かなあ
- Check Time は2分の1
- 定義がどこまで同じか不明。一概に比べて良いか分からない
- d.ts を emit できるようになったらまた比べたい
