#!/bin/bash
set -euo pipefail

# Swap 無効化
swapoff -a
sed -i '/ swap / s/^\(.*\)$/#\1/' /etc/fstab

# カーネルモジュールのロード
modprobe overlay
modprobe br_netfilter

# sysctl 設定
cat <<EOF > /etc/sysctl.d/kubernetes.conf
net.bridge.bridge-nf-call-iptables  = 1
net.bridge.bridge-nf-call-ip6tables = 1
net.ipv4.ip_forward                 = 1
EOF

sysctl --system

# containerd インストール
apt update
apt install -y containerd

# containerd 設定ファイル生成
mkdir -p /etc/containerd
containerd config default > /etc/containerd/config.toml

# cgroup driver を systemd に変更
sed -i 's/SystemdCgroup = false/SystemdCgroup = true/' /etc/containerd/config.toml

systemctl restart containerd
systemctl enable containerd

# Kubernetes リポジトリ追加
apt install -y apt-transport-https curl gpg
curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.30/deb/Release.key | gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg
echo "deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.30/deb/ /" > /etc/apt/sources.list.d/kubernetes.list

# kubeadm, kubelet, kubectl インストール
apt update
apt install -y kubelet kubeadm kubectl
apt-mark hold kubelet kubeadm kubectl

systemctl enable kubelet


# Kubernetes Master ノード初期化
kubeadm init --pod-network-cidr=10.244.0.0/16

# kubectl 用設定
mkdir -p $HOME/.kube
cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
chown $(id -u):$(id -g) $HOME/.kube/config

# CNI ネットワーク（Flannel）適用
kubectl apply -f https://raw.githubusercontent.com/flannel-io/flannel/master/Documentation/kube-flannel.yml

# taint を外す
kubectl taint nodes --all node-role.kubernetes.io/control-plane-

# Nginx Deployment 作成
kubectl create deployment nginx --image=nginx
kubectl expose deployment nginx --port=80 --type=NodePort

# 状態確認
kubectl get nodes
kubectl get pods -A
kubectl get svc nginx
