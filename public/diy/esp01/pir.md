# 人体红外传感器


HC-SR501 是一款比较常见的无源红外感应模块(Passive Infrared Sensors, PIR)，一般用于人体感应


![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx1t63kzmnj30by0amjv6.jpg)


![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx1t7shbkjj30po0hz4hb.jpg)




## 成品效果


![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx1uwwyz3fj30rw03ojrb.jpg)

**airi:8123 和 Hass 中的显示**

[WS2812 开发灯环](//player.bilibili.com/player.html?aid=35602736&cid=62434203&page=1 ':include :type=iframe width="720" height="1280"')

**在 Homekit 中的显示**


## 相关产品

| ![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx1t63kzmnj30by0amjv6.jpg ':size=200')|  HC-SR501 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=579062519836) |
|:-:|:-:|:-:|
| ![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx1usp2qf7j30gg0ggafd.jpg ':size=200') | ESP01S |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=45607865463) |
| ![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx1uzgvgt5j30ku0f9wjc.jpg ':size=200') | CH340G <br> 3v3 5v 双供电 | [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=45528507062) |


## 接线 

参考 [dht11](diy/esp01/dht11 ':target=_blank') ，大同小异，把 HC-SR501 输出接到 esp01的 GPIO02上


## 固件




### 网页创建

 打开 [在线编译固件](http://airijia.com/ctl/firmware/list)


![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx1vvqv2s1j30n00bzjs1.jpg)







### 文件模板创建


逻辑层面按照二进制传感器处理

```yaml
binary_sensor:
  - platform: gpio
    pin: 2
    name: "PIR Sensor"
    device_class: motion
```


## 三根线的接法

理论上可以 3.3V 供电，而且还有 3 跟线的接法，但不如 5V 稳定

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx1tirm0axj30qr0np1kc.jpg)


只接这三根线，可以配合只有 3v3 输出的模块使用
