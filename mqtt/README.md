# MQTT 定制固件

可云端编译用于 ESP8266/ESP32 系列芯片的智能家居固件，支持智能中枢自动发现（基于 MQTT 通信协议），支持 OTA（Over The Air）网刷



## 产品特性

- **无需编程知识**：只需要打开网页、填写表单就可以完成固件编译
- **弹性可定制化**：强大的 YAML 转换引擎，只了解基础编程知识( if...then...else )也可创作出复杂功能
- **稳定快速高效**：C++ 编写，高效稳定，内存占用率降至极低
- **超小固件体积**：只有被使用的库文件才会被编译到固件中，文件体积通常只有 3xx KB
- **强大的兼容性**：同时支持爱睿家智能中枢 (airijia/ctl) 和 Hass (Home Assistant) 两大平台
- **批量部署终端**：功能已全固化至固件，批量部署再也无需重复 N 次冗长的配置过程
- **酷炫隔空网刷**：启动层构建的 OTA（Over The Air）网刷功能，无需连电脑即可刷入固件



## 使用说明

MQTT 定制固件的功能有可以通过两种方式使用

1. 在线使用，浏览器输入 [http://airijia.com/ctl/firmware/list](http://airijia.com/ctl/firmware/list) ，可使用除 OTA 之外的所有功能
2. 智能中枢中使用，可使用包括 OTA 在内的全部功能


- [网页创建固件](/mqtt/guides/form)
- [上传文件模板创建](/mqtt/guides/yaml)


- [USB 刷入固件](/mqtt/guides/ttl)
- [OTA 刷入固件](/mqtt/guides/ota)


- [从 Tasmota 迁移刷入](/mqtt/guides/tasmota)
- [从 ESPurna 迁移刷入](/mqtt/guides/espurna)
- [从 ESPEasy 迁移刷入](/mqtt/guides/espeasy)



## 模块

?> TODO: 待完善

## 核心组件

?> TODO: 待完善

## 传感器


### 温度湿度
-  [dht](/mqtt/components/sensor/dht)



## 灯/灯带
-  [单信号](/mqtt/components/light/fastled_clockless)

