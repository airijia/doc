# GPIO 开关


最常见的开关形式，将继电器连接到任意引脚便可使用




![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxcakqeq09j30mw03qt8o.jpg)

**airi:8123 和 Hass 中的显示**







```yaml
# 配置示例
switch:
  - platform: gpio
    pin: 25
    name: "Living Room Dehumidifier"
    restore_mode: ALWAYS_ON
```

## 配置参数

- **pin** (**必填**, [引脚](mqtt/guides/configuration-types#引脚)): 连接开关(比如继电器)的引脚
- **name** (**必填**, 字符串): 开关的名称
- **id** (*选填*, [ID](mqtt/guides/configuration-types#id)): 开关的 ID
- **restore_mode** (*选填*): 开关的初始状态，可选值有:
 - `RESTORE_DEFAULT_OFF` (默认) : 尝试恢复断电前的状态，如果不能恢复，则设置状态为关闭
 - `RESTORE_DEFAULT_ON` : 尝试恢复断电前的状态，如果不能恢复，则设置状态为开启
 - `ALWAYS_OFF` : 无视旧状态，直接设置状态为关闭
 - `ALWAYS_ON` : 无视旧状态，直接设置状态为开启
- 以及 [开关核心组件](mqtt/components/switch/) 和 [MQTT 组件](mqtt/components/mqtt#MQTT-组件基本配置项) 的基本配置项





?> TODO: 启动状态问题，待补充