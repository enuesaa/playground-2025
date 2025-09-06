# AWS IoT Greengrass

## 手順
1. Java をインストール
```bash
$ apt install openjdk-22-jre-headless
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

## カスタムコンポーネント
レシピという。インストール直後にコマンドを実行するだけ。

```json
{
  "RecipeFormatVersion": "2020-01-25",
  "ComponentName": "com.example.HelloWorld",
  "ComponentVersion": "1.0.0",
  "ComponentType": "aws.greengrass.generic",
  "ComponentDescription": "A minimal Hello World component",
  "Manifests": [
    {
      "Platform": {
        "os": "linux"
      },
      "Lifecycle": {
        "Run": "echo 'Hello from Greengrass Component!'"
      },
      "Artifacts": []
    }
  ],
  "Lifecycle": {}
}
```

greengrass-cli の時と同じようにして、これを選択してデプロイすれば raspberry pi で実行される。

```bash
$ tail /greengrass/v2/logs/com.example.HelloWorld.log
2025-09-06T08:26:03.890Z [INFO] (pool-3-thread-23) com.example.HelloWorld: shell-runner-start. {scriptName=services.com.example.HelloWorld.lifecycle.Run, serviceName=com.example.HelloWorld, currentState=STARTING, command=["echo 'Hello from Greengrass Component!'"]}
2025-09-06T08:26:03.909Z [INFO] (Copier) com.example.HelloWorld: stdout. Hello from Greengrass Component!. {scriptName=services.com.example.HelloWorld.lifecycle.Run, serviceName=com.example.HelloWorld, currentState=RUNNING}
2025-09-06T08:26:03.912Z [INFO] (Copier) com.example.HelloWorld: Run script exited. {exitCode=0, serviceName=com.example.HelloWorld, currentState=RUNNING}
```

## メモ
- AWS Iot にはポリシーというものがあり、いわゆる IAM 権限をデバイスに割り当てる感じだと認識している

## Links
- https://dev.classmethod.jp/articles/aws-iot-greengrass-v2-raspi-install/
- https://pages.awscloud.com/rs/112-TZM-766/images/AWS-Black-Belt_2024_AWS-IoT-Greengrass-Basic_1106_v1.pdf
- https://qiita.com/dsonoda/items/1c29497e2c8088296e88
