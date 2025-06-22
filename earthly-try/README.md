# Earthly

- Dockerfile + Makefile 風のコンテナビルドツール
- 独自フォーマットなので VS Code に拡張入れるのが必須
- 課題感はわかる
- Dockerfile でマルチステージビルドできるようになったので、なんか少し課題感が和らいだ印象もある

## Install
```bash
brew install earthly && earthly bootstrap
```

## Command
```bash
# run `build` in Earthfile
earthly +build
```

## Links
- https://earthly.dev/get-earthly
- https://zenn.dev/kesin11/articles/7f4eed7cabf38d
