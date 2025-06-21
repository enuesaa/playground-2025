# dagger

- dagger は makefile の代わりみたいなもん
- docker イメージをビルドしたり dockerfile を読み込んでビルドできる
- ワークフロー

### Install
```
brew install dagger/tap/dagger
```

### Dagger Shell

```console
// dagger のエンジンが立ち上がりコマンドを送れるようになる
$ dagger

Dagger interactive shell. Type ".help" for more information. Press Ctrl+D to exit.

// alpine イメージを立ち上げる
⋈ container | from alpine

// alpine イメージを立ち上げて exec できる
⋈ container | from alpine | terminal

● Attaching terminal:
container: Container!
.from(address: "docker.io/library/alpine:latest@sha256:xxx"): Container!

dagger / $ pwd
/
dagger / $ ls
bin    dev    etc    home   lib    media  mnt    opt    proc   root   run    sbin   srv    sys    tmp    usr    var
// Ctrl + D で exit


// 新しいファイルを作って exec
⋈ container | from alpine | with-new-file /hi.txt "Hello from Dagger!" | terminal
```
