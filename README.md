# histo
Command history manager

## Stacks
- rust
- SeaORM
- SQLite

## PoC

```sh
# zsh
preexec() {
  cmd="$1"
  start=$(date +%s)
}

precmd() {
  ret=$?
  end=$(date +%s)
  dur=$((end - start))
  print -r -- "$(date '+%F %T') | $PWD | $cmd | exit=$ret | ${dur}s" >> ~/.command_log
}
```

## Feature Plan

もともとコマンドの実行履歴を取ろうと考えていたが、あんまり必要性を感じておらずモチベーションを維持できなそうなので方針転換し、ブラウザのネットワークタブの情報を取り込み解析する感じにする。
