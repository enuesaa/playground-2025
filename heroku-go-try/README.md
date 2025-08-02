# heroku go

- heroku って今は salesforce 傘下なのか
- 認証まわりが salesforce と統合された様子
  - 全体的にもっさりしている
  - あと画面構成も複雑になっている印象
- docker レスなデプロイ
  - Procfile が必要
    - ここにエントリーポイントを書くらしい
  - `heroku create` すると heroku に git repository を作ってくれるから、それに push するとデプロイされるらしい
  - https://qiita.com/k1mu0419/items/b5985fdf3b71c9db5b17
- github と連携できるらしい
  - こっちの方が管理が楽そう
  - https://devcenter.heroku.com/ja/articles/github-integration
- デプロイするときは docker container 方式のほうがいいかも
  - docker container 方式のほうがデプロイを制御しやすそう
  1. `heroku container:login`
  2. `heroku container:push web`
    - このコマンドはエラーが起きる。
    - https://stackoverflow.com/questions/79085108/405-method-not-allowed-for-docker-container-deployment-to-heroku
    - なので、こっちがいいかも
    - `docker buildx build --provenance=false --platform linux/amd64 -t registry.heroku.com/protected-lake-<appid>/web .`
    - `docker push registry.heroku.com/protected-lake-<appid>/web`
  3. `heroku container:release web`
- なんか heroku の git repository を git の remote に追加しておくと --app フラグが不要になる
- buildpack とは
  - heroku へデプロイするとき便利なツール集
  - https://jp.heroku.com/elements/buildpacks
  - 言語別にある
  - Go はこれ https://github.com/heroku/heroku-buildpack-go/blob/main/bin/compile
- heroku pipeline
  - https://qiita.com/yo-iida/items/f99566fe4617f848fa39
