# Tanstack Start

- tanstack のウェブフレームワーク
- 往年の remix 風味を感じる
- 慣れてないと厳しそう
- 各コンポーネントにある Route の概念は独特
  - component (jsx) を直接エクスポートするのではなくて、それを module に包んでエクスポートする感じ
  - angular ライクに思った
  - あんまり課題感がわからないが、そもそも react hooks を推奨してないのかな？
  - react を別軸で進化させた感じに見える。react hooks がない系統的な。
  - errorComponent や notFoundComponent を定義できる点でいうと、厳格
  - 良くも悪くも正しさを感じる。ルール通り組み立てられれば万歳だが、レールから外れたときどのくらい柔軟性があるかは不明
  - 設定より規約的な思想も垣間見えそう


## Commands
```bash
npx gitpick TanStack/router/tree/main/examples/react/start-basic tanstack-start-try
cd tanstack-start-try
npm i
npm run dev
```

gitpick は degit みたいなやつっぽい

## Stacks
- react
- @tanstack/react-router
- zod
- tailwindcss
- postcss
- vite

## Links
- https://tanstack.com/start/latest/docs/framework/react/quick-start#impatient
- https://zenn.dev/yt4/articles/tanstack-start-next-js
