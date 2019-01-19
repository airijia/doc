# WiFi 信号探测仪

修电脑爱好者们的好帮手

!> 本产品可以脱离中枢环境使用，有 WiFi 即可用，做个纯粹的信号探测仪

在智能家居的实践中，有一个不大不小的困扰，就是如何得知某个位置的 WiFi 信号如何，常见方法是用手机等移动设备测试，但智能家居尤其是 DIY 产品经常需要塞到某些小角落或者比较高的位置，这类情况下一款小型便携的 WiFi 信号探测仪会是个好帮手


## 网页创建





## 模板创建



```yaml
# 基本五大件
airi:
  name: 666
  platform: ESP8266
  board: nodemcuv2
wifi:
  ssid: 'wangluo'
  password: 'mima'
  id: wifi
ota:
api:
  reboot_timeout: 0s
logger:
# WiFi 信号强度传感器
sensor:
  - platform: wifi_signal
    name: "WiFi Signal Sensor"
    id: wifi_signal
    update_interval: 1s
# 字体
font:
  - file: "roboto.ttf"
    id: font_16
    size: 16
  - file: "roboto.ttf"
    id: font_32
    size: 32
# OLED
display:
  - platform: ssd1306_i2c
    model: "SSD1306 128x64"
    address: 0x3C
    update_interval: 1s
    lambda: >-
      it.printf(20, 16, id(font_32), "%.1f°", id(wifi).get_ssid);
      it.printf(20, 48, id(font_32), "%.1f%Db", id(wifi_signal).raw_state);
```







## 支持多个 WiFi

向固件中刷入多个 WiFi 信息，可以