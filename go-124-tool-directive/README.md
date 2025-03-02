# Go 1.24 tool directive
Go 1.24 で tool を go.mod に入られるようになった

- これまで tools.go にブランクインポートしてバージョン固定していた。そういう慣習だった
- Go 1.24 で言語レベルでサポート
- go tool に「登録」できるようになった
- びっくりしたのは `go tool` コマンド経由で呼び出せる点
  - シンプルな設計
  - 違和感なく `go tool` が拡張され、見事だと感じる。

## Commands
```console
> go get -tool "github.com/99designs/gqlgen"

> go tool
addr2line
asm
buildid
cgo
compile
covdata
cover
doc
fix
link
nm
objdump
pack
pprof
preprofile
test2json
trace
vet
github.com/99designs/gqlgen

> go tool github.com/99designs/gqlgen generate
```

## Links
- https://developers.cyberagent.co.jp/blog/archives/54473/
