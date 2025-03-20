# Laravel Graphql App

- PHP キャッチアップ用のアプリ
- GraphQL API

## 目的
- スキルのキャッチアップ
- PHP で graphql をどうやってあハンドリングするか興味ある

## Links
- https://qiita.com/fujita-goq/items/8942d76dd2f542cb3ae0
- https://speakerdeck.com/azuki/graphql-haiizo-laravel-dexue-bu-graphql-ru-men?slide=21
- https://zenn.dev/openlogi/articles/82114148bd3c4e

## Lighthouse
- Laravel の GraphQL ライブラリ
- Provider を読み込むと /graphql にエンドポイントが生える。また /graphiql で devtool が立ち上がる
- スキーマを定義したら PHP を書く必要なく、そのまま DB を見に行く模様
- HTTP レイヤーが DB に密結合している感じが Laravel らしいなと思った。
- App\GraphQL\Queries にクラスを置いておくと、それをみに行くらしい

## Laravel pint
- コード整形ツール
- CS Fixer を内包しているらしい
- see https://qiita.com/ucan-lab/items/8807a092eb6d87ddfe34
- run `composer run format`

## Future plan
- NASA Open API を呼ぶ
- 何も検討ついてないが何か面白そうなリソースを見つけて、DB に保存したり返せるようにしたい

```console
$ curl "https://api.nasa.gov/planetary/apod?api_key="
{
  "copyright": "",
  "date":"2025-03-20",
  ...
}
```

- 基本的に PHP のスキルを維持するために開発する。そのため運用負荷が最小限になるよう構成
