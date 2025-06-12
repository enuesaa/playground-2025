# CLAUDE.md

curl ライクなインターフェースを持つ CLI ツール

## Example
```console
$ claude-code-httpcallapp "https://example.com"
RESPONSE BODY HERE

$ claude-code-httpcallapp -X POST "https://example.com"
RESPONSE BODY HERE
```

## CLI
- フラグは `-X` のみ

## 実装
- Go

### ライブラリ
- cobra

### 備考
- フラグは標準パッケージの flag を使う
