# evdev

- linux で bluetooth のキーイベントを拾えるっぽい
- mac だと動かない
- 使い方があっているかわからない

## bluetoothctl
bluetooth でペアリングする方法。あんまよくわかってないから間違っているかも

```
$ bluetoothctl
power on
scan on
connect xx:xx
trust xx:xx
pair xx:xx
info xx:xx
```
