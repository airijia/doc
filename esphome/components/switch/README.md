# 开关核心组件


所有可以在智能中枢里显示成 `ON/OFF` 状态的开关类型组件


## 基本配置

```yaml
switch:
  - platform: ...
    name: "Switch Name"
    icon: "mdi:restart"
```

**配置参数**

- **name** (**必填**, 字符串): 开关的名称
- **icon** (*选填*, 图标): 中枢显示的图标
- **inverted** (*选填*, 布尔值): 翻转状态。默认为否 `False`
- **internal** (*选填*, 布尔值): 内部化，开启后此开关将只供内部调用，在中枢里不可见，默认为 `False`，如果只设置 **id**，不设置 **name** 等同于此项为 `True`
- **on_turn_on** (*选填*, 自动化): 详见 [switch.on_turn_on](#switch.on_turn_on)
- **on_turn_off** (*选填*, 自动化): 详见 [switch.on_turn_off](#switch.on_turn_off)
- **inverted** (*选填*, 布尔值): 翻转状态。默认为否 `False`


## 触发器

### switch.on_turn_on

开关被打开后会激活的触发器，例如实现点动功能


```yaml
switch:
  - platform: gpio  # 或者其他类型
    id: relay_1
    # ...
    on_turn_on:
      then:
        - delay: 5s
        - switch.turn_off:
            id: relay_1
```


### switch.on_turn_off

开关被关闭后会激活的触发器





## 动作

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

 ## 条件


### is_on

检查开关的状态是否为 `ON`


```yaml
on_...:
  if:
    condition:
      switch.is_on: my_switc
```

### is_off

检查开关的状态是否为 `OFF`


```yaml
on_...:
  if:
    condition:
      switch.is_off: my_switc
```



### 使用 lambda 表达式


借助 [Lambda 表达式](esphome/guides/automations#lambdas-表达式), 可以实现一些复杂的自定义动作


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


