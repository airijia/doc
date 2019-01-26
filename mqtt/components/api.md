# 原生 API

!> 本功能需 airi > 0.3 或 hass > 0.85

用来替代简单自动发现的集成 API，更快更高效更稳定。工作原理是在节点的固件上运行 API 服务，中枢发现后可连入，省略了 MQTT 服务器


```yaml
# 日常使用
api:
  reboot_timeout: 0s
# 复杂使用
api:
  port: 6666
  password: 'MyPassword'
  reboot_timeout: 5min
```

**配置参数**

- **port** (*选填*, 整数): API 服务使用的端口，默认为 `6053`
- **password** (*选填*, 字符串): API 服务使用的密码，默认无密码
- **reboot_timeout** (*选填*, [时长](mqtt/guides/configuration-types#时长)): 持续的没有连接连入到此节点上的 API 服务时，节点将在设置的时长后重启。默认 `5min`，设置成 `0s` 将禁用此功能
- **id** (*选填*, [ID](mqtt/guides/configuration-types#id)): 本组件的 ID



## 动作

配合 [自动化](mqtt/guides/automations) 的动作


### homeassistant.service


调用中枢的服务，效果等同中枢 8123 里面的  `CALL SERVICE`


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

- **service** (**Required**, 字符串): 要调用的 [Service](ctl/scripts/service-calls)
- **data** (*选填*, 映射): 传递的静态参数
- **data_template** (*选填*, 映射): 传递的模板化参数，语法结构依照 Hass 模板引擎，参考 [Service](ctl/scripts/service-calls)
- **variables** (*选填*, 映射): 使用 [lambdas 表达式] 语法定义的可选变量，供 `data_template` 调用 
