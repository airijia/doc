# GPIO 开关


最常见的开关形式，将继电器连接到任意引脚便可使用




![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxcakqeq09j30mw03qt8o.jpg)

**airi:8123 和 Hass 中的显示**







```yaml
# 配置示例
switch:
  - platform: gpio
    pin: 25
    name: "Living Room Dehumidifier"
```

## 配置参数

- **pin** (**必填**, [引脚](mqtt/guides/configuration-types#引脚)): 连接开关(比如继电器)的引脚
- **name** (**必填**, string): 开关的名称
- **id** (*选填*, [ID](mqtt/guides/configuration-types#id)): 开关的 ID
- 以及 [开关核心组件](mqtt/components/switch/) 和 [MQTT 组件](mqtt/components/mqtt#MQTT-组件基本配置项) 的基本配置项





?> TODO: 启动状态问题，待补充