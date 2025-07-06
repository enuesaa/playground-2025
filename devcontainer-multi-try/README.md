# devcontainer

- devcontainer の cli なんか変わった気がするなあ。
  - 一回 remove してから install が必要だった
  - https://zenn.dev/hiro345/articles/20241206_devcontainer_cli
  - `devcontainer up --workspace-folder .` で CLI からコンテナを立ち上げられる
- なんか features って概念ができてきた。
  - docker コンテナに指定のものをインストールしてくれるらしい
  - これ前はなかったと思うんだよなあ。でも 2023 年くらいからあるらしい
  - https://blog.jp.square-enix.com/iteng-blog/posts/00051-devcontainer-feature-intro/



### devcontainer のなかで git push する方法
ホストマシンで ssh-agent が起動しており ssh-add されてれば、devcontainer のコンテナ内でも push できる。

- https://zenn.dev/nayushi/articles/5d577c93e03a9b
- https://github.com/csci430-os/vscode-remote-devcontainer/issues/2
