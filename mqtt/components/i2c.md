# I²C 总线

## 文件模板创建

```
# 配置示例
i2c:
  sda: 21
  scl: 22
  scan: False
```


### 配置项

TODO: ESP01 D1 MINI 数据


- **sda** (*选填*, [引脚](mqtt/guides/configuration-types#引脚)): 数据传输引脚。ESP8266 通常为 GPIO4，ESP32通常为GPIO21
- **scl** (*选填*, [引脚](mqtt/guides/configuration-types#引脚)): 时钟序列引脚。ESP8266 通常为 GPIO5，ESP32通常为GPIO22T
- **scan** (*选填*, 布尔值): 节点启动时是否扫描 I²C 的地址空间。默认为否 `False`，开启这个功能会严重拖慢启动速度，建议只有在调试未知地址的模块时候使用此功能
- **frequency** (*选填*, 浮点数): 设置 I²C 总线的工作频率，默认为 `“100kHz”`


