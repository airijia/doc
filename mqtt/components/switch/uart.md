# UART Switch

The `uart` switch platform allows you to send a pre-defined sequence of bytes on a [UART bus](https://esphomelib.com/esphomeyaml/components/uart.html) when triggered.

```
# 配置示例
uart:
  baud_rate: 9600
  tx_pin: D0

switch:
  - platform: uart
    name: "UART String Output"
    data: 'DataToSend'
  - platform: uart
    name: "UART Bytes Output"
    data: [0xDE, 0xAD, 0xBE, 0xEF]
```

## 配置参数

- **data** (**必填**, string or list of bytes): The data to send via UART. Either an ASCII string or a list of bytes.
- **name** (**必填**, 字符串): The name for the switch.
- **uart_id** (*Optional*, [ID](mqtt/guides/configuration-types#id)): Manually specify the ID of the UART hub.
- **id** (*Optional*, [ID](mqtt/guides/configuration-types#id)): Manually specify the ID used for code generation.
- All other options from [Switch](https://esphomelib.com/esphomeyaml/components/switch/index.html#config-switch) and [MQTT Component](https://esphomelib.com/esphomeyaml/components/mqtt.html#config-mqtt-component).