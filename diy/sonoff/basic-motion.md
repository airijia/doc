# Basic 与中枢的互动

获取中枢里面的传感器的状态，比如人体动作传感器，当此传感器处于激活时，打开灯，反之关灯





```yaml
# ... 基本五大件略过
substitutions:
  hostname: "666"

airi:
  name: $hostname
  platform: ESP8266
  board: esp01_1m
  board_flash_mode: dout
wifi:
  ssid: 'wifi'
  password: 'password'
  fast_connect: True
api:
  reboot_timeout: 0s
ota:
logger:

# basic 基本配置
status_led:
  pin:
    number: GPIO13
    inverted: True
switch:
  - platform: gpio
    name: '$hostname_switch_1'
    pin: 12
    id: relay_1
binary_sensor:
  - platform: gpio
    id: button_1
    pin:
      number: 0
      inverted: True
      mode: INPUT_PULLUP
    on_press:
      then:
        - switch.toggle:
            id: relay_1
# 文本传感器
text_sensor:
  - platform: homeassistant
    entity_id: binary_sensor.motion_sensor_158d0001c21c68
    id: motion
    on_value:
      then:
        lambda: >-
          
          if (x.state == 'on') {
            it.image(32, 0, id(run));
          } else {
            it.image(0, 0, id(thermometer));
            it.printf(32, 16, id(font_32), "%.1f°", id(temperature).raw_state);
            it.image(0, 32, id(water));
            it.printf(32, 48, id(font_32), "%.1f%%", id(humidity).raw_state);
          }


# OLED
display:
  - platform: ssd1306_i2c
    model: "SSD1306 128x64"
    address: 0x3C
    update_interval: 1s
    lambda: >-
      if (id(motion).state == 'on') {
        it.image(32, 0, id(run));
      } else {
        it.image(0, 0, id(thermometer));
        it.printf(32, 16, id(font_32), "%.1f°", id(temperature).raw_state);
        it.image(0, 32, id(water));
        it.printf(32, 48, id(font_32), "%.1f%%", id(humidity).raw_state);
      }
```

与 [进阶使用1](#进阶使用1) 相同的部分略过...

### 获取中枢传感器状态

中枢 8123 端口界面中的 **开发者工具 - 状态** 找到需要使用的人体传感器

![](http://pic.airijia.com/doc/20190118160323.png)

如图所示的 `binary_sensor.motion_sensor_158d0001c21c68` 就是人体传感器的 **entity_id**


```yaml
text_sensor:
  - platform: homeassistant
    entity_id: binary_sensor.motion_sensor_158d0001c21c68
    id: motion
```

使用 [中枢文本传感器组件](esphome/components/text_sensor/homeassistant) 获取 **binary_sensor.motion_sensor_158d0001c21c68** 这个 **entity_id** 对应的 **state** ，字符串格式，激活时为 `on`，休眠时为 `off`



### 定义动作图标


```yaml
# 图标
image:
  - file: "mdi:run.png"
    id: run
    resize: 64x64
```

使用图标 `run`，设置大小为 64x64。如果觉得动感不够，可以用 **run-fast.png**

### 判断状态并选择输出数据


```c++
      if (id(motion).state == 'on') {
        it.image(32, 0, id(run));
      } else {
        // ... 同进阶使用1
      }
```

当 motion 的值为 `on` 时，在坐标 32,0 处（图标是 64x64，这样等同于居中显示）显示图标 **run**，不为 `on` 时，显示温湿度数据

更详细的用法，参考 [中枢文本传感器组件](esphome/components/text_sensor/homeassistant)， [SSD1306 OLED I2C显示屏](esphome/components/display/ssd1306)  和 [显示屏核心组件](esphome/components/display/) 
