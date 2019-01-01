# BRUH Multisensor

多合一传感器 温度+湿度+光强 +人体感知 + RGB LED状态灯


[](//player.bilibili.com/player.html?aid=36376373&cid=63863725&page=1 ':include :type=iframe width="720" height="530"')


8:30 ~ 14:00 的部分可以略过不看，参考本文档即可



## 相关产品

| ![](http://pic.airijia.com/doc/20181205171519.png ':size=200')| NodeMCU  |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=45559178968) |
|:-:|:-:|:-:|
| ![](http://pic.airijia.com/doc/20181122164130.png ':size=200')| DHT22 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=551993243366) |
| ![](http://pic.airijia.com/doc/20181122164130.png ':size=200')|  TMT光敏 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=45528547048) |
| ![](http://pic.airijia.com/doc/20181122164130.png ':size=200')|  PIR |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=551934438418) |
| ![](http://pic.airijia.com/doc/20181122164130.png ':size=200')|  三色共阴 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=551925481875) |



接线图参考

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxem4fwk5mj30vm0pr45b.jpg)



!> 有的板 `VIN` 脚不是5V输出，要接 `VU` (USB直供电) 才行，详见 [NODEMCU 详解](diy/nodemcu/)

## 网页创建固件

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxelvku9fhj30sk0fc74w.jpg)

打开 [在线 MQTT 固件编译](http://airijia.com/ctl/firmware/list) 使用



## 文件模板创建

成品 yaml 文件，记得修改前三大项的信息

```yaml
airi:
  name: '名称'
  platform: ESP8266
  board: nodemcuv2
wifi:
  ssid: '网络名'
  password: '密码'
mqtt:
  broker: 'mqtt服务器'
  username: ''
  password: ''
  reboot_timeout : 0s
ota:
logger:

sensor:
  - platform: dht
    model: DHT22
    pin: D7
    temperature:
      name: "Multisensor Temperature"
    humidity:
      name: "Multisensor Humidity"
  - platform: adc
    pin: A0
    name: "Multisensor Brightness"
    unit_of_measurement: lux
    filters:
      - lambda: >-
          return (x / 10000.0) * 2000000.0;

binary_sensor:
  - platform: gpio
    pin: D5
    name: "Multisensor Motion"
    device_class: motion

output:
  - platform: esp8266_pwm
    pin: D1
    id: redgpio
  - platform: esp8266_pwm
    pin: D2
    id: greengpio
  - platform: esp8266_pwm
    pin: D3
    id: bluegpio

light:
  - platform: rgb
    name: "Multisensor Light"
    red: redgpio
    green: greengpio
    blue: bluegpio
```




[DHT22](mqtt/components/sensor/dht)，[GPIO 二进制传感器](mqtt/components/binary_sensor/gpio)，[红绿蓝 LED](mqtt/components/light/rgb) 可以查阅相关文档，这里重点讲一下如何使用 使用 [ADC 模转数](mqtt/components/sensor/adc) 驱动
TEMT6000 这个模块

## TEMT6000

TEMT6000 是款很便宜的三极管类型的光敏传感器，其光照强度和基极的电流成正比。用起来也相当简单，可以简单的连接该传感器的基极到模拟电压输入，通过简单的检测电压值就可以判断当前的光照强度。TEMT6000 对可见光照度的反应特性与人眼的特性类似，可以模拟人对环境光线的强度的判断，从而方便做出与人友好互动的应用。可应用于照明控制、屏幕背光控制等

连线， `VCC` - `3.3V`， `GND` - `GND`，`OUT` 或 `SIG` - `A0` 或任意模拟引脚

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxemlvso56j30qi0ezdrk.jpg)

测量 `OUT` 引脚的电压，并换算成 lx(勒克斯) 即可

```yaml
sensor:
  - platform: adc
    pin: A0
    name: "TEMT6000 Illuminance"
    unit_of_measurement: lx
    filters:
      - lambda: >-
          return (x / 10000.0) * 2000000.0;
```


?> 因为 ESP8266 的 模拟引脚的可探测的范围是  `0 ~ 1.0V` ， 所以最大值为 `200 lx`








## 相关链接

- [ADC 模转数](mqtt/components/sensor/adc)


- [3D 打印外壳](https://www.thingiverse.com/thing:2239142)
- [200勒克斯是什么概念？](https://zhidao.baidu.com/question/545926149.html)