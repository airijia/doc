# SHT3X-D 温湿度传感器

常用型号有 SHT30 和 SHT31



![](http://pic.airijia.com/doc/20190703103753.png)

**airi:8123 和 Hass 中的显示**




## 网页创建固件

![](http://pic.airijia.com/doc/20190703103801.png)



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
  - platform: sht3xd
    temperature:
      name: "Living Room Temperature"
    humidity:
      name: "Living Room Humidity"
    address: 0x44
    update_interval: 60s
```

### 配置参数

- **temperature**(**必填**): 温度信息
  - **name** (**必填**, 字符串): 温度传感器的名称
  - **id** (*选填*, [ID](esphome/guides/configuration-types#id)): 当前组件的 ID
  - 以及 [传感器核心组件](esphome/components/sensor/#基本配置) 和 [MQTT 组件基本配置](esphome/components/mqtt#MQTT-组件基本配置项)
- **humidity**(**必填**): 湿度信息
  - **name** (**必填**, 字符串): 湿度传感器的名称
  - **id** (*选填*, [ID](esphome/guides/configuration-types#id)): 当前组件的 ID
  - 以及 [传感器核心组件](esphome/components/sensor/#基本配置) 和 [MQTT 组件基本配置](esphome/components/mqtt#MQTT-组件基本配置项)
- **address** (*选填*, 整数): 传感器在 I²C 总线上的地址。默认值 `0x44`
- **update_interval** (*选填*, [时长](esphome/guides/configuration-types#时长)): 默认 `60s`



## 相关链接

- [I²C 总线](esphome/components/i2c)

- [传感器核心组件](esphome/components/sensor/)