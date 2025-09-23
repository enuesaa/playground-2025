# sqlx

- 最近注目度が上がっている印象
- sqlc のメンテナが言及していて興味を持った
  - https://zenn.dev/resilire/articles/202509-sqlc-knowledge

ざっくり2つの書き方がある
- 自分でtype指定 `sqlx::query_as::<_, (i32, String, String)>("SELECT id, name, email FROM users"`
  - これはちょっと面倒そうに感じた
- sqlx prepare でtypeを判定
  - `cargo install sqlx-cli`
  - `DATABASE_URL=postgres://testuser:testpass@localhost:5432/testdb cargo sqlx prepare` を実行すると .sqlx を作成する
  - で、それを見てtype指定されるよう。
  - `println!("{}: {} ({})", row.id, row.name, row.email)`
  - 型推論が高度なイメージ。実際のDBを見て推論する

あとなんかマイグレーションとかもできるらしい
- https://github.com/launchbadge/sqlx/blob/c52e129e8341c46b2ea5c9b912e1af665be1ef83/sqlx-cli/README.md

- sqlx ベースのORM に SeaORM というものがある
  - けっこう使い勝手がいい
  - これもマイグレーション機能がある
  - なかなか良さそう
  - https://www.sea-ql.org/SeaORM/
  - https://damepo9696.hatenablog.com/entry/2023/05/07/095028

## Links
- https://github.com/launchbadge/sqlx
- https://ysuzuki19.github.io/post/rust-sqlx-memo
