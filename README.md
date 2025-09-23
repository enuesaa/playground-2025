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

方針: DBへの書き込み時にエラーが発生したらどうするんだという問題はあるが、一旦そういうことや実行時間は考慮せずに、シンプルに実装する

- プログラムを起動。
  - DB が存在してなかったらローカルにDBを作成しマイグレーション
  - precmd を仕込む
- precmd でコマンドの実行を検知
- 実行したコマンド情報を DB へ書きこむ
