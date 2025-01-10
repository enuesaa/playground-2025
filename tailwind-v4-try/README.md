# tailwind v4

- [enuesaa/my-svelte-template](https://github.com/enuesaa/my-svelte-template) を tailwind v4 にマイグレーション
- Svelte でもコマンド一発でできた。
```bash
pnpm dlx @tailwindcss/upgrade@next
```

- 設定値を app.css に記述する形式に変更
  - なんか CSS らしくなった印象？
  - @import とか @layer とかしっかり理解する必要がある
- 直感的ではあるかな
- extends が多いアプリケーションだとどうなるのだろう。ちょっとしんどそうな気もする。
  - 例えば color: { } とブロックで区切られていたものが --color- と prefix で識別するようになるため
- 個人的には思ったよりも従来の config ファイルの存在が大きくて、間違ってそっちを見に行っちゃいそう。
  - まあ慣れの問題かな。
