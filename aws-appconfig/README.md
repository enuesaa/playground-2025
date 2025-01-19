# AWS AppConfig

前から不思議だったけれど触るたびに「どこかで使えそう」と感じる

- Systems Manager の1機能であるがコンソールが別に分かれており、実質的に独立している
- サービスの立ち位置的には EC2 や Parameter Store と近く、そういう方面のユースケースを想定しているんだと思う
- Extensions なるものが存在する
  - 触れてないので分からないが、SQS への通知とかできるらしい
  - サービス設計として面白いと感じた
  - 通常、Integration と表現するところを、なぜ Extension と表現しているのか気になる
- ECS に Agent を入れて値をキャッシュするのがよくある構成例
- Lambda の場合は、AppConfig の API を叩いたりするはず
  - 確か Layer もある
- ユースケースとしてパッと思いつくのは Lambda の feature toggle
  - ただし、そっから先具体的なケースに落とし込めてない
  - ちょっと考えないと、なんとも分からなそう
- 設定値、環境という概念があり、「設定」を「環境」に適用するのが基本動作
- 設定値の保存先は S3 や Parameter Store も選択できる
- CodePipeline と統合できる
  - git で設定値を管理しており CodePipeline を走らせて AppConfig の環境へデプロイするイメージ
- 設定値を AppConfig で保管することもでき、その場合、diff もできる
- 設定値のバリデーション (lambda) もできる
