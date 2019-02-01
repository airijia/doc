# Restart Switch

The `restart` switch platform allows you to restart your node remotely through Home Assistant.

[![../../../_images/restart-ui.png](https://esphomelib.com/_images/restart-ui.png)](https://esphomelib.com/_images/restart-ui.png)

```
# 配置示例
switch:
  - platform: restart
    name: "Living Room Restart"
```

## 配置参数

- **name** (**必填**, 字符串): The name for the switch.
- **id** (*Optional*, [ID](mqtt/guides/configuration-types#id)): Manually specify the ID used for code generation.
- All other options from [Switch](https://esphomelib.com/esphomeyaml/components/switch/index.html#config-switch) and [MQTT Component](https://esphomelib.com/esphomeyaml/components/mqtt.html#config-mqtt-component).