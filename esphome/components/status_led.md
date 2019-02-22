# 状态灯

通过控制 led 的闪烁来显示组件当前的状态

- 慢闪(大约每秒 1 次)，表示**警告**，通常为网络连接失败、无法连接到传感器等影响继续启动的状况
- 快闪(每秒数次)，表示**错误**，通常为不影响运行的错误，会尝试自动修复并继续
- 保持关闭，表示无异常状态

```yaml
# 配置示例
status_led:
  pin: GPIO2
```

## 配置参数

- **pin** (**必填**, [引脚](esphome/guides/configuration-types#引脚)): 连接 LED 的引脚
- **id** (*选填*, [ID](esphome/guides/configuration-types#id)): 组件 ID


如果 LED 为低电平有效(active-LOW)，则需要反转引脚

```yaml
status_led:
  pin:
    number: D0
    inverted: True
```