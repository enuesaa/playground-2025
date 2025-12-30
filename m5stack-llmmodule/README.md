# M5Stack LLM Module

## 接続するには
adb という android アプリ開発用？のツールが必要
```bash
brew install android-platform-tools
```

```bash
➜ adb devices

List of devices attached
axera-ax620e	device
```

```bash
➜ adb shell
sh-5.1# pwd
/
sh-5.1# whoami
root
```

## ファイルの送受信
- https://elchika.com/article/0e41a4a7-eecc-471e-a259-4fc8d710c26a/

```bash
adb push README.md /root
adb pull /root/a .
```

## OS
```bash
sh-5.1# cat /etc/os-release
PRETTY_NAME="Ubuntu 22.04 LTS"
NAME="Ubuntu"
VERSION_ID="22.04"
VERSION="22.04 (Jammy Jellyfish)"
VERSION_CODENAME=jammy
ID=ubuntu
ID_LIKE=debian
HOME_URL="https://www.ubuntu.com/"
SUPPORT_URL="https://help.ubuntu.com/"
BUG_REPORT_URL="https://bugs.launchpad.net/ubuntu/"
PRIVACY_POLICY_URL="https://www.ubuntu.com/legal/terms-and-policies/privacy-policy"
UBUNTU_CODENAME=jammy
```

```bash
sh-5.1# uname -a
Linux m5stack-LLM 4.19.125 #1 SMP PREEMPT Wed Nov 20 14:43:36 CST 2024 aarch64 aarch64 aarch64 GNU/Linux
```

```bash
sh-5.1# apt list --installed|grep -i llm

WARNING: apt does not have a stable CLI interface. Use with caution in scripts.

lib-llm/now 1.3 arm64 [installed,local]
llm-asr/now 1.3 arm64 [installed,local]
llm-audio-en-us/now 0.2 arm64 [installed,local]
llm-audio-zh-cn/now 0.2 arm64 [installed,local]
llm-audio/now 1.3 arm64 [installed,local]
llm-camera/now 1.3 arm64 [installed,local]
llm-kws/now 1.3 arm64 [installed,local]
llm-llm/now 1.3 arm64 [installed,local]
llm-melotts-zh-cn/now 0.2 arm64 [installed,local]
llm-melotts/now 1.3 arm64 [installed,local]
llm-qwen2.5-0.5b-prefill-20e/now 0.2 arm64 [installed,local]
llm-sherpa-ncnn-streaming-zipformer-20m-2023-02-17/now 0.2 arm64 [installed,local]
llm-sherpa-ncnn-streaming-zipformer-zh-14m-2023-02-23/now 0.2 arm64 [installed,local]
llm-sherpa-onnx-kws-zipformer-gigaspeech-3.3m-2024-01-01/now 0.2 arm64 [installed,local]
llm-sherpa-onnx-kws-zipformer-wenetspeech-3.3m-2024-01-01/now 0.2 arm64 [installed,local]
llm-single-speaker-english-fast/now 0.2 arm64 [installed,local]
llm-single-speaker-fast/now 0.2 arm64 [installed,local]
llm-skel/now 1.3 arm64 [installed,local]
llm-sys/now 1.3 arm64 [installed,local]
llm-tts/now 1.3 arm64 [installed,local]
llm-vlm/now 1.3 arm64 [installed,local]
llm-yolo11n-pose/now 0.2 arm64 [installed,local]
llm-yolo11n-seg/now 0.2 arm64 [installed,local]
llm-yolo11n/now 0.2 arm64 [installed,local]
llm-yolo/now 1.3 arm64 [installed,local]
```

## ファームウェアアップデート
- https://docs.m5stack.com/ja/guide/llm/llm/image
- https://zenn.dev/yh1224/articles/7db32ee02aa9956bf

## 起動音の消し方
- https://qiita.com/nnn112358/items/8157d2534e1a6e11ccdd

## メモリの割り当ての変更
- https://qiita.com/nnn112358/items/ead108aa094fe6e3d432

```bash
sh-5.1# core-config
sh-5.1# free -h
               total        used        free      shared  buff/cache   available
Mem:           1.9Gi       127Mi       1.6Gi       0.0Ki       156Mi       1.7Gi
Swap:             0B          0B          0B
```

## USB wifi
TL-WN725N を買った。

- https://github.com/lwfinger/rtl8188eu
- https://wiki.onakasuita.org/pukiwiki/?Module%20LLM%2F%E7%84%A1%E7%B7%9ALAN
- https://heavymoon.org/2022/02/05/raspberrypi-tp-link-tl-wn725n/
- https://scrapbox.io/M5S/OSC_2025_Osaka%E3%81%A7Module_LLM%E3%81%AE%E3%83%87%E3%83%A2%E5%B1%95%E7%A4%BA
