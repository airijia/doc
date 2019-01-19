# 状态指示



The `status_led` hooks into all esphomelib components and can indicate the status of the device. Specifically, it will:

- Blink slowly (about every second) when a **warning** is active. Warnings are active when for example reading a sensor value fails temporarily or the WiFi/MQTT connections are disrupted.
- Blink quickly (multiple times per second) when an **error** is active. Errors indicate that esphomelib has found an error while setting up. In most cases, esphomelib will still try to recover from the error and continue with all other operations.
- Stay off otherwise.

```yaml
# Example configuration entry
status_led:
  pin: GPIO2
```

## Configuration variables:

- **pin** (**Required**, [Pin Schema](https://esphomelib.com/esphomeyaml/guides/configuration-types.html#config-pin-schema)): The GPIO pin to operate the status LED on.
- **id** (*选填*, [ID](https://esphomelib.com/esphomeyaml/guides/configuration-types.html#config-id)): Manually specify the ID used for code generation.

Note

If your LED is in an active-LOW mode (when it’s on if the output is enabled), use the `inverted` option of the [Pin Schema](https://esphomelib.com/esphomeyaml/guides/configuration-types.html#config-pin-schema):

```yaml
status_led:
  pin:
    number: D0
    inverted: True
```