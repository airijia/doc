# 连线状态

将节点到 MQTT Broker 的连接状态显示出来，工作机制是 [MQTT 遗愿和重生消息](esphome/components/mqtt#遗愿和重生消息) 


![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxdl6v0qraj30mw036mx4.jpg)

```
# 配置示例
binary_sensor:
  - platform: status
    name: "Living Room Status"
```

## 配置参数

- **name** (**必填**, 字符串): 本组件的名称
- **id** (*选填*, [ID](esphome/guides/configuration-types#id)): 本组件的 ID
- 以及 [二进制传感器核心组件](esphome/components/binary_sensor/) 和 [MQTT 组件](esphome/components/mqtt#MQTT-组件基本配置项)的基本配置项

