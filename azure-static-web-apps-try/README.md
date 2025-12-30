# azure static web apps

- azure の静的Webサイトホスティングサービス
- vercel とか cloudflare pages みたいな感覚で静的サイトをデプロイできる
  - CDN というより、アプリケーションのホスト環境というワードの方が合っている
- ぜんぜん知らなかったけど、パターンとしてあるっぽい
- 事例が多い
- swa というコマンドでデプロイできる
  - `pnpm add -D @azure/static-web-apps-cli`
  - `pnpm swa init` で `swa-cli.config.json` を生成
- 無料プランあり
  - 有料プランでも機能的にはそんなに差異がない
  - がSLAを握られているので、業務では有料にするしかないかな
  - https://azure.microsoft.com/ja-jp/pricing/details/app-service/static/
- free プランで api をホストできる
  - `/api/{name}` に FaaS が生えるイメージ
  - Next.js の API Route 的なやつではなくて、JS以外の言語でもぜんぜんいい。
  - 実体は azure functions
  - 実体は azure functions だが、デプロイしてもそっちには表示されないっぽい
  - コンソールを見ると `Free ホスティング プランでは、独自の API バックエンドの持ち込みはサポートされていません` と書いてあるが、これは azure static web apps の外で api を定義して、それを紐づける？のが？有料っぽい
    - マネージドな api のデプロイは free でもできる
    - https://learn.microsoft.com/ja-jp/azure/static-web-apps/apis-overview
- `pnpm swa start` でローカルで立ち上げられる
  - 関数もついてきた
  - なんかエミュレーターをダウンロードしてるっぽい
- `@azure/functions@v4` で書き方が変わったらしく手間取った。
  - swa deploy でデプロイしても api が 404 を返していたら、構成が間違っているのでローカルでデバッグした方が良い
  - https://learn.microsoft.com/ja-jp/azure/azure-functions/functions-node-upgrade-v4?tabs=v4&pivots=programming-language-javascript
    - この `main` が何を指しているか分からなかったが、どうやら `package.json` の `main` フィールドのことらしい
    - `"main": "src/index.js"` を書かなかったら api のハンドラーが認識されなかった

## デプロイコマンド
```bash
➜ pnpm swa deploy --deployment-token xxx --env production

Welcome to Azure Static Web Apps CLI (2.0.7)

Using configuration "azure-web-staticapp-try" from file:
  /xxx

Deploying front-end files from folder:
  /xxx

Consider providing api-language and version using --api-language and --api-version flags,
    otherwise default values apiLanguage: node and apiVersion: 16 will apply

Deploying to environment: production

Deploying project to Azure Static Web Apps...
✔ Project deployed to https://xxx.3.azurestaticapps.net 🚀
```

## カスタムドメイン
無料。Digicert の証明書もついてくる。半年で自動更新らしい

- https://dev.classmethod.jp/articles/static-web-app-custom-domain/

## Links
- https://azure.microsoft.com/ja-jp/pricing/details/app-service/static/
- https://blog.shibayan.jp/entry/20240110/1704862567
