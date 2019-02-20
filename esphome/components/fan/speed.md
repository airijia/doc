# Speed Fan

The `speed` fan platform lets you represent any float [Output Component](https://esphome.io/components/output/#output) as a fan that supports speed settings.

[![https://d33wubrfki0l68.cloudfront.net/0ac7232fe74149e85799e55aeff3775c47c3d239/ca6a8/_images/fan-ui.png](https://d33wubrfki0l68.cloudfront.net/0ac7232fe74149e85799e55aeff3775c47c3d239/ca6a8/_images/fan-ui.png)](https://esphome.io/_images/fan-ui.png)

```
# Example configuration entry
fan:
  - platform: speed
    output: my_output_1
    name: "Living Room Fan"
```

## Configuration variables:

- **output** (**Required**, [ID](https://esphome.io/guides/configuration-types#config-id)): The id of the [float output](https://esphome.io/components/output/#output) to use for this fan.

- **name** (**Required**, string): The name for this fan.

- **oscillation_output** (*Optional*, [ID](https://esphome.io/guides/configuration-types#config-id)): The id of the [output](https://esphome.io/components/output/#output) to use for the oscillation state of this fan. Default is empty.

- speed

   

  (

  Optional

  ): Set the float values for each speed setting:

  - **low** (*Required*, float): Set the value for the low speed setting. Must be in range 0 to 1. Defaults to 0.33.
  - **medium** (*Required*, float): Set the value for the medium speed setting. Must be in range 0 to 1. Defaults to 0.66.
  - **high** (*Required*, float): Set the value for the high speed setting. Must be in range 0 to 1. Defaults to 1.

- **id** (*Optional*, [ID](https://esphome.io/guides/configuration-types#config-id)): Manually specify the ID used for code generation.

- All other options from [MQTT Component](https://esphome.io/components/mqtt#config-mqtt-component) and [Fan Component](https://esphome.io/components/fan/#config-fan).