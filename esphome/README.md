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

## 基本使用

定制固件的功能有可以通过两种方式使用

1. 在线使用，浏览器打开 [http://airijia.com/ctl/firmware/list](http://airijia.com/ctl/firmware/list) ，可使用除 OTA 之外的所有功能
2. 智能中枢中使用，可使用包括 OTA 在内的全部功能



- [网页创建固件](esphome/guides/form)


- [USB 刷入固件](esphome/guides/ttl)
- [OTA 刷入固件](esphome/guides/ota)
- [从其他固件迁移](esphome/guides/migrate)


- [适配 airi](#适配-airi)
- [适配 hass](#适配-hass)






## 进阶使用

- [上传模板文件创建](esphome/guides/yaml)
- [核心组件](esphome/components/airi)
- [WiFi 组件](esphome/components/wifi)
- [API 组件](esphome/components/api)
- [MQTT 组件](esphome/components/mqtt)
- [OTA 组件](esphome/components/ota)
- [日志组件](esphome/components/logger)
- [配置类型](esphome/guides/configuration-types)


- [自动化](esphome/guides/automations)
- [I²C 总线](esphome/components/i2c)
- [SPI 总线](esphome/components/spi)
- [UART 总线](esphome/components/uart)
- [直流开关电源](esphome/components/power_supply)


- [时间](esphome/components/time)


<!-- - [睡眠模式](esphome/components/deep_sleep) -->


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


## 二进制传感器

-  [二进制传感器核心组件](esphome/components/binary_sensor/)
-  [GPIO/物理开关](esphome/components/binary_sensor/gpio)
-  [连接状态](esphome/components/binary_sensor/status)


## 开关

-  [开关核心组件](esphome/components/switch/)
-  [GPIO 开关](esphome/components/switch/gpio)
<!-- -  [红外发射器](esphome/components/switch/) -->
<!-- -  [输出(Output)拟态开关](esphome/components/switch/) -->
-  [模板化开关](esphome/components/switch/template)
<!-- -  [UART 指令开关](esphome/components/switch/) -->





## 输出

-  [输出核心组件](esphome/components/output/)
-  [GPIO 输出](esphome/components/output/gpio)
-  [ESP8266 PWM(软调光)](esphome/components/output/esp8266_pwm)
<!-- -  [ESP32 LEDC(硬调光)](esphome/components/output/ledc) -->
<!-- -  [MY9231/MY9291 LED](esphome/components/output/my9231) -->


## 灯/灯带

-  [灯类核心组件](esphome/components/light/)
-  [普通灯](esphome/components/light/binary)
-  [可调亮度的灯](esphome/components/light/monochromatic)
-  [可调色温调亮度的灯](esphome/components/light/cwww)
-  [可调三色(红绿蓝)](esphome/components/light/rgb)
-  [可调四色(红绿蓝白)](esphome/components/light/rgbw)
-  [可调五色(红绿蓝冷白暖白)](esphome/components/light/rgbww)
-  [单信号线 LED 灯带](esphome/components/light/fastled_clockless)
-  [双信号线 LED 灯带](esphome/components/light/fastled_spi)
-  [MY9231/MY9291 LED 灯泡](esphome/components/light/my9231)


## 文本传感器

-  [文本传感器核心组件](esphome/components/text_sensor/)
-  [MQTT 订阅传感器](esphome/components/text_sensor/mqtt_subscribe)



## 显示屏
-  [显示屏核心组件](esphome/components/display/)
-  [SSD1306 OLED 显示屏](esphome/components/display/ssd1306_i2c)

<!-- ## 风扇

-  [风扇核心组件](esphome/components/light/)
-  [普通风扇](esphome/components/light/)
-  [调速风扇](esphome/components/light/) -->


<!-- ## 显示屏

-  [显示屏核心组件](esphome/components/light/)
-  [串/并口液晶屏](esphome/components/light/)
-  [I²C 总线液晶屏(PCF8574)](esphome/components/light/)
-  [七段数码管(MAX7219)](esphome/components/light/)
-  [触摸液晶屏(Nextion)](esphome/components/light/)
-  [I²C 总线 OLED](esphome/components/light/)
-  [SPI 总线 OLED](esphome/components/light/)
-  [墨水屏](esphome/components/light/) -->




<!-- ## 蓝牙 -->




<!-- ## 红外 -->




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

