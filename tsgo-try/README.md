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
