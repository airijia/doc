# 中枢二进制传感器

从 airi 或 hass 等中枢获取指定设备的数值，本功能依赖于 [原生 API](esphome/components/api)

?> 这个组件只能获取布尔值，如果想获取任意类型的文本，需要使用 [中枢文本传感器](esphome/components/text_sensor/homeassistant)


```yaml
# 配置示例
binary_sensor:
  - platform: homeassistant
    name: "Input Boolean From Home Assistant"
    entity_id: input_boolean.state_home
```

## **配置项**

- **name** (**必填**, 字符串): 此组件的名称
- **entity_id** (**必填**, 字符串): 指定设备的 entity_id
- **id** (*选填*, [ID](esphome/guides/configuration-types#id)): 此组件的 ID
- 以及 [二进制传感器核心组件](esphome/components/binary_sensor/) 
