# Laravel Graphql App

- PHP キャッチアップ用のアプリ
- GraphQL API

## 目的
- スキルのキャッチアップ
- PHP で graphql をどうやってあハンドリングするか興味ある

## TODO
- plugin の dont discover
- remove vite

## Links
- https://qiita.com/fujita-goq/items/8942d76dd2f542cb3ae0

## Lighthouse
- Laravel の GraphQL ライブラリ
- Provider を読み込むと /graphql にエンドポイントが生える。また /graphiql で devtool が立ち上がる
- スキーマを定義したら PHP を書く必要なく、そのまま DB を見に行く模様
- HTTP レイヤーが DB に密結合している感じが Laravel らしいなと思った。
- resolver を PHP で書きたいので、調査中
