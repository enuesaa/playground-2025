# sqlx with mysql

- sqlx prepare して .sqlx というディレクトリに型ファイルを置いておくものだと思っていたが、.sqlx というディレクトリは必須ではないらしい。
- コードの前の方で dotenv を見に行くようコードを書いておけば、それを見に行っているっぽい？
- rust analyzer が起動した瞬間に、なんか組んでいるのかな？
  - .env の DATABASE_URL を不正な値にしたら `error returned from database: 1045 (28000): Access denied for user 'root'@'172.18.0.1' (using password: YES)` を VS Code に出力された。
  - よくできている。これ。
- ただ運用上は .sqlx のディレクトリを使ったほうが安定するし確実だろうなあ。
