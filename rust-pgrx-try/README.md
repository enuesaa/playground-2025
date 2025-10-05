# pgrx

- rust で postgres の extension を作れるcrate
- 開発するときは cargo install pgrx して、コマンドをインストールして、それで行う
- 元は pgx って名前だったらしい

## Links

- https://github.com/pgcentralfoundation/pgrx/blob/develop/cargo-pgrx/README.md

## init

はじめに `cargo pgrx init` する。

- `~/.pgrx` というディレクトリができる
- postgres 13 ~ 18 までのなんか開発用のコードっぽいのが置かれる。
- おそらく pgrx でのビルド or デバッグに必要なのだと思う
  - ビルドするときに pg_config というファイルを読み込む必要があるらしく、その辺りをハンドリングするためと思われる
- エラーが発生するときは README を確認する
  - 依存ライブラリが不足していると思う。
  - https://github.com/pgcentralfoundation/pgrx/
  - ubuntu で作業するのが良い。クロスコンパイルできるのだろうがしんどい。たぶんそっちの方が楽

## new

`cargo pgrx new <extension-name>` でプロジェクト作成。

## run

`cargo pgrx run` すると、psql が立ち上がり、挙動を確認可能。

- `CREATE EXTENSION pgrxtry` で extension を作成
- その後は、extension が読み込まれ、関数とか実行できるようになる。

```bash
➜ cargo pgrx run
psql (13.22)
Type "help" for help.

pgrxtry=# CREATE EXTENSION pgrxtry;
CREATE EXTENSION

pgrxtry=# SELECT hello_pgrxtry();
 hello_pgrxtry
----------------
 Hello, pgrxtry
(1 row)
```

## build

`cargo pgrx package`

- pg_config が必要
  - `cargo pgrx package --pg-config=~/.pgrx/17.6/pgrx-install/bin/pg_config`
  - ローカルでパスが通っていればフラグをセットする必要ない
- はじめmacでビルドしていたが、なんか dylib っていう形式で作成されるが、これは mac でしか使えないらしい？
  - https://github.com/pgcentralfoundation/pgrx/blob/2e515ae3fe3d350258ce9cd492ce41a7afcbaaef/cargo-pgrx/src/command/install.rs#L189
  - なので docker でコンテナを立ててそこでビルドする方式に変えた (`compose.yml` の builder コンテナ)

## 動作確認

```bash
➜ docker compose exec postgres bash
root@fd401a90499e:/# psql -Upostgres
psql (17.4 (Debian 17.4-1.pgdg120+2))
Type "help" for help.

postgres=# CREATE EXTENSION pgrxtry;
CREATE EXTENSION
postgres=# SELECT hello_pgrxtry();
 hello_pgrxtry
----------------
 Hello, pgrxtry
(1 row)
```
