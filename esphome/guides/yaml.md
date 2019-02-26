# 模板文件创建 ESPHome 固件



## 使用示例模板

以 sonoff basic 为例

### 下载文件

点击 [模板文件示例](https://github.com/airijia/esphome-config)



### 编辑文件



然后 [编译固件](#编译固件)




## 自建模板文件


以 ESP01 + DHT11 温湿度 为例演示如何编写 ESPHome 固件的 yaml 模板文件

配置文件由基本功能和扩展功能两大部分构成


### 基本功能




基本的网络，调试和升级功能，由 [核心](esphome/components/airi)，[WiFi](esphome/components/wifi)，[API](esphome/components/api)，[MQTT](esphome/components/mqtt)，[OTA](esphome/components/ota) 和 [日志](esphome/components/logger) 合计六个组件构成


!> 除特殊需求外，通常 API 和 MQTT 二选一即可


配置示例，`拼音`的部分需要替换成实际的参数

```yaml
airi:
  name: 'wendu'
  platform: ESP8266
  board: esp01_1m
  board_flash_mode: dout

wifi:
  ssid: 'wangluo'
  password: 'mima'
  fast_connect: true
# 0.85 以后的版本才能支持
api:
  reboot_timeout: 0s

ota:

logger:
```

### 扩展功能

传感器，开关等功能，本例中使用 [DHT 温湿度](esphome/components/sensor/dht) 组件

配置示例，`拼音`的部分需要替换成实际的参数

```yaml
sensor:
  - platform: dht
    pin: D5
    model: DHT11
    temperature:
      name: 'wendu'
    humidity:
      name: 'shidu'
```

### 保存文件

点击复制下面的代码，存为yaml文件，将`拼音`的部分替换成实际的参数

```yaml
airi:
  name: 'wendu'
  platform: ESP8266
  board: esp01_1m
  board_flash_mode: dout

wifi:
  ssid: 'wangluo'
  password: 'mima'

mqtt:
  broker: 'dizhi'

ota:

logger:

sensor:
  - platform: dht
    pin: D5
    model: DHT11
    temperature:
      name: 'wendu'
    humidity:
      name: 'shidu'

```

### 编辑文件


然后 [编译固件](#编译固件)


## 编译固件



打开爱睿家智能中枢的 `固件` 选项卡 或者 [在线版](http://airijia.com/ctl/firmware/list)，点击`上传模板文件`


![](http://pic.airijia.com/doc/20181126195516.png)


选择编辑好的 **yaml** 文件

![](http://pic.airijia.com/doc/20181126195618.png)


点击 **确定** 上传

![](http://pic.airijia.com/doc/20181126195811.png)


文件上传成功，等待云端编译

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fww4awjtgpj311r0grdgu.jpg)



一般需要等待 2-5 分钟，如果页面没变化，按 F5 刷新浏览器

显示**已完成**，表示已经编译成功

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fww4eac4ntj30w90dk3z4.jpg)



## 刷入固件


下载文件后刷入，工具使用 esptool ([WIN](diy/esptool)，[MAC](diy/esptool_mac)) ，或者 [ESPHome 固件工具](diy/flasher)



如果使用的是 airi 智能中枢，还可以 [OTA 刷入](esphome/guides/ota)




## 相关连接


