# 单信号线 LED 灯带控制器

单数据信号的 LED 灯带控制器，总计三根线连接，分别是供电（VCC）、地线（GND）和信号线（DI/SIG/DIN），典型的型号如 WS2812B。跟双信号线(SPI总线)类型的灯带控制器相比，少一根 CLK ( clock，时钟序列)，所以称之为 `fastled_clockless`


实例连接中，由 供电 + ESP芯片组 + 灯带 三部分组成


[WS2812 开发灯环](//player.bilibili.com/player.html?aid=35359361&cid=61980878&page=1 ':include :type=iframe width="720" height="1280"')

**airi:8123 和 Hass 中的显示**

## 相关产品

| ![](http://pic.airijia.com/doc/20190703102846.png ':size=200')|  WS2812B<br> 灯带 |   [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://s.taobao.com/search?q=ws2812b) |
|:-:|:-:|:-:|
| ![](http://pic.airijia.com/doc/20190703102858.png ':size=200')  | 灯带连接器<br> 配合EPS01S模块和灯带使用  |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=551951370518) |
| ![](http://pic.airijia.com/doc/20181122164130.png ':size=200')| ESP01 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=45607865463) |



## 网页创建固件

打开 [在线 ESPHome 固件编译](http://airijia.com/ctl/firmware/list) 使用

![](http://pic.airijia.com/doc/20190703102912.png)

以 NodeMCU 8266 WS2812 芯片为例，搜索 ws2812  




![](http://pic.airijia.com/doc/20190703102925.png)

数据端口：即GPIO，可以填开发板上的编号，例如「D1」；也可以填纯数字，例如「2」

灯珠数量：灯带上的灯珠总数，填写错误会导致部分特效工作不正常

RGB 序列：三种颜色的排序；R=红，G=绿，B=蓝，根据实际情况填写




## 文件模板创建

参考 [模板文件创建 ESPHome 固件](esphome/guides/yaml) 使用


```yaml
# 配置示例
light:
  - platform: fastled_clockless
    chipset: WS2811
    pin: D1
    num_leds: 16
    rgb_order: BRG
    name: "FastLED WS2811 Light"
```

### 配置参数

- **name** (**必填**, 字符串): 名称，用于 MQTT 识别，不支持中文
- **chipset** (**必填**, 字符串): 指定使用的芯片组，具体值查看[支持芯片组](#支持芯片组)
- **pin** (**必填**, [引脚](esphome/guides/configuration-types#引脚)): 传输数据信号使用的端口
- **num_leds** (**必填**, 整数): 连接的灯珠数量
- **rgb_order** (*选填*, 字符串): 三种颜色的排序；R=红，G=绿，B=蓝。举例：如果设置排序为 RGB，当控制端指定显示红色（R）时，灯带却显示为蓝色（B），这时把排序改成 BGR，重新编译固件刷入，即可正确显示。可选值 `RGB`,`RBG`, `GRB`, `GBR`, `BRG` 和 `BGR`，默认值  `RGB`
- **max_refresh_rate** (选填, [时长](esphome/guides/configuration-types#时长)): 最大刷新率。举例：设置为16ms，会限制刷新率在 60Hz。默认值由驱动 IC 的默认值决定
- **gamma_correct** (*选填*, 浮点数): 伽马校正。默认值 `2.8`
- **default_transition_length** (*选填*, [时长](esphome/guides/configuration-types#时长)): 过度时长，如果智能中枢没提供此参数时的采用的值。默认值为 `1s`
- **power_supply** (*选填*, [ID](esphome/guides/configuration-types#id)): 使用 [直流电源](esphome/components/power_supply) 给灯带供电时，在控制灯带的同时也控制电源
- **effects** (*选填*, 列表): 植入固件的[灯光特效](esphome/components/light/#灯光特效)
- **id** (*选填*, [ID](esphome/guides/configuration-types#id)): 当前组件的 ID
- 以及[MQTT 组件](esphome/components/mqtt#MQTT-组件基本配置项)的基本配置项



### 支持芯片组

- `NEOPIXEL`
- `WS2811`
- `WS2811_400` (时钟频率 400kHz 的 `WS2811`)
- `WS2812B`
- `WS2812`
- `WS2813`
- `WS2852`
- `APA104`
- `APA106`
- `GW6205`
- `GW6205_400` (时钟频率 400kHz 的  `GW6205`)
- `LPD1886`
- `LPD1886_8BIT` (8-bit 色彩模式的`LPD1886`)
- `PL9823`
- `SK6812`
- `SK6822`
- `TM1803`
- `TM1804`
- `TM1809`
- `TM1829`
- `UCS1903B`
- `UCS1903`
- `UCS1904`
- `UCS2903`


## 相关链接

-  [灯核心组件](esphome/components/light/)
  -  [普通灯](esphome/components/light/binary)
  -  [可调亮度的灯](esphome/components/light/monochromatic)
  -  [可调色温调亮度的灯](esphome/components/light/cwww)
  -  [可调三色(红绿蓝)](esphome/components/light/rgb)
  -  [可调四色(红绿蓝白)](esphome/components/light/rgbw)
  -  [可调五色(红绿蓝冷白暖白)](esphome/components/light/rgbww)
  -  [双信号线 LED 灯带](esphome/components/light/fastled_spi)


- [伽马校正](https://baike.baidu.com/item/%E4%BC%BD%E7%8E%9B%E6%A0%A1%E6%AD%A3/7257507)
- [Arduino FastLED library](https://github.com/FastLED/FastLED)
- [WS2812模块接线教程](http://www.i-element.org/ws2812/)
