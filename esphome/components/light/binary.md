# 普通灯


只有打开和关闭两个状态的灯


![](http://pic.airijia.com/doc/20190703102805.png)


**airi:8123 和 Hass 中的显示**



## 文件模板创建

需要使用一个引脚设置 [二进制输出](esphome/components/output#二进制输出) 通道


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

### 配置参数

- **name** (**必填**, 字符串): 灯的名称
- **output** (**必填**,  [ID](esphome/guides/configuration-types#id)): 使用的 [二进制输出](esphome/components/output#二进制输出) 通道
- **id** (*选填*, [ID](esphome/guides/configuration-types#id)): 当前组件的 ID
- **effects** (*选填*, 列表):植入固件的[灯光特效](esphome/components/light/#灯光特效)
- 以及[MQTT 组件](esphome/components/mqtt#MQTT-组件基本配置项)的基本配置项


## 相关链接

-  [灯核心组件](esphome/components/light/)
-  [可调亮度的灯](esphome/components/light/monochromatic)
-  [可调色温调亮度的灯](esphome/components/light/cwww)
-  [可调三色(红绿蓝)](esphome/components/light/rgb)
-  [可调四色(红绿蓝白)](esphome/components/light/rgbw)
-  [可调五色(红绿蓝冷白暖白)](esphome/components/light/rgbww)
-  [单信号线 LED 灯带](esphome/components/light/fastled_clockless)
-  [双信号线 LED 灯带](esphome/components/light/fastled_spi)

