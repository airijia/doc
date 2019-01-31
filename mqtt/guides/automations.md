# 自动化和模板化

自动化和模板化是 MQTT 固件的两个非常强大的功能

智能家居环境中，以智能中枢（比如 Hass）或者流工具（比如 Node-RED）为核心，驱动不同的智能设备之间的自动化协作，称之为中枢自动化，或者**大**自动化。

节点设备自身内部的自动化，称之为内部自动化 `internal automatic`，或者**小**自动化，通常情况下，这部分功能由固件的底层完成，并不能自定义。而在 MQTT 固件最强大的部分，就是可以自己来定义内部自动化具体细节。

可以参考更容易理解的、基于 Sonoff Basic 的案例，[基于自动化实现 Basic 的基本功能](diy/sonoff/basic-auto)


## 组件构成

一个基本的自动化由三部分构成，触发器、动作和条件（可选）




## 所有触发器

- [mqtt.on_message](mqtt/components/mqtt#on_message) / [mqtt.on_json_message](mqtt/components/mqtt#on_json_message)
- [sensor.on_value](mqtt/components/sensor/#on_value) / [sensor.on_value_range](mqtt/components/sensor/#on_value_range) / [sensor.on_raw_value](mqtt/components/sensor/#on_raw_value)
- [binary_sensor.on_press](mqtt/components/binary_sensor/#on_press) / [binary_sensor.on_release](mqtt/components/binary_sensor/#on_release) / [binary_sensor.on_state](mqtt/components/binary_sensor/#on_state) / [binary_sensor.on_click](mqtt/components/binary_sensor/#on_click) / [binary_sensor.on_double_click](mqtt/components/binary_sensor/#on_double_click) / [binary_sensor.on_multi_click](mqtt/components/binary_sensor/#on_multi_click)
- [airi.on_boot](mqtt/components/airi#on_boot) / [airi.on_shutdown](mqtt/components/airi#on_shutdown) / [airi.on_loop](mqtt/components/airi#on_loop)
<!-- pn532.on_tag -->
- [time.on_time](mqtt/components/time#on_time)
- [interval.interval](#interval)


## 所有动作


- [delay](#delay)
- [lambda](#lambda-动作)
- [if](#if) / [while](#while)
- [component.update](#componentupdate)
- [script.execute](#scriptexecute) / [script.stop](#scriptstop)
- [logger.log](mqtt/components/logger#loggerlog)
- [homeassistant.service](mqtt/components/api#homeassistantservice)
- [mqtt.publish](mqtt/components/mqtt#mqttpublish) / [mqtt.publish](mqtt/components/mqtt#mqttpublish_json) 
- [switch.toggle](mqtt/components/switch/#switchtoggle) / [switch.turn_off](mqtt/components/switch/#switchturn_off) / [switch.turn_on](mqtt/components/switch/#switchturn_on)
- [light.toggle](mqtt/components/light/#lighttoggle) / [light.turn_on](mqtt/components/light/#lightturn_on) /[light.turn_off](mqtt/components/light/#lightturn_off)
<!-- cover.open / cover.close / cover.stop -->
<!-- fan.toggle / fan.turn_off / fan.turn_on -->
- [output.turn_off](mqtt/components/output/#outputturn_off) / [output.turn_on](mqtt/components/output/#outputturn_on) / [output.set_level](mqtt/components/output/#outputset_level)
<!-- deep_sleep.enter / deep_sleep.prevent -->



## 所有条件

- [lambda](#lambda-动作)
- [and](#and) / [or](#or)
- [binary_sensor.is_on](mqtt/components/binary_sensor/#is_on) / [binary_sensor.is_off](mqtt/components/binary_sensor/#is_off)
- [switch.is_on](mqtt/components/switch/#is_on) / [switch.is_off](mqtt/components/switch/#is_off)
- [sensor.in_range](mqtt/components/sensor/#in_range)


## 基本动作

### delay

定义一个延时，下一个动作将在延时到期后再执行

```yaml
on_...:
  then:
     # 打开 relay_1 后 2 秒关闭 relay_1
     - switch.turn_on: relay_1
     - delay: 2s
     - switch.turn_off: relay_1
     # 舌簧开关闭合超过 1 秒 (1000ms) 才返回闭合
     - delay: !lambda "if (id(reed_switch).state) return 1000; else return 0;"
```

?>异步非阻塞，延时不会影响其他代码运作

### lambda

嵌入一段 `C++` 代码并执行，详细查看 [Lambda 表达式](#lambdas-表达式)


```yaml
on_...:
  then:
    - lambda: >-
        id(some_binary_sensor).publish_state(false);
```

### if

依据条件判断的结果的不同来执行不同的动作

```yaml
# 当传感器 A 的值小于 30 时，点动开灯 5 秒，当传感器 A 的值大于等于 30 时，立即关灯
on_...:
  then:
    - if:
        condition:
          lambda: 'return id(some_sensor).state < 30;'
        then:
          - lambda: 'ESP_LOGD("main", "The sensor value is below 30!");
          - light.turn_on: my_light
          - delay: 5s
        else:
          - lambda: 'ESP_LOGD("main", "The sensor value is above 30!");
    - light.turn_off: my_light
```

**配置参数**

- **if** (**必填**): 判断的条件
- **then** (*选填*, [动作](mqtt/guides/automations#动作)): 判断为 `True` 时执行的动作，不填则无动作
- **else** (*选填*, [动作](mqtt/guides/automations#动作)): 判断为 `False` 时执行的动作，不填则无动作




### while

跟 [if](#if) 动作有点相像。**while** 的 **condition** 为 `True` 时，关联的动作将一直被执行，当 **condition** 变为 `False` 时，此系列动作即刻停止 

```yaml
# In a trigger:
on_...:
  - while:
      condition:
        binary_sensor.is_on: some_binary_sensor
      then:
        - logger.log: "Still executing"
        - light.toggle: some_light
        - delay: 5s
```

**配置参数**

- **condition** (**必填**): 供判断用的条件
- **then** (**必填**, [动作](mqtt/guides/automations#动作)): while 判断为否之前持续执行的动作



### component.update

手动发出 `update()` 指令，立即获取组件最新的状态，注意只可在少部分组件上工作

```yaml
on_...:
  then:
    # 常用方法
    - component.update: my_component

    # 等效方法
    - lambda: 'id(my_component).update();'
```



### script.execute

定义一段脚本，方便代码复用，比如有多个不同的触发器执行相同的动作，此时不需要每次都定义动作，执行这个脚本即可


```yaml
# 动作
script:
  - id: my_script
    then:
      - switch.turn_on: my_switch
      - delay: 1s
      - switch.turn_off: my_switch

# 触发器 A
on_...:
  then:
    - script.execute: my_script
# 触发器 B
on_...:
  then:
    - script.execute: my_script
```


### script.stop

停止自定义脚本的执行，如果此脚本并没有在执行

!> 注意现在只有基本自带 **delay** 的情况下才可以被停止


```yaml
script:
  - id: my_script
    then:
      - switch.turn_on: my_switch
      # 必须有 delay
      - delay: 1s
      - switch.turn_off: my_switch

# in a trigger:
on_...:
  then:
    - script.stop: my_script
```
## 基本触发器

### interval

即时间间隔，方便执行循环动作的触发器，使用 [time.on_time](mqtt/components/time#on_time) 触发器可以实现同样的功能，但这个更便捷


```yaml
# 每隔 1 分钟切换 relay_1 
interval:
  - interval: 1min
    then:
      - switch.toggle: relay_1
```

- **interval** (**必填**, [时长](mqtt/guides/configuration-types#时长)): 循环动作的间隔
- **then** (**必填**, [动作](mqtt/guides/automations#动作)): 执行的动作



## 基本条件

### and

同时满足列出所有条件才判断为 `True`；如果任意一个条件为 `False`，则整体判断为 `False`

```yaml
on_...:
  then:
    - if:
        condition:
          and:
            - binary_sensor.is_on: some_binary_sensor
            - binary_sensor.is_on: other_binary_sensor
        # ...
```
### or

列出所有条件中的任意一项为 `True`时，整体也判断为 `True`；反之，如果全部 `False`，则整体判断为 `False`


```yaml
on_...:
  then:
    - if:
        condition:
          or:
            - binary_sensor.is_on: some_binary_sensor
            - binary_sensor.is_on: other_binary_sensor
        # ...
```


## Lambda 表达式

借助 C++ 的模板化功能，实现更复杂更强大的自动化动作

Templates (Lambdas)



匿名函数

互锁或者调光

### Lambda 动作


### Lambda 条件



## 相关链接

 - [Lambda 表达式定义](https://baike.baidu.com/item/Lambda%E8%A1%A8%E8%BE%BE%E5%BC%8F)