# 基于自动化实现 Basic 的基本功能


下面以人气最高的 Sonoff Basic 为例来演示自动化是如何运作的

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


有经验的朋友会明白翻转的原因，这里用参数引脚，翻转`GPIO0`解决 url

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

