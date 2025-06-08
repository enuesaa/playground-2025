# AWS Application Signals

- パス単位でメトリクスを確認できる
  - 画面としてはみやすいかも
  - トレースを見ることもできる
    - これは xray と紐づくみたい
  - 必要十分という印象
- セットアップが面倒
  - 前提として cloudwatch agent を起動する必要あり。
  - otel とか application signals を有効にする
  - application signals の画面への反映にラグがあるかも
    - 最初全然表示されなかった
    - いろいろ試しているうちに表示されるようになった
    - そのため、何かミスっているのか、何が必要なのか微妙に分からない
- 自動計装が前提っぽい
  - なのでたぶん Go は無理なのでは？
    - わからない
  - python だと opentelemetry-instrument というパッケージが必要

## Install CloudWatch Agent
```bash
dnf install -y amazon-cloudwatch-agent

# settings
vim cloudwatch-agent-config.json

# start
/opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -a fetch-config -m ec2 -s -c file:cloudwatch-agent-config.json

# status
systemctl status amazon-cloudwatch-agent
```

https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/install-CloudWatch-Agent-commandline-fleet.html

## Python
```bash
dnf install -y python3.12-pip
python3.12 --version
pip3.12 --version
```

## 起動

```bash
OTEL_AWS_APPLICATION_SIGNALS_ENABLED=true opentelemetry-instrument python3.12 main.py
```

これ実行したら trace を送信できないというエラーが表示されたので、ec2 に adot も入れてみた

```bash
wget https://aws-otel-collector.s3.amazonaws.com/amazon_linux/amd64/latest/aws-otel-collector.rpm
rpm -Uvh  ./aws-otel-collector.rpm
/opt/aws/aws-otel-collector/bin/aws-otel-collector-ctl -c otel-config.yml -a start
```

- https://aws-otel.github.io/docs/setup/build-collector-as-rpm

が adot はなくても動いた。トレースを直接 cloudwatch へ送れる。

```
OTEL_METRICS_EXPORTER=none \
OTEL_LOGS_EXPORTER=none \
OTEL_AWS_APPLICATION_SIGNALS_ENABLED=true \
OTEL_AWS_APPLICATION_SIGNALS_EXPORTER_ENDPOINT=http://localhost:4316/v1/metrics \
OTEL_EXPORTER_OTLP_TRACES_ENDPOINT=http://localhost:4316/v1/traces \
opentelemetry-instrument python3.12 main.py
```

## Python
下記のページに python セクションがあるので、この通りにトライするのがいい

- https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Signals-Enable-EC2Main.html


