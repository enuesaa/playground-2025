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

## クロスコンパイル
```bash
zig build -Dtarget=x86_64-macos --prefix-exe-dir x86_64-macos
zig build -Dtarget=aarch64-macos --prefix-exe-dir aarch64-macos
zig build -Dtarget=x86_64-linux-gnu --prefix-exe-dir x86_64-linux-gnu
zig build -Dtarget=aarch64-linux-gnu --prefix-exe-dir aarch64-linux-gnu
```

- https://zenn.dev/tetsu_koba/articles/50dc9ea507c08f
