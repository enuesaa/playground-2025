# odin

- システムプログラミング言語
- rust とか zig と同じ感じ
- 速い

## Links
- https://odin-lang.org/

## Install

公式サイトにはマニュアルでビルドするよう書いてあったが brew でインストールできた。
```bash
brew install odin
```

## Version
```bash
➜ odin version
/opt/homebrew/bin/odin version dev-2025-10:3ad7240d3
```

## New
プロジェクト作成のコマンドはないらしい

## Run
main をエントリポイントとして実行するらしい

```bash
➜ odin run .
Hellope!
```

## Build
```bash
➜ odin build .
```

バイナリができる。ここでは odin-try というファイル名

## バイナリを実行
```bash
➜ ./odin-try
Hellope!
```
