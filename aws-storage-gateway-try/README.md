# AWS Storage Gateway

- VM にクラウドストレージをマウントするやつ。S3 へ保存できる
  - ファイルゲートウェイ（ファイル単位で S3 へ転送。NFS）
  - ボリュームゲートウェイ（ストレージのスナップショットをとってS3へ転送。キャッシュのモードがある）
  - テープゲートウェイ（テープ形式で）
- 基本的にはオンプレ向けに感じた
  - EC2 に Storage Gateway をつけることができるが m5.xlarge + 150 GB のスペックが推奨されており、なかなか要求が高い
  - ボリュームゲートウェイだと、ローカルにキャッシュする、、という戦略も取れて、それだから要求が高いのだと思う
  - EC2 に ssh するときの username は admin

## Links
- https://dev.classmethod.jp/articles/storage-gateway-ec2-2021/
- https://www.reddit.com/r/aws/comments/82pyop/storage_gateway_vs_efs/?tl=ja
- https://techblog.nhn-techorus.com/archives/25521
