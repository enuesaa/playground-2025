# colima

- mac で containerd を扱いたいが (当たり前だがlinuxではないので) 動かせず colima で vm 立てればいけると聞いた
- 裏では lima で軽量な linux vm を立てているらしい

```bash
brew install colima
colima start --runtime containerd
colima ssh

# inside the vm
$ ls -l /run/containerd/containerd.sock
srw-rw---- 1 root root 0 Mar 22 17:58 /run/containerd/containerd.sock
```

## Links
- https://github.com/abiosoft/colima
- https://dev.classmethod.jp/articles/migrating-from-rancher-desktop-to-colima-docker-environment/
- https://feneshi.co/macOS_colima/
