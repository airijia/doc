# 自制 OLED 显示温湿度计


!> 此教程尚未完成！！！


积木式 OLED 显示温度计

![](http://pic.airijia.com/doc/20190109170515.png)

![](http://pic.airijia.com/doc/20190109170538.png)

![](http://pic.airijia.com/doc/20190109170605.png)


## 硬件准备

| ![](http://pic.airijia.com/doc/20181231110322.png ':size=200')| 整套购买 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=577014079869) | 
|:-:|:-:|:-:|
| ![](http://pic.airijia.com/doc/20181205171519.png ':size=200')| 0.96寸 OLED 屏幕+积木壳  |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=585830522424) |
| ![](http://pic.airijia.com/doc/20181205171519.png ':size=200')| NodeMCU CP2102 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=585975819567) |
| ![](http://pic.airijia.com/doc/20181231110437.png ':size=200')| SHT30 传感器 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=585205682947) |
| ![](http://pic.airijia.com/doc/20181122162418.png ':size=200')| 杜邦线 母对母 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=45608073136) |


**以下需自备**

- Micro USB 数据线 (安卓扁口)
- 带 USB 接口电脑，操作系统 **WIN 7 及以上** 或 **MAC OS**
- 绝缘胶带


## 组装硬件

### 制作Y型线




### 连线

I2C



### 塞入外壳






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

![](http://pic.airijia.com/doc/20181231135612.png)



主机名随便填，比如 `666`

![](http://pic.airijia.com/doc/20181231140449.png)



填入 WiFi 信息。默认情况下，MQTT 服务器填入智能中枢的 IP 即可，例如 `192.168.1.201`，端口保持默认 `1883`

?> 其他信息根据 [中枢配置](#中枢配置) 填写


![](http://pic.airijia.com/doc/20181231140758.png)

**SDA引脚** 填入 `D2`，**SCL引脚** 填入 `D1`


![](http://pic.airijia.com/doc/20181231141300.png)


**SSD1306 地址** 填入 `0x36`，重刷间隔 填入 `1s`，**SHT30 地址** 填入 `0x44`，读取间隔填入 `60ms`

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




## 进阶使用

**上传模板文件** 的方式创建固件

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
    update_interval: 60ms
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
      it.printf(128, 0, id(font_16), TextAlign::RIGHT, "%.1f%%", id(humidity).state);
      it.printf(64, 40, id(font_48), TextAlign::CENTER, "%.1f°", id(temperature).state);
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
it.printf(128, 0, id(font_16), TextAlign::TOP_RIGHT, "%.1f%%", id(humidity).state);
```
以**font_16**，在坐标 128,0 处（右上角）`TextAlign::RIGHT` 右对齐显示 ``湿度数``+ ``%``，`.1f` 表示将浮点数四舍五入到小数点后 1 位


```c++
it.printf(64, 40, id(font_48), TextAlign::CENTER, "%.1f°", id(temperature).state);
```

以**font_48**，在坐标 64,40 处（下半区域正中）`TextAlign::CENTER` 居中显示 ``温度数``+ ``°``，`.1f` 表示将浮点数四舍五入到小数点后 1 位

更详细的用法，参考 [SSD1306 OLED I2C显示屏](mqtt/components/display/ssd1306_i2c)  和 [显示屏核心组件](mqtt/components/display/) 


## 相关链接

- [I²C 总线](mqtt/components/i2c),
- [SHT3X-D 温湿度传感器](mqtt/components/sensor/sht3xd)
- [显示屏核心组件](mqtt/components/display/) 
- [SSD1306 OLED I2C显示屏](mqtt/components/display/ssd1306_i2c)
- [时间](mqtt/components/time)


