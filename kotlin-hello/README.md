# kotlin

- serverside kotlin に興味がありトライ
- まったく何にもわかってない

### Install
- brew で kotlin を入れた
- ついでに openjdk がインストールされたっぽい

```bash
brew install kotlin
```

### コンパイル
下記の記事を参考にした。
- https://zenn.dev/msksgm/books/implementing-server-side-kotlin-development/viewer/chapter-01-02-kotlin-intro-hello-world

- やっぱ Java と同じようにネストが深いのかな
  - このディレクトリ構造もそもそも何なのかわかってない。
  - なんかドメインを反転させてるな〜と思っている程度
- kotlin のプログラムをコンパイルすると java になるみたい
  - 言葉が正確か不明
  - .jar ってファイルができる
  - これ java のファイルだったんだ。うっすらとしか認識なかった

```bash
kotlinc src/main/kotlin/hello/Main.kt -include-runtime -d main.jar
```

### 実行
- OpenJDK を brew でインストールしたものの PATH を通してないっぽいのでフルパスを指定
  - java ってコマンドを打つとなんか java runtime が見つからないってエラーが出るけど、これは mac がデフォルトでインストールしているやつかな？

```bash
➜ /opt/homebrew/opt/openjdk/bin/java -jar main.jar
Hello World
```

### 感想
- JetBrain が作った言語だから IDEA で開発したくなる
  - VS Code にプラグインを入れるのもな〜と思って入れなかった。
  - 次からは IDEA で開発する
  - IDEA って community edition があるらしい
    - なんか IDEA Ultimate が多機能でお金かかり、community edition は無料？
- 分からないことだらけ
- Docker にしたい

### Links
- https://gumfum.hatenablog.com/entry/2020/04/20/020000
