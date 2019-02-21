# Shutdown Switch

The `shutdown` switch platform allows you to shutdown your node remotely through Home Assistant. It does this by putting the node into deep sleep mode with no wakeup source selected. After enabling, the only way to startup the ESP again is by pressing the reset button or restarting the power supply.

[![../../../_images/shutdown-ui.png](https://esphomelib.com/_images/shutdown-ui.png)](https://esphomelib.com/_images/shutdown-ui.png)

```
# 配置示例
switch:
  - platform: shutdown
    name: "Living Room Shutdown"
```

## 配置参数

- **name** (**必填**, 字符串): The name for the switch.
- **id** (*选填*, [ID](esphome/guides/configuration-types#id)): Manually specify the ID used for code generation.
- All other options from [Switch](https://esphomelib.com/esphomeyaml/components/switch/index.html#config-switch) and [MQTT Component](https://esphomelib.com/esphomeyaml/components/mqtt.html#config-mqtt-component).