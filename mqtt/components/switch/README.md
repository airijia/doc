# 开关核心组件


包括所以可以在智能中枢里显示成 `ON/OFF` 状态的开关类型组件


## 基本配置

```yaml
switch:
  - platform: ...
    name: "Switch Name"
    icon: "mdi:restart"
```

**配置项**

- **name** (**Required**, string): The name of the switch.
- **icon** (*Optional*, icon): Manually set the icon to use for the sensor in the frontend.
- **inverted** (*Optional*, boolean): Whether to invert the binary state, i.e. report ON states as OFF and vice versa. Defaults to `False`.
- All other options from [MQTT Component](https://esphomelib.com/esphomeyaml/components/mqtt.html#config-mqtt-component).



### switch.toggle

此动作用于切换指定 ID 开关的状态

```yaml
on_...:
  then:
    - switch.toggle: relay_1
```



### switch.turn_on

此动作用于打开指定 ID 的开关

```yaml
on_...:
  then:
    - switch.turn_on: relay_1
```



### switch.turn_off

此动作用于关闭指定 ID 的开关


```yaml
on_...:
  then:
    - switch.turn_off: relay_1
```

### 使用 lambda 表达式


借助 [Lambda 表达式](mqtt/guides/automations#lambdas-表达式), 可以实现一些复杂的自定义动作


#### publish_state()

手动发布开关的内部 `internal` 状态 `state`，如果新的内部状态与旧的内部状态不同，则向外部发布这个新的状态(比如 MQTT 转发器)

```c++
// 使用 lambda 发布开关状态
id(my_switch).publish_state(false);
id(my_switch).publish_state(true);
```

#### state

获取开关当前的状态 `state`


```c++
// 依据获取到的开关状态执行动作
if (id(my_switch).state) {
// 开关状态 ON，do something
} else {
// 开关状态 OFF，do something
}
```


#### write_state()

手动更改开关的状态 `state`，效果与 [switch.turn_on](#switchturn_on) 和 [switch.turn_off](#switchturn_off) 这两个动作相同。但可以灵活地在 lambda 表达式中使用

```
// 关
id(my_switch).write_state(false);
// 开
id(my_switch).write_state(true);
// 切换
id(my_switch).write_state(!id(my_switch).state);
```


