# Generic Output Switch

The `output` switch platform allows you to use any output component as a switch.

[![../../../_images/output-ui.png](https://esphomelib.com/_images/output-ui.png)](https://esphomelib.com/_images/output-ui.png)

```
# Example configuration entry
output:
  - platform: gpio
    pin: 25
    id: 'generic_out'
switch:
  - platform: output
    name: "Generic Output"
    output: 'generic_out'
```

## Configuration variables:

- **output** (**Required**, [ID](https://esphomelib.com/esphomeyaml/guides/configuration-types.html#config-id)): The ID of the output component to use.
- **name** (**Required**, string): The name for the switch.
- **id** (*Optional*, [ID](https://esphomelib.com/esphomeyaml/guides/configuration-types.html#config-id)): Manually specify the ID used for code generation.
- All other options from [Switch](https://esphomelib.com/esphomeyaml/components/switch/index.html#config-switch) and [MQTT Component](https://esphomelib.com/esphomeyaml/components/mqtt.html#config-mqtt-component).

## See Also

- [Output Component](https://esphomelib.com/esphomeyaml/components/output/index.html)
- [API Reference](https://esphomelib.com/api/switch/index.html)
- [Edit this page on GitHub](https://github.com/OttoWinter/esphomedocs/blob/current/esphomeyaml/components/switch/output.rst)