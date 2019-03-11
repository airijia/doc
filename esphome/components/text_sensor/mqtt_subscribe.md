# MQTT 订阅文本传感器

订阅指定 MQTT 主题的，将该主题的消息作为一种文本传感器，使用 `id(mysensor).state` 的方法取值


```yaml
# 配置示例
text_sensor:
  - platform: mqtt_subscribe
    name: "Data from topic"
    id: mysensor
    topic: the/topic
```

## **配置项**

- **name** (**必填**, 字符串): 组件名称
- **topic** (**必填**, 字符串): 要订阅的 MQTT 主题
- **qos** (*选填*, 整数): QoS 等级，最多一次`0`（默认），至少一次`1`，确保仅一次`2`
- **id** (*选填*, [ID](esphome/guides/configuration-types#id)): 本组件的 ID
- 以及 [文本传感器核心组件](esphome/components/text_sensor/) 和 [MQTT 组件](esphome/components/mqtt#MQTT-组件基本配置项)的基本配置项




## 使用举例


比如搭配 OLED 屏幕(777)，显示同一个局域网内另一个温度计(666)的数值


以 [自制 OLED 显示温湿度计](diy/nodemcu/lego#进阶使用1) 为例
主题发布的结构是 **主机名/设备类型/设备ID/state**，666这个固件会向 MQTT 发布两条信息，分别是温度 `666/sensor/temperature/state` 和湿度 `666/sensor/humidity/state` 的值

```yaml
airi:
  # 当前固件主机名 777
  name: 777

# ... 五大件略过

# I²C
i2c:
  sda: D2
  scl: D1
  scan: False
# 文本传感器
text_sensor:
  - platform: mqtt_subscribe
    id: temperature
    topic: 666/sensor/temperature/state
  - platform: mqtt_subscribe
    id: humidity
    topic: 666/sensor/humidity/state
# 字体
font:
  - file: "roboto.ttf"
    id: font_32
    size: 32
# OLED
display:
  - platform: ssd1306_i2c
    model: "SSD1306 128x64"
    address: 0x3C
    update_interval: 60s
    lambda: >-
      it.printf(20, 16, id(font_32), "%s°", id(temperature).state.c_str());
      it.printf(20, 48, id(font_32), "%s%%", id(humidity).state.c_str());
```


### 文本传感器



```yaml
  - platform: mqtt_subscribe
    id: temperature
    topic: 666/sensor/temperature/state
```


订阅主题 `666/sensor/temperature/state`，使用 ID `temperature` 标识


### 配置显示屏
```c++
      it.printf(20, 16, id(font_32), "%s°", id(temperature).state.c_str());

```
以**font_32**，在坐标 20,16 处（屏幕上半距左 20）显示 ``温度数``+ ``°``，`%s` 表示将温度读数(字符串)输出

因为从 MQTT 订阅获得的温度值 `id(temperature).state` 已经不再是 float，而是 string，所以使用 c_str() 函数将 string 转换为 const* char 供输出



