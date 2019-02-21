# Template Cover

The `template` cover platform allows you to create simple covers out of just a few actions and a value lambda. Once defined, it will automatically appear in Home Assistant as a cover and can be controlled through the frontend.

[![https://d33wubrfki0l68.cloudfront.net/32e6dda3d58a3f87aecd97630b8e79770b84ff2b/69cd0/_images/cover-ui.png](https://d33wubrfki0l68.cloudfront.net/32e6dda3d58a3f87aecd97630b8e79770b84ff2b/69cd0/_images/cover-ui.png)](https://esphome.io/_images/cover-ui.png)

```
# 配置示例
cover:
  - platform: template
    name: "Template Cover"
    lambda: |-
      if (id(top_end_stop).state) {
        return cover::COVER_OPEN;
      } else {
        return cover::COVER_CLOSED;
      }
    open_action:
      - switch.turn_on: open_cover_switch
    close_action:
      - switch.turn_on: close_cover_switch
    stop_action:
      - switch.turn_on: stop_cover_switch
    optimistic: true
```

Possible return values for the optional lambda:

> - `return cover::COVER_OPEN;` if the cover should be reported as OPEN.
> - `return cover::COVER_CLOSED;` if the cover should be reported as CLOSED.
> - `return {};` if the last state should be repeated.

## **配置参数**

- **name** (**必填**, 字符串): The name of the cover.
- **lambda** (*选填*, [lambda](https://esphome.io/guides/automations#config-lambda)): Lambda to be evaluated repeatedly to get the current state of the cover. Only state *changes* will be published to MQTT.
- **optimistic** (*选填*, boolean): Whether to operate in optimistic mode - when in this mode, any command sent to the template cover will immediately update the reported state and no lambda needs to be used. Defaults to `false`.
- **open_action** (*选填*, [Action](https://esphome.io/guides/automations#config-action)): The action that should be performed when the remote (like Home Assistant’s frontend) requests the cover to be opened.
- **close_action** (*选填*, [Action](https://esphome.io/guides/automations#config-action)): The action that should be performed when the remote requests the cover to be closed.
- **stop_action** (*选填*, [Action](https://esphome.io/guides/automations#config-action)): The action that should be performed when the remote requests the cover to stopped.
- **id** (*选填*, [ID](esphome/guides/configuration-types#id)): Manually specify the ID used for code generation.
- All other options from [MQTT Component](https://esphome.io/components/mqtt#config-mqtt-component).