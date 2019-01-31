# NeoPixelBus 灯带控制器

The `neopixelbus` light platform allows you to create RGB lights in esphomelib for a individually addressable lights like NeoPixel or WS2812.

It is very similar to the [FastLED Clockless Light](https://esphomelib.com/esphomeyaml/components/light/fastled_clockless.html) and [FastLED SPI Light](https://esphomelib.com/esphomeyaml/components/light/fastled_spi.html) platforms; in fact most addressable lights are supported through both light platforms. The difference is that they use different libraries: While the fastled platforms use the [FastLED](https://github.com/FastLED/FastLED) library, this integration uses the [NeoPixelBus](https://github.com/Makuna/NeoPixelBus/) library internally.

```
# Example configuration entry
light:
  - platform: neopixelbus
    type: GRB
    pin: GPIO23
    num_leds: 60
    name: "NeoPixel Light"
```

## Configuration variables:

**Base Options:**

- **name** (**必填**, 字符串): The name of the light.
- **gamma_correct** (*选填*, float): The [gamma correction factor](https://en.wikipedia.org/wiki/Gamma_correction) for the light. Defaults to `2.8`.
- **id** (*选填*, [ID](https://esphomelib.com/esphomeyaml/guides/configuration-types.html#config-id)): Manually specify the ID used for code generation.
- **color_correct** (*选填*, list of percentages): The color correction for each channel. This denotes the maximum brightness of the red, green, blue[, white] channel. Defaults to `color_correct: [100%, 100%, 100%]`.
- **default_transition_length** (*选填*, [时长](mqtt/guides/configuration-types#时长)): The length of the transition if no transition parameter is provided by Home Assistant. Defaults to `1s`.
- **power_supply** (*选填*, [ID](https://esphomelib.com/esphomeyaml/guides/configuration-types.html#config-id)): The [Power Supply Component](https://esphomelib.com/esphomeyaml/components/power_supply.html) to connect to this light. When the light is turned on, the power supply will automatically be switched on too.
- **effects** (*选填*, list): A list of [light effects](https://esphomelib.com/esphomeyaml/components/light/index.html#light-effects) to use for this light.
- All other options from [MQTT Component](https://esphomelib.com/esphomeyaml/components/mqtt.html#config-mqtt-component).

**Type Options:**

- **type** (*选填*, 字符串): The type of light. This is used to specify if it is an RGBW or RGB light and in which order the colors are. Defaults to `GRB`. Change this if you have lights with white value and/or the colors are in the wrong order.

- variant(Optional, 字符串): The chipset variant. You can read more about thesehere
(some of the info on that page is not entirely correct). One of these values:
  - `800KBPS` (default)
  - `400KBPS`
  - `WS2812X`
  - `SK6812`
  - `WS2813` (same as `WS2812X`)
  - `WS2812` (same as `800KBPS`)
  - `LC8812` (same as `SK6812`)
- method(Optional, 字符串): The method to transmit the data with. You can read more about these here:ESP32,ESP8266
  - `ESP8266_DMA` (default for ESP8266)
  - `ESP8266_UART0`
  - `ESP8266_UART1`
  - `ESP8266_ASYNC_UART0`
  - `ESP8266_ASYNC_UART1`
  - `ESP32_I2S_0`
  - `ESP32_I2S_1` (default for ESP32)
  - `BIT_BANG`

- **num_leds** (**必填**, int): The number of LEDs attached.
**Pin Options:** Some chipsets have two data pins to connect, others only have one. If you have one line, only specify `pin`, otherwise specify both `clock_pin` and `data_pin`.
- **pin** (**必填**, [Pin](https://esphomelib.com/esphomeyaml/guides/configuration-types.html#config-pin)): The pin for the data line of the light.
- **clock_pin** (**必填**, [Pin](https://esphomelib.com/esphomeyaml/guides/configuration-types.html#config-pin)): The pin for the clock line of the light, for two-pin lights.
- **data_pin** (**必填**, [Pin](https://esphomelib.com/esphomeyaml/guides/configuration-types.html#config-pin)): The pin for the data line of the light, for two-pin lights.

## See Also

- [Light Component](https://esphomelib.com/esphomeyaml/components/light/index.html)
- [FastLED Clockless Light](https://esphomelib.com/esphomeyaml/components/light/fastled_clockless.html)
- [Power Supply Component](https://esphomelib.com/esphomeyaml/components/power_supply.html)
- [API Reference](https://esphomelib.com/api/light/neopixelbus.html)
- [NeoPixelBus library](https://github.com/Makuna/NeoPixelBus/wiki/ESP8266-NeoMethods)
- [Edit this page on GitHub](https://github.com/OttoWinter/esphomedocs/blob/current/esphomeyaml/components/light/neopixelbus.rst)