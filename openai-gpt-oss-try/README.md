# gpt-oss

- OpenAI の Apache License 2.0 なモデル
- ダウンロードできる
- ollama でトライ
  - https://ollama.com/library/gpt-oss/tags
- 2つある？
  - gpt-oss:20b (latest) 14GB
  - gpt-oss:120b 65GB
- m1 mac で
  - ダウンロードから起動までは 5 分もかからなかった
  - 応答は遅い
  - シンプルにメモリが足りなそう
  - あるいは ollama の設定が悪いかも

## Commands
ollama の起動
```console
$ ollama start
```

gpt-oss:latest の pull と実行
```console
$ ollama run gpt-oss
pulling manifest
pulling b112e727c6f1:  25% ▕██████████████████████                                                                  ▏ 3.5 GB/ 13 GB   55 MB/s    3m6s
```

会話
```
>>> こんにちは
Thinking...
The user says "こんにちは" (Hello). They greet the assistant. We can respond in Japanese. Perhaps a
polite greeting and ask how we can help. Use friendly tone.
...done thinking.

こんにちは！今日はどんなお手伝いができますか？😊

>>> apache kafka とは？
Thinking...
User: "apache kafka とは？" They ask in Japanese: "What is Apache Kafka?" We need to explain Kafka:
distributed event streaming platform, originally from LinkedIn, now open-source. Provide overview:
producer, consumer, topics, partitions, offsets, brokers, zookeeper (removed in newer versions), Kafka
Streams, ksqlDB, use cases. Provide key concepts. Possibly mention architecture, messaging, log
compaction, retention, etc. Provide Japanese explanation. Probably mention it can be used for real-time
analytics, microservices integration, log aggregation. Also mention performance, durability, scalability.
Also mention Kafka ecosystem. Provide examples. Also mention differences from traditional message queues
like RabbitMQ, JMS. Provide pros and cons. Might also provide code snippet? Could give a quick example of
producing/consuming. Provide maybe an illustration.

User didn't specify anything else; simple ask. Provide answer in Japanese. Use simple language but
thorough. Possibly include small table.

Ok. Let's produce.
...done thinking.

## Apache Kafka とは

### 1. 何か？
- **分散型イベントストリーミングプラットフォーム**
  - 大量のデータ（イベント）をリアルタイムで取り込み、保存し、配信するためのオープンソースソフトウェアです
```
User と System だっけな。OpenAI API にある通り内部でやりとりしてるんだな。

## Links
- https://qiita.com/mix_dvd/items/87a5c2d106226b7a9ef2
