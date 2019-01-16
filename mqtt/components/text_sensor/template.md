# 模板化文本传感器

通过模板化 `template` 功能虚拟出的文本传感器组件


```yaml
# 配置示例
text_sensor:
  - platform: template
    name: "Template Text Sensor"
    lambda: >-
      return {"Hello World"};
    update_interval: 60s
```

可用的返回格式

- `return {"STRING LITERAL"};` 传感器的新值，`std::string` 格式. 必须使用 **大括号**
- `return {};` 不发布新值

## **配置项**

- **name** (**必填**, 字符串): 此组件的名称
- **lambda** (*选填*, [lambda](mqtt/guides/automations#lambda-表达式)): 定义开关状态的 lambda 表达式，只有 **有变化** 的状态才会发布相关消息到 MQTT，此参数跟 `optimistic` 参数二选一即可
- **lambda** (*选填*, [lambda](https://esphomelib.com/esphomeyaml/guides/automations.html#config-lambda)): 读取传感器值的
- **update_interval** (*选填*, [时长](mqtt/guides/configuration-types#时长)): 读值间隔，默认`60s`
- **id** (*选填*, [ID](mqtt/guides/configuration-types#id)): 此组件的 ID
- 以及 [文本传感器核心组件](mqtt/components/text_sensor/) 和 [MQTT 组件](mqtt/components/mqtt#MQTT-组件基本配置项)的基本配置项
