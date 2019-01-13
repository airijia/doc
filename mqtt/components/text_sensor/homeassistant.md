# 中枢文本

从 airi或hass 等中枢获取指定 **entity** 的状态

!> 要用 native api




The `homeassistant` text sensor platform allows you to create a sensors that import states from your Home Assistant instance using the [native API](https://esphomelib.com/esphomeyaml/components/api.html).

```
# 配置示例
text_sensor:
  - platform: homeassistant
    name: "Weather Forecast From Home Assistant"
    entity_id: sensor.weather_forecast
```

## **配置项**

- **name** (**必填**, 字符串): The name of the text sensor.
- **entity_id** (**必填**, 字符串): The entity ID to import from Home Assistant.
- **id** (*选填*,:ref:config-id): Manually specify the ID used for code generation.
- All other options from [Text Sensor](https://esphomelib.com/esphomeyaml/components/text_sensor/index.html#config-text-sensor) and [MQTT Component](https://esphomelib.com/esphomeyaml/components/mqtt.html#config-mqtt-component).

