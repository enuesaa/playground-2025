# feature plan

## NASA API
おもしろそうなの

### 写真系
- APOD (Astronomy Picture of the Day)
- EPIC (Earth Polychromatic Imaging Camera)
- Mars Rover Photos

### 惑星データ
- NeoWs (Near Earth Object Web Service)
- DONKI (Space Weather Database Of Notifications, Knowledge, Information)

### Links
- https://api.nasa.gov/

## dev
- redis でキャッシュする
- フロントエンドは古典的に。live wire とかも検討
- 画像が多そうなので、スライドショー的な感じにしたい
- いったんapiのレスポンスを整形して、色付けできればOK。そのうち何を作りたいか思い浮かぶだろう。

### Livewire
- https://livewire.laravel.com/

### Redis
```bash
docker compose exec redis redis-cli
> keys *;
```

```bash
# cache
docker compose exec redis redis-cli -n 1
```
