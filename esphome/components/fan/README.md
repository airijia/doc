# Fan Component

With the `fan` domain you can create components that appear as fans in the Home Assistant frontend. A fan can be switched ON or OFF, optionally has a speed setting (`LOW`, `MEDIUM`, `HIGH`) and can have an oscillate output.

[![https://d33wubrfki0l68.cloudfront.net/0ac7232fe74149e85799e55aeff3775c47c3d239/ca6a8/_images/fan-ui.png](https://d33wubrfki0l68.cloudfront.net/0ac7232fe74149e85799e55aeff3775c47c3d239/ca6a8/_images/fan-ui.png)](https://esphome.io/_images/fan-ui.png)



## Base Fan Configuration

```
fan:
  - platform: ...
    name: ...
```

Configuration variables:

- **name** (**Required**, string): The name of the fan.
- **oscillation_state_topic** (*Optional*, string): The topic to publish fan oscillation state changes to.
- **oscillation_command_topic** (*Optional*, string): The topic to receive oscillation commands on.
- **speed_state_topic** (*Optional*, string): The topic to publish fan speed state changes to.
- **speed_command_topic** (*Optional*, string): The topic to receive speed commands on.
- All other options from [MQTT Component](https://esphome.io/components/mqtt#config-mqtt-component).



## `fan.toggle` Action

Toggles the ON/OFF state of the fan with the given ID when executed.

```
on_...:
  then:
    - fan.toggle: fan_1
```



## `fan.turn_off` Action

Turns the fan with the given ID off when executed.

```
on_...:
  then:
    - fan.turn_off: fan_1
```



## `fan.turn_on` Action

Turns the fan with the given ID off when executed.

```
on_...:
  then:
    - fan.turn_on:
        id: fan_1
    # Shorthand:
    - fan.turn_on: fan_1
```

Configuration options:

- **id** (**Required**, [ID](https://esphome.io/guides/configuration-types#config-id)): The ID of the fan.
- **oscillating** (*Optional*, boolean, [templatable](https://esphome.io/guides/automations#config-templatable)): Set the oscillation state of the fan. Defaults to not affecting oscillation.
- **speed** (*Optional*, string, [templatable](https://esphome.io/guides/automations#config-templatable)): Set the speed setting of the fan. One of `OFF`, `LOW`, `MEDIUM`, `HIGH`. If you template this value, return `fan::FAN_SPEED_...`, for example `fan::FAN_SPEED_HIGH`.