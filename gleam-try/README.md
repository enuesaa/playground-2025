# gleam

- Erlang と JavaScript (ES6) へトランスパイル可能なプログラミング言語らしい
- 初見、Go 風味なシンプルな言語だと思った
- Rust で書かれている
  - https://github.com/gleam-lang/gleam
- gleam new でプロジェクトを作成できる
  - デフォルトで GitHub Actions Workflow が作成された。なうい。
  - プロジェクト名のフォーマットは `[a-z_]` らしい
- 地味に書いている人多いな。記事がヒットする

### Install
```bash
brew install gleam
```

## Development

```sh
gleam new <project-name>
gleam run 
gleam test
gleam format
```

### Shell

- gleam shell でパッケージを読み込んだ状態で Erlang の Repl が立ち上がる。
- 本パッケージでいうと `gleamtry:main().` を実行すれば、Gleam で書いてトランスパイルしたコードを Erlang で実行できる

```sh
➜ gleam shell
   Compiled in 0.01s
    Running Erlang shell
Erlang/OTP 28 [erts-16.1] [source] [64-bit] [smp:10:10] [ds:10:10:10] [async-threads:1] [jit] [dtrace]

Eshell V16.1 (press Ctrl+G to abort, type help(). for help)
1> gleamtry:main().
Hello hello
nil
2> gleamtry:main().
Hello hello
nil
```

どうやってデプロイすればいいのかは不明

### Erlang

```bash
➜ erl
Erlang/OTP 28 [erts-16.1] [source] [64-bit] [smp:10:10] [ds:10:10:10] [async-threads:1] [jit] [dtrace]

Eshell V16.1 (press Ctrl+G to abort, type help(). for help)
1>
```

```bash
➜ rebar3 version
rebar 3.25.1 on Erlang/OTP 28 Erts 16.1
```

## Links
- https://github.com/gleam-lang/gleam

VS Code Extension
- https://marketplace.visualstudio.com/items?itemName=Gleam.gleam
