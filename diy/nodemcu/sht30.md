# NodeMCU + SHT30 温湿度

负基础智能家居DIY 


说是负基础，但还是有点基础要求：

1. 有带 USB 接口的电脑 (WIN 和 MAC都可以）
2. 会用电脑，会使用键盘和鼠标
3. 一颗创新的心



## 硬件准备

| ![](http://pic.airijia.com/doc/20181231110322.png ':size=200')| 创客温湿度套件(SHT30) |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=577014079869) | 
|:-:|:-:|:-:|
| ![](http://pic.airijia.com/doc/20181205171519.png ':size=200')| NodeMCU CP2102  |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=585975819567) |
| ![](http://pic.airijia.com/doc/20181231110437.png ':size=200')| SHT30 传感器 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=585205682947) |
| ![](http://pic.airijia.com/doc/20181122162418.png ':size=200')| 杜邦线 母对母 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=45608073136) |


**以下需自备**

- 带 USB 接口电脑，操作系统 **WIN 7** 及以上或 **MAC OS**)
- Micro USB 数据线 (安卓扁口)


## 组装硬件

NodeMCU 和 SHT30 的针脚是已经焊好的，如图连线即可

![](http://pic.airijia.com/doc/20181231122750.png)


![](http://pic.airijia.com/doc/20181231125532.png)


## 刷渡鸦固件(HomeKit 直连)

无需中枢直连 苹果 HomeKit，适合入门体验


### 下载固件

打开 [在线编译固件](http://airijia.com/ctl/firmware/list)，点击 **新建固件**


![](http://pic.airijia.com/doc/20181231125754.png)


如图依次选择 **渡鸦 HomeKit 直连** - **NodeMCU** - **NodeMCU SHT30**

![](http://pic.airijia.com/doc/20181231125849.png)

刷入主机名，比如 `666`

![](http://pic.airijia.com/doc/20181231131903.png)

输入 WiFi 名称和密码

![](http://pic.airijia.com/doc/20181231131943.png)

温湿度的显示名称

![](http://pic.airijia.com/doc/20181231132007.png)


确认无误后点击提交

![](http://pic.airijia.com/doc/20181231132210.png)


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

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv5btipro1j31710wdx6p.jpg)

依次选择 **添加配件 - 没有代码或无法扫描**

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv5bt5et03j317p0tre81.jpg)

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv5bsxvarnj31240q11kx.jpg)

正常这里会看到跟刚才接入 AP 同样名称的配件，如果看不到，要多等一会儿

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv5bskjgp7j317y0nfqn0.jpg)

输入下载固件时设置的配对编码，默认为 `38049942`

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv5bsakzffj30v90eutfl.jpg)

等待 30 ~ 60 秒之后，显示配件已添加

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv5brk7sacj317m0tp1kx.jpg)











## 刷 MQTT 固件 (连 Hass 等中枢)

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


打开 [在线编译固件](http://airijia.com/ctl/firmware/list)，点击 **新建固件**


![](http://pic.airijia.com/doc/20181231125754.png)


如图依次选择 **NodeMCU ESP8266 - 温湿度 - SHT30**

![](http://pic.airijia.com/doc/20181231135612.png)



主机名随便填，比如 `666`

![](http://pic.airijia.com/doc/20181231140449.png)



填入 WiFi 信息。默认情况下，MQTT 服务器填入智能中枢的 IP 即可，例如 `192.168.1.201`，端口保持默认 `1883`

?> 其他信息根据 [中枢配置](#中枢配置) 填写


![](http://pic.airijia.com/doc/20181231140758.png)

**SDA引脚** 填入 `D2`，**SCL引脚** 填入 `D1`


![](http://pic.airijia.com/doc/20181231141300.png)


**I2C 地址** 填入 `0x44`

![](http://pic.airijia.com/doc/20181231141925.png)

核对信息后提交

![](http://pic.airijia.com/doc/20181231141952.png)

等待编译

![](http://pic.airijia.com/doc/20181207152220.png)


编译完成，下载文件到本地


![](http://pic.airijia.com/doc/20181207152414.png)



### 刷入固件



下载文件后，解压出 **666.bin** 文件，刷入工具使用 **MQTT固件工具**


- [下载 MQTT 固件 Windows 版](http://pic.airijia.com/download/win.zip)
- [下载 MQTT 固件 MAC OS 版](http://pic.airijia.com/download/mac.zip)




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


## 进阶使用

**上传模板文件** 的方式创建固件

?> 基本五大件的配置查看 [模板文件创建 MQTT 固件](mqtt/guides/yaml)

需要用到 [I²C 总线](mqtt/components/i2c) 和 [SHT3X-D 温湿度传感器](mqtt/components/sensor/sht3xd) 两个组件


```yaml
# ... 基本五大件略过

# I²C
i2c:
  sda: D4
  scl: D5
  scan: False

# SHT30
sensor:
  - platform: sht3xd
    temperature:
      name: "Living Room Temperature"
    humidity:
      name: "Living Room Humidity"
    address: 0x44
    update_interval: 15s
```

