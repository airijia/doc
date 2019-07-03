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

下载 ESPHome 固件工具 ( [WIN](http://pic.airijia.com/download/win.zip)，[MAC](http://pic.airijia.com/download/mac.zip))
 
![](http://pic.airijia.com/doc/20190703101802.png)





按住 `FLASH` 按钮 将 NodeMCU  插入电脑的 USB 接口

![](http://pic.airijia.com/doc/20181207125621.png)











打开 ESPHome 固件工具，选择`串口`，如果列表为空，先点击`刷新`

?>  如果还没找到串口，需要安装 [驱动程序](diy/nodemcu/)

![](http://pic.airijia.com/doc/20190703101509.png)

![](http://pic.airijia.com/doc/20190703101527.png)


浏览文件并添加

![](http://pic.airijia.com/doc/20190703101542.png)

添加了 D盘 Download 文件夹下的 666.bin

![](http://pic.airijia.com/doc/20190703101557.png)



点击刷写

![](http://pic.airijia.com/doc/20190703101615.png)


控制台开始出现信息


![](http://pic.airijia.com/doc/20190703101637.png)

![](http://pic.airijia.com/doc/20190703101705.png)

刷写完成

![](http://pic.airijia.com/doc/20190703101726.png)



## 连接











## 进阶使用









SHT3X


















## HTU21D





