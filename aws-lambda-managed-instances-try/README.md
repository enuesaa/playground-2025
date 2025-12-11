# AWS Lambda Managed Instances

- Lambda on EC2
- re:Invent 2025 で発表された
- Lambda を自アカウントの EC2 インスタンスで実行できる機能
- terraform で試せた
- `Managed Instances` という名前が肝
  - あくまでEC2インスタンスの管理はAWSマネージド
  - そのため通常のEC2インスタンスのようになんでもできる訳ではない
  - インスタンスタイプを指定したり、関数レベルでVMがまとまることによるメリットが打ち出されているのかなー。
  - なんか共有ストレージを使う系の関数であれば、いいなと思った。
  - これまではたぶんEFSをつけたり工夫するレベルでしか制御できなかったが、大容量ファイルのシェアが容易にできるようになったのでは？
  - まあメモリとかGPUの話も大体ざっくりそうか。
  - 大量にメモリ/ストレージを使うアプリケーションにとって、これまでのLambdaの枠に制限されず、プログラミングモデルを変革できる
  - 自由度が上がる感じかな。
  - なんでもできるわけではないが、設計の自由度は上がると思う
- EC2インスタンスは最低2つ必要
  - キャパシティプロバイダーの設定をして、Lambda 関数を作ったら、勝手に2つ立ち上がる
  - インスタンスタイプは勝手に決めてくれるらしいが、まあ運用を考えると、いくつかに絞った方がいいんだろうな
- ちなみに Lambda の実行はぜんぜん早かった。普通のLambdaと変わらない

## Links
- https://dev.classmethod.jp/articles/lambda-managed-instances/
- https://dev.classmethod.jp/articles/lambda-managed-instances-terraform/
