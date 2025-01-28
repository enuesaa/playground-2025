# grafana tempo nginx

- もともと nginx -> collector -> loki -> grafana を試していたが、どうしてもエラーが発生するので諦めた
```
$ docker compose up
web-1             | 2025/01/27 14:11:49 [error] 29#61: OTel export failure: unknown service opentelemetry.proto.collector.trace.v1.TraceService
```
  - 設定も正しいと思うんだけどな。ポートもあってそうだし。
  - 事例も少なく、プロダクションにはちょっと危うい感じがした。

- nginx -> tempo -> grafana はスムーズ
  - 立てたら一発でデータを grafana で確認できた
  - やっぱ tempo は使い勝手いいな。
  - 2024 年に立てたときも同じようなことしてた
  - https://github.com/enuesaa/playground-2024/blob/ef72ff8dd8ed5326019662e3f5d01df488442adc/grafana-tempo-try/docker-compose.yaml

## TraceQL
- https://grafana.com/docs/tempo/latest/traceql/
