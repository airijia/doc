# 中枢数值传感器

从 airi 或 hass 等中枢获取指定设备的数值，本功能依赖于 [原生 API](mqtt/components/api)

?> 这个组件只能获取数值，如果想获取任意类型的文本，需要使用 [中枢文本传感器](mqtt/components/text_sensor/homeassistant)


```yaml
# 配置示例
sensor:
  - platform: homeassistant
    name: "Temperature Sensor From Home Assistant"
    entity_id: sensor.temperature_sensor
```

## **配置项**

- **name** (**必填**, 字符串): 此组件的名称
- **entity_id** (**必填**, 字符串): 指定设备的 entity_id
- **id** (*选填*, [ID](mqtt/guides/configuration-types#id)): 此组件的 ID
- 以及 [文本传感器核心组件](mqtt/components/text_sensor/) 和 [MQTT 组件](mqtt/components/mqtt#MQTT-组件基本配置项)的基本配置项

