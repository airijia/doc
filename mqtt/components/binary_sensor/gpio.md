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

- **pin** (**必填**, [引脚](mqtt/guides/configuration-types#引脚)): The pin to periodically check.
- **name** (**必填**, string): 本组件的名称
- **id** (*选填*, [ID](mqtt/guides/configuration-types#id)): 本组件的 ID
- 以及 [二进制传感器核心组件](mqtt/components/binary_sensor/) 和 [MQTT 组件](mqtt/components/mqtt#MQTT-组件基本配置项)的基本配置项


!>很多时候，读取开关状态需要 `INPUT_PULLUP` ：


```
binary_sensor:
  - platform: gpio
    pin:
      number: D2
      mode: INPUT_PULLUP
    name: ...
```

## 翻转引脚

翻转 [引脚](mqtt/guides/configuration-types#引脚)) 的二进制读值，即 0 变 1, 1 变 0


```
# 配置示例
binary_sensor:
  - platform: gpio
    pin:
      number: D2
      inverted: True
    name: ...
```

## 抖动抑制

某些二进制传感器(例如触摸开关)连接时，一旦按下按键常常会出现几次断续的通、断现象。[二进制传感器过滤器](mqtt/components/binary_sensor/#过滤器) 的抖动抑制功能即用来消除这种产生断续接触的纹波信号，在其输出端提供无扰动的转换。


```
# 配置示例
binary_sensor:
  - platform: gpio
    pin: D2
    name: ...
    filters:
      - delayed_on: 10ms
```

按钮持续连通超过 `10ms` 才会触发开的动作

```
# 配置示例
binary_sensor:
  - platform: gpio
    pin: D2
    name: ...
    filters:
      - delayed_off: 10ms
```

按钮持续关闭超过 `10ms` 才会触发关的动作