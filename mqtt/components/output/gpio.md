# GPIO 输出

将 GPIO 引脚作为输出组件使用

!> 这是个输出组件，在智能中枢中`不显示不可控`。在智能中枢显示并可以控制的是 [GPIO 开关](mqtt/components/switch/gpio) 组件


```yaml
# 配置示例
output:
  - platform: gpio
    pin: D1
    id: gpio_d1
```

### 配置项

- **pin** (**Required**,  [引脚](mqtt/guides/configuration-types#引脚)): 使用的引脚
- **id** (**Required**, [ID](mqtt/guides/configuration-types#id)): 此组件的 ID
- 以及 [输出核心组件](mqtt/components/output/) 的配置项