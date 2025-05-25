# workflow-use

browser-use が作っているなんか新しい CLI

- ブラウザ操作系エージェントとよぶらしい
- browser-use をもっと安定的に運用したい時向けだと思う。
  - ステートマシン風に
  - ワークフロー的に
- workflow のファイルに書いてある通りに実行するみたい。
```json
{
  "workflow_analysis": "This workflow is ...",
  "name": "",
  "description": "",
  "version": "1.0",
  "steps": [
    {
      "description": "Navigate to the form application's homepage.",
      "output": null,
      "timestamp": null,
      "tabId": null,
      "type": "navigation",
      "url": "https://v0-complex-form-example.vercel.app/"
    },
    {
      "description": "Click the 'Start Application' button ...",
      "output": null,
```

- OpenAI API のキーが必要
- CLI を実行すると、ブラウザ (chromium) が立ち上がり、フォームをサラサラと入力する
  - workflow を確認すると 1 input 単位で「入力して」とか「クリックして」とか書いてある。そのタイミングで OpenAI API を呼んでそう
  - 具体的なプロンプトは分からない
  - 見ている分には面白い
  - 想像より安定している
    - 実務で PoC するのもありだな〜と思うレベル
- 最近できたっぽい
  - pypi に上がっているのは古くて、まだ git clone でトライするしかない状況
  - https://github.com/browser-use/workflow-use
  - チュートリアル通りにコマンドを実行すれば一通り確認できる

## Links
- https://zenn.dev/headwaters/articles/ba0e911209ab38
