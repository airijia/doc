# Sonoff Basic 模块焊接和刷固件

智能家居 网红模块 iTead 易微联 Sonoff Basic 改装模块的刷机方法

## 软硬件准备

Sonoff Basic 模块

TTL刷机线（CH340G）

2.54mm 间距排针 

电烙铁，焊锡

带 usb 接口的电脑

## 焊接

在如图位置焊接 4P 排针

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv98s4ndw1j30rs0fix4y.jpg)

背面可以看的清楚一点，如图所示的 4 个孔，从 **方型** 孔的数出来 4 个

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv99s6f1nyj315o0ndb2a.jpg)



## 连线

如果所示，针脚定义， 3V3就是那个**方孔**

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv99j8cdr8j30m80b9qhb.jpg)

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv98g4cpmfj30m80m87i5.jpg)

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv98fip4v9j30m80m8asf.jpg)

**注意**

> 图片演示的是R2版，旧版的 TX RX 的两个脚的定义相反

## 刷机

模块有两种工作模式

1. 直接插入 USB，是普通工作模式

2. 按住黑色按钮插入USB，为刷机模式

刷机方法见 [esptool.py 使用方法](/diy/esptool) 





## 进阶使用

### GPIO 14 连接传统墙壁开关


?> 需要配合 [MQTT 固件](mqtt/) 使用

通过 GPIO 14 连接墙开的方法， 可以实现 `WiFi` 和 `传统墙壁开关` 同时控制。


如图所示，需要用到这两个接口 `GPIO14` 和 `GND`

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxftesc3voj30rc0f21gx.jpg)


接墙壁开关的输入连 Basic 的GPIO14 ，输出连 GND

!> 注意！墙壁开关不要再跟任何交流电源有连接，不要接市电，不要接，不要接！！

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxfqzw9lnej308c08qjtc.jpg)



整体电路接法

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxftbsc2usj30m80ddtda.jpg)


![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxftd0tm01j30m80ddtdc.jpg)



连双控墙壁开关接法


![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgl42j1r5j30xc0k24b6.jpg)


加 QQ 群：303748038，获取相关软件

关注 微信订阅号 获取更多教程



![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv99qfit90j30by0byjsh.jpg)



