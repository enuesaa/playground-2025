# Portainer

- GUI で docker コンテナを立ち上げたりできる
- ECR とかと接続できる
- Business Edition (BE) と Community Edition (CE) の2つがある
- UI は結構いいし、日常使いできると思う
- Portainer を立ち上げるのに docker が必要だから、たぶん mac で立ち上げるというより EC2 に立ち上げておいて、チームで使う感じだと思う

## Commands
```bash
docker volume create portainer_data
docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:lts

# https://localhost:8000 にアクセスしてユーザー作成
```

## Links
- https://docs.portainer.io/start/install-ce/server/docker/linux
- https://www.memory-lovers.blog/entry/2024/01/03/102747
