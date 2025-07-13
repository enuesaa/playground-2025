# Discord Webhook

- discord の webhook
- slack みたい。
- 結構柔軟。optional なフィールドが多くて、フィールドをセットしなかったらデフォルトになる

```bash
curl -H "Content-Type: application/json" \
    -d '{"content": "hello"}' \
    -X POST <url>
```

embeds

```bash
curl -H "Content-Type: application/json" \
    -d '{"embeds": [{"title": "タイトル", "description": "description", "fields": [{"name": "test", "value": "70%"}]}]}' \
    -X POST <url>
```

## Links
- https://zenn.dev/discorders/articles/discord-webhook-guide
