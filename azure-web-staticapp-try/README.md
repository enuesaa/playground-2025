# azure web staticapp

- azure の静的Webサイトホスティングサービス
- vercel とか cloudflare pages みたいな感覚で静的サイトをデプロイできる
  - cdn というより、アプリケーションのホスト環境というワードの方が合っている
- swa というコマンドでデプロイできる
  - `pnpm add -D @azure/static-web-apps-cli`
  - `pnpm swa init` で swa-cli.config.json を生成
- 無料プランあり

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

## Links
- https://tech.kentem.jp/entry/2023/11/21/091222
