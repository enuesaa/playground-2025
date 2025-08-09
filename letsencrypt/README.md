# Let's Encrypt

- lets encrypt で証明書をとる
- eff の certbot で証明書を取ったり更新できるようになったらしい
  - たぶん変わった
  - ずいぶん前は画面からいけた気がする

amazon linux 2023 で

```bash
dnf install certbot

# 証明書発行
# 発行したら /etc/letsencrypt/ に証明書が置かれる
certbot certonly --standalone
```

cywagon
```hcl
site "sampleapp" {
  port = 443
  host = "aaa.stg.kakkofn.dev"
  dist = "../dist"

  tlscert = "../../../etc/letsencrypt/live/aaa.stg.kakkofn.dev/fullchain.pem"
  tlskey  = "../../../etc/letsencrypt/live/aaa.stg.kakkofn.dev/privkey.pem"

  headers = {
    "Cache-Control" : "no-cache",
  }

  if {
    logic = logic.index
  }
}
```

## Links
- https://softwarenote.info/p3954/
