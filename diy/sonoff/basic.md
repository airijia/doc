# Sonoff Basic 模块焊接和刷固件

智能家居 网红模块 iTead 易微联 Sonoff Basic 改装模块的刷机方法

[免焊接刷 Basic](//player.bilibili.com/player.html?aid=50735241&cid=88826411&page=1 ':include :type=iframe width="720" height="530"')



## 常见错误

1. 没进入刷机模式
2. 虚焊
3. 焊点粘连
4. 接错线(比如RX TX接反)
5. TTL 跳线错误
6. 中途断线
7. 数据线有问题
8. USB口 供电不足
9. 操作系统残缺
10. 手抖

## 软硬件准备

Sonoff Basic 模块

TTL刷机线（CH340G）

刷机顶针

电烙铁，焊锡

带 usb 接口的电脑

## 相关产品

| ![](http://pic.airijia.com/doc/20181122162053.png ':size=200')| Sonoff Basic |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=551950726641) |
|:-:|:-:|:-:|
| ![](http://pic.airijia.com/doc/20181122161759.png ':size=200')| CH340G 刷机线 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=45528507062) |
| ![](http://pic.airijia.com/doc/20190423111153.png ':size=200')| 刷机顶针 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=592072988764) |
| ![](http://pic.airijia.com/doc/20181122162418.png ':size=200')| 杜邦线 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=45608073136) |



<!-- | ![](http://pic.airijia.com/doc/20181122162258.png ':size=200')| 2.54mm 排针 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=551916669247) | -->


## 新版 2018年12月后

新版跟旧版的最大的区别是没有 GPIO14，可以用 GPIO2 代替 GPIO14 原有的功能

1. 主芯片换成了 8285
2. 去除了 GPIO14 
3. 新增了 GPIO2
4. 背面可以引出 GPIO0

综上，使用基本功能没区别，但焊工好的同学多了个 IO 可用，理论上可以用 GPIO0+GPIO2 接 I²C 总线(待测)


!> 记得 RX 连 TTL的 TX，TX 连 TTL的 RX

![](http://pic.airijia.com/doc/20181218144215.png)



![](http://pic.airijia.com/doc/20181218144226.png)











## 旧版 2018年11月及以前





### 焊接

在如图位置焊接 4P 排针

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv98s4ndw1j30rs0fix4y.jpg)

背面可以看的清楚一点，如图所示的 4 个孔，从 **方型** 孔的数出来 4 个

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv99s6f1nyj315o0ndb2a.jpg)



### 连线

如果所示，针脚定义， 3V3就是那个**方孔**

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv99j8cdr8j30m80b9qhb.jpg)

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv98g4cpmfj30m80m87i5.jpg)

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv98fip4v9j30m80m8asf.jpg)

**注意**

> 图片演示的是R2版，旧版的 TX RX 的两个脚的定义相反

### 刷机

模块有两种工作模式

1. 直接插入 USB，是普通工作模式

2. 按住黑色按钮插入USB，为刷机模式




ESPHome 固件使用 [ESPHome 固件工具](diy/flasher)


渡鸦 HomeKit 直连固件使用 [渡鸦固件工具](raven/flasher)



### 黑色按钮断了怎么办？

黑色按钮的功能是连通/断开 GPIO0 和 GND，直接连线可以实现同样的功能


按钮针脚定义

![](http://pic.airijia.com/doc/20181213091422.png)


如图黄线连接，跟按下黑色按钮的功能一样


![](http://pic.airijia.com/doc/20181213092335.png)



### 无响应

原因有很多

比如各种接错线：

![](http://pic.airijia.com/doc/20181213110704.png)





### GPIO 14 连接传统墙壁开关


?> 需要配合 [ESPHome 固件](esphome/) 使用

通过 GPIO 14 连接墙开的方法， 可以实现 `WiFi` 和 `传统墙壁开关` 同时控制。


如图所示，需要用到这两个接口 `GPIO14` 和 `GND`

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxftesc3voj30rc0f21gx.jpg)


接墙壁开关的输入连 Basic 的GPIO14 ，输出连 GND

!> 注意！墙壁开关不要再跟任何交流电源有连接，不要接市电，不要接，不要接！！

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxfqzw9lnej308c08qjtc.jpg)



整体电路接法

![](http://pic.airijia.com/doc/20181125154712.png)


![](http://pic.airijia.com/doc/20181125154721.png)


连双控墙壁开关接法，两个双控间要连**三**根线，可以破根网线解决

![](http://pic.airijia.com/doc/20181125150723.png)


连两个单控开关，不用RF

![](http://pic.airijia.com/doc/20181125160337.png)

## 相关软件

加 QQ 群：303748038，获取软件和固件


关注 微信订阅号 获取更多教程

![](http://pic.airijia.com/doc/20190426125528.png)