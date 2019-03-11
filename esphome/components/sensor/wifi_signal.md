# WiFi 信号强度

显示当前连入的 WiFi 无线网络的信号强度，数值越接近零，信号越强

![](http://pic.airijia.com/doc/20190116152044.png)

```yaml
# 配置示例
sensor:
  - platform: wifi_signal
    name: "WiFi Signal Sensor"
    update_interval: 60s
```

## 配置参数

- **name** (**必填**, 字符串): 此组件的名称
- **update_interval** (*选填*, [时长](esphome/guides/configuration-types#时长)): 读值间隔，默认为`60s`
- **id** (*选填*, [ID](esphome/guides/configuration-types#id)): 此组件的 ID
- 以及 [传感器核心组件](esphome/components/sensor/#基本配置) 和 [MQTT 组件基本配置](esphome/components/mqtt#MQTT-组件基本配置项)
