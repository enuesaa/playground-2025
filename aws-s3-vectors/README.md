# AWS S3 Vectors

- ベクトルDB
- プレビュー
  - めずらしく東京はない
  - いったん us-east-1
- ベクトルで保存するのって、地味に対応している DB が多くて、たとえば ElasticSearch とか Redis とか Postgres とか、暑いは Qdrant とかの専用DBがあるが、それらと比較してランニングコストがはるかに安い
  - AWS がいうには 90% くらいやすいらしい
  - リクエストベースでの課金だから、それが見合う分岐点はあると思う。
  - が、まあ普通のウェブアプリなら、s3 vectors がやすいと思うし、これが第一の選択肢になると思う。
- OpenSearch との統合もある。
  - まあ s3 vectors がコールドストレージであり、opensearch がウォームストレージ (インメモリ) 的な位置づけという認識
  - 実際こうだと思う。
- サンプルコードは一応動いた。
  - やっぱ DB レイヤーをメンテする必要なくなるのが大きい
  - 一応動いてそう
  - サンプルがあんまりまだないから、正しく書けているかは不明
  - あと AWS のエコシステム (bedrockとか) にどっぷり浸かる構成もあるから、そっちも試してみたいなあ。お金かかるけど。

## Links
- https://aws.amazon.com/jp/blogs/aws/introducing-amazon-s3-vectors-first-cloud-storage-with-native-vector-support-at-scale/
- https://dev.classmethod.jp/articles/amazon-s3-vectors-preview-release/
- https://zenn.dev/kun432/scraps/c09f7044efae2a
