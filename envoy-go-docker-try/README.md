# Envoy with go app

- envoy を docker compose で立ち上げる
- サンプルアプリとして Go App を用意

```bash
curl http://localhost:8080/
```
で Go App のレスポンスが返ってくる

- 上手く立ち上がった

## Envoy の設定について
- LB の立ち位置なので nginx や ALB の設定に似ていると感じた
- ただ経験ないと、何が何かわからなくてしんどく感じる
- App Mesh はこのレベルまで抽象化しているのかな？

## Admin
- localhost:9901 で admin が立ち上がる
- UI は簡易的なもの
- ログとか簡易的なもの

## Links
- https://qiita.com/tomozo6/items/837bc53989e3f0b99915
- https://writerman.hatenablog.jp/entry/2022/09/03/173821
