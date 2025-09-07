# daft

- GitHub Trendings で見つけた
- daft は data functions の略らしい
- duckdb 的なやつかな
- 色んなデータストアからデータを読んで df へ変換できる。フィルタリングとか加工できる。そういうやつ

## Example
```bash
$ uv run main.py
╭───────┬─────────┬─────────┬──────╮
│ A     ┆ B       ┆ C       ┆ D    │
│ ---   ┆ ---     ┆ ---     ┆ ---  │
│ Int64 ┆ Float64 ┆ Boolean ┆ Null │
╞═══════╪═════════╪═════════╪══════╡
│ 1     ┆ 1.5     ┆ true    ┆ None │
├╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌┤
│ 2     ┆ 2.5     ┆ true    ┆ None │
├╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌┤
│ 3     ┆ 3.5     ┆ false   ┆ None │
├╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌┤
│ 4     ┆ 4.5     ┆ false   ┆ None │
╰───────┴─────────┴─────────┴──────╯
```

## Links
- https://github.com/Eventual-Inc/Daft
- https://docs.daft.ai/en/stable/quickstart/
