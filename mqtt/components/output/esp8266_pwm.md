# ESP8266 PWM 输出

脉宽调制（Pulse Width Modulation，PWM）是在保持波的频率不变的同时改变脉宽的技术。理论上 GPIO0-GPIO16 都可以用作 PWM，但实际使用中要根据实际电路来使用。比如 NodeMCU，是用软件编程加上定时器中断方法实现的，D1 ~ D8 可用于 PWM

ESP8266 软件模拟的PMW 实际使用中的调光效果远不如 ESP32 硬件封装 [LEDC](mqtt/components/light/ledc)


```yaml
# 配置示例
output:
  - platform: esp8266_pwm
    pin: D1
    frequency: 1000 Hz
    id: pwm-output
```

### 配置参数

- **pin** (**必填**,  [引脚](mqtt/guides/configuration-types#引脚)): 使用的引脚
- **id** (**必填**, [ID](mqtt/guides/configuration-types#id)): 此组件的 ID
- **frequency** (*选填*, 浮点数): PWM的频率。使用低频率可展示更多颜色，但同时也会导致更多视觉残像。默认值为 `1000 Hz`
- 以及 [输出核心组件](mqtt/components/output/) 的配置项



## 相关链接

- [ESP8266 PMW介绍](https://blog.csdn.net/qq_15647227/article/details/52218200)
- [了解PWM，更为深入地用PWM控制一盏LED的亮度变化](https://blog.csdn.net/xh870189248/article/details/78202224)
