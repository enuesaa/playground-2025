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

- コマンドの履歴をとる
- stdout/stderr もほぞんする
- リプレイできるようにしたい

```bash
# activate (create subshell)
histo

# exit
exit

# list history
histo ry
```
