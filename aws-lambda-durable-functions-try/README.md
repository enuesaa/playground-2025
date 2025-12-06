# AWS Lambda Durable Functions

- re:Invent 2025 にて発表された機能
- リージョンはオハイオ (us-east-2) だけ
- 制御にはAWS公式のライブラリを使う必要
  - 現時点では typescript と python だけ対応
- AWSコンソールでは「永続実行」という名前
- これまで lambda のワークフローといえば step functions であったが、簡易的なものは lambda 単体でできるようになった。という認識。
  - temporal のようなワークフローエンジンのメリットを部分的に実現している印象
    - 要は一つのコードにロジックをまとめつつ、システマチックに振る舞う感じ
    - asl <=> lambda とコードが離れていると、パッと結びつきがわからない課題の解決策
  - 今はシンプルに待機するサンプルしか試してないので、一方方向だが、これから分岐とかもできるようになるのかな？
    - そういうものでもないかも。わからない
  - 結局どのレベルで制御できるかが未知数なので、現時点では選定が難しい印象にある
  - Step Functions ほど分かりやすいUIではないので、どの程度モニタリングできるのかも懸念
  - 今のところユースケースが思いつかないが、たぶん便利な場面があるんだと思う
    - Lambda でちょっと待機したいときこれ使えば便利かな。お金かからないし
- 待機している期間中はお金がかからないらしい
- ますます lambdalith が進むだろうな。
- azure にも似たような機能があるらしい


ちなみに sam cli はまだ uv に対応してないっぽい。
ので強引に requirements.txt を生成してユーザーランドで対応させている

## Links
- https://dev.classmethod.jp/articles/aws-lambda-durable-functions-awsreinvent/
- https://dev.classmethod.jp/articles/aws-sam-cli-support-durable-function/
