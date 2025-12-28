### llm module から cores3 へテキストを送る

cores3 は記載のコード。
llm module では下記を実行

```bash
systemctl stop llm-sys
stty -F /dev/ttyS1 921600 raw -echo -echoe -echok
echo "hello from LLM" > /dev/ttyS1
```
