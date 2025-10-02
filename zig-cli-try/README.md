# zig cli

- 依存関係に問題があるようで、動かない

## Commands
```bash
# create project
zig init

# run
zig build run -- --help

# test
zig build test
zig test src/*
```

## zig について
- src/main.zig にアプリケーションを書くらしい
- src/root.zig にライブラリを書くらしい
- 同じファイルにテストをかける

## zig v0.15.1

はじめに試したときは zig の大きな変更がちょうどリリースされたタイミングだったらしく、その移行期であったため、なんか動かなかったっぽい。

https://zenn.dev/smallkirby/articles/feb8ceefaddbd0
