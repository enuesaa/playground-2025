# Route53 WildCard Record

- Route53 にワイルドカードなAレコードを作成して、EC2 に向けると、そのまま想像通りに EC2 へリクエストが向く
- https://hit.hateblo.jp/entry/aws/route53/wildcard

で、cywagon で、待ち受けたらそのままOKだった (curl)
```hcl
server {}

site "sampleapp" {
  port = 80
  host = "aaa.stg.kakkofn.dev"
  dist = "../dist"

  headers = {
    "Cache-Control" : "no-cache",
  }

  if {
    logic = logic.index
  }
}

logic "index" {
  if {
    path_not_in = ["/**/*.*", "/*.*"]

    rewrite {
      path = "/index.html"
    }
  }
}
```
