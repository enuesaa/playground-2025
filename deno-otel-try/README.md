# Deno Otel

- deno v2.2 でトレースデータを送れるようになった模様
- まだ unsafe
- まあ Deno.serve があるし、対応しても不思議ではないかな
- otel collector に送る処理が隠蔽されているのは不思議な感覚
  - Go とかでもライブラリとかが隠蔽するが、それはそれとしてフックがある
  - trace provider とか何も記述せずに単に送れるのはちょっと不思議

## Links

- https://docs.deno.com/runtime/fundamentals/open_telemetry/
