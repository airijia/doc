# 中枢文本

从 airi 或 hass 等中枢获取指定设备的值，本功能依赖于 [原生 API](esphome/components/api)


```yaml
# 配置示例
text_sensor:
  - platform: homeassistant
    name: "Weather Forecast From Home Assistant"
    entity_id: sensor.weather_forecast
```

## **配置项**

- **name** (**必填**, 字符串): 此组件的名称
- **entity_id** (**必填**, 字符串): 指定设备的 entity_id
- **id** (*选填*, [ID](esphome/guides/configuration-types#id)): 此组件的 ID
- 以及 [文本传感器核心组件](esphome/components/text_sensor/) 和 [MQTT 组件](esphome/components/mqtt#MQTT-组件基本配置项)的基本配置项

