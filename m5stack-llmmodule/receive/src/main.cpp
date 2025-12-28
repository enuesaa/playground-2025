#include <Arduino.h>
#include <M5Unified.h>

void setup() {
  // see https://qiita.com/nnn112358/items/5c2dd73226ba21f6c02a
  M5.begin();
  M5.Display.setTextSize(2);
  M5.Display.println("start");

  Serial2.begin(921600, SERIAL_8N1, 18, 17);
}

void loop() {
  if (Serial2.available()) {
    String data = Serial2.readStringUntil('\n');
    if (data.length() > 0) {
      M5.Display.println("receive: " + data);
    }
  }
}
