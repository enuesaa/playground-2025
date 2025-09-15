# dbt

- 今さら。
  - 本格的にトライしたのは初めてかも。
  - chatgpt に教えてもらった。
- SQL でデータを加工していくイメージ
  - ウェブアプリだと、アプリが使いやすいように view を用意するのが時たまあるが、そのデータ分析版みたいな。雑にいうと。
  - SQL でデータを加工（整形）して、結合して、あるテーブル（or view）を作る、、っていうのを組み合わせていく
  - で、その操作の定義をモデルという。
  - モデルは別のモデルの結果に依存している場合がある
  - 最終的に依存関係が RAG みたいになる
- ドキュメントを生成できる
  - dbdoc
- db への接続情報はグローバルに保存されるらしいから注意
  - `~/.dbt/profiles.yml`

### Commands
```bash
uv run dbt --version
uv run dbt init my_project

# モデルを実行
uv run dbt run

# モデルを実行したらテーブル構造が変わるので postgres に入り確認すべし
docker compose exec postgres psql -U postgres mydb

# ドキュメントを生成
uv run dbt docs generate
uv run dbt docs serve
```
