# WiFi Info Text Sensor

The `wifi_info` text sensor platform exposes different wifi information via text sensors.

```
# 配置示例
text_sensor:
  - platform: wifi_info
    ip_address:
      name: ESP IP Address
    ssid:
      name: ESP Connected SSID
    bssid:
      name: ESP Connected BSSID
```

## 配置参数:

- **ip_address** (*选填*): Expose the IP Address of the ESP as a text sensor. All options from [Text Sensor](https://esphome.io/components/text_sensor/index.html#config-text-sensor).
- **ssid** (*选填*): Expose the SSID of the currently connected WiFi network as a text sensor. All options from [Text Sensor](https://esphome.io/components/text_sensor/index.html#config-text-sensor).
- **bssid** (*选填*): Expose the BSSID of the currently connected WiFi network as a text sensor. All options from [Text Sensor](https://esphome.io/components/text_sensor/index.html#config-text-sensor).