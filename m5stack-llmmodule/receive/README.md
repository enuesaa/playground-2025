### llm module から cores3 へURLを送り、そのレスポンスを受け取る

llm module で下記を実行

```bash
systemctl stop llm-sys
stty -F /dev/ttyS1 921600 raw -echo -echoe -echok
echo "https://example.com/" > /dev/ttyS1
cat /dev/ttyS1
```
