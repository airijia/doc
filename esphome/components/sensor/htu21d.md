#  HTU21D/SI7021 温湿度传感器

HTU21D，SI7021 都使用这个组件，Sonoff S22/TH10/TH16 使用的高精度温湿度探头正是 SI7021

![](http://pic.airijia.com/doc/20190703103420.png)

**airi:8123 和 Hass 中的显示**


<!-- ## 相关产品 -->
![](http://pic.airijia.com/doc/20190703103433.png)

## 网页创建固件

![](http://pic.airijia.com/doc/20190703103443.png)




## 文件模板创建

需要搭配 [I²C 总线](esphome/components/i2c) 组件使用

```yaml
# I²C 示例
i2c:
  sda: 21
  scl: 22
  scan: False
# 配置示例
sensor:
  - platform: htu21d
    temperature:
      name: "Living Room Temperature"
    humidity:
      name: "Living Room Humidity"
    update_interval: 60s
```

## 配置参数

- **temperature**(**必填**): 温度信息
  - **name** (**必填**, 字符串): 温度传感器的名称
  - **id** (*选填*, [ID](esphome/guides/configuration-types#id)): 当前组件的 ID
  - 以及 [传感器核心组件](esphome/components/sensor/#基本配置) 和 [MQTT 组件基本配置](esphome/components/mqtt#MQTT-组件基本配置项)
- **humidity**(**必填**): 湿度信息
  - **name** (**必填**, 字符串): 湿度传感器的名称
  - **id** (*选填*, [ID](esphome/guides/configuration-types#id)): 当前组件的 ID
  - 以及 [传感器核心组件](esphome/components/sensor/#基本配置) 和 [MQTT 组件基本配置](esphome/components/mqtt#MQTT-组件基本配置项)
- **update_interval** (*选填*, [时长](esphome/guides/configuration-types#时长)): 默认 `60s`



## 相关链接

- [I²C 总线](esphome/components/i2c)

- [传感器核心组件](esphome/components/sensor/)