# S3 Source CodePipeline

- s3 source
- できるのは知っていたが、初めて作ってみた
- パターンがいくつかある
  - polling
    - 旧来からある方法
    - たぶん s3::GetObject を呼んでいるので料金かかりそう
  - cloudtrail の証跡から EventBridge 経由で検知しトリガー
    - s3::PutObject は通常の CloudTrail ではなく s3 にエクスポートされる証跡にしか入らない
    - そのため、それを EventBridge イベントにするっていうルール設定がまず必要
    - 続いて、EventBridge のルールで、それを検知して codepipeline:StartPipelineExecution を実行する
    - 証跡経由だからちょっと微妙かも
  - s3 event 通知 + EventBridge
    - 筋はいい
