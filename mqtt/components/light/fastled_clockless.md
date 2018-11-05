# 单总线 LED 灯带控制器

单数据信号的 LED 灯带控制器，总计三根线连接，分别是供电（VCC）、地线（GND）和信号线（DO/SIG/DIN），典型的型号如 WS2812B
跟 SPI 类型的灯带控制器相比，少一根 clock，所以称之为 `fastled_clockless`
实例连接中，由 供电 + 控制器 + 灯带 三部分组成


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
- **chipset** (**必填**, 字符串): 设置使用的驱动 IC. See [Supported Chipsets](https://esphomelib.com/esphomeyaml/components/light/fastled_clockless.html#fastled-clockless-chipsets) for options.
- **pin** (**必填**, [Pin](https://esphomelib.com/esphomeyaml/guides/configuration-types.html#config-pin)): 数据端口 The pin for the data line of the FastLED light.
- **num_leds** (**必填**, 整数): 灯珠数量The number of LEDs attached.
- **rgb_order** (*选填*, 字符串): 三种颜色的排序；R=红，G=绿，B=蓝。举例：如果设置排序为 RGB，当控制端指定显示红色（R）时，灯带却显示为蓝色（B），这是把排序改为 BGR，重新编译固件刷入，即可正确显示。可选值 `RGB`,`RBG`, `GRB`, `GBR`, `BRG` 和 `BGR`. 默认值  `RGB`
- **max_refresh_rate** (选填, [Time](https://esphomelib.com/esphomeyaml/guides/configuration-types.html#config-time)): 最大刷新率，A time interval used to limit the number of commands a light can handle per second. 举例：设置为16ms，会限制刷新率在 60Hz。默认值由驱动 IC 的默认值决定。For example 16ms will limit the light to a refresh rate of about 60Hz. Defaults to the default value for the used chipset.
- **gamma_correct** (*选填*, 浮点数): 伽马校正The [gamma correction factor](https://en.wikipedia.org/wiki/Gamma_correction) for the light. Defaults to `2.8`.
- **default_transition_length** (*选填*, [Time](https://esphomelib.com/esphomeyaml/guides/configuration-types.html#config-time)): The length of the transition if no transition parameter is provided by Home Assistant. Defaults to `1s`.
- **power_supply** (*选填*, [ID](https://esphomelib.com/esphomeyaml/guides/configuration-types.html#config-id)): The [Power Supply Component](https://esphomelib.com/esphomeyaml/components/power_supply.html) to connect to this light. When the light is turned on, the power supply will automatically be switched on too.
- **effects** (*选填*, list): 特效，A list of [light effects](https://esphomelib.com/esphomeyaml/components/light/index.html#light-effects) to use for this light.
- **id** (*选填*, [ID](https://esphomelib.com/esphomeyaml/guides/configuration-types.html#config-id)): 编码用 ID，Manually specify the ID used for code generation.
- All other options from [MQTT Component](https://esphomelib.com/esphomeyaml/components/mqtt.html#config-mqtt-component).



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