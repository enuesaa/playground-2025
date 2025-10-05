# pgrx

- rust で postgres の extension を作れるcrate
- 開発するときは cargo install pgrx して、コマンドをインストールして、それで行う

## init

はじめに `cargo pgrx init` する。

- `~/.pgrx` というディレクトリができる
- postgres 13 ~ 18 までのなんか開発用のコードっぽいのが置かれる。おそらく pgrx でのビルド or デバッグに必要なのだと思う
- README に依存パッケージとか書いてある。
  - https://github.com/pgcentralfoundation/pgrx/
  - ubuntu で作業するのが良いかも。たぶんそっちの方が楽

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

`cargo pgrx package --pg-config=~/.pgrx/17.6/pgrx-install/bin/pg_config`

- pg_config のパスを渡す
