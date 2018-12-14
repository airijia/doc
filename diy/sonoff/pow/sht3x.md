# Sonoff Pow R2 搭配温湿度传感器控制电暖气

负基础智能家居DIY =


跟风买了一个电暖气，发现温控不是很准，于是动了改造一下的想法

手上有一个 SONOFF POW R2，虽然有功率计的功能，


说是负基础，但还是有点基础要求：

1. 有带 USB 接口的电脑 (WIN 和 MAC都可以）
2. 会用电脑，会使用键盘和鼠标
3. 一颗创新的心



## 硬件准备

| ![](http://pic.airijia.com/doc/20181209133708.png ':size=200')| sonoff pow r2 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=583765007252) |
|:-:|:-:|:-:|
| ![](http://pic.airijia.com/doc/20181209133708.png ':size=200')| HTU21D |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=583765007252) |
| ![](http://pic.airijia.com/doc/20181209133708.png ':size=200')| 10A 延长线 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=583765007252) |
| ![](http://pic.airijia.com/doc/20181209133708.png ':size=200')| 排针 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=583765007252) |
| ![](http://pic.airijia.com/doc/20181209133708.png ':size=200')| 杜邦线母对母 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=583765007252) |
| ![](http://pic.airijia.com/doc/20181209133708.png ':size=200')| 340G |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=583765007252) |


## 软件准备



## 编译固件



## 刷入固件

下载 MQTT 固件工具 ( [WIN](http://pic.airijia.com/download/win.zip)，[MAC](http://pic.airijia.com/download/mac.zip))
 
![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgto0jvc6j30pb0nizlv.jpg)





按住 `FLASH` 按钮 将 NodeMCU  插入电脑的 USB 接口

![](http://pic.airijia.com/doc/20181207125621.png)











打开 MQTT 固件工具，选择`串口`，如果列表为空，先点击`刷新`

?>  如果还没找到串口，需要安装 [驱动程序](diy/nodemcu/)

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgtwlzzh9j30o30bvjrp.jpg)

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgtxnl1agj30o60a20t4.jpg)


浏览文件并添加

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgtyujlmyj30oj0atq37.jpg)

添加了 D盘 Download 文件夹下的 666.bin

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgtzy4vl9j30o90ayzkk.jpg)



点击刷写

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgu36iiwkj30o708xjro.jpg)


控制台开始出现信息


![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgu4jloa0j30oe0f475f.jpg)

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgu4zif2rj30nx0ic76b.jpg)

刷写完成

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgu7vjt18j30o30irjtc.jpg)



## 连接











## 进阶使用









SHT3X


















## HTU21D





