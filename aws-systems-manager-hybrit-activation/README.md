# AWS Systems Manager Hybrit Activation
Raspberry Pi 5 (Ubnutu) に SSM Agent を入れて Systems Manager のマネージドノードにする

- SSM Agent は Snap でインストールできる
- Snap は、なんか Canonical が支援しているらしいパッケージ管理システム
- 名前は知ってたけど触るの初めて。
  - というか Ubuntu だけなんだ。
- snap 経由でインストールしたら `systemctl status snap.amazon-ssm-agent.amazon-ssm-agent.service` みたいな感じで扱える
- そういえば CloudWatch Agent だとJSON形式の設定ファイルあったな

## Commands
```console
$ snap install amazon-ssm-agent --classic
amazon-ssm-agent 3.3.987.0 from Amazon Web Services (aws✓) installed

$ snap list amazon-ssm-agent
Name              Version    Rev   Tracking       Publisher  Notes
amazon-ssm-agent  3.3.987.0  9882  latest/stable  aws✓       classic

$ /snap/amazon-ssm-agent/current/amazon-ssm-agent -register -code "activation-code" -id "activation-id" -region "region" 
Error occurred fetching the seelog config file path:  open /etc/amazon/ssm/seelog.xml: no such file or directory
Initializing new seelog logger
New Seelog Logger Creation Complete
2025-03-13 00:18:24.4420 WARN Error adding the directory '/etc/amazon/ssm' to watcher: no such file or directory
2025-03-13 00:18:27.3671 WARN Could not read InstanceFingerprint file: InstanceFingerprint does not exist
2025-03-13 00:18:27.3672 INFO No initial fingerprint detected, generating fingerprint file...
2025-03-13 00:18:27.6747 INFO Successfully registered the instance with AWS SSM using Managed instance-id: aaa

$ systemctl start snap.amazon-ssm-agent.amazon-ssm-agent.service
$ systemctl enable snap.amazon-ssm-agent.amazon-ssm-agent.service
```

## 料金枠
- Hybrid Activitation の場合、Standard-Tier と Advanced Tier の2つがある
- Standard-Tier だと Session Manager が使えないし CPU のメトリクスも取れない
- この料金枠はアカウントレベル/リージョンで有効にする
  - なぜこんな大雑把なのか不明
- https://aws.amazon.com/jp/systems-manager/pricing/
- https://blog.serverworks.co.jp/2021/07/29/193413

- 有効にしてみたがメトリクスの遅延は低いな
  - 重たいファイルをダウンロードしてみると、数秒程度で反映される
  - 面白い

## Systems Manager Inventry
- なんか参照系のボタンを押したら勝手に State Manager が作られてノードに何かされた
  - 前から思ってたが、Systems Manager はこういうのが多い
- AWS-GatherSoftwareInventory という Document だった
  - 実体は Agent への指示っぽいな
  - https://dev.classmethod.jp/articles/what-apps-are-collected-in-ssm-inventory/
- Inventry って ansible の Inventry と似たような感じだ
  - 情報をかき集める感じ
  - インストール済みパッケージの情報をコンソールで確認できるようになった
  - これは面白いな。

## Links
- https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/agent-install-ubuntu.html
- https://qiita.com/hato52/items/47369197f5014e73418a
