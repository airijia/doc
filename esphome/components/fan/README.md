# 风扇

风扇类的基本组件，具体使用分为 [普通风扇](esphome/components/fan/binary)  和 [可调速风扇](esphome/components/fan/speed)


## 基本配置

```yaml
fan:
  - platform: ...
    name: ...
```

**基本参数**

基本参数可以在所有的风扇类组件中使用

- **name** (**必填**, 字符串): 风扇的名称
- **oscillation_state_topic** (*选填*, 字符串): 风扇摇摆状态的主题
- **oscillation_command_topic** (*选填*, 字符串): 风扇摇摆动作的主题
- **speed_state_topic** (*选填*, 字符串): 风扇转速状态的主题
- **speed_command_topic** (*选填*, 字符串): 风扇调整转速动作的主题



## 动作

### fan.toggle

切换指定 ID 风扇的开关状态

```yaml
on_...:
  then:
    - fan.toggle: fan_1
```



### fan.turn_off

关闭指定 ID 的风扇

```yaml
on_...:
  then:
    - fan.turn_off: fan_1
```


### fan.turn_on

打开指定 ID 的风扇

```yaml
on_...:
  then:
    - fan.turn_on:
        id: fan_1
    # 简写
    - fan.turn_on: fan_1
```

**配置参数**

- **id** (**必填**, [ID](esphome/guides/configuration-types#id)): 风扇的 ID
- **oscillating** (*选填*, 布尔值,): 摇摆状态，默认为不改变旧状态
- **speed** (*选填*, 字符串,): 风扇转速，可选值有`OFF`, `LOW`, `MEDIUM`, `HIGH`。如果在lambdas 表达式中使用，则使用形如`fan::FAN_SPEED_...`的格式, 例如 `fan::FAN_SPEED_HIGH`