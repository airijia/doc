# 输出核心组件

可以简单的分为两类，二进制输出(只有 ON/OFF 两个状态)   和 浮点数输出 (比如 PWM 调光，输出范围 `0 ~ 1`)



## 配置参数

所有输出组件都可以配置使用这些参数


```yaml
# 配置示例
output:
  - platform: ...
    id: my_output_id
    power_supply: power_supply_id
    inverted: False
    max_power: 0.75
```

- **id** (**必填**, [ID](esphome/guides/configuration-types#id)): 输出组件 ID
- **power_supply** (*选填*, [ID](esphome/guides/configuration-types#id)): 要控制的 [直流开关电源](esphome/components/power_supply) 的 ID
- **inverted** (*选填*, 布尔值): 输出量是否要翻转。默认为否 `False`.
- **max_power** (*选填*, 浮点数): 最大输出量系数，所有输出量将于这个值相乘后输出，赋值范围 `0 ~ 1`，默认为 `1`




## 输出动作

### output.turn_on

此动作用于打开指定 ID 的输出


```yaml
on_...:
  then:
    - output.turn_on: relay_1
```

相同动作使用 [模板化](esphome/guides/automations#模板化) 的写法


```c++
id(relay_1).turn_on();
```



### output.turn_off

此动作用于关闭指定 ID 的输出


```yaml
on_...:
  then:
    - output.turn_off: relay_1
```

相同动作使用 [模板化](esphome/guides/automations#模板化) 的写法

```c++
id(relay_1).turn_off();
```



### output.set_level

此动作用于设置指定 ID 的输出量

仅用于浮点输出，比如 PWM 和 LEDC


```yaml
on_...:
  then:
    - output.set_level:
        id: output_1
        level: 50%
```

相同动作使用 [模板化](esphome/guides/automations#模板化) 的写法

```c++
// range is 0.0 (off) to 1.0 (on)
id(relay_1).set_level(0.5)
```


