# doltgres

- git ライクな DB の postgres 風味版
- まだベータ
- Go で書かれている
  - なのでバイナリをダウンロードして手元で動かした
- 普通に psql で接続できる
- 一応チュートリアル通りに動く
  - https://docs.doltgres.com/introduction/getting-started
- ただ Beekeper Studio で接続したら、ところどころエラーが起きてた。
  - テーブル作成も危うい
  - 本番投入はまだダメだな
- なんか insert したらステージされる感覚
- ステージされているものを、ある時点で区切ってコミットみたいな。
- コンセプト自体は期待している

## Links
- https://docs.doltgres.com/
