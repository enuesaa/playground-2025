# Essential CLI Tools

下記のブログで紹介されているやつを試してみる

- https://packagemain.tech/p/essential-clitui-tools-for-developers

### Kubernetes 系
Kubernetes はあまり使わないので必要性感じないな

### dive
- docker layer を探索する TUI. 面白い.  
- v0.12.0 on mac で上手く動作しなかった。
- https://github.com/wagoodman/dive/pull/511 が上手くいく
- 一時的にフォーク先からインストールした方がいいかも

### bat
- 有名だし使い勝手いいんだろうな

### rsync
- まあ rsync だね
- 地味に高機能で、現場レベルだとよく使われてる印象

### dog 
```bash
brew install dog --force
dog example.com
```
- メンテナンスされてないっぽい
- --force をつけたらインストールできた
- rust 製
- 信用できそう

### gping
```bash
brew install gping
gping example.com
```
- これは面白いしロマンを感じる
- が、情報量が少ないので仕事だと使うのが難しそう

### sniffnet
```bash
brew install sniffnet
```

- ネットワークのモニタリングツール
- rust 製
