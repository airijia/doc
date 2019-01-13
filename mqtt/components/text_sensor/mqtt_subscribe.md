# MQTT 订阅文本传感器

订阅指定 MQTT 主题的，将该主题的消息作为一种文本传感器，使用 `id(mysensor).value` 的方法取值


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
- **id** (*选填*, [ID](mqtt/guides/configuration-types#id)): 本组件的 ID
- 以及 [文本传感器核心组件](mqtt/components/text_sensor/) 和 [MQTT 组件](mqtt/components/mqtt#MQTT-组件基本配置项)的基本配置项