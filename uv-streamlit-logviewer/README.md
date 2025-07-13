# logstat

ログのビューアー

## Stack
- Streamlit
- Redis

## モチベーション

技術の検証目的が強い。Streamlit や Redis を使って何かアプリケーションを作りたい思い。題材としてログのビューアーを選んだのは、ちょうど技術に合っていると思ったのと、あと課題感がほんの少しあるため。

## ユースケース

EC2 に nginx が稼働しており、そのログを分析するのを想定。Redis を nginx に立てて、ログファイルを定期的にみにいく構成。nginx の設定を変えずにログを分析したい

## Commands
```bash
uv run streamlit run app/main.py
```
