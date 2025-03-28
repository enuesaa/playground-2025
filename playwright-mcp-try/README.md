# Playwright MCP

- playwright が MCP に対応したよという話
- MCP というのは claude が推進してるっぽい？拡張機能の標準？
- なんか Terraform に対する Terraform Provider の仕組みに近い
  - コマンド実行して内部でサーバー立ち上げて aws api とやりとりするみたいな
- 使用方法は、[README](https://github.com/microsoft/playwright-mcp) にある json を claude の設定で入力するだけ。
- これ以外、何もすることない
  - しいて言えば npx でダウンロードする or not が聞かれるかも？
- 以上の設定で claude にてブラウザを開けるようになる
  - playwright mcp 側がどういうインタフェースをしているのかは不明
  - init みたいな関数あるのかな？
- claude に投げるプロンプトで、たまにブラウザを開いてくれない時があるが、それはLLMの問題
- MCP は、いくらでも feature を追加できるので、エンジニアとしては面白い
  - playwright に限らず現場レベルで、うまいこと使えないかな

### Links
- https://github.com/microsoft/playwright-mcp
