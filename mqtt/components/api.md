# 中枢API

!> 需 airi > 0.3.0 或 hass > 0.85.3

用来替代简单自动发现的集成 API，更快更高效更稳定


```yaml
# 配置示例
api:
  password: 'MyPassword'
```

**配置参数**

- **port** (*选填*, 整数): 中枢 API 使用的端口，默认为 `6053`
- **password** (*选填*, 字符串): 中枢 API 使用的密码，默认为无密码
- **reboot_timeout** (*选填*, [时长](mqtt/guides/configuration-types#时长)): 持续的无法连接中枢 API转发器时，节点会在设置的时长后重启。默认 `5min`，设置成 `0s` 将禁用此功能
- **id** (*选填*, [ID](mqtt/guides/configuration-types#id)): 本组件的 ID



## `homeassistant.service` Action

使用[自动化](mqtt/guides/automations)组件，调用中枢的服务，效果等同中枢 8123 里面的  `CALL SERVICE`


```yaml
# ... 触发器配置
on_...:
  # 简单使用
  - homeassistant.service:
      service: notify.html5
      data:
        title: Button was pressed
  # 模板化及变量
  - homeassistant.service:
      service: notify.html5
      data:
        title: New Humidity
      data_template:
        message: The humidity is {{ my_variable }}%.
      variables:
        my_variable: >-
          return id(my_sensor).state;
```

**配置项**

- **service** (**Required**, 字符串): The Home Assistant [Service](https://www.home-assistant.io/docs/scripts/service-calls/) to call.
- **data** (*选填*, 映射): Optional *static* data to pass along with the service call.
- **data_template** (*选填*, 映射): Optional template data to pass along with the service call. This is evaluated on the Home Assistant side with Home Assistant’s templating engine.
- **variables** (*选填*, 映射): Optional variables that can be used in the `data_template`. Values are [lambdas](https://esphomelib.com/esphomeyaml/guides/automations.html#config-lambda) and will be evaluated before sending the request.
