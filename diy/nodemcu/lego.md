# 自制 OLED 显示温湿度计



积木式 OLED 显示温度计



A3套餐成品效果图

![](http://pic.airijia.com/doc/20190109170515.png)



A2套餐组合进乐高的效果

![](http://pic.airijia.com/doc/20190113123535.png)

## 硬件准备


| ![](http://pic.airijia.com/doc/20190112174252.png ':size=200')| 整套购买(A2或A3套餐) |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=577014079869) | 
|:-:|:-:|:-:|
| ![](http://pic.airijia.com/doc/20190113113732.png ':size=200')| 0.96寸 OLED 屏幕+积木面板  |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=585830522424) |
| ![](http://pic.airijia.com/doc/20181205171519.png ':size=200')| NodeMCU CP2102 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=585975819567) |
| ![](http://pic.airijia.com/doc/20181231110437.png ':size=200')| SHT30 传感器 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=585205682947) |
| ![](http://pic.airijia.com/doc/20181122162418.png ':size=200')| 杜邦线 母对母 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=45608073136) |





**以下需自备**

- Micro USB 数据线 (安卓扁口)
- 带 USB 接口电脑，操作系统 **WIN 7 及以上** 或 **MAC OS**
- 绝缘胶带


## 组装硬件

制作 1分2 杜邦线，组合外壳，并将各元件连接起来


### 制作Y型线

取四种颜色，各两根母对母杜邦线，为了方便对号入座，本例中使用红黑蓝绿这四种颜色

![](http://pic.airijia.com/doc/20190113151101.png)




取两根红线，如图切割

![](http://pic.airijia.com/doc/20190113150436.png)



?>因为壳子内空间有限，除了预留给SHT30那四段，其他保持 5cm 左右即可



三个端口剥皮 


![](http://pic.airijia.com/doc/20190113151811.png)



将铜丝拧到一起去

![](http://pic.airijia.com/doc/20190113152016.png)





用绝缘胶带缠好，其他三种颜色也是同样的处理顺序

![](http://pic.airijia.com/doc/20190113152137.png)







### 连线

<!-- 显示屏引脚图

VCC GND SCL SDA


SHT30引脚图


scl sda gnd vcc -->




<!-- SCL - D1 蓝
SDA - D2 绿
VCC - 3V3
GND - GND -->



如图将各组件连接

![](http://pic.airijia.com/doc/20190112174633.png)


连接后的效果

![](http://pic.airijia.com/doc/20190113152437.png)




### 组装外壳


将 SSD1306 显示屏放入面板，用绝缘胶带辅助定位 (橡皮泥或者黏土更佳)


![](http://pic.airijia.com/doc/20190113152918.png)







将一块 1x6x5 墙板放到底板 (4x8) 上

![](http://pic.airijia.com/doc/20190113153057.png)



显示屏面板 叠加一块 1x4x1 后，放到底板上


![](http://pic.airijia.com/doc/20190113153138.png)


![](http://pic.airijia.com/doc/20190113153508.png)



将 NodeMCU 接上 USB 线并倾斜放入 墙板


![](http://pic.airijia.com/doc/20190113153319.png)


放入另一块 1x6x5 墙板，固定住 NodeMCU


![](http://pic.airijia.com/doc/20190113153415.png)


USB 线两端放入两个 1x1

![](http://pic.airijia.com/doc/20190113153646.png)





加两层 1x4

![](http://pic.airijia.com/doc/20190113153804.png)

两端放入两个 1x1， 中间放入 1x2 平行线


![](http://pic.airijia.com/doc/20190113154024.png)



整理线材，将 SHT30 从中间探出


![](http://pic.airijia.com/doc/20190113154047.png)



加一层 1x4

![](http://pic.airijia.com/doc/20190113154137.png)




再加一层 1x4

![](http://pic.airijia.com/doc/20190113154320.png)




加 顶板 4x6 

![](http://pic.airijia.com/doc/20190113154347.png)


加 4个 1x2 平行线


![](http://pic.airijia.com/doc/20190113154434.png)


完成

![](http://pic.airijia.com/doc/20190113154517.png)









插入 USB 到电脑，开始刷固件




直连 HomeKit 刷[渡鸦固件](#刷渡鸦固件homekit-直连)，连 Hass 等中枢刷 [MQTT 固件](#刷-mqtt-固件-连-hass-等中枢)

## 刷渡鸦固件(HomeKit 直连)

无需中枢直连 苹果 HomeKit，适合入门体验


### 下载固件

打开 [在线编译固件](http://airijia.com/ctl/firmware/list)，点击 **新建固件**


![](http://pic.airijia.com/doc/20181231125754.png)


如图依次选择 **渡鸦 HomeKit 直连** - **NodeMCU** - **NodeMCU SSD1306 SHT30**

![](http://pic.airijia.com/doc/20190111162118.png)

刷入主机名，比如 `666`

![](http://pic.airijia.com/doc/20190111162216.png)
输入 WiFi 名称和密码

![](http://pic.airijia.com/doc/20190111162301.png)

温湿度的显示名称

![](http://pic.airijia.com/doc/20190111162324.png)


确认无误后点击提交

![](http://pic.airijia.com/doc/20190111162338.png)


等待编译

![](http://pic.airijia.com/doc/20190111155649.png)


显示**已完成**，表示已经编译成功，点击下载固件文件


![](http://pic.airijia.com/doc/20190111155711.png)



### 刷入固件


下载文件后，解压出 **666.bin** 文件，刷入工具使用 **渡鸦固件工具**


- [下载渡鸦固件 Windows 版](http://pic.airijia.com/download/raven-win.zip)
- [下载渡鸦固件 MAC OS 版](http://pic.airijia.com/download/raven-mac.zip)


将 NodeMCU 的 USB 线插入电脑的 USB 接口



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

插入 NodeMCU，选择 **串口** 后点击 **调试** (不需要选择固件)，如图显示便连接成功了


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


如图依次选择 **NodeMCU ESP8266 - 温湿度 - SSD1306 + SHT30**


![](http://pic.airijia.com/doc/20190111155000.png)




主机名随便填，比如 `666`


![](http://pic.airijia.com/doc/20190111155115.png)



填入 WiFi 信息。默认情况下，MQTT 服务器填入智能中枢的 IP 即可，例如 `192.168.1.201`，端口保持默认 `1883`

?> 其他信息根据 [中枢配置](#中枢配置) 填写


![](http://pic.airijia.com/doc/20190111155157.png)

**SDA引脚** 填入 `D2`，**SCL引脚** 填入 `D1`


![](http://pic.airijia.com/doc/20190111155233.png)



**SHT30 地址** 填入 `0x44`，读取间隔填入 `1s`


![](http://pic.airijia.com/doc/20190111161039.png)



**SSD1306 地址** 填入 `0x3C`，重刷间隔填入 `1s`


![](http://pic.airijia.com/doc/20190111155413.png)


核对信息后提交

![](http://pic.airijia.com/doc/20190111155558.png)



等待编译

![](http://pic.airijia.com/doc/20190111155649.png)


编译完成，下载文件到本地


![](http://pic.airijia.com/doc/20190111155711.png)



### 刷入固件



下载文件后，解压出 **666.bin** 文件，刷入工具使用 **MQTT固件工具**


- [下载 MQTT 固件 Windows 版](http://pic.airijia.com/download/win.zip)
- [下载 MQTT 固件 MAC OS 版](http://pic.airijia.com/download/mac.zip)




将 NodeMCU 的 USB 线插入电脑的 USB 接口






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




### 常见问题

暂无




## 进阶使用1

**上传模板文件** 的方式创建 MQTT 固件

显示温湿度，不适用黄蓝双色的屏幕



?> 基本五大件的配置查看 [模板文件创建 MQTT 固件](mqtt/guides/yaml)

需要用到 [I²C 总线](mqtt/components/i2c),  [SHT3X-D 温湿度传感器](mqtt/components/sensor/sht3xd) 和  [SSD1306 OLED I2C显示屏](mqtt/components/display/ssd1306_i2c) 等多个组件


```yaml
# ... 基本五大件略过

# I²C
i2c:
  sda: D2
  scl: D1
  scan: False
# SHT30
sensor:
  - platform: sht3xd
    temperature:
      name: "Living Room Temperature"
      id: temperature
    humidity:
      name: "Living Room Humidity"
      id: humidity
    address: 0x44
    update_interval: 1s
# 字体
font:
  - file: "roboto.ttf"
    id: font_32
    size: 32
# OLED
display:
  - platform: ssd1306_i2c
    model: "SSD1306 128x64"
    address: 0x3C
    update_interval: 1s
    lambda: >-
      it.printf(20, 16, id(font_32), "%.1f°", id(temperature).raw_state);
      it.printf(20, 48, id(font_32), "%.1f%%", id(humidity).raw_state);
```

### 配置字体

使用 roboto 字体，配置字体大小 32，命名为 `font_32`


更详细的使用，参考 [字体](mqtt/components/display/#字体) 

### 配置显示屏


0.96 英寸的 OLED 分辨率是 128x64，坐标原点位于屏幕左上角


坐标图 P






```c++
it.printf(20, 0, id(font_32), "%.1f°", id(temperature).raw_state);
```
以**font_32**，在坐标 20,16 处（屏幕上半距左 20）显示 ``温度数``+ ``°``，`.1f` 表示将浮点数四舍五入到小数点后 1 位


```c++
it.printf(64, 40, id(font_48), TextAlign::CENTER, "%.1f°", id(temperature).raw_state);
```
以**font_32**，在坐标 20,48 处（屏幕下半距左 20）显示 ``湿度数``+ ``%``，`.1f` 表示将浮点数四舍五入到小数点后 1 位


更详细的用法，参考 [SSD1306 OLED I2C显示屏](mqtt/components/display/ssd1306_i2c)  和 [显示屏核心组件](mqtt/components/display/) 




## 进阶使用2


**上传模板文件** 的方式创建 MQTT 固件

显示温湿度的同时加上当前的时间，搭配上黄下蓝的显示屏最佳

![](http://pic.airijia.com/doc/20190111153545.png)



?> 基本五大件的配置查看 [模板文件创建 MQTT 固件](mqtt/guides/yaml)

需要用到 [I²C 总线](mqtt/components/i2c),  [SHT3X-D 温湿度传感器](mqtt/components/sensor/sht3xd) 和  [SSD1306 OLED I2C显示屏](mqtt/components/display/ssd1306_i2c)，[时间](mqtt/components/time) 等多个组件


```yaml
# ... 基本五大件略过

# 时间
time:
  - platform: sntp
    id: sntp_time
    timezone: Asia/Shanghai
# I²C
i2c:
  sda: D2
  scl: D1
  scan: False
# SHT30
sensor:
  - platform: sht3xd
    temperature:
      name: "Living Room Temperature"
      id: temperature
    humidity:
      name: "Living Room Humidity"
      id: humidity
    address: 0x44
    update_interval: 1s
# 字体
font:
  - file: "roboto.ttf"
    id: font_48
    size: 48
  - file: "roboto.ttf"
    id: font_16
    size: 16
# OLED
display:
  - platform: ssd1306_i2c
    model: "SSD1306 128x64"
    address: 0x3C
    update_interval: 1s
    lambda: >-
      it.strftime(0, 0, id(font_16), "%H:%M", id(sntp_time).now());
      it.printf(128, 0, id(font_16), TextAlign::RIGHT, "%.1f%%", id(humidity).raw_state);
      it.printf(64, 40, id(font_48), TextAlign::CENTER, "%.1f°", id(temperature).raw_state);
```


### 配置时间和时区

配置 SNTP 服务，设置 ID 为 `sntp_time`，设置时区为 `Asia/Shanghai`


更详细的使用，参考 [时间](mqtt/components/time)

### 配置字体

使用 roboto 字体，配置 16 和 48 两种尺寸，分别命名为 `font_16` 和 `font_48`


更详细的使用，参考 [字体](mqtt/components/display/#字体) 

### 配置显示屏


0.96 英寸的 OLED 分辨率是 128x64，坐标原点位于屏幕左上角，如果是黄蓝双色的屏幕，屏幕上方 128x16 的区域为黄色，屏幕下方 128x48 的区域为蓝色


坐标图 P



```c++
it.strftime(0, 0, id(font_16), "%H:%M", id(sntp_time).now());
```

格式化当前时间的小时数和分钟数，以之前配置的字体 **font_16**，在坐标 0,0 处（左上角）显示，默认为左对齐，所以不用设置 `TextAlign`



```c++
it.printf(128, 0, id(font_16), TextAlign::TOP_RIGHT, "%.1f%%", id(humidity).raw_state);
```
以**font_16**，在坐标 128,0 处（右上角）`TextAlign::RIGHT` 右对齐显示 ``湿度数``+ ``%``，`.1f` 表示将浮点数四舍五入到小数点后 1 位


```c++
it.printf(64, 40, id(font_48), TextAlign::CENTER, "%.1f°", id(temperature).raw_state);
```

以**font_48**，在坐标 64,40 处（下半区域正中）`TextAlign::CENTER` 居中显示 ``温度数``+ ``°``，`.1f` 表示将浮点数四舍五入到小数点后 1 位

更详细的用法，参考 [SSD1306 OLED I2C显示屏](mqtt/components/display/ssd1306_i2c)  和 [显示屏核心组件](mqtt/components/display/) 


## 相关链接

- [I²C 总线](mqtt/components/i2c),
- [SHT3X-D 温湿度传感器](mqtt/components/sensor/sht3xd)
- [显示屏核心组件](mqtt/components/display/) 
- [SSD1306 OLED I2C显示屏](mqtt/components/display/ssd1306_i2c)
- [时间](mqtt/components/time)


