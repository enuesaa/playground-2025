# FrankenPHP + Larvel Octane

- FrankenPHP は Go 製で embed とかするらしい
  - 斬新すぎてびっくり
  - PHP らしからぬが確かにできそう
- Laravel Octane でも使える
- ランタイムとしては普通に早そう
- ローカル開発ではホットリロードが必須
  - Larvel Octane の --watch フラグは node と chokidar に依存しており、たぶんプロジェクトルートに node_modules をおく想定
  - FrankenPHP の方に最近 watch モードが実装されたっぽい
  - Caddyfile で設定できる
    - Larvel Octane は Caddyfile をテンプレートとして内部に持っており、たぶん PHP で render している
    - Larvel Octane のフラグに Caddyfile を渡せるので、それでカスタマイズ
    - これがうまくいった
  - config/octane.php の watch は使わない
- Webサーバが Caddy なので筋が良さそう
- プロダクション構成を想定してみたいなあ
