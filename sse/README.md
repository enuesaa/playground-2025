# SSE
Server Sent Events

- MIME タイプ `text/event-stream`
- メッセージのフォーマットは `data: <message>`
- 各言語で実装してみた。普通に対応している。
- ブラウザ側で動作確認してみた。普通に問題ない。websocket で通信する時とだいたい同じようなコード。

## Links
- https://developer.mozilla.org/ja/docs/Web/API/Server-sent_events/Using_server-sent_events
- https://pod.hatenablog.com/entry/2021/05/26/200403

## 対応ブラウザ
- https://caniuse.com/eventsource

地味に Opera Mini が対応してないが他のほとんどのブラウザでは対応しているので、プロダクション投入できるレベルだと認識。ただし「対応してません」というメッセージを出した方がいいレベルかな？

## サーバーサイド
- Go, Node.js, Python で普通に動いた。
- 全然知らなかった。
- ずっと接続を維持したまま、データを yield する感じ。 websocket のハンドラーみたいに。

## Websocket との使い分け
- 対応ブラウザ・クライアントの話は一旦わきに置いておく。
- ウェブサーバーの実装上は、そんなに違いがなさそうな印象。接続がずっと維持されたままだし。
- サンプルコードの多さで言えば、多分圧倒的に websocket
- websocket では Upgrade するときに GET でするしかなく、たとえばリクエストボディでの制御ができなく不便みたいな記事はあって、なるほどなあ。と思った。
  - https://brightdata.jp/blog/ai/sse-vs-streamable-http
- SSE は一方向。クライアントからデータを送るとかできない。なのでリアルタイム更新処理みたいなのマッチしているのかな。
- あと SSE はベースのフォーマットが決まっているのと、テキストデータしか送れない。
- ブラウザでの受信処理処理の実装は、正直そんなに変わらないなあ。
- TCPコネクションについて
  - SSE + HTTP/1.1 だと開いたぶんTCPコネクションも開かれる
  - HTTP/2 だとTCPコネクションが1つしか開かれない。React で複数のコンポーネントが複数のSSEを開いてもTCPコネクションは1つ
  - WebSocketは開いたぶん TCP コネクション
  - https://www.reddit.com/r/node/comments/tfct4e/sse_or_websockets_for_push_notifications/?tl=ja
