# ESPHome 固件中文文档

[在线编译 ESPHome 固件](http://airijia.com/ctl) 的使用说明

云端编译用于 ESP8266/ESP32 系列芯片的智能家居固件，零配置即可被智能中枢（airijia/ctl 或 Hass）自动发现，支持 OTA（Over The Air）网刷

**无需任何编程基础** 既可以定制出强大的固件功能

## 产品特性

- **无需编程知识**：只需打开网页、填写表单就可以完成固件编译
- **弹性可定制化**：强大的 YAML 转换引擎，只了解基础编程知识( if...then...else )也可创作出复杂功能
- **稳定快速高效**：C++ 编写，高效稳定，内存占用率降至极低
- **超小固件体积**：只有被使用的库文件才会被编译到固件中，文件体积通常只有 3xx KB
- **强大的兼容性**：同时支持爱睿家智能中枢 (airijia/ctl) 和 Hass (Home Assistant) 两大平台
- **批量部署终端**：功能已全固化至固件，批量部署再也无需重复 N 次冗长的配置过程
- **酷炫隔空网刷**：启动层构建的 OTA（Over The Air）网刷功能，无需连电脑即可刷入固件

## 基础使用

定制固件的功能有可以通过两种方式使用

1. 在线使用，浏览器打开 [http://airijia.com/ctl/firmware/list](http://airijia.com/ctl/firmware/list) ，可使用除 OTA 之外的所有功能
2. 智能中枢中使用，可使用包括 OTA 在内的全部功能

| [![](http://pic.airijia.com/image/http.svg ':size=100x100')](esphome/guides/yaml) | [![](http://pic.airijia.com/doc/20181122161759.png ':size=100x100')](esphome/guides/configuration-types) |  [![](http://pic.airijia.com/doc/20190303140002.png ':size=100x100')](esphome/components/mqtt) | 
| :-: | :-: | :-: |
| [网页表单编译固件](esphome/guides/form) |  [USB 刷入固件](esphome/guides/ttl) | [OTA 刷入固件](esphome/guides/ota) | 
| [![](http://pic.airijia.com/image/tasmota.svg ':size=100x100')](esphome/guides/migrate_sonoff_tasmota) | [![](http://pic.airijia.com/image/espurna.svg ':size=100x100')](esphome/guides/migrate_espurna) | [![](http://pic.airijia.com/image/espeasy.svg ':size=100x100')](esphome/guides/migrate_espeasy) |
|[从 Sonoff-Tasmota 迁移](esphome/guides/migrate_sonoff_tasmota)  | [从 ESPurna 迁移](esphome/guides/migrate_espurna)  |  [从 ESPEasy 迁移](esphome/guides/migrate_espeasy)  | 
| [![](http://pic.airijia.com/doc/20190303140343.png ':size=100x100')](#适配-airi) | [![](http://pic.airijia.com/image/home-assistant.svg ':size=100x100')](#适配-hass) | |
| [适配 airi](#适配-airi)  | [适配 hass](#适配-hass) |  | 




## 进阶使用

| [![](http://pic.airijia.com/doc/20190303135144.png ':size=100x100')](esphome/guides/yaml) | [![](http://pic.airijia.com/image/settings.svg ':size=100x100')](esphome/guides/configuration-types) |  [![](http://pic.airijia.com/image/auto-fix.svg ':size=100x100')](esphome/components/mqtt) | 
| :-: | :-: | :-: |
|  [上传模板文件编译固件](esphome/guides/yaml) |  [配置类型](esphome/guides/configuration-types) |[自动化](esphome/guides/automations) | 



## 核心组件

| [![](http://pic.airijia.com/image/cloud-circle.svg ':size=100x100')](esphome/components/esphome) | [![](http://pic.airijia.com/image/network-wifi.svg ':size=100x100')](esphome/components/wifi) |  [![](http://pic.airijia.com/image/mqtt.png ':size=260x68')](esphome/components/mqtt) | 
| :-: | :-: | :-: |
|  [核心组件](esphome/components/esphome) |[WiFi 组件](esphome/components/wifi) | [MQTT 组件](esphome/components/mqtt) | 
| [![](http://pic.airijia.com/image/i2c.svg ':size=100x100')](esphome/components/i2c) | [![](http://pic.airijia.com/image/spi.svg ':size=100x100')](esphome/components/spi) |  [![](http://pic.airijia.com/image/uart.svg ':size=100x100')](esphome/components/uart) | 
|  [I²C 总线](esphome/components/i2c) | [SPI 总线](esphome/components/spi) |  [UART 总线](esphome/components/uart) | 
| [![](http://pic.airijia.com/image/system-update.svg ':size=100x100')](esphome/components/i2c) | [![](http://pic.airijia.com/image/file-document-box.svg ':size=100x100')](esphome/components/spi) | [![](http://pic.airijia.com/image/http.svg ':size=100x100')](esphome/components/web_server) | 
|  [OTA 组件](esphome/components/ota) | [日志组件](esphome/components/logger) |  [web 服务](esphome/components/web_server)  | 
| [![](http://pic.airijia.com/image/system-update.svg ':size=100x100')](esphome/components/i2c) | [![](http://pic.airijia.com/image/file-document-box.svg ':size=100x100')](esphome/components/spi) | [![](http://pic.airijia.com/image/hotel.svg ':size=100x100')](esphome/components/deep_sleep) | 
| [API 组件](esphome/components/api)| [直流开关电源](esphome/components/power_supply) |  [休眠](esphome/components/deep_sleep)  | 







<!-- ## 支持设备 -->

<!-- - [Sonoff 系列](diy/sonoff/) -->
 


<!-- - [ESP01/ESP01S](esphome/devices/esp01)
- [D1 系列](esphome/devices/d1)
- [NodeMCU ESP8266](diy/nodemcu/_esp8266)
- [NodeMCU ESP32](diy/nodemcu/_esp32)
- [ESP8266 系列通用](esphome/devices/esp8266)
- [ESP32 系列通用](esphome/devices/esp32) -->


## 传感器

-  [传感器核心组件](esphome/components/sensor/)


-  [D18B20 温度](esphome/components/sensor/dallas)
<!-- -  [MAX6675 温度](esphome/components/sensor/dallas) -->
-  [DHT 温湿度](esphome/components/sensor/dht)
<!-- -  [DHT12 温湿度(I²C 总线)](esphome/components/sensor/dht) -->
<!-- -  [HDC1080 温湿度](esphome/components/sensor/dallas) -->
-  [HTU21D/SI7021 温湿度](esphome/components/sensor/htu21d)
-  [SHT3X-D 温湿度](esphome/components/sensor/sht3xd)


<!-- -  [MS5611 气压](esphome/components/sensor/ms5611) -->
<!-- -  [BMP085/BMP180 温度+气压](esphome/components/sensor/ms5611) -->
<!-- -  [BMP280 温度+气压](esphome/components/sensor/ms5611) -->
<!-- -  [BME280 温湿度+气压](esphome/components/sensor/ms5611) -->
<!-- -  [BME680 温湿度+气压+空气品质](esphome/components/sensor/ms5611) -->


-  [MH-Z19 二氧化碳](esphome/components/sensor/mhz19)
-  [PMSX003 颗粒物浓度](esphome/components/sensor/pmsx003)



-  [BH1750 光强](esphome/components/sensor/bh1750)
<!-- -  [TSL2561 光强](esphome/components/sensor/tsl2561) -->


-  [HLW8012 功率](esphome/components/sensor/hlw8012)
-  [CSE7766 功率](esphome/components/sensor/cse7766)
<!-- -  [INA219 功率](esphome/components/sensor/ms5611) -->
<!-- -  [INA3221 功率](esphome/components/sensor/ms5611) -->


<!-- -  [HX711 压力](esphome/components/sensor/ms5611) -->
<!-- -  [TCS34725 颜色识别](esphome/components/sensor/ms5611) -->
<!-- -  [HMC5883L 罗盘](esphome/components/sensor/ms5611) -->
<!-- -  [MPU6050  陀螺仪](esphome/components/sensor/ms5611) -->
<!-- -  [超声波测距](esphome/components/sensor/ms5611) -->


- [ADC 模转数](esphome/components/sensor/adc)

<!--   [ads1115 模转数](esphome/components/sensor/ads1115)
-  [占空比](esphome/components/sensor/adc)
-  [霍尔效应(ESP32)](esphome/components/sensor/adc)
-  [脉冲计数](esphome/components/sensor/ms5611)
-  [旋转编码器](esphome/components/sensor/ms5611)


-  [软件逻辑传感器](esphome/components/light/)
-  [运行时间](esphome/components/light/)-->
-  [WiFi 信号强度](esphome/components/sensor/wifi_signal) 
-  [中枢传感器](esphome/components/sensor/homeassistant)

## 二进制传感器


| [![](http://pic.airijia.com/image/folder-open.svg ':size=100x100')](esphome/components/binary_sensor/) | [![](http://pic.airijia.com/image/pin.svg ':size=100x100')](esphome/components/binary_sensor/gpio) |  [![](http://pic.airijia.com/image/home-assistant.svg ':size=100x100')](esphome/components/binary_sensor/homeassistant) | 
| :-: | :-: | :-: |
|  [开关核心组件](esphome/components/binary_sensor/) | [GPIO/物理开关](esphome/components/binary_sensor/gpio)) | [中枢二进制传感器](esphome/components/binary_sensor/homeassistant) | 
| [![](http://pic.airijia.com/image/server-network.svg ':size=100x100')](esphome/components/binary_sensor/) | | |
| [连接状态](esphome/components/binary_sensor/status) | | |


## 输出



| [![](http://pic.airijia.com/image/folder-open.svg ':size=100x100')](esphome/components/output/) | [![](http://pic.airijia.com/image/pwm.png ':size=100x100')](esphome/components/output/esp8266_pwm) |  [![](http://pic.airijia.com/image/pin.svg ':size=100x100')](esphome/components/output/gpio) | 
| :-: | :-: | :-: |
|  [开关核心组件](esphome/components/output/) | [ESP8266 PWM(软调光)](esphome/components/output/esp8266_pwm) | [GPIO 开关](esphome/components/output/gpio) | 



## 灯/灯带


| [![](http://pic.airijia.com/image/folder-open.svg ':size=100x100')](esphome/components/light/) | [![](http://pic.airijia.com/image/lightbulb.svg ':size=100x100')](esphome/components/light/binary) | [![](http://pic.airijia.com/image/brightness-medium.svg ':size=100x100')](esphome/components/light/monochromatic) |
| :-: | :-: | :-: |
| [灯组件](esphome/components/light/)  | [普通灯](esphome/components/light/binary) |  [可调亮度的灯](esphome/components/light/monochromatic) | 
| [![](http://pic.airijia.com/image/brightness-medium.svg ':size=100x100')](esphome/components/light/cwww) | [![](http://pic.airijia.com/image/rgb.png ':size=100')](esphome/components/light/rgb) |  [![](http://pic.airijia.com/image/rgbw.png ':size=100')](esphome/components/light/rgbw) |
| [可调色温调亮度的灯](esphome/components/light/cwww)  | [可调三色(红绿蓝)](esphome/components/light/rgb) |  [可调四色(红绿蓝白)](esphome/components/light/rgbw) |
| [![](http://pic.airijia.com/image/rgbw.png ':size=100')](esphome/components/light/rgbww) | [![](http://pic.airijia.com/image/color_lens.svg ':size=100x100')](esphome/components/light/fastled_clockless) | [![](http://pic.airijia.com/image/color_lens.svg ':size=100x100')](esphome/components/light/fastled_spi)  |
| [可调五色(红绿蓝冷白暖白)](esphome/components/light/rgbww)  | [单信号线 LED 灯带](esphome/components/light/fastled_clockless) |  [双信号线 LED 灯带](esphome/components/light/fastled_spi) |
| [![](http://pic.airijia.com/image/color_lens.svg ':size=100x100')](esphome/components/light/partition) | [![](http://pic.airijia.com/image/my9231.svg ':size=200')](esphome/components/light/my9231) |  |
| [灯带分区](esphome/components/light/partition) |  [MY9231/MY9291 LED 灯泡](esphome/components/light/my9231) |  |


## 开关



| [![](http://pic.airijia.com/image/folder-open.svg ':size=100x100')](esphome/components/switch/) | [![](http://pic.airijia.com/image/pin.svg ':size=100x100')](esphome/components/switch/gpio) |  |
| :-: | :-: | :-: |
|  [开关核心组件](esphome/components/switch/) |  [GPIO 开关](esphome/components/switch/gpio) |  |
| [![](http://pic.airijia.com/image/description.svg ':size=100x100')](esphome/components/switch/template) | | |
|  [模板化开关](esphome/components/switch/template) |  |  |


## 风扇

| [![](http://pic.airijia.com/image/folder-open.svg ':size=100x100')](esphome/components/fan/) | [![](http://pic.airijia.com/image/fan.svg ':size=100x100')](esphome/components/fan/binary) | [![](http://pic.airijia.com/image/fan.svg ':size=100x100')](esphome/components/fan/speed) |
| :-: | :-: | :-: |
|  [风扇核心组件](esphome/components/fan/) |  [普通风扇](esphome/components/fan/binary) | [调速风扇](esphome/components/fan/speed) |




## 显示屏

| [![](http://pic.airijia.com/image/folder-open.svg ':size=100x100')](esphome/components/display/) | [![](http://pic.airijia.com/doc/20190303123232.png ':size=200')](esphome/components/display/) |  |
| :-: | :-: | :-: |
| [显示屏核心组件](esphome/components/display/)  | [SSD1306 OLED 显示屏](esphome/components/display/ssd1306_i2c)  |   |   |





## 文本传感器

| [![](http://pic.airijia.com/image/folder-open.svg ':size=100x100')](esphome/components/text_sensor/) | [![](http://pic.airijia.com/image/home-assistant.svg ':size=100x100')](esphome/components/text_sensor/homeassistant) | [![](http://pic.airijia.com/image/mqtt.png ':size=260x68')](esphome/components/text_sensor/mqtt_subscribe) |
| :-: | :-: | :-: |
|  [文本传感器核心组件](esphome/components/text_sensor/) |  [中枢文本传感器](esphome/components/text_sensor/homeassistant) | [MQTT 订阅传感器](esphome/components/text_sensor/mqtt_subscribe) |





## 其他组件


- [时间](esphome/components/time)
- [状态灯](esphome/components/status_led)








##  适配 airi

在爱睿家智能中枢 (airijia/ctl) 中使用 (版本 > 0.3)

点击 **设备 - DIY 设备** ，点击已被自动发现的设备后的 载入

![](http://pic.airijia.com/doc/20190126163048.png)

出现 **entity_id**，表示已经载入

![](http://pic.airijia.com/doc/20190126163157.png)


!> 设备已经刷好固件，但 **DIY 设备** 列表中没有显示


直接点击 **添加 DIY 设备**，输入目标设备的 hostname 添加

![](http://pic.airijia.com/doc/20190126163246.png)


##  适配 hass

在 Hass 中枢 (Home assistant) 中使用 (版本 > 0.85)

点击 **配置 - 集成**

![](http://pic.airijia.com/doc/20190126162531.png)


点击 **已发现 - ESPHome - 配置** 

![](http://pic.airijia.com/doc/20190126162559.png)

!> 设备已经刷好固件，但**已发现**中没有显示

输入正确的 Host (.local如果不能识别就换成 .lan，如果还不行换成 IP ) 和端口(通常默认 6053，不用改)，然后SUBMIT

![](http://pic.airijia.com/doc/20190126162652.png)

