# AWS IoT Core

Raspberry Pi を登録してみる。

## 手順

1. AWS IoT Core でデバイスを登録
    - モノの登録とか Thing の登録とか表記されている
    - プラットフォームは Linux/Python を選択
2. 接続キットをダウンロード
    - `connect_device_package.zip` という名前
3. 接続キットを raspberry pi へ転送
4. 接続キットを raspberry pi で実行
    - コンソールにコマンドが表示される。なんかPythonで証明書をセットしているっぽい
    - `unzip connect_device_package.zip`
    - `chmod +x start.sh`
    - `./start.sh`
    - 最後にサンプルアプリを実行するが、なんか最近、エントリーポイントが変わったみたいでファイルが存在しなく動かなかった。
      - https://github.com/aws/aws-iot-device-sdk-python-v2/tree/v1.24.0/samples
      - v1.24.0 のタグを checkout すれば動く

<img src="./iotcirething.png" width="300px" />

## Links
- https://docs.aws.amazon.com/ja_jp/iot/latest/developerguide/connecting-to-existing-device.html
- https://qiita.com/h_id32/items/a2655e8b7040c1c10016#aws-iot
- https://zenn.dev/k2104/books/20230611_respi-for-aws/viewer/try-aws
