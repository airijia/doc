# Restart Switch

The `restart` switch platform allows you to restart your node remotely through Home Assistant.

[![../../../_images/restart-ui.png](https://esphomelib.com/_images/restart-ui.png)](https://esphomelib.com/_images/restart-ui.png)

```
# Example configuration entry
switch:
  - platform: restart
    name: "Living Room Restart"
```

## Configuration variables:

- **name** (**Required**, string): The name for the switch.
- **id** (*Optional*, [ID](https://esphomelib.com/esphomeyaml/guides/configuration-types.html#config-id)): Manually specify the ID used for code generation.
- All other options from [Switch](https://esphomelib.com/esphomeyaml/components/switch/index.html#config-switch) and [MQTT Component](https://esphomelib.com/esphomeyaml/components/mqtt.html#config-mqtt-component).