# 普通灯


只有打开和关闭两个状态的灯


![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxc4cyq1x4j30lc0hy3z6.jpg)


**airi:8123 和 Hass 中的显示**



## 文件模板创建

需要使用一个引脚设置 [二进制输出](mqtt/components/output#二进制输出) 通道


```yaml
# 输出组件 以 GPIO 为例
output:
  - platform: gpio
    pin: D1
    id: output_1
# 灯组件
light:
  - platform: binary
    name: "Desk Lamp"
    output: output_1
```

### 配置项

- **name** (**必填**, 字符串): 灯的名称
- **output** (**必填**,  [ID](mqtt/guides/configuration-types#id)): 使用的 [二进制输出](mqtt/components/output#二进制输出) 通道
- **id** (*选填*, [ID](mqtt/guides/configuration-types#id)): 当前组件的 ID
- **effects** (*Optional*, list):植入固件的[灯光特效](mqtt/components/light/#灯光特效)
- 以及[MQTT 组件](mqtt/components/mqtt#MQTT-组件基本配置项)的基本配置项


## 相关链接

-  [灯核心组件](mqtt/components/light/)
-  [可调亮度的灯](mqtt/components/light/monochromatic)
-  [可调色温调亮度的灯](mqtt/components/light/cwww)
-  [可调三色(红绿蓝)](mqtt/components/light/rgb)
-  [可调四色(红绿蓝白)](mqtt/components/light/rgbw)
-  [可调五色(红绿蓝冷白暖白)](mqtt/components/light/rgbww)
-  [单信号线 LED 灯带](mqtt/components/light/fastled_clockless)
-  [双信号线 LED 灯带](mqtt/components/light/fastled_spi)

