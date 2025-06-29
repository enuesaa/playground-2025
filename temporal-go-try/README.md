# Temporal

- ワークフローエンジン
- Step Functions ライク
- 色んな言語でワークフローを書くことができる
- Step Functions との違いは
  - セルフホストである点。Kubernetes にデプロイするケースも。
  - アクティビティを自前で定義できる点
    - コードで書けるので、なんでもできる
    - Step Functions だと Lambda を呼び出す形式だから、ちょっと面倒
- saga パターンのフレームワークチック
  - 素直に使えば自然と saga パターンになりそう
- UI はちょうどいい。
  - 白黒
  - みやすい
- スケジューリングもできるみたい
- 個人的にはプロダクションいける印象
  - なんかいつか課題感でくわしそう。

## Links
- https://temporal.io/
- https://zenn.dev/kinosuke01/articles/48fb1687880b59
