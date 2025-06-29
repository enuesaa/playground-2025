# nomad

久しぶりに

- 相変わらず UI は good
- ちゃんと運用するには色々勉強しないとと思った

### Version
```
➜ nomad --version
Nomad v1.9.3
BuildDate 2024-11-11T16:35:41Z
Revision d92bf1014886c0ff9f882f4a2691d5ae8ad8131c
```

### Run agent
以前は config ファイルの指定しなかったから、何か手順を間違えているかも

```
➜ nomad agent -config=config.hcl -dev
==> Loaded configuration from config.hcl
==> Starting Nomad agent...
==> Nomad agent configuration:
```

### Run nginx
```
➜ nomad run app.nomad.hcl

==> 2025-06-29T16:20:31+09:00: Monitoring evaluation "aedad6e8"
    2025-06-29T16:20:31+09:00: Evaluation triggered by job "app"
    2025-06-29T16:20:32+09:00: Evaluation within deployment: "bf437031"
    2025-06-29T16:20:32+09:00: Allocation "163ca4dd" created: node "8c6e0d4d", group "web"
    2025-06-29T16:20:32+09:00: Evaluation status changed: "pending" -> "complete"
==> 2025-06-29T16:20:32+09:00: Evaluation "aedad6e8" finished with status "complete"
==> 2025-06-29T16:20:32+09:00: Monitoring deployment "bf437031"
  ✓ Deployment "bf437031" successful
```