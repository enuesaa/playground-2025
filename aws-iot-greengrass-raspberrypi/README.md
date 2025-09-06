# AWS IoT Greengrass

## 手順
1. Java をインストール
    - `apt install openjdk-22-jre-headless`
    ```bash
    $ java -version
    openjdk version "22.0.2" 2024-07-16
    ```

2. Greengrass でデバイスを登録
    - Greengrass コアソフトウェアというセクションで、`Nucleus Classic` と `Nucleus Lite` を選択する
      - `Nucleus Classic` は Java で書かれていて
      - `Nucleus Lite` は C らしい。
      - `Nucleus Lite` は最近登場したらしいので、一旦古い方で進める
      - https://qiita.com/moritalous/items/c6f53e14543586ee7fb9

3. 接続キットをダウンロード
    - `<devicename>-connectionKit.zip` は証明書と設定っぽい
    - `greengrass-nucleus-latest.zip` は Greengrass の Nucleus Classic のコードかな？

4. `greengrass-nucleus-latest.zip` を `./GreengrassInstaller` に解凍
5. `<devicename>-connectionKit.zip` を `/greengrass/v2` に解凍
6. インストール
```bash
$ sed -i 's|{{config_dir}}|/greengrass/v2|g; s|{{nucleus_component}}|aws.greengrass.Nucleus|g' /greengrass/v2/config.yaml && java -Droot="/greengrass/v2" -Dlog.store=FILE -jar ./GreengrassInstaller/lib/Greengrass.jar --init-config /greengrass/v2/config.yaml --component-default-user ggc_user:ggc_group --setup-system-service true
Creating user ggc_user
ggc_user created
Creating group ggc_group
ggc_group created
Added ggc_user to ggc_group
Successfully set up Nucleus as a system service
```

6. `systemctl status greengrass`

```bash
$ systemctl status greengrass
● greengrass.service - Greengrass Core
     Loaded: loaded (/etc/systemd/system/greengrass.service; enabled; preset: enabled)
     Active: active (running) since Sat 2025-09-06 16:40:37 JST; 48s ago
```

## Greengrass CLI のインストール
コンポーネントになっているので、AWS コンソールをいじったら raspberry pi へインストールされる

1. AWS IoT へ
2. 左メニューのGreengrassデバイス>コンポーネントへ
3. パブリックコンポーネントに `aws.greengrass.Cli` があるので選択
4. デプロイ
5. raspberry pi へインストールされる

インストールが完了すると、raspberry pi で greengrass-cli が使えるようになる
```bash
$ /greengrass/v2/bin/greengrass-cli component list
Components currently running in Greengrass:
Component Name: UpdateSystemPolicyService
    Version: 0.0.0
    State: RUNNING
    Configuration: null
```

## メモ
- AWS Iot にはポリシーというものがあり、いわゆる IAM 権限をデバイスに割り当てる感じだと認識している

## Links
- https://dev.classmethod.jp/articles/aws-iot-greengrass-v2-raspi-install/
