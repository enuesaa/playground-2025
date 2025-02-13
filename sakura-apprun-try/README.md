# AppRun

- さくらのクラウドの新登場サービス
- ベータ版
- コンテナイメージをさくらのクラウドに push する必要あり(これもベータ版)
  - ローカルで buildx するか github actions でビルドするか?
- ECS や AppRunner 風味
  - 結構意識していると思う
  - ヘルスチェックの設定とか。
- ベータ版だからかモニタリング方法がほとんどない
  - メトリクスを見つけられなかった
  - さくらのクラウドのどこかにあるのかな
- ログも見れなさそう
- UI 的にはすごく分かりやすい
- 管理画面をぱっとみれば概念は理解できた。ドキュメントに概念図があるけど見る必要性は感じない
- 今後に期待
- ちなみにさくらのクラウドも初見
  - 用語としてオンプレミス由来のもの (というより普通の技術用語) が多い
  - AWS だと EFS とかサービス名をつけたがるが、そういうのはなく単に NFS と書かれている
  - linode に近いかな、、あまり記憶ないが

## Links
- https://manual.sakura.ad.jp/cloud/manual-sakura-apprun.html
- https://zenn.dev/fujiwara/scraps/08982e9a66c83c

## Commands
```bash
docker login xxx.sakuracr.jp
docker build -t appruntest .
docker tag appruntest xxx.sakuracr.jp/appruntest:latest
docker push xxx.sakuracr.jp/appruntest:latest
```
