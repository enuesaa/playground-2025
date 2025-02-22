# AWS Otel Collector + X-Ray

- 最近の X Ray は結構いいかもな
- なんか昔のイメージに比べて UI が洗練された気がする
- Log と Trace を一緒に見れる
  - 必要十分では？
- ちなみに Go の auto instrument の話はほんのちょっと進んでた
  - https://ymtdzzz.dev/post/comparing-auto-instrumentation-golang/
- `go.opentelemetry.io/contrib/instrumentation/github.com/labstack/echo/otelecho` のメンテナーが見つかったぽい。ありがたい
- 注釈 (annotation) は便利だわ。
  - indexed_attributes に指定した attribute が xray で注釈扱いされる
  - コンソールでフィルターとかできて、めっちゃいい
- Trace 一覧に Id とかパスしかなくカラムを追加できないので情報量が足りないが、まあ上々だと思う

## Links
- https://zenn.dev/k_yoshi/articles/30a7d145693015
- https://aws-otel.github.io/docs/getting-started/x-ray
- https://jedipunkz.github.io/post/opentelemetry-aws/
- https://zenn.dev/hkdord/articles/aws-open-distro-for-opentelemetry-xray
