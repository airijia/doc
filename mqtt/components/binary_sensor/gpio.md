# GPIO 二进制传感器

将 GPIO 的输入值用做二进制传感器

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxdj3i5ot4j30mw02yq2v.jpg)

```
# 配置示例
binary_sensor:
  - platform: gpio
    pin: D2
    name: "Living Room Window"
    device_class: window
```

## 配置参数

- **pin** (**Required**, [引脚](mqtt/guides/configuration-types#引脚)): The pin to periodically check.
- **name** (**Required**, string): The name of the binary sensor.
- **id** (*Optional*, [ID](mqtt/guides/configuration-types#id)): 本组件的 ID
- 以及 [二进制传感器核心组件](mqtt/components/binary_sensor/) 和 [MQTT 组件](mqtt/components/mqtt#MQTT-组件基本配置项)的基本配置项


!>很多时候，读取开关状态需要 `INPUT_PULLUP` ：
