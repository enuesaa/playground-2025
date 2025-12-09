# CloudWatch RUM

- JSのトレース
- はじめ収集するのに手こずった。
  - コードを入れているのに aws api をぜんぜん呼ばない。
  - 原因は `signing: false` であったから。
    - サンプルコードの JS のコメントに `If you have a public resource policy and wish to send unsigned requests please set this to false` と書いてあった
    - つまり signing: false でかつ cognito idpool の arn がセットされてなかったら、リクエストしない模様。
    - なおかつRUMのリソースポリシーが空だったので、そもそも送信できても弾かれていたと思う。
  - ここで引っ掛かる人多いんじゃないかな。デフォルト値が false だからなかなか変えようという気持ちにならない
- `ウェブバイタル` ってワードが出たり、思ったよりフロントエンドエンジニア視点で作っているんだなーと思った。
