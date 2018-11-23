# Dallas 系列温度传感器

典型的比如 DS18B20 温度传感器，一般用于防水型探头

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxfh9lvzfgj30mw03kaa0.jpg)

**airi:8123 和 Hass 中的显示**


## 相关产品

| ![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxfjorduhnj30k60k6qdh.jpg ':size=200')| DS18B20 适配 d1 mini <br> [说明书](https://datasheets.maximintegrated.com/en/ds/DS18B20.pdf) |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=45528063969) |
|:-:|:-:|:-:|




## 网页创建固件


![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxfhdqizhuj30pk0ftmxo.jpg)




## 文件模板创建



```
# 配置 dallas 总线
dallas:
  - pin: GPIO23

# 精确地址
sensor:
  - platform: dallas
    address: 0x1C0000031EDD2A28
    name: "Living Room Temperature"

# 索引
sensor:
  - platform: dallas
    index: 0
    name: "Living Room Temperature"
```

### 配置参数

- **address** (**必填**, 整数): 传感的精确地址，跟 `index` 参数二选一
- **index** (**必填**, 整数): 传感器的索引值，效率低，建议使用 `address`
- **resolution** (*选填*, 整数): 精确度，`8 ~ 12`，数字越大越精确，默认`12`
- **dallas_id** (*选填*, [ID](mqtt/guides/configuration-types#id)): ID，使用多个探头时用以区分
- **id** (*选填*, [ID](mqtt/guides/configuration-types#id)): 当前组件的 ID
- 以及 [传感器核心组件](mqtt/components/sensor/#基本配置) 和 [MQTT 组件](mqtt/components/mqtt#MQTT-组件基本配置项) 的基本配置项



### 获取传感器的 ID

建议使用 `address` 而不是 `index` 来配置，当一条 dallas 总线配置了多个传感器时，会导致错误


首先，如下配置制作固件，日志功能一定要开启，

```
# 配置示例
dallas:
  - pin: GPIO23

# 这一步不要添加任何 sensor
```

会看到类似这样的的日志

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxfiudiv1wj30uk0fa797.jpg)


然后，重新配置一次固件 


```
# 配置示例
dallas:
  - pin: GPIO23

sensor:
  - platform: dallas
    address: 0xA40000031F055028
    name: "Temperature #1"
  - platform: dallas
    address: 0xDD0000031EFB0428
    name: "Temperature #2"
  - platform: dallas
    # ...
```

这样，就可以快速精准的配置 dallas 传感器


## 相关链接

-  [传感器核心组件](mqtt/components/sensor/)