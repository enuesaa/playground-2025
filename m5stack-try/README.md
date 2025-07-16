# m5stack

m5stack cores3 に書き込みしてみた。

- 公式のチュートリアルが詳しい。
- https://docs.m5stack.com/ja/arduino/m5cores3/program
- シリーズによってライブラリ？が違うらしく注意

シンプルに文字を表示するには。

```cpp
#include "M5CoreS3.h"

void setup() {
  M5.begin();
  M5.Lcd.print("a");
}

void loop() {}
```
https://zenn.dev/nyazuki/articles/ebe56234d81e95

- サウンドもカメラも大丈夫そう。
- m5stack の git に example が含まれていて、ここのサンプルアプリはふつうに動いた
- https://github.com/m5stack/M5CoreS3/blob/main/examples/Basic/speaker/speaker.ino
