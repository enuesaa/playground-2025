# atuin

- コマンドの履歴を SQLite に保存するツール
- ↓を押すと履歴が表示される
- 高機能
  - 他のデバイスと同期したり
  - dotfiles を管理したり
  - login できたり
- 好きな人は好きだろうな
- 自分は↓での表示は不要に思うが、設定で挙動を変更できるのかな？

## Install
```bash
brew install atuin
echo 'eval "$(atuin init zsh)"' >> ~/.zshrc
```

## Links
- https://github.com/atuinsh/atuin

## メモ
ちなみにコマンドの履歴ば、bash や zsh にあるフック関数を用いて取得するらしい

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

```sh
# bash (動作未確認)
# コマンド実行前に呼ばれる
trap 'last_cmd=$BASH_COMMAND; start=$(date +%s)' DEBUG

# コマンド終了後に呼ばれる
PROMPT_COMMAND='ret=$?; end=$(date +%s); dur=$((end - start));
  echo "$(date +"%F %T") | $PWD | $last_cmd | exit=$ret | ${dur}s" >> ~/.command_log'
```

こうかいておくと、後続のコマンドが .command_log へ記録された
