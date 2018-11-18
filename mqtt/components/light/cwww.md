# 可调色温调亮度的灯

可以调整亮度，也可以调整色温，冷白暖白两种颜色。




![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxc2mw62ekj30cx0dz74l.jpg)

**airi:8123 和 Hass 中的显示**



## 相关产品





## 网页创建固件

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxc42k68i4j30pt0emjs3.jpg)






## 文件模板创建

需要使用两个引脚设置 [浮点数输出](mqtt/components/output#浮点数输出) 通道

```yaml
# 输出组件 以 ESP8266 为例
output:
  - platform: esp8266_pwm
    pin: 5
    frequency: 1000 Hz
    id: output1
  - platform: esp8266_pwm
    pin: 4
    frequency: 1000 Hz
    id: output2
# 灯组件
light:
  - platform: cwww
    name: "Livingroom Lights"
    cold_white: output_1
    warm_white: output_2
    cold_white_color_temperature: 153 mireds
    warm_white_color_temperature: 500 mireds
```

- **name** (**必填**, 字符串): 灯的名称
- **cold_white** (**必填**, [ID](mqtt/guides/configuration-types#id)): 冷白使用的 [浮点数输出](mqtt/components/output#浮点数输出) 通道
- **warm_white** (**必填**, [ID](mqtt/guides/configuration-types#id)): 暖白使用的 [浮点数输出](mqtt/components/output#浮点数输出) 通道
- **cold_white_color_temperature** (**必填**, 浮点数): 冷白色温，单位 `mireds`(迈尔德)
- **warm_white_color_temperature** (**必填**, 浮点数): 暖白色温，单位 `mireds`(迈尔德)
- **gamma_correct** (*选填*, 浮点数): 伽马校正。默认值 `2.8`
- **default_transition_length** (*选填*, [时长](mqtt/guides/configuration-types#时长)): 过度时长，智能中枢没提供此参数时将采用此值。默认值为 `1s`
- **effects** (*选填*, list): 植入固件的[灯光特效](mqtt/components/light/#灯光特效)
- **id** (*选填*, [ID](mqtt/guides/configuration-types#id)): 当前组件的 ID
- 以及[MQTT 组件](mqtt/components/mqtt#MQTT-组件基本配置项)的基本配置项


?> 本组件只可以配合**浮点数输出**的组件使用，比如 [ESP8266 PWM](mqtt/components/light/esp8266_pwm) 和 [ESP32 LEDC](mqtt/components/light/ledc) 。**不可以用** [GPIO 输出](mqtt/components/light/gpio) 等类型


## 相关链接

-  [灯核心组件](mqtt/components/light/)
    -  [可调亮度的灯](mqtt/components/light/monochromatic)
    -  [可调三色(红绿蓝)](mqtt/components/light/rgb)
    -  [可调四色(红绿蓝白)](mqtt/components/light/rgbw)
    -  [可调五色(红绿蓝冷白暖白)](mqtt/components/light/rgbww)
    -  [单信号线 LED 灯带](mqtt/components/light/fastled_clockless)
    -  [双信号线 LED 灯带](mqtt/components/light/fastled_spi)


 - [色温](https://baike.baidu.com/item/%E8%89%B2%E6%B8%A9/103689)
    - [色温单位 mireds（迈尔德）](https://baike.baidu.com/item/%E8%BF%88%E5%B0%94%E5%BE%B7)
    - [mired-shift-calculator](http://www.leefilters.com/lighting/mired-shift-calculator.html)
    - [伽马校正](https://baike.baidu.com/item/%E4%BC%BD%E7%8E%9B%E6%A0%A1%E6%AD%A3/7257507)




