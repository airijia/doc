# 可调亮度的灯

可以调整亮度，不可以调整色温的灯


![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxc56qquwuj30m40ms0ts.jpg)


**airi:8123 和 Hass 中的显示**



## 文件模板创建

需要使用一个引脚设置 [浮点数输出](esphome/components/output#浮点数输出) 通道


```yaml
# 输出组件 以 ESP8266 为例
output:
  - platform: esp8266_pwm
    pin: 5
    frequency: 1000 Hz
    id: output1
# 配置示例
light:
  - platform: monochromatic
    name: "Kitchen Lights"
    output: output1
```

### 配置参数

- **name** (**必填**, 字符串): 灯的名称
- **output** (**必填**,  [ID](esphome/guides/configuration-types#id)): 使用的 [浮点数输出](esphome/components/output#浮点数输出) 通道
- **gamma_correct** (*选填*, 浮点数): 伽马校正。默认值 `2.8`
- **default_transition_length** (*选填*, [时长](esphome/guides/configuration-types#时长)): 过度时长，智能中枢没提供此参数时将采用此值。默认值为 `1s`
- **effects** (*选填*, 列表):植入固件的[灯光特效](esphome/components/light/#灯光特效)
- **id** (*选填*, [ID](esphome/guides/configuration-types#id)): 当前组件的 ID
- 以及[MQTT 组件](esphome/components/mqtt#MQTT-组件基本配置项)的基本配置项


?> 本组件只可以配合**浮点数输出**的组件使用，比如 [ESP8266 PWM](esphome/components/output/esp8266_pwm) 和 [ESP32 LEDC](esphome/components/output/ledc) 。**不可以用** [GPIO 输出](esphome/components/light/gpio) 等类型

## 相关链接

-  [灯核心组件](esphome/components/light/)
-  [普通灯](esphome/components/light/binary)
-  [可调色温调亮度的灯](esphome/components/light/cwww)
-  [可调三色(红绿蓝)](esphome/components/light/rgb)
-  [可调四色(红绿蓝白)](esphome/components/light/rgbw)
-  [可调五色(红绿蓝冷白暖白)](esphome/components/light/rgbww)
-  [单信号线 LED 灯带](esphome/components/light/fastled_clockless)
-  [双信号线 LED 灯带](esphome/components/light/fastled_spi)

