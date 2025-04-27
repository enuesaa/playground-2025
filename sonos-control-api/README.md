# Sonos Control API

- Sonos をコントロールする API
- 認証認可が通れば、外から API を読んで sonos をコントロールできる
- 認証認可は普通に OAuth っぽい
- デバイスをつけないとレスポンスが返ってこないものもある

## フロー
1. ブラウザで login.html を開く
2. ログイン
3. redirect されるのでコードを取得
4. 下記のコマンドでアクセストークンを取得

### アクセストークンを取得
```console
$ curl --request POST \
     --url 'https://api.sonos.com/login/v3/oauth/access?grant_type=authorization_code&code=xxx&redirect_uri=' \
     --header 'Content-Type: application/x-www-form-urlencoded;charset=utf-8' \
     --header 'accept: application/json' \
     --header 'authorization: Basic xxx'

{
  "access_token": "",
  "token_type": "Bearer",
  "expires_in": 86399,
  "refresh_token": "",
  "scope": "playback-control-all"
}
```

### トークンをリフレッシュ
```console
$ curl --request POST \
     --url 'https://api.sonos.com/login/v3/oauth/access?grant_type=refresh_token&refresh_token=xxx' \
     --header 'accept: application/json' \
     --header 'authorization: Basic xxx'
```

## Links
- https://docs.sonos.com/docs/authorize
