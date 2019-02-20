# 直流开关电源


定义直流开关电源 `power_supply` 组件，该组件可以被 [输出组件](esphome/components/output/) 调用。比如使用 ATX 电源给 LED 灯带供电时，可以由 ESP 芯片控制 ATX 电源的开关


```
# 配置示例
power_supply:
  - id: 'power_supply1'
    pin: 13
```

## 配置参数

- **id** (**必填**, [ID](esphome/guides/configuration-types#id)): 电源的 ID
- **pin** (**必填**, [引脚](esphome/guides/configuration-types#引脚)): 电源开关连接的引脚
- **enable_time** (*选填*, [时长](esphome/guides/configuration-types#时长)): 电源启动的延时，输出组件将在这个延时后再启动输出。默认值 `20ms`
- **keep_on_time** (*选填*, [时长](esphome/guides/configuration-types#时长)): 电源启动的延时，输出组件先关闭输出，然后在延时结束后再关闭电源。默认值 `10s`

!> 配合 [输出组件](esphome/components/output/) 使用



## ATX 电源 

即普通台式电脑使用的电源

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxdc9ex5jjj318i0s37wh.jpg)


通常引脚定义，ESP 连接 3 根线， 紫色供电，黑色接地，绿色开关

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxdccefrzqj30qt0q7ti5.jpg)


ATX 电源通常拉低时为开启，需要翻转引脚

```
power_supply:
  - id: 'atx_power_supply'
    pin:
      number: 13
      inverted: true
```



?> 为了保护主板，使用 ATX 电源时，要在绿线(PS-ON)上串一个电阻(1kΩ 左右)


## 相关链接

- [Output 组件](esphome/components/output/)



- [直流开关电源](https://baike.baidu.com/item/%E7%9B%B4%E6%B5%81%E5%BC%80%E5%85%B3%E7%94%B5%E6%BA%90)
- [ATX电源](https://baike.baidu.com/item/ATX%E7%94%B5%E6%BA%90)


