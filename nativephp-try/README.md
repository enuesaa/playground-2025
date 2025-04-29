# nativephp

- PHP でネイティブアプリを作れる
- Laravel ベース
  - 他のフレームワークでも立ち上がるのかな？
  - インストールしたら Provider も入っていたので、たぶん laravel に強めに依存していると思う
- Electronベース
  - 内部で electron を使ってるそう
  - Electron と同じように、ランタイム (PHP) のバイナリが一緒にバンドルされて動くみたい。
  - あんま Electron をちゃんと触ったことないからわからないが、コードも Electron に似てるのかな？
- Docker ベースだと動かない
  - まあそりゃそう。
  - PHP と Composer を Mac にインストールが必要
