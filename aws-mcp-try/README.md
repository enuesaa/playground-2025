# aws mcp

- uv ベース
- 色々ある
- とりあえず Claude に登録にして呼び出すことは成功したが、なんか途中で失敗しちゃう
- ここ最近毎日リリースされてるみたいだし、多分そのうち直りそう
- 関係ないが Amazon Q Developer CLI というのが生まれていた
  - https://github.com/aws/amazon-q-developer-cli
  - Amazon Q というアプリを `brew install amazon-q` でインストールするとついでについてくる
  - `q` というコマンド。びっくり
  - なんか AWS 認定資格のアカウント（Builder IDだっけ）にログインが必要
  - AWS CLI のクレデンシャルを見ているのか、普通に aws s3api list-buckets とか実行している様子で、ちょっとびっくり
  - 参照系は yes/no を聞かれなかったので、ちょっと注意
  - https://business.ntt-east.co.jp/content/cloudsolution/ih_column-191.html

## Commands
```bash
brew install uv
uv python install 3.10

# claude に mcp server の設定を記述
```

## Links
- https://github.com/awslabs/mcp
