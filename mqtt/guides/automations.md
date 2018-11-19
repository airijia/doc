# 自动化和模板化

自动化和模板化是 MQTT 固件的两个非常强大的功能

智能家居环境中，以智能中枢（比如 Hass）或者流工具（比如 Node-RED）为核心，驱动不同的智能设备之间的自动化协作，称之为中枢自动化，或者**大**自动化。

节点设备自身内部的自动化，称之为内部自动化 `internal automatic`，或者**小**自动化，通常情况下，这部分功能由固件的底层完成，并不能自定义。而在 MQTT 固件最强大的部分，就是可以自己来定义内部自动化具体细节。

下面以人气最高的 Sonoff Basic 为例来演示自动化是如何运作的，其中的自动化，除非特指，均指**内部自动化**。

```yaml
# ... 基本设置
switch:
  - platform: gpio
    name: 'basic_relay_1'
    pin: GPIO12
    id: relay_1
binary_sensor:
  - platform: gpio
    name: 'basic_switch_1'
    pin: GPIO0
```

依据过去使用其他智能家居固件的经验，Basic 应该如此配置，`GPIO12`接继电器，`GPIO0`接的黑色按钮，点击`GPIO0`按钮的同时，`GPIO12`的继电器也会做对应的切换。

按这个配置刷固件进 Basic 设备看看效果


![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx47akhet7j312i0mzai2.jpg)

`GPIO12`的继电器工作正常，中枢发出的指令可以正确控制

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx47hd6ho3j312g0jqdqt.jpg)

(⊙o⊙)…，点击`GPIO0`时，`GPIO12`的继电器完全无动作，真的只被当做二进制传感器了？而且按下按钮视为`False`？松开按钮视为`True`？反了？


有经验的朋友会明白反转的原因，这里用参数引脚，反转`GPIO0`解决 url

```yaml
# ... 基本设置
switch:
  - platform: gpio
    name: 'basic_relay_1'
    pin: GPIO12
    id: relay_1
binary_sensor:
  - platform: gpio
    name: 'basic_switch_1'
    pin:
      number: GPIO0
      inverted: True
      mode: INPUT_PULLUP
```


要实现点击开关切换继电器，这里要引入自动化的两个概念：触发器 `trigger` 和 动作 `action`




```yaml
# ... 基本设置
switch:
  - platform: gpio
    name: 'basic_relay_1'
    pin: GPIO12
    id: relay_1
binary_sensor:
  - platform: gpio
    name: 'basic_switch_1'
    pin:
      number: GPIO0
      inverted: True
      mode: INPUT_PULLUP
    on_click:
      then:
        - switch.toggle:
            id: relay_1
```

触发器 `on_click` ，动作`switch.toggle`，这段简短代码的含义：单击`GPIO0`按钮时，切换`relay_1`，即`GPIO12`继电器的状态

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx490spth7j30zb0lkdpk.jpg)

单击`GPIO0`按钮，已经可以正确控制，图中日志分别对应的动作

1. 中枢发出打开指令，`GPIO12` 关->开
2. 中枢发出关闭指令，`GPIO12` 开->关
3. 单击`GPIO0`按钮，`GPIO12` 关->开
4. 单击`GPIO0`按钮，`GPIO12` 开->关
5. 中枢发出打开指令，`GPIO12` 关->开
6. 单击`GPIO0`按钮，`GPIO12` 开->关
7. 单击`GPIO0`按钮，`GPIO12` 关->开
8. 中枢发出关闭指令，`GPIO12` 开->关


## 动作

delay 点动

dht11 温度





## Lambda 表达式
Templates (Lambdas)

使用模板化功能，几乎可以实现所有

匿名函数

互锁或者调光


## 所有触发器

- [mqtt.on_message](mqtt/components/mqtt#on_message)
- [sensor.on_value](mqtt/components/sensor/#on_value)
- [sensor.on_value_range](mqtt/components/sensor/#on_value_range)
- [sensor.on_raw_value](mqtt/components/sensor/#on_raw_value)
- [binary_sensor.on_press](mqtt/components/binary_sensor/#on_press)
- [binary_sensor.on_release](mqtt/components/binary_sensor/#on_release)
- [binary_sensor.on_click](mqtt/components/binary_sensor/#on_click)
- [binary_sensor.on_double_click](mqtt/components/binary_sensor/#on_double_click)
- [airi.on_boot](mqtt/components/airi#on_boot)
- [airi.on_shutdown](mqtt/components/airi#on_shutdown)
- [airi.on_loop](mqtt/components/airi#on_loop)









## 所有动作

- [delay](#delay)
- [lambda](#lambda)
- [if](#if)
- [mqtt.publish](mqtt/components/mqtt#mqttpublish)
- [switch.toggle](mqtt/components/switch/#switchtoggle)
- [switch.turn_off](mqtt/components/switch/#switchturn_off)
- [switch.turn_on](mqtt/components/switch/#switchturn_on)
- [light.toggle](mqtt/components/light/#lighttoggle)
- [light.turn_on](mqtt/components/light/#lightturn_on)
- [light.turn_off](mqtt/components/light/#lightturn_off)

<!-- - [cover.open]
- [cover.close]
- [cover.stop]
- [fan.toggle]
- [fan.turn_off]
- [fan.turn_on] -->
- [output.turn_off](mqtt/components/output/#outputturn_off)
- [output.turn_on](mqtt/components/output/#outputturn_on)
- [output.set_level](mqtt/components/output/#outputset_level)

<!-- - [deep_sleep.enter]
- [deep_sleep.prevent] -->


## 基本动作

### delay

定义一个延时，下一个动作将在延时到期后再执行

```
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


```
on_...:
  then:
    - lambda: >-
        id(some_binary_sensor).publish_state(false);
```

### if

依据条件判断的结果的不同来执行不同的动作

```
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



### component.update

手新发出 `update()` 指令，获取组件状态


```
on_...:
  then:
    - component.update: my_component

    # The same as:
    - lambda: 'id(my_component).update();'
```



### script.execute

定义一段脚本，方便代码复用，比如有多个不同的触发器执行相同的动作，此时不需要每次都定义动作，复用这段脚本即可


```
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




## 相关链接

 - [Lambda 表达式定义](https://baike.baidu.com/item/Lambda%E8%A1%A8%E8%BE%BE%E5%BC%8F)