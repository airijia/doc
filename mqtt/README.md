本文档是爱睿家智能在线定制 MQTT 固件的使用说明

云端编译用于 ESP8266/ESP32 系列芯片的智能家居固件，基于 MQTT 通信协议，零配置即可被智能中枢（airijia/ctl 或 Hass）自动发现，支持 OTA（Over The Air）网刷，

**无需任何编程基础** 既可以定制出强大的固件功能


## 产品特性

- **无需编程知识**：只需打开网页、填写表单就可以完成固件编译
- **弹性可定制化**：强大的 YAML 转换引擎，只了解基础编程知识( if...then...else )也可创作出复杂功能
- **稳定快速高效**：C++ 编写，高效稳定，内存占用率降至极低
- **超小固件体积**：只有被使用的库文件才会被编译到固件中，文件体积通常只有 3xx KB
- **强大的兼容性**：同时支持爱睿家智能中枢 (airijia/ctl) 和 Hass (Home Assistant) 两大平台
- **批量部署终端**：功能已全固化至固件，批量部署再也无需重复 N 次冗长的配置过程
- **酷炫隔空网刷**：启动层构建的 OTA（Over The Air）网刷功能，无需连电脑即可刷入固件

## 适配中枢

 - 爱睿家智能中枢（airijia/ctl）

    免配置，自动发现

 - Hass (Home Assistant)

   在配置文件（通常为 configuration.yaml）MQTT 的尾部增加如下内容

```yaml
mqtt:
  # ... 其他 MQTT 配置
  discovery: true
  discovery_prefix: airi
```

## 基本使用

MQTT 定制固件的功能有可以通过两种方式使用

