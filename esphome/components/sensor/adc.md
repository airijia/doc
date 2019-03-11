# 模转数传感器

模转数传感器(Analog To Digital `adc`) 可以感知模拟引脚上的电压并转换为数字信号。`ESP8266` 只有 A0 (GPIO17) 是模拟引脚，`ESP32` 的
GPIO32 ~ GPIO39 都可以用作模拟引脚

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxenagq1nlj30mw03ewef.jpg)



```
# 配置示例
sensor:
  - platform: adc
    pin: A0
    name: "Living Room Brightness"
    update_interval: 15s
```

## 配置参数

- **pin** (**必填**, : 读值的引脚
- **name** (**必填**, 字符串): 传感器的名称
- **attenuation** (*选填*): 只有 ESP32 可用. Specify the ADC attenuation to use. See [ESP32 衰减比](#ESP32_衰减比)
- **update_interval** (*选填*, [时长](esphome/guides/configuration-types#时长)): 默认 `60s`
- **id** (*选填*, [ID](esphome/guides/configuration-types#id)): 当前组件的 ID
- 以及 [传感器核心组件](esphome/components/sensor/#基本配置) 和 [MQTT 组件基本配置](esphome/components/mqtt#MQTT-组件基本配置项)

?> 因为 ESP8266 的 模拟引脚的可探测的范围是  `0 ~ 1.0V`, 如果需要探测更大的值，可以配合分压器


## ESP32 衰减比

设定衰减比，对应满量程的电压，11db是满量程时电压为3.9V

- `0db` 满量程电压为 1.1V (默认值)
- `2.5db` 满量程时电压为 1.5V
- `6db` 满量程时电压为 2.2V
- `11db` 满量程时电压为 3.9V

