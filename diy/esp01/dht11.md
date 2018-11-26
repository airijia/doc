# 创客温湿度套件 - HomeKit 温湿度计 

这是一款可以连 HomeKit 的温湿度计，可以用 siri 查询温度和湿度

## 硬件准备

ESP01S 模块

DHT11 底座

TTL 刷机线

杜邦串联底座

杜邦线 > 10根

↑ 以上为**创客温湿度套件**内容

## 相关产品

| ![](http://pic.airijia.com/doc/20181122164201.png ':size=200')| 创客温湿度套件 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=577014079869) |  
|:-:|:-:|:-:|
| ![](http://pic.airijia.com/doc/20181122164130.png ':size=200')| ESP01 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=45607865463  ) |
| ![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwx3cp2h9kj30m80m8jyr.jpg ':size=200')| DHT11<br> 适配 ESP01 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=551900769285) |
| ![](http://pic.airijia.com/doc/20181122161759.png ':size=200')| CH340G 刷机线 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=45528507062) |
| ![](http://pic.airijia.com/doc/20181122164315.png ':size=200')| 杜邦串联底座 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=45607601999) |
| ![](http://pic.airijia.com/doc/20181122162418.png ':size=200')| 杜邦线 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=45608073136) |





## 接线



![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv5bx6iuefj30m80m8n3p.jpg)

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv5bwq8j4vj30m80m8tim.jpg)

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv5bwad3h6j30m80m848x.jpg)

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv5bw1bjoxj30m80m8guh.jpg)




## MQTT 固件使用

**MQTT 固件可以用**


- [MQTT 固件工具](diy/flasher)


- [esptool.py 的安装与使用](diy/esptool)
- [esptool.py(MAC)的安装与使用](diy/esptool_mac)



刷完固件后无需配置，适配中枢，插电即用


 - 爱睿家智能中枢（airijia/ctl）

    免配置，自动发现

 - Hass (Home Assistant)

   在配置文件（通常为 configuration.yaml）MQTT 的尾部增加如下内容

```yaml
mqtt:
  # ... 其他 MQTT 配置
  discovery: true
  discovery_prefix: airi
```


## 渡鸦(Homekit 直连)固件使用


**渡鸦(Homekit 直连)固件可以用**

- [esptool.py 的安装与使用](diy/esptool)
- [esptool.py(MAC)的安装与使用](diy/esptool_mac)


刷完固件后需要配置 WiFi 和接入 Homekit


### 接入 WiFi

**注意！模块体质不一样，如果 3V3 供电不正常，换用5V **

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv5bvizmdkj30m80m84cm.jpg)

将 ESP01S 插入 DHT11 底座，按如图所示接线



配对方法见 [渡鸦固件加入 wifi 和 homekit 配对方法](diy/raven) 



至此，接入成功

模块需要预热，大约10分钟之后读值会比较准确

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv5bnmlz6ij30m80m81ag.jpg)

### 校准值设置

因为模块自身有发热，而且距离温湿度传感器很近，会造成一定的误差。

固件默认根据 3V3 的输入电压 和 ESP01S直接插在底座上的的运行环境， 设置了默认的校准值，如果你的模块工作环境和电压不同，可以自行调整

**App Store 搜索安装 eve system** 

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fww0oq555hj30y20oohdt.jpg)

打开eve

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv5bqockf7j31350sfwqz.jpg)

选择 类型 

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv5bqg5zr5j31300siacm.jpg)

编辑

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv5bq7yh8ij314n0tsq8g.jpg)

将 校准选项 设置为显示

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv5bptcz8pj313a0s9aen.jpg)

点击完成

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv5bpli7xej313b0sbn0j.jpg)

修改温度校准值



## 锂电池供电

支持3.7v锂电池供电，效果如图

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv5bn2sw5jj30m80esdsf.jpg)



加 QQ 群：38049942，获取相关资料

关注 微信订阅号 获取更多咨询

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv5c0h9du9j30by0bymxy.jpg)











