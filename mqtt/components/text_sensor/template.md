# 模板化文本组件

The `template` text sensor platform allows you to create a text sensor with templated values using [lambdas](https://esphomelib.com/esphomeyaml/guides/automations.html#config-lambda).

```
# 配置示例
text_sensor:
  - platform: template
    name: "Template Text Sensor"
    lambda: >-
      return {"Hello World"};
    update_interval: 60s
```

Possible return values for the lambda:

> - `return {"STRING LITERAL"};` the new value for the sensor of type `std::string`. **Has to be** in brackets `{}`!
> - `return {};` if you don’t want to publish a new state (advanced).

## **配置项**

- **name** (**必填**, 字符串): The name of the text sensor.
- **lambda** (*选填*, [lambda](https://esphomelib.com/esphomeyaml/guides/automations.html#config-lambda)): Lambda to be evaluated every update interval to get the new value of the text sensor
- **update_interval** (*选填*, [Time](https://esphomelib.com/esphomeyaml/guides/configuration-types.html#config-time)): The interval to check the text sensor. Defaults to `60s`.
- **id** (*选填*, [ID](mqtt/guides/configuration-types#id)): 本组件的 ID
- 以及 [文本传感器核心组件](mqtt/components/text_sensor/) 和 [MQTT 组件](mqtt/components/mqtt#MQTT-组件基本配置项)的基本配置项
