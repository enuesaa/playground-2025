# Oracle Linux 9

- Red Had 系らしい
- yum, dnf が使える
- Oracle Cloud の always free なインスタンスで試している。
  - デフォルト設定だがちょっと重たいな。CPUが足りなそう。
  - x86_64
  - インスタンスを作成するときに public subnet を作成できる
  - public subnet を選んで public ip address を付与したらインターネット越しにssh接続できる
  - `yum update -y` したら応答しなくなっちゃった。
  - インターネットへ接続できているかな？少なくとも Oracle のホストするリポジトリにはアクセスできてそう。
