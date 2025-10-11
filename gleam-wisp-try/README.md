# wisptry

- gleam の wisp というウェブフレームワーク
- example を参考にした
  - https://github.com/gleam-wisp/wisp/blob/main/examples/src/hello_world/app.gleam

## Links
- https://github.com/gleam-wisp/wisp

## Commands
```bash
gleam add wisp
gleam add gleam_erlang
gleam add mist
```

### run
```console
➜ gleam run

   Compiled in 0.04s
    Running wisptry.main
Listening on http://127.0.0.1:8000
INFO 200 GET /
INFO 200 GET /favicon.ico
INFO 200 GET /
INFO 200 GET /favicon.ico
INFO 200 GET /
INFO 200 GET /favicon.ico
INFO 200 GET /
INFO 200 GET /favicon.ico
INFO 200 GET /
INFO 200 GET /favicon.ico
INFO 200 GET /
```

### test
```console
➜ gleam test
  Compiling wisptry
   Compiled in 0.22s
    Running wisptry_test.main
.
1 tests, no failures
```

### build
```console
➜ gleam build --target erlang

   Compiled in 0.04s
```

ビルドすると `build/dev/erlang/*/ebin` ができる。これを Erlang で動かすには

```console
➜ erl -pa build/dev/erlang/*/ebin
Erlang/OTP 28 [erts-16.1] [source] [64-bit] [smp:10:10] [ds:10:10:10] [async-threads:1] [jit] [dtrace]

Eshell V16.1 (press Ctrl+G to abort, type help(). for help)
1> wisptry:main().
Listening on http://127.0.0.1:8000
INFO 200 GET /
WARN Failed to lookup date, re-calculating
INFO 200 GET /favicon.ico
WARN Failed to lookup date, re-calculating
INFO 200 GET /
WARN Failed to lookup date, re-calculating
```

あっているのか不明。ただまあ動いている。デプロイをどうするのかも不明。手探りだなあ。
