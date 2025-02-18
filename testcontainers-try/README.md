# testcontaienrs (Go)

- コードで docker container を起動できる
- リアルな DB を使うテスト用途
- fixture を使うテストをしやすい
- なんか Java 製って聞いてたけど、そんなことないらしい。たぶんバインディングとかでもなく普通にぜんぶ Go だと思う
- まあエコシステムの中に居られるのは安心
- あと GitHub Actions でテストする時とか compose.yml とコンテナ定義が二重になっちゃう時あるけど、それを回避できる
- module の仕組みがよくわからないな。
- 若干の気持ち悪さを感じつつ、でもどっぷり浸かっちゃうのが大概いいんだよなあと思う
  - インフラレイヤーがアプリケーションに入ってきているのが気持ち悪い

## Commands
```bash
go test ./...
```

## Links
- https://testcontainers.com/guides/getting-started-with-testcontainers-for-go/
- https://github.com/testcontainers/testcontainers-php/blob/main/composer.json
  - 依存に docker-php が入ってて、頑張っている感がある
