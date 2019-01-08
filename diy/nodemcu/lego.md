# 自制 OLED 显示温湿度计







积木式OLED组件





## 进阶使用

**上传模板文件** 的方式创建固件

?> 基本五大件的配置查看 [模板文件创建 MQTT 固件](mqtt/guides/yaml)

需要用到 [I²C 总线](mqtt/components/i2c),  [SHT3X-D 温湿度传感器](mqtt/components/sensor/sht3xd) 和  [SSD1306 OLED 显示组件](mqtt/components/sensor/sht3xd) 三个组件


```yaml
# ... 基本五大件略过

# 时间
time:
  - platform: sntp
    id: sntp_time
    timezone: Asia/Shanghai
# I²C
i2c:
  sda: D2
  scl: D1
  scan: False
# SHT30
sensor:
  - platform: sht3xd
    temperature:
      name: "Living Room Temperature"
      id: temperature
    humidity:
      name: "Living Room Humidity"
      id: humidity
    address: 0x44
    update_interval: 15s
# 字体
font:
  - file: "roboto.ttf"
    id: font_48
    size: 48
  - file: "roboto.ttf"
    id: font_16
    size: 16
# OLED
display:
  - platform: ssd1306_i2c
    model: "SSD1306 128x64"
    address: 0x3C
    lambda: >-
      it.strftime(0, 0, id(font_16), "%H:%M", id(sntp_time).now());
      it.printf(128, 0, id(font_16), TextAlign::TOP_RIGHT, "%.1f%%", id(humidity).state);
      it.printf(64, 40, id(font_48), TextAlign::CENTER, "%.1f°", id(temperature).state);
```


