# DHT 温湿度传感器

DHT 系列的传感器，同时支持温度和湿度的显示




![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwx2v91ahvj30mw05qjrj.jpg)

**airi:8123 和 Hass 中的显示**

?> TODO: 待补充

**HomeKit中的显示**

## 相关

| ![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwx2z19kicj30bh0bh415.jpg ':size=200')| DHT11<br> [说明书](http://www.aosong.com/userfiles/files/media/DHT11-V1_3%E8%AF%B4%E6%98%8E%E4%B9%A6%EF%BC%88%E8%AF%A6%E7%BB%86%E7%89%88%EF%BC%89.pdf) |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://shop107898810.taobao.com/search.htm?search=y&keyword=dht11) |
|:-:|:-:|:-:|
| ![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwx2yfkvy1j30bh0bhjt5.jpg ':size=200')| DHT22<br> [说明书](http://www.aosong.com/userfiles/files/media/AM2302%E8%AF%A6%E7%BB%86%E7%89%88%E8%AF%B4%E6%98%8E%E4%B9%A6-V1_2.pdf) |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://shop107898810.taobao.com/search.htm?search=y&keyword=dht22) |
| ![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwx30f1kmzj30xc0p07wh.jpg ':size=200')| AM2302<br> [说明书](http://www.aosong.com/userfiles/files/media/AM2302%E8%AF%A6%E7%BB%86%E7%89%88%E8%AF%B4%E6%98%8E%E4%B9%A6-V1_2.pdf) |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://shop107898810.taobao.com/search.htm?search=y&keyword=am2302) |
| ![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwx3cp2h9kj30m80m8jyr.jpg ':size=200')| DHT11<br>  适配 ESP01 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=551900769285) |
| ![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwx38z7ibuj30m80m8wqj.jpg ':size=200')| DHT11 <br>适配 d1 mini  |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=45607921354) |
| ![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwx3dui44aj30hs0hsafk.jpg ':size=200')| DHT22 <br>适配 d1 mini  |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=551859580509) |


## 网页创建固件




## 文件模板创建

?> TODO: 需整体完善

```yaml
# 配置示例
sensor:
  - platform: dht
    pin: D2
    temperature:
      name: "Living Room Temperature"
    humidity:
      name: "Living Room Humidity"
    update_interval: 15s
```

### 配置项

- **pin** (**必填**, [引脚](mqtt/guides/configuration-types#引脚)): DHT 信号连接的引脚
- **temperature** (**必填**): 温度信息
  - **name** (**必填**, 字符串): 温度传感器的名称
  - **id** (*选填*, [ID](mqtt/guides/configuration-types#id)): 用于逻辑识别的 ID
  - 以及 [传感器核心组件](mqtt/components/sensor/#基本配置) 和 [MQTT 组件](mqtt/components/mqtt#MQTT-组件基本配置项) 的基本配置项
- **humidity** (**必填**): 湿度度信息
  - **name** (**必填**, 字符串): 湿度传感器的名称
  - **id** (*选填*, [ID](mqtt/guides/configuration-types#id)): 用于逻辑识别的 ID
  - 以及 [传感器核心组件](mqtt/components/sensor/#基本配置) 和 [MQTT 组件](mqtt/components/mqtt#MQTT-组件基本配置项) 的基本配置项
- **model** (*选填*, 字符串): 指定使用的芯片组，可选值 `AUTO_DETECT`, `DHT11`, `DHT22`, `AM2302`, `RHT03` 默认值 `AUTO_DETECT`
- **update_interval** (*选填*, [时长](mqtt/guides/configuration-types#时长)): 读数间隔，默认 `15s` [读数间隔](mqtt/components/sensor/#读数间隔)



## 相关链接