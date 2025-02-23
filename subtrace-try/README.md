# subtrace

- Wireshark for Docker containers
  - docker コンテナの通信を覗き見れる？
- 開発途上。まだ alpha
- subtrace proxy コマンドで reverse proxy して、その通信を覗き見れる
- UI は Chrome devtool を借りてるっぽい
  - 斬新だけど必要十分
  - こんなことできるんだ

## Commands
```console
// start server on 3001 port
$ go run .

// this proxy from 3000 to 3001.
$ ./subtrace proxy 3000:3001

╭──────────────────────── SUBTRACE ────────────────────────╮
│                                                          │
│  Connected! Use this link to see your API requests:      │
│                                                          │
│      https://subt.link/aaa          │
│                                                          │
│  Thanks for using Subtrace, happy debugging!             │
│                                                          │
╰──────────────────────────────────────────────────────────╯

$ curl localhost:3000/aaa

// Next, open https://subt.link/aaa in a browser.
```

## Links
- https://subtrace.dev/
- https://github.com/subtrace/subtrace
