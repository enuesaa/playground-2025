# atlas

- db マイグレーションツール
- go ent が推している
- まあ普通にマイグレーションする
- hcl 形式でスキーマを書いて、apply する方式
- atlas cloud というのもあるらしい
- ちょっと学習コストがあると感じた

## Install
```bash
brew install ariga/tap/atlas
```
see https://atlasgo.io/getting-started/

## Commands
```bash
atlas schema inspect -u "mysql://root:xxx@localhost:3306/app" > schema.hcl
```

```bash
atlas schema apply -u "mysql://root:xxx@localhost:3306/app" --to file://schema.hcl
```

## Links
- https://atlasgo.io/getting-started/
