# fuego

- HTTP Routing lib
  - シグネチャがちょっと変わってる `fuego.Get(app, "/", helloWorld)`
  - たぶんテストのことを考えてこうしたんだと思う
- OpenAPI Spec を出力できる
  - サーバを立ち上げると doc/openapi.json が出力された
- OpenAPI Doc を立ち上げられる
  - パスは /swagger/index.html
  - なんで swagger なんだろうな。最近のアプリらしいけど不思議
  - 内部的には @stoplight/elements を index.html で呼び出しているみたい
  - ありがちな実装で Redoc とかはこういうのが主流だと思うが stoplight も出来るとは思ってなかったのである意味感動した
