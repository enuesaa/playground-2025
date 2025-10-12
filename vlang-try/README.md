# vlang

- Go ライクな構文
- ファイルの作りとかよく似ている
- C へトランスパイルするらしい
  - なので、まあどこでも動く
- veb というウェブフレームワークがある
  - https://modules.vlang.io/veb.html
- Language Server がちょっと弱いかも？ソースコードに飛べない

## Links
- https://vlang.io/
- https://docs.vlang.io/getting-started.html

## Install
```bash
brew install vlang
```

version
```bash
➜ v -v
V 0.4.12
```

## New
```bash
➜ v init
Input your project description:
Input your project version: (0.0.0)
Input your project license: (MIT)
The directory name `vlang-try` is invalid as a module name. The module name in `v.mod` was set to `vlang_try`
Initialising ...
Created binary (application) project `vlang_try`
```

これ .git るっぽいのでモノレポの時は注意

## Run
```bash
➜ v run .
Hello World!
```

## Build
```bash
➜ v build .
Use `v .` instead.

➜ v .
```

実行すると vlang-try というファイルができる
