# 直流电源组件


直流电源组件 `power_supply` 可以通过 芯片的output控制电源开关， 比如PC用的 ATX 电源
结合 


component allows you to have a high power mode for certain outputs. For example, if you’re using an [ATX power supply](https://en.wikipedia.org/wiki/ATX) to power your LED strips, you usually don’t want to have the power supply on all the time while the output is not on. The power supply component can be attached to any [Output Component](https://esphomelib.com/esphomeyaml/components/output/index.html#output) and will automatically switch on if any of the outputs are on. Furthermore, it also has a cooldown time that keeps the power supply on for a while after the last ouput has been disabled.

```
# Example configuration entry
power_supply:
  - id: 'power_supply1'
    pin: 13
```

## Configuration variables:

- **id** (**Required**, [ID](https://esphomelib.com/esphomeyaml/guides/configuration-types.html#config-id)): The id of the power supply so that it can be used by the outputs.
- **pin** (**Required**, [Pin Schema](https://esphomelib.com/esphomeyaml/guides/configuration-types.html#config-pin-schema)): The GPIO pin to control the power supply on.
- **enable_time** (*Optional*, [Time](https://esphomelib.com/esphomeyaml/guides/configuration-types.html#config-time)): The time to that the power supply needs for startup. The output component will wait for this period of time after turning on the PSU and before switching the output on. Defaults to `20ms`.
- **keep_on_time** (*Optional*, [Time](https://esphomelib.com/esphomeyaml/guides/configuration-types.html#config-time)): The time the power supply should be kept enabled after the last output that used it has been switch off. Defaults to `10s`.

See the [output component base configuration](https://esphomelib.com/esphomeyaml/components/output/index.html#config-output) for information on how to apply the power supply for a specific output.

## ATX Power Supplies

[![../../_images/power_supply-atx.jpg](https://esphomelib.com/_images/power_supply-atx.jpg)](https://esphomelib.com/_images/power_supply-atx.jpg)

The power supply component will default to pulling the specified GPIO pin up when high power mode is needed. Most ATX power supplies however operate with an active-low configuration. Therefore their output needs to be inverted.

```
power_supply:
  - id: 'atx_power_supply'
    pin:
      number: 13
      inverted: true
```

Then simply connect the green control wire from the ATX power supply to your specified pin. It’s recommended to put a small resistor (about 1kΩ) in between to protect the ESP board.





- [Output 组件](/mqtt/components/output/)
- [API Reference](https://esphomelib.com/api/core/power-supply.html)
- [Edit this page on GitHub](https://github.com/OttoWinter/esphomedocs/blob/current/esphomeyaml/components/power_supply.rst)