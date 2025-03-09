# containerd on ubuntu

- containerd を raspberry pi (ubuntu) にインストール
- containerd の動作検証とかは ubuntu で行われているっぽく、基本的に ubuntu で実行するのが安定する
- 公式ドキュメントの Getting Started が親切で詳しいが、やっぱ内容的にレイヤーが低めに感じた
- ctr pull や redis のコンテナ立ち上げ (のはず) まで行ったが、どうやってアクセスするのか分からない

### Links
- https://github.com/containerd/containerd/blob/main/docs/getting-started.md

### Commands
```bash
# install containerd
curl -OL https://github.com/containerd/containerd/releases/download/v2.0.3/containerd-2.0.3-linux-arm64.tar.gz
tar Cxzvf /usr/local containerd-2.0.3-linux-arm64.tar.gz
ctr

# install runc
curl -OL https://github.com/opencontainers/runc/releases/download/v1.2.5/runc.arm64
mv runc.arm64 /usr/local/bin/runc
chmod +x /usr/local/bin/runc
runc

# install cni-plugins
curl -OL https://github.com/containernetworking/plugins/releases/download/v1.6.2/cni-plugins-linux-arm-v1.6.2.tgz
mkdir -p /opt/cni/bin
tar Cxzvf /opt/cni/bin cni-plugins-linux-arm-v1.6.2.tgz

# for systemctl
curl -OL https://raw.githubusercontent.com/containerd/containerd/main/containerd.service
mkdir -p /usr/local/lib/systemd/system/
mv containerd.service /usr/local/lib/systemd/system/containerd.service
systemctl start containerd

# pull
ctr images pull docker.io/library/redis:alpine
go run .

# events
# pull の様子とか観測できる
ctr events
```
