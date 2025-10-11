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
