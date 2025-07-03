# coder

- 久しぶりに感動した。
- 可能性の塊だと思う。
- 一言でいうと devbox
  - 開発環境を Terraform につめて、立ち上げるツール
  - Terraform で docker container を作り devcontaienr 的なことをする

## 仕組み
- coder server は、coder のソフトウェアそのもの（基盤）を立ち上げる
  - これには GUI が含まれる
  - GUI でログインして、まず初めにテンプレートを作る
- テンプレートは HCL (terraform) ベースで記述する
  - で、terraform で docker コンテナを作ることができるから、それを利用して、環境を立ち上げる。
  - 環境はワークスペースと呼ぶ
  - 立ち上げるときに terraform を実行する。なので、ちょっと時間かかる。
- terraform はおそらく coder のバイナリの中に組み込まれている
  - こんなことできるんだ。
  - ローカルに入れてる terraform のバージョンと違うから多分なんか入っているんだと思う
- ワークスペースを作るときは、パラメータを受け付けられる
  - なのである種の platform engineering 
- ワークスペースを作ったら、vscode とかで開ける
  - 実体は devcontainer 的なもの
  - で、そこで開発できる
- 分かってないのが git 周辺
  - まあ多分 devcontainer と同じ感じだろうけど

## Install
- brew でインストールしたら slim 版になるので注意
- slim だと coder server を立ち上げられない
- 多分 EC2 とかで coder をホストする想定だからこうなんだと思う
- あと純粋に `coder server` を実行すると、postgres を変なところに置かれるから、手元に用意すべし。
  - なんかフロントエンドは localhost:3000 で立ち上がるっぽいが、そこから cloudflare tunnel 的なことをして **.coder.app のリンクが生成される
  - ちょっと面白い

```bash
brew install coder
```

```console
➜ coder --help
coder v2.23.2

USAGE:
  coder [global-flags] <subcommand>

  Coder v2.23.2 — A tool for provisioning self-hosted development environments
  with Terraform.
    - Start a Coder server:

        $ coder server

    - Get started by creating a template from an example:

        $ coder templates init

SUBCOMMANDS:
    autoupdate        Toggle auto-update policy for a workspace
    completion        Install or update shell completion scripts for the
                      detected or chosen shell.
    config-ssh        Add an SSH Host entry for your workspaces "ssh
                      coder.workspace"
```

## Links
- https://coder.com/
- https://github.com/coder/coder
