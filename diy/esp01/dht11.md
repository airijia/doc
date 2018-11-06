# 创客套件 - HomeKit 直连温湿度计 

这是一款可以直连 HomeKit 的温湿度计，可以直接用 siri 查询温度和湿度

## 硬件准备

ESP01S 模块

DHT11 底座

TTL 刷机线

杜邦串联底座

杜邦线 > 10根

**↑ 以上为创客套件内容**

## 软件

ESP刷机工具

渡鸦（esp01s-dht11）或  [MQTT](/mqtt/) 固件


## 接线



![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv5bx6iuefj30m80m8n3p.jpg)

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv5bwq8j4vj30m80m8tim.jpg)

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv5bwad3h6j30m80m848x.jpg)

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv5bw1bjoxj30m80m8guh.jpg)

## 刷固件



方法见 [esptool.py 使用方法](/diy/esptool) 



## 接入 WiFi

**注意！模块体质不一样，如果 3V3 供电不正常，换用5V **

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv5bvizmdkj30m80m84cm.jpg)

将 ESP01S 插入 DHT11 底座，按如图所示接线



配对方法见 [渡鸦固件加入 wifi 和 homekit 配对方法](/diy/raven) 



至此，接入成功

模块需要预热，大约10分钟之后读值会比较准确

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv5bnmlz6ij30m80m81ag.jpg)

## 校准值设置

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