1. 在线使用，浏览器打开 [http://airijia.com/ctl/firmware/list](http://airijia.com/ctl/firmware/list) ，可使用除 OTA 之外的所有功能
2. 智能中枢中使用，可使用包括 OTA 在内的全部功能



- [网页创建固件](mqtt/guides/form)


- [USB 刷入固件](mqtt/guides/ttl)
- [OTA 刷入固件](mqtt/guides/ota)
- [从其他固件迁移](mqtt/guides/migrate)




## 进阶使用

- [上传模板文件创建](mqtt/guides/yaml)
- [核心组件](mqtt/components/airi)
- [WiFi 组件](mqtt/components/wifi)
- [MQTT 组件](mqtt/components/mqtt)
- [OTA 组件](mqtt/components/ota)
- [日志组件](mqtt/components/logger)
- [配置类型](mqtt/guides/configuration-types)


- [自动化](mqtt/guides/automations)
- [I²C 总线](mqtt/components/i2c)
- [SPI 总线](mqtt/components/spi)
- [UART 总线](mqtt/components/uart)
- [直流开关电源](mqtt/components/power_supply)
<!-- - [睡眠模式](mqtt/components/deep_sleep) -->


## 支持设备

- [Sonoff 系列](mqtt/devices/sonoff)
 


<!-- - [ESP01/ESP01S](mqtt/devices/esp01)
- [D1 系列](mqtt/devices/d1)
- [NodeMCU ESP8266](mqtt/devices/nodemcu_esp8266)
- [NodeMCU ESP32](mqtt/devices/nodemcu_esp32)
- [ESP8266 系列通用](mqtt/devices/esp8266)
- [ESP32 系列通用](mqtt/devices/esp32) -->


## 传感器

-  [传感器核心组件](mqtt/components/sensor/)


-  [D18B20 温度](mqtt/components/sensor/dallas)
<!-- -  [MAX6675 温度](mqtt/components/sensor/dallas) -->
-  [DHT 温湿度](mqtt/components/sensor/dht)
<!-- -  [DHT12 温湿度(I²C 总线)](mqtt/components/sensor/dht) -->
<!-- -  [HDC1080 温湿度](mqtt/components/sensor/dallas) -->
-  [HTU21D/SI7021 温湿度](mqtt/components/sensor/htu21d)
-  [SHT3X-D 温湿度](mqtt/components/sensor/sht3xd)


<!-- -  [MS5611 气压](mqtt/components/sensor/ms5611) -->
<!-- -  [BMP085/BMP180 温度+气压](mqtt/components/sensor/ms5611) -->
<!-- -  [BMP280 温度+气压](mqtt/components/sensor/ms5611) -->
<!-- -  [BME280 温湿度+气压](mqtt/components/sensor/ms5611) -->
<!-- -  [BME680 温湿度+气压+空气品质](mqtt/components/sensor/ms5611) -->


-  [MH-Z19 二氧化碳](mqtt/components/sensor/mhz19)
-  [PMSX003 颗粒物浓度](mqtt/components/sensor/pmsx003)



-  [BH1750 光强](mqtt/components/sensor/bh1750)
<!-- -  [TSL2561 光强](mqtt/components/sensor/tsl2561) -->


-  [HLW8012 功率](mqtt/components/sensor/hlw8012)
-  [CSE7766 功率](mqtt/components/sensor/cse7766)
<!-- -  [INA219 功率](mqtt/components/sensor/ms5611) -->
<!-- -  [INA3221 功率](mqtt/components/sensor/ms5611) -->


<!-- -  [HX711 压力](mqtt/components/sensor/ms5611) -->
<!-- -  [TCS34725 颜色识别](mqtt/components/sensor/ms5611) -->
<!-- -  [HMC5883L 罗盘](mqtt/components/sensor/ms5611) -->
<!-- -  [MPU6050  陀螺仪](mqtt/components/sensor/ms5611) -->
<!-- -  [超声波测距](mqtt/components/sensor/ms5611) -->


- [ADC 模转数](mqtt/components/sensor/adc)

<!--   [ads1115 模转数](mqtt/components/sensor/ads1115)
-  [占空比](mqtt/components/sensor/adc)
-  [霍尔效应(ESP32)](mqtt/components/sensor/adc)
-  [脉冲计数](mqtt/components/sensor/ms5611)
-  [旋转编码器](mqtt/components/sensor/ms5611)


-  [软件逻辑传感器](mqtt/components/light/)
-  [运行时间](mqtt/components/light/)
-  [WiFi 信号强度](mqtt/components/light/) -->


## 二进制传感器

-  [二进制传感器核心组件](mqtt/components/binary_sensor/)
-  [GPIO/物理开关](mqtt/components/binary_sensor/gpio)
-  [连接状态](mqtt/components/binary_sensor/status)

## 开关

-  [开关核心组件](mqtt/components/switch/)
-  [GPIO 开关](mqtt/components/switch/gpio)
<!-- -  [红外发射器](mqtt/components/switch/) -->
<!-- -  [输出(Output)拟态开关](mqtt/components/switch/) -->
-  [模板化开关](mqtt/components/switch/template)
<!-- -  [UART 指令开关](mqtt/components/switch/) -->





## 输出

-  [输出核心组件](mqtt/components/output/)
-  [GPIO 输出](mqtt/components/output/gpio)
-  [ESP8266 PWM(软调光)](mqtt/components/output/esp8266_pwm)
<!-- -  [ESP32 LEDC(硬调光)](mqtt/components/output/ledc) -->
<!-- -  [MY9231/MY9291 LED](mqtt/components/output/my9231) -->


## 灯/灯带

-  [灯类核心组件](mqtt/components/light/)
-  [普通灯](mqtt/components/light/binary)
-  [可调亮度的灯](mqtt/components/light/monochromatic)
-  [可调色温调亮度的灯](mqtt/components/light/cwww)
-  [可调三色(红绿蓝)](mqtt/components/light/rgb)
-  [可调四色(红绿蓝白)](mqtt/components/light/rgbw)
-  [可调五色(红绿蓝冷白暖白)](mqtt/components/light/rgbww)
-  [单信号线 LED 灯带](mqtt/components/light/fastled_clockless)
-  [双信号线 LED 灯带](mqtt/components/light/fastled_spi)
-  [MY9231/MY9291 LED 灯泡](mqtt/components/light/my9231)




<!-- ## 风扇

-  [风扇核心组件](mqtt/components/light/)
-  [普通风扇](mqtt/components/light/)
-  [调速风扇](mqtt/components/light/) -->


<!-- ## 显示屏

-  [显示屏核心组件](mqtt/components/light/)
-  [串/并口液晶屏](mqtt/components/light/)
-  [I²C 总线液晶屏(PCF8574)](mqtt/components/light/)
-  [七段数码管(MAX7219)](mqtt/components/light/)
-  [触摸液晶屏(Nextion)](mqtt/components/light/)
-  [I²C 总线 OLED](mqtt/components/light/)
-  [SPI 总线 OLED](mqtt/components/light/)
-  [墨水屏](mqtt/components/light/) -->




<!-- ## 蓝牙 -->




<!-- ## 红外 -->
