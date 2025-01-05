# Next.js App Router
form sample

- 久しぶりに Next.js App Router へ触れてみる
- 思ったよりも手こずった
- useActionState のシグネチャがいまいち分からないな
  - サーバのレスポンスをそのまま state (useState みたいな state) として扱う様子
  - Next.js 本体のドキュメントがしっかりしているので、たぶんどっかに書いてあると思う
  - もともと useFormState という関数だったぽくて、少し混乱した
- いずれにしても Server Actions は Node.js サーバをホストする必要があり、技術選定時に悩むと思う

## Links
- https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
- https://zenn.dev/reiwatravel/articles/f1cf596c61f61b
- https://zenn.dev/hikarucraft/articles/nextjs-first-guide-to-security
- https://zenn.dev/yskn_sid25/articles/59df844b29096d
