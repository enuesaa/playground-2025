# s3 table bucket

- ずっと気になっているやつ
- Apache Iceberg 形式のデータを保存してクエリできる
- Athena や EMR と統合
- 分析やログ解析用途
- S3 とは毛色が違うし、サービスの方向性がいまいち理解できてない。
  - 知らないだけで Spark とかでは S3 との統合が進んでいて、S3 Bucket ライクに設計すればそのまま使えたりするのかな？
  - ちょっと不思議
  - まあ Athena のストレージが S3 であることを考えると多少寄せた感じが垣間見える。
- まだ実用的ではない
  - バケットを作ったら EMR でデータ作成して！って表示されてびっくり
  - バケットの削除も CLI からでしかできない

## Links
- https://speakerdeck.com/handy/s3-tableswosqldeshi-itaihua
- https://speakerdeck.com/bering/apache-iceberg-woxue-bi-amazon-s3-tables-wohuo-yong-siyou
