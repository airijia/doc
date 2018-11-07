本文档是爱睿家智能在线定制 MQTT 固件的使用说明

云端编译用于 ESP8266/ESP32 系列芯片的智能家居固件，基于 MQTT 通信协议，零配置即可被智能中枢（airijia/clt 和 Hass）自动发现，支持 OTA（Over The Air）网刷，

**无需任何编程基础** 既可以定制出强大的固件功能


?> TODO: 待加入视频


## 产品特性

- **无需编程知识**：只需打开网页、填写表单就可以完成固件编译
- **弹性可定制化**：强大的 YAML 转换引擎，只了解基础编程知识( if...then...else )也可创作出复杂功能
- **稳定快速高效**：C++ 编写，高效稳定，内存占用率降至极低
- **超小固件体积**：只有被使用的库文件才会被编译到固件中，文件体积通常只有 3xx KB
- **强大的兼容性**：同时支持爱睿家智能中枢 (airijia/ctl) 和 Hass (Home Assistant) 两大平台
- **批量部署终端**：功能已全固化至固件，批量部署再也无需重复 N 次冗长的配置过程
- **酷炫隔空网刷**：启动层构建的 OTA（Over The Air）网刷功能，无需连电脑即可刷入固件



## 基本使用

**编译固件**

MQTT 定制固件的功能有可以通过两种方式使用

1. 在线使用，浏览器打开 [http://airijia.com/ctl/firmware/list](http://airijia.com/ctl/firmware/list) ，可使用除 OTA 之外的所有功能
2. 智能中枢中使用，可使用包括 OTA 在内的全部功能

**自动发现**

 - 爱睿家智能中枢（airijia/ctl）
 
    免配置，自动发现


 - Hass (Home Assistant)

   在配置文件（通常为 configuration.yaml）中增加如下内容

```
mqtt:
  discovery: true
  discovery_prefix: airi
```

- [网页创建固件](mqtt/guides/form)


- [USB 刷入固件](mqtt/guides/ttl)
- [OTA 刷入固件](mqtt/guides/ota)

!> ⤵️ 以下️ ⤵️ 内容尚未完成




- [从 Tasmota 迁移刷入](mqtt/guides/tasmota)
- [从 ESPurna 迁移刷入](mqtt/guides/espurna)
- [从 ESPEasy 迁移刷入](mqtt/guides/espeasy)


## 进阶使用

- [上传文件模板创建](mqtt/guides/yaml)
- [配置类型](mqtt/guides/configuration-types)
- [自动化](mqtt/guides/)


## 支持设备

- [Sonoff 系列]
- [ESP01/ESP01S]
- [D1 系列]
- [NodeMCU ESP8266]
- [NodeMCU ESP32]
- [ESP8266 系列通用](mqtt/guides/yaml)
- [ESP32 系列通用](mqtt/guides/yaml)

## 核心组件

- [核心组件]
- [WiFi]
- [MQTT]
- [I²C 总线I]
- [SPI 总线]
- [UART 总线]
- [日志]
- [OTA]
- [直流电源]
- [睡眠模式]

## 传感器

-  [传感器核心组件](mqtt/components/sensor/)


-  [DHT 温湿度](mqtt/components/sensor/dht)
-  [Dallas 温度](mqtt/components/sensor/dallas)


## 二进制传感器

-  [二进制传感器核心](mqtt/components/sensor/)
-  [GPIO](mqtt/components/sensor/)
-  [连接状态](mqtt/components/sensor/)


## 输出(Output)

-  [输出核心](mqtt/components/sensor/)
-  [GPIO 输出](mqtt/components/sensor/)
-  [ESP8266 PWM(软调光)](mqtt/components/sensor/)
-  [ESP32 LEDC(硬调光)](mqtt/components/sensor/)
-  [连接状态](mqtt/components/sensor/)


## 灯/灯带

-  [灯核心](mqtt/components/light/)
-  [普通灯](mqtt/components/light/)
-  [可调光单色温](mqtt/components/light/)
-  [可调光双色温](mqtt/components/light/)
-  [RBG 三色](mqtt/components/light/)
-  [RBGW 四色](mqtt/components/light/)
-  [RBGWW 五色](mqtt/components/light/)
-  [单信号线 LED 灯带](mqtt/components/light/fastled_clockless)
-  [双信号线 LED 灯带](mqtt/components/light/fastled_spi)



## 开关

-  [开关核心](mqtt/components/light/)
-  [GPIO 开关](mqtt/components/light/)
-  [红外发射器](mqtt/components/light/)
-  [输出(Output)拟态开关](mqtt/components/light/)
-  [软件逻辑开关](mqtt/components/light/)
-  [UART 指令开关](mqtt/components/light/)


## 风扇

-  [风扇核心](mqtt/components/light/)
-  [普通风扇](mqtt/components/light/)
-  [调速风扇](mqtt/components/light/)

## 显示屏

-  [显示屏核心](mqtt/components/light/)
-  [串/并口液晶屏](mqtt/components/light/)
-  [I²C 总线液晶屏(PCF8574)](mqtt/components/light/)
-  [七段数码管(MAX7219)](mqtt/components/light/)
-  [触摸液晶屏(Nextion)](mqtt/components/light/)
-  [I²C 总线 OLED](mqtt/components/light/)
-  [SPI 总线 OLED](mqtt/components/light/)
-  [墨水屏](mqtt/components/light/)



## 案例赏析


