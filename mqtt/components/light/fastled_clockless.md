# 单信号线 LED 灯带控制器

单数据信号的 LED 灯带控制器，总计三根线连接，分别是供电（VCC）、地线（GND）和信号线（DO/SIG/DIN），典型的型号如 WS2812B
跟双信号线(SPI总线)类型的灯带控制器相比，少一根 CLK ( clock，时钟序列)，所以称之为 `fastled_clockless`

实例连接中，由 供电 + ESP芯片组 + 灯带 三部分组成


[WS2812 开发灯环](//player.bilibili.com/player.html?aid=35359361&cid=61980878&page=1 ':include :type=iframe width="720" height="1280"')

**airi:8123 和 Hass 中的显示**

## 支持产品

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwxfzyopmcj30xa0k81fn.jpg)

WS2812B 灯带


![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwxbejdrw1j30b40b4tdc.jpg)

ESP01S模块用连接器，配合EPS01S模块和灯带使用 [购买](https://item.taobao.com/item.htm?id=551951370518)


## 网页创建固件

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwxg8yw6t6j30w60jqtca.jpg)

以 NodeMCU 8266 WS2812 芯片为例，搜索 ws2812  


![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwxda34579j30ku0djmxh.jpg)

数据端口：即GPIO，可以填开发板上的编号，例如「D1」；也可以填纯数字，例如「2」

灯珠数量：灯带上的灯珠总数，填写错误会导致部分特效工作不正常

RGB 序列：三种颜色的排序；R=红，G=绿，B=蓝，根据实际情况填写




## YAML 模板创建


```yaml
    # Example configuration entry
    light:
      - platform: fastled_clockless
        chipset: WS2811
        pin: D1
        num_leds: 16
        rgb_order: BRG
        name: "FastLED WS2811 Light"
```

### 配置项

- **name** (**必填**, 字符串): 名称，用于 MQTT 识别，不支持中文
- **chipset** (**必填**, 字符串): 设置使用的芯片组，具体值查看[支持芯片组](#支持芯片组)
- **pin** (**必填**, [Pin](/mqtt/guides/configuration-types#pin)): 传输数据信号使用的端口
- **num_leds** (**必填**, 整数): 连接的灯珠数量
- **rgb_order** (*选填*, 字符串): 三种颜色的排序；R=红，G=绿，B=蓝。举例：如果设置排序为 RGB，当控制端指定显示红色（R）时，灯带却显示为蓝色（B），这是把排序改为 BGR，重新编译固件刷入，即可正确显示。可选值 `RGB`,`RBG`, `GRB`, `GBR`, `BRG` 和 `BGR`. 默认值  `RGB`
- **max_refresh_rate** (选填, [Time](/mqtt/guides/configuration-types#time)): 最大刷新率。举例：设置为16ms，会限制刷新率在 60Hz。默认值由驱动 IC 的默认值决定。
- **gamma_correct** (*选填*, 浮点数): 伽马校正The [gamma correction factor](https://en.wikipedia.org/wiki/Gamma_correction) 灯类的默认值是 `2.8`.
- **default_transition_length** (*选填*, [Time](/mqtt/guides/configuration-types#time)) 默认过度时长，如果智能中枢没提供此参数时的默认值，默认值为 `1s`.
- **power_supply** (*选填*, [ID](/mqtt/guides/configuration-types#id)): 使用 [Power Supply Component](/mqtt/components/power_supply) 给灯带供电时，打开灯带的同时也打开电源
- **effects** (*选填*, 列表): 植入固件的[灯光特效](/mqtt/components/light/#灯光特效)
- **id** (*选填*, [ID](/mqtt/guides/configuration-types#id)): 编码用 ID
- 以及[MQTT组件](/mqtt/components/mqtt#MQTT-组件基本配置项)的基本配置项



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

- [灯组件](/mqtt/light/)
- [双信号线灯带](/mqtt/components/light/fastled_spi)
- [直流电源供电](/mqtt/components/power_supply)
- [Arduino FastLED library](https://github.com/FastLED/FastLED)