# 节日装饰彩灯串


节日用的装饰彩灯串，可语音(siri)控制，可远程手机控制，比如人在楼下，控制阳台的彩灯串开关和变色


[渡鸦固件特效](//player.bilibili.com/player.html?aid=39542860&cid=69474609&page=1 ':include :type=iframe width="720" height="1280"')

渡鸦固件特效



## 硬件准备

| ![](http://pic.airijia.com/doc/20181209133708.png ':size=200')| DIY 装饰彩灯套餐 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=583765007252) |
|:-:|:-:|:-:|
| ![](http://pic.airijia.com/doc/20181205171519.png ':size=200')| NodeMCU  |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=45559178968) |
| ![](http://pic.airijia.com/doc/20181207141945.png ':size=200')| 彩灯串 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=45559318689) |
| ![](http://pic.airijia.com/doc/20181207143052.png ':size=200')| 3A 数据线 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=551847261565) |
| ![](http://pic.airijia.com/doc/20181207143538.png ':size=200')| 3P 转接头 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=554416181732) |


**以下需自备**

- 带 USB 接口电脑，操作系统 **WIN7** 以上 或者 **MAC**)
- USB电源，或者**充电宝**(推荐)



## 彩灯串连线方法

!> 先拔掉 USB 供电再连接彩灯串，一定不要接反！不要接反！不要接反！**接反直接炸灯**





### 绝缘处理 彩灯串 两端的开放线


有三处，分别是入端供电、出端供电和出端插头，都需要绝缘，最简单的办法是用绝缘胶带分隔开并缠紧


**入端供电**


将入端供电做绝缘处理

![](http://pic.airijia.com/doc/20181210170521.png)






**出端供电**

将出端供电做绝缘处理，跟入端一样的处理方法


![](http://pic.airijia.com/doc/20181210170709.png)



**出端插头**

这里要胶带缠上防止有误触碰即可

![](http://pic.airijia.com/doc/20181210171534.png)


成品，三个头做了绝缘处理，只保留入端接头，如下图



![](http://pic.airijia.com/doc/20181210172131.png)


### 将 转接线 和 彩灯串 连接

注意彩灯串上有黑色条纹的那根线是 **GND**, 对应转接线的 **黑色线**


![](http://pic.airijia.com/doc/20181210170333.png)


如图连接，不要太暴力，正常不会插反

![](http://pic.airijia.com/doc/20181211100317.png)




### 将 NodeMCU 和 转接线 连接

!> 刷好固件之后再进行 NodeMCU 相关的连线




需要连3根线，**红线**接 `VU`，**黑线**接 `GND(G)`，**蓝线**默认接在 `D5`(MQTT固件)



![](http://pic.airijia.com/doc/20181231152055.png)




!> 渡鸦固件的**蓝线**接 `D9(RX)`，也就是 `GPIO3`

![](http://pic.airijia.com/doc/20181211093751.png) 
![](http://pic.airijia.com/doc/20181211101245.png)





### 将 NodeMCU 与 USB线 连接



!> USB 线至少 2A，推荐 3A，用不合格线的轻则颜色失真，重则 **冒烟!!!** 、 **火灾!!!**

将 USB 线的扁口端与 NodeMCU 连接

![](http://pic.airijia.com/doc/20181211101608.png)




### 将 USB线 与 充电宝 连接


将 USB 线的大口端与 充电宝 (**最好支持快充**) 连接


![](http://pic.airijia.com/doc/20181211101844.png)



连线全部完成的效果


![](http://pic.airijia.com/doc/20181211103106.png)



开灯


![](http://pic.airijia.com/doc/20181211103548.png)


彩虹效果

![](http://pic.airijia.com/doc/20181211103717.png)





## 刷渡鸦固件(HomeKit 直连)

无需中枢直连 苹果 HomeKit，适合入门体验


### 下载固件

打开 [在线编译固件](http://airijia.com/ctl/firmware/list)，点击 **新建固件**


![](http://pic.airijia.com/doc/20181231125754.png)


如图依次选择 **渡鸦 HomeKit 直连** - **NodeMCU** - **NodeMCU WS2812**

![](http://pic.airijia.com/doc/20181231153320.png)


刷入主机名，比如 `666`

![](http://pic.airijia.com/doc/20181231153411.png)

输入 WiFi 名称和密码

![](http://pic.airijia.com/doc/20181231153429.png)


输入在 HomeKit 中的名称和 LED 灯珠的数量  (灯珠数量默认50)

![](http://pic.airijia.com/doc/20181231153737.png)






确认无误后点击提交

![](http://pic.airijia.com/doc/20181231153929.png)



一般需要等待 1 分钟左右，如果页面没变化，按 F5 刷新浏览器



![](http://pic.airijia.com/doc/20181224150054.png)


显示**已完成**，表示已经编译成功，点击下载固件文件


### 刷入固件


下载文件后，解压出 **666.bin** 文件，刷入工具使用 **渡鸦固件工具**


- [下载渡鸦固件 Windows 版](http://pic.airijia.com/download/raven-win.zip)
- [下载渡鸦固件 MAC OS 版](http://pic.airijia.com/download/raven-mac.zip)


按住 `FLASH` 按钮 将 NodeMCU  插入电脑的 USB 接口

![](http://pic.airijia.com/doc/20181207125621.png)




选择串口

![](http://pic.airijia.com/doc/20181231133457.png)



如果列表为空，先点击 **刷新**

![](http://pic.airijia.com/doc/20181231133313.png)




选择了 `COM8`


![](http://pic.airijia.com/doc/20181231133159.png)




!> 如果还没找到串口，需要 [安装 NodeMCU 驱动](diy/nodemcu/)



浏览文件并添加固件

![](http://pic.airijia.com/doc/20181231133747.png)


![](http://pic.airijia.com/doc/20181231133725.png)











添加了 D盘 Download 文件夹下的 `666.bin` 文件


![](http://pic.airijia.com/doc/20181231133957.png)




模式选择 `DIO`


![](http://pic.airijia.com/doc/20181231133827.png)





点击刷写

![](http://pic.airijia.com/doc/20181231134238.png)

控制台开始出现信息

![](http://pic.airijia.com/doc/20181231134255.png)


![](http://pic.airijia.com/doc/20181231134317.png)


刷写完成

![](http://pic.airijia.com/doc/20181231134356.png)











### 调试固件

运行模式插入 NodeMCU，插入的时候什么都不按就是运行模式

选择 **串口** 后点击 **调试** (不需要选择固件)，如图显示便连接成功了


![](http://pic.airijia.com/doc/20181231134847.png)


显示 **Could not initialize SHT3x sensor** 是传感器连接失败，通常是接线错误


![](http://pic.airijia.com/doc/20181231134517.png)



### 接入 HomeKit



打开 **家庭** APP

![](http://pic.airijia.com/doc/20190703101323.png)

依次选择 **添加配件 - 没有代码或无法扫描**

![](http://pic.airijia.com/doc/20190703101332.png)


![](http://pic.airijia.com/doc/20190703101342.png)

正常这里会看到跟刚才接入同样的主机名的配件，如果看不到，要多等一会儿

![](http://pic.airijia.com/doc/20190703101401.png)

输入下载固件时设置的配对编码，默认为 `38049942`

![](http://pic.airijia.com/doc/20190703101430.png)

等待 30 ~ 60 秒之后，显示配件已添加

![](http://pic.airijia.com/doc/20190703101447.png)



### 特效控制


![](http://pic.airijia.com/doc/20181231173230.png)


特效的速度控制，亮度 = 速度，其中51~100%为正向，1%~50为反向，0%为关闭特效。默认为51%，即正向速度1


![](http://pic.airijia.com/doc/20181231173251.png)


切换特效，色盘上不同的位置对应不同的特效


![](http://pic.airijia.com/doc/20181231173447.png)


## 刷 ESPHome 固件 (连 Hass 等中枢)


基于 MQTT 通信协议，零配置即可被智能中枢（airijia/ctl 或 Hass）自动发现，支持 OTA（Over The Air）网刷

### 中枢配置

#### 爱睿家智能中枢（airijia/ctl）

?> 免配置，自动发现，默认的用户名和密码为空，编译固件的时候都不用填


#### Hass 内置

使用 Hass 内置的 [HBMQTT](https://www.home-assistant.io/docs/mqtt/broker#embedded-broker)

在配置文件（通常为 configuration.yaml）增加如下内容

```yaml
# HBMQTT
mqtt:
  password: 123
  discovery: true
  discovery_prefix: airi
```
如上设置，编译固件时需要填入的 MQTT 用户名为 `homeassistant` (默认值)，密码为 `123`


#### Hass 外接

以外接 Mosquitto 为例

在配置文件（通常为 configuration.yaml）增加如下内容

```yaml
# Mosquitto
mqtt:
  broker: 127.0.0.1 # Mosquitto 服务器IP
  # ... 其他 MQTT 配置
  discovery: true
  discovery_prefix: airi
```

如上设置，编译固件时需要填入的 MQTT 用户名和密码由 Mosquitto 配置决定，默认都为空



### 下载固件




打开 [在线编译固件](http://airijia.com/ctl/firmware/list)，如图选择

![](http://pic.airijia.com/doc/20181207151458.png)


![](http://pic.airijia.com/doc/20181207151619.png)


主机名随便填，比如 `666`


![](http://pic.airijia.com/doc/20181207152251.png)



填入 WiFi 信息。默认情况下，MQTT 服务器填入智能中枢的 IP 即可，例如 `192.168.1.201`，端口保持默认 `1883`

?> 不确定 MQTT 信息先看 [MQTT配置](#MQTT配置)


![](http://pic.airijia.com/doc/20181207152322.png)



彩灯设置的三项保持默认值即可，数据端口 `D5`，灯珠数 `50`，RGB 序列 `RGB`

![](http://pic.airijia.com/doc/20181208111146.png)




核对信息后提交


![](http://pic.airijia.com/doc/20181208111322.png)



等待编译

![](http://pic.airijia.com/doc/20181207152220.png)


编译完成，下载文件到本地


![](http://pic.airijia.com/doc/20181207152414.png)


解压缩提取 `666.bin` 文件

![](http://pic.airijia.com/doc/20181207152523.png)

### 刷入固件

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








### airi 中枢设置


airi 可以直接自动发现，不用配置。直接浏览器打开 `192.168.1.201:8233`

![](http://pic.airijia.com/doc/20181207100541.png)

点击编辑

![](http://pic.airijia.com/doc/20181207102553.png)



![](http://pic.airijia.com/doc/20181207102637.png)


全部修改完后提交**重启


![](http://pic.airijia.com/doc/20181207102721.png)









### 添加到 Apple HomeKit

浏览器打开 `192.168.1.201:8233`，查看首页左上角的一串**随机生成**数字

![](http://pic.airijia.com/doc/20181207104512.png)

打开 **家庭** APP

![](http://pic.airijia.com/doc/20181207105513.png)



依次选择 **添加配件 - 没有代码或无法扫描**

![](http://pic.airijia.com/doc/20181207105902.png)


![](http://pic.airijia.com/doc/20181207105927.png)



![](http://pic.airijia.com/doc/20181207105944.png)

![](http://pic.airijia.com/doc/20181207110100.png)

输入刚才记下的那一串**随机生成**数字


![](http://pic.airijia.com/doc/20181207110115.png)



添加成功

![](http://pic.airijia.com/doc/20181207110402.png)


![](http://pic.airijia.com/doc/20181207110427.png)


![](http://pic.airijia.com/doc/20181207110452.png)


### HomeKit 控制

点击开灯

![](http://pic.airijia.com/doc/20181207110542.png)


长按弹出详细设置窗口

![](http://pic.airijia.com/doc/20181207110631.png)

调整亮度

![](http://pic.airijia.com/doc/20181207110705.png)

调整颜色

![](http://pic.airijia.com/doc/20181207110745.png)

![](http://pic.airijia.com/doc/20181207110805.png)


切换特效

![](http://pic.airijia.com/doc/20181207110848.png)

### 安卓或者网页控制

浏览器打开 `192.168.1.201:8123`


**灯光** 条目下可以控制灯串的开关

![](http://pic.airijia.com/doc/20181207095050.png)

点击弹出的浮动窗可以控制 **亮度**，**颜色** 和 **特效**

![](http://pic.airijia.com/doc/20181207095310.png)



**开关** 条目下可以切换灯串的特效


![](http://pic.airijia.com/doc/20181207095118.png)


### 特效的说明


|英文名   | 中文名   | 简介  |
|:-:|:-:|:-:|
| color_wipe | 跑马灯 | 随机生成的颜色组成队列，步进并替换掉当前的显示 |
| fireworks | 焰火  | 类似焰火样式的多彩效果  |
| flicker | 同步闪烁  | 整体在当前的颜色和亮度值附近徘徊  |
| flicker_fastled | 异步闪烁  | 各个点分别当前颜色和亮度值附近徘徊  |
| rainbow | 彩虹  | 类似彩虹的多彩效果 |
| random |  随机色 | 整体变换为不同的颜色  |
| scan |  流光 | 单点、快速的做往复运动 |
| twinkle |  闪亮 |  随机的单点渐亮渐灭 |
| twinkle_random | 随机色闪亮 |  随机单点、随机颜色的渐亮渐灭 |
| z!!_strobe |  爆闪 |  **最高亮度**爆闪！！！除非有特殊需求，否则不建议使用 |




## 其他板的接线

cp2102 接 vin

![](http://pic.airijia.com/doc/20181207145200.png)


