# 自动化

自动化赋予是 ESP 固件灵魂的功能

智能家居环境中，以智能中枢（比如 Hass）或者流工具（比如 Node-RED）为核心，驱动不同的智能设备之间的自动化协作，称之为中枢自动化，或者**大**自动化。

节点设备自身内部的自动化，称之为内部自动化 `internal automatic`，或者**小**自动化，通常情况下，这部分功能由固件的底层完成，并不能自定义。而在 MQTT 固件最强大的部分，就是可以自己来定义内部自动化具体细节。

可以参考更容易理解的、基于 Sonoff Basic 的案例，[基于自动化实现 Basic 的基本功能](diy/sonoff/basic-auto)

## 脱离网络环境运作

即离线模式，在没有 API 和 MQTT连入、甚至没有 WiFi 连接的情况下也能执行自动化中的逻辑



## 自动化构成

一个基本的自动化由两部分构成，触发器和动作

使用 `触发器` 启动自动化代码块，`then` 表示触发后对应的动作 ，连续的多个动作使用 `-` 连接。

下例中，`on_press` 是触发器，`switch.turn_on`，`delay` 和 `switch.turn_off` 是动作

这段代码块的作用为：按下按钮后，打开抽湿机的开关，延迟两秒后，关闭抽湿机

```yaml
# ...
on_press:
  then:
    - switch.turn_on: dehumidifier1
    - delay: 2s
    - switch.turn_off: dehumidifier1
```

一个触发器可对应多个 `then`，一个 `then` 可以对应多个动作。下例是一样的执行效果

```yaml
# ...
on_press:
  - then:
      - switch.toggle: dehumidifier1
  - then:
      - light.toggle: dehumidifier_indicator_light
# 同样的效果
on_press:
  then:
    - switch.toggle: dehumidifier1
    - light.toggle: dehumidifier_indicator_light
```

使用 `on_value_range` 触发器，湿度大于 65% 时，打开抽湿机，湿度小于 50% 时，关闭抽湿机


```yaml
sensor:
  - platform: dht
    humidity:
      name: "Living Room Humidity"
      on_value_range:
        - above: 65.0
          then:
            - switch.turn_on: dehumidifier1
        - below: 50.0
          then:
            - switch.turn_off: dehumidifier1
    temperature:
      name: "Living Room Temperature"
```




## lambda 表达式

使用 lambda 表达式置入一段 C++ 代码应对 yaml 无法实现的复杂自动化功能需求








## 全局变量

定义全局变量，可以在任意 lambdas 表达式中调用


```yaml
 # 定义全局变量
 globals:
   - id: my_global_int
     type: int
     restore_value: no
     initial_value: '0'

# 自动化中调用全局变量
on_press:
  then:
    - lambda: >-
        if (id(my_global_int) > 5) {
          // global value is greater than 5
          id(my_global_int) += 1;
        } else {
          id(my_global_int) += 10;
        }

        ESP_LOGD(TAG, "Global value is: %d", id(my_global_int));
```

**配置参数**

- **id** (**必填**, [ID](mqtt/guides/configuration-types#id)): 本组件的 ID
- **type** (**必填**, 字符串): 变量类型，例如 `bool`(布尔值，`true`/`false`), `int` (整数), `float` (浮点数), `int[50]` 50个整数构成的数组等等
- **restore_value** (*选填*, 布尔值): 启动时试图恢复的值，默认为 `no`。注意，ESP8266 系列只有 96 bytes 可用
- **initial_value** (*选填*, 字符串): 没有恢复值(restore_value)可用的时候，初始化完成后的默认值，默认为该类型变量在 C++ 中的默认值，例如 `int` 的默认值为 `0` 




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

- [and](#and) / [or](#or)
- [lambda](#lambda-条件)
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

延迟动作是异步非阻塞，不会影响所处代码块之外的代码运行


### lambda 动作

使用 lambda 表达式定义动作，详细查看 [lambda 表达式](#lambdas-表达式)

```yaml
on_...:
  then:
    - lambda: >-
        id(some_binary_sensor).publish_state(false);
```

使用 lambda 表达式传递模板化参数


```yaml
on_press:
  then:
    - light.turn_on:
        id: some_light_id
        transition_length: 0.5s
        red: 0.8
        green: 1.0
        blue: !lambda >-
          // 传感器 some_sensor 读值 0 - 100, 换算成蓝色通道输出值
          return id(some_sensor).state / 100.0;
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

!> 注意现在只有脚本自带 **delay** 的情况下才可以被停止


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


### lambda 条件








## 相关链接

 - [Lambda 表达式定义](https://baike.baidu.com/item/Lambda%E8%A1%A8%E8%BE%BE%E5%BC%8F)