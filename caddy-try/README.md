# caddy

- web server
- github trendings に載っていた
- Go 製
- chi っぽい
- web server として一通りの機能はあり、有名っぽい

## Install
```bash
brew install caddy
```

## Usage
バックグラウンドで動くっぽい
```console
$ caddy start
2025/01/05 05:39:14.713	INFO	admin	admin endpoint started	{"address": "localhost:2019", "enforce_origin": false, "origins": ["//localhost:2019", "//[::1]:2019", "//127.0.0.1:2019"]}
2025/01/05 05:39:14.713	INFO	serving initial configuration
Successfully started Caddy (pid=57370) - Caddy is running in the background

$ caddy stop
```

## Caddyfile
nginx.conf みたいな書式で conf をかける

https://caddyserver.com/docs/quick-starts/caddyfile

## Links
- https://github.com/caddyserver/caddy

## Auto HTTPS
たぶんルート証明書をPCにセットしているっぽい。使うのであればちゃんと調べた方がいい
