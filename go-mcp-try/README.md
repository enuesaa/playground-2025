# MCP in Go
https://github.com/modelcontextprotocol/go-sdk

- Go でMCPサーバーを実装するツール
- クライアントも実装できるっぽい
- 一応公式のSDKっぽい
- 実際の仕組みがどうなのかはわからないが stdio を読み取ってやり取りする

## MCP とのやりとり。
標準入力に JSON を渡してやる。入力と出力が混じっているので見づらいが、JSON が pretty な方が入力。MCP サーバーへ接続し、ツールをリストして、greet という名前のツールを呼び出している

```bash
➜ go run .
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "initialize",
  "params": {
    "clientInfo": {
      "name": "my-client",
      "version": "1.0.0"
    }
  }
}
{"jsonrpc":"2.0","id":1,"result":{"capabilities":{"logging":{},"tools":{"listChanged":true}},"protocolVersion":"2025-06-18","serverInfo":{"name":"greeter","version":"v1.0.0"}}}
{
  "jsonrpc": "2.0",
  "id": 2,
  "method": "tools/list",
  "params": {}
}
{"jsonrpc":"2.0","id":2,"result":{"tools":[{"description":"say hi","inputSchema":{"type":"object","required":["name"],"properties":{"name":{"type":"string","description":"the name of the person to greet"}},"additionalProperties":false},"name":"greet","outputSchema":{"type":"object","required":["greeting"],"properties":{"greeting":{"type":"string","description":"the greeting to tell to the user"}},"additionalProperties":false}}]}}
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "tools/call",
  "params": {
    "name": "greet",
    "arguments": {
      "name": "Taro"
    }
  }
}
{"jsonrpc":"2.0","id":3,"result":{"content":[{"type":"text","text":"{\"greeting\":\"Hi Taro\"}"}],"structuredContent":{"greeting":"Hi Taro"}}}
```
