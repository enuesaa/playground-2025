# golangci-lint

リンター

- v1 -> v2 で色々変わったみたい
  https://golangci-lint.run/product/migration-guide/
- プラグインシステム
  - 内部で staticcheck とか呼び出してる
  - https://golangci-lint.run/plugins/module-plugins/
- go tool で入れると go.mod に依存がたくさん追加される
  - go.mod を分ける (go work) 事例もある
  - https://zenn.dev/otakakot/articles/39c104193e7dad

- github actions だと公式のactionがそのままゼロコンフィグで素直に動く
  - https://github.com/golangci/golangci-lint-action

- mac だと go install で入れた方がいいかも
  - brew で入れると go のバージョンがミスマッチしてエラーがたくさん出る
  - なんか go のバージョンと golangci-lint をビルドした go のバージョンが一致している必要があるらしい

## Links
- https://golangci-lint.run/
