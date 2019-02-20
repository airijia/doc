# OTA 组件

ESPHome 固件的核心组件之一，配置固件的隔空网刷(OTA，Over The Air)功能

ESPHome 固件默认开启 **OTA 安全模式**，节点初始化时，如果连续 10 次启动失败，将自动进入此模式。OTA 安全模式中，将禁用除了**日志+WIFI+OTA**以外的所有功能，这时可以正常的 OTA 更新固件

```
# 配置示例
ota:
  safe_mode: True
  password: VERYSECURE
```

## 配置参数

- **safe_mode** (*选填*, 布尔值): OTA 安全模式，默认为是 `True`
- **password** (*选填*, 字符串): OTA 的密码
- **port** (*选填*, 整数): OTA 的端口。ESP8266 的默认值为 `8266`，ESP32的默认值为 `3232`
- **id** (*选填*, [ID](esphome/guides/configuration-types#id)): 当前组件的 ID

