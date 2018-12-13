#  HTU21D/SI7021 温湿度传感器

HTU21D，SI7021 都使用这个组件，Sonoff S22/TH10/TH16 使用的高精度温湿度探头正是 SI7021

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxfhj5ex5vj30mw05qjrj.jpg)

**airi:8123 和 Hass 中的显示**


<!-- ## 相关产品 -->
![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxfhiujmwhj31850og1ku.jpg)

## 网页创建固件

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxfilkyt9qj30lr0dajrk.jpg)





## 文件模板创建

需要搭配 [I²C 总线](mqtt/components/i2c) 组件使用

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
    update_interval: 15s
```

## 配置参数

- **temperature**(**必填**): 温度信息
  - **name** (**必填**, 字符串): 温度传感器的名称
  - **id** (*选填*, [ID](mqtt/guides/configuration-types#id)): 当前组件的 ID
  - 以及 [传感器核心组件](mqtt/components/sensor/#基本配置) 和 [MQTT 组件基本配置](mqtt/components/mqtt#MQTT-组件基本配置项)
- **humidity**(**必填**): 湿度信息
  - **name** (**必填**, 字符串): 湿度传感器的名称
  - **id** (*选填*, [ID](mqtt/guides/configuration-types#id)): 当前组件的 ID
  - 以及 [传感器核心组件](mqtt/components/sensor/#基本配置) 和 [MQTT 组件基本配置](mqtt/components/mqtt#MQTT-组件基本配置项)
- **update_interval** (*选填*, [时长](mqtt/guides/configuration-types#时长)): [读数间隔](mqtt/components/sensor/#读数间隔)，默认 `15s`



## 相关链接

- [I²C 总线](mqtt/components/i2c)

- [传感器核心组件](mqtt/components/sensor/)