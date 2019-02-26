# WiFi 信号探测仪

!> 本产品可以脱离中枢环境使用，有 WiFi 即可用，做个纯粹的信号探测仪

在智能家居的部署实践中，有一个不大不小的困扰，就是如何得知某个位置的 WiFi 信号如何。常见方法是用手机等移动设备测试，但智能家居尤其是 DIY 产品经常需要塞到某些小角落或者比较高的位置，这类情况下一款小型便携的 WiFi 信号探测仪会是个好帮手


![](http://pic.airijia.com/doc/20190120175201.png)

显示 WiFi 信号 强度


![](http://pic.airijia.com/doc/20190120175220.png)

尚未连接到 WiFi 时的显示





## 硬件准备


| ![](http://pic.airijia.com/doc/20190113113732.png ':size=200')| 0.96寸 OLED 屏幕+积木面板  |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=585830522424) |
|:-:|:-:|:-:|
| ![](http://pic.airijia.com/doc/20181205171519.png ':size=200')| NodeMCU 340G |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=45559178968) |
| ![](http://pic.airijia.com/doc/20181122162418.png ':size=200')| 杜邦线 母对母 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=45608073136) |


**以下需自备**

- Micro USB 数据线 (安卓扁口)
- 带 USB 接口电脑，操作系统 **WIN 7 及以上** 或 **MAC OS**
- 绝缘胶带
- 长条物体，比如尺子、自拍杆
- 充电宝




## 组装硬件

如图将各组件连接

![](http://pic.airijia.com/doc/20190120151916.png)


将显示屏放入面板，用绝缘胶带辅助定位


![](http://pic.airijia.com/doc/20190113152918.png)



将显示屏固定到尺子顶端


![](http://pic.airijia.com/doc/20190120161455.png)


NodeMCU 放到尺子另一面，为了方便检查线路，将有连线的那一侧露出来


![](http://pic.airijia.com/doc/20190120161510.png)

将 NodeMCU 固定


![](http://pic.airijia.com/doc/20190120161522.png)

插入 Micro USB 数据线

![](http://pic.airijia.com/doc/20190120161532.png)


成品效果


![](http://pic.airijia.com/doc/20190120161611.png)



## 刷固件

将 USB 插入电脑

### 下载固件


打开 [在线编译固件](http://airijia.com/ctl/firmware/list)，点击 **新建固件**


![](http://pic.airijia.com/doc/20181231125754.png)


如图依次选择 **工具 - WiFi 信号探测仪**



![](http://pic.airijia.com/doc/20190120141626.png)

主机名随便填，比如 `666`

![](http://pic.airijia.com/doc/20190120141807.png)



填入 WiFi 信息

![](http://pic.airijia.com/doc/20190120141849.png)



**SDA引脚** 填入 `D2`，**SCL引脚** 填入 `D1`


![](http://pic.airijia.com/doc/20190120141917.png)



**SSD1306 地址** 填入 `0x3C`，重刷间隔填入 `1s`


![](http://pic.airijia.com/doc/20190120141936.png)


核对信息后提交

![](http://pic.airijia.com/doc/20190120142057.png)


等待编译

![](http://pic.airijia.com/doc/20190120142200.png)


编译完成，下载文件到本地


![](http://pic.airijia.com/doc/20190120142218.png)



### 刷入固件



下载文件后，解压出 **666.bin** 文件，刷入工具使用 **MQTT固件工具**


- [下载 ESPHome 固件 Windows 版](http://pic.airijia.com/download/win.zip)
- [下载 ESPHome 固件 MAC OS 版](http://pic.airijia.com/download/mac.zip)




将 NodeMCU 的 USB 线插入电脑的 USB 接口






打开 ESPHome 固件工具，选择`串口`，如果列表为空，先点击`刷新`

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





## 模板创建

**上传模板文件** 的方式创建固件

?> 基本五大件的配置查看 [模板文件创建固件](esphome/guides/yaml)

需要用到 [WiFi 信号强度](esphome/components/sensor/wifi_signal) 、 [I²C 总线](esphome/components/i2c)、  [SSD1306 OLED I2C显示屏](esphome/components/display/ssd1306_i2c) 等多个组件


```yaml
# 基本五大件
airi:
  name: '666'
  platform: ESP8266
  board: nodemcuv2
wifi:
  ssid: 'wangluo'
  password: 'mima'
  fast_connect: True
  id: wifi
api:
  reboot_timeout: 0s
ota:
logger:
# WiFi 信号强度传感器
sensor:
  - platform: wifi_signal
    name: "WiFi Signal Sensor"
    id: wifi_signal
    update_interval: 1s
# 字体
font:
  - file: "roboto"
    id: font_16
    size: 16
  - file: "roboto"
    id: font_48
    size: 48
# 图标
image:
  - file: "mdi-wifi-strength-off-outline"
    id: strength_off
    resize: 16x16
  - file: "mdi-wifi-strength-outline"
    id: strength0
    resize: 16x16
  - file: "mdi-wifi-strength-1"
    id: strength1
    resize: 16x16
  - file: "mdi-wifi-strength-2"
    id: strength2
    resize: 16x16
  - file: "mdi-wifi-strength-3"
    id: strength3
    resize: 16x16
  - file: "mdi-wifi-strength-4"
    id: strength4
    resize: 16x16
i2c:
  sda: D2
  scl: D1
  scan: False
# OLED
display:
  - platform: ssd1306_i2c
    model: "SSD1306 128x64"
    address: 0x3C
    update_interval: 1s
    lambda: >-
      int s;
      s = (整数)id(wifi_signal).raw_state;
      if( s > 0 ){
        it.printf(64, 40, id(font_48), TextAlign::CENTER, "%s", "...");
      }else{
        it.printf(128, 0, id(font_16), TextAlign::RIGHT, "%s", id(wifi).get_ip_address().toString().c_str());
        it.printf(64, 40, id(font_48), TextAlign::CENTER, "%ddB", s);
      }
      if ( s <= -90 ) {
        it.image(0, 0, id(strength0));
      } else if ( -90 < s &&  s <= -70) {
        it.image(0, 0, id(strength1));
      } else if ( -70 < s &&  s <= -55) {
        it.image(0, 0, id(strength2));
      } else if ( -55 < s &&  s <= -40) {
        it.image(0, 0, id(strength3));
      } else if ( -40 < s && s <= 0) {
        it.image(0, 0, id(strength4));
      } else {
        it.image(0, 0, id(strength_off));
      }
```

### 配置 WiFi 信号强度传感器

带 **name** 参数标明可以在中枢中显示 

更详细的使用，参考 [WiFi 信号强度](esphome/components/sensor/wifi_signal) 

### 配置字体


使用 roboto 字体，配置 16 和 48 两种尺寸，分别命名为 `font_16` 和 `font_48`


更详细的使用，参考 [字体](esphome/components/display/#字体) 


### 配置图标

使用多个表示不同 WiFi 信号强度的图标，具体名称见 [mdi 图标列表](https://cdn.materialdesignicons.com/3.3.92/)

更详细的使用，参考 [图标](esphome/components/display/#图标)


### 配置显示屏

```c++
int s;
s = (整数)id(wifi_signal).raw_state;
```

定义整数 `s`，并将 **wifi_signal** 的值 **raw_state** (浮点数) 转换为整数后赋值给 **s**


WiFi 信号强度是负值，越接近于 0 则信号强度越大


```c++
if( s > 0 ){
  it.printf(64, 40, id(font_48), TextAlign::CENTER, "%s", "...");
}else{
  it.printf(64, 40, id(font_48), TextAlign::CENTER, "%ddB", s);
  it.printf(128, 0, id(font_16), TextAlign::RIGHT, "%s", id(wifi).get_ip_address().toString().c_str());
}
```
判断 `s` 的值，如果 s > 0（即还没有读到正确的强度数值），以**font_48**，在坐标 64,40 处（下半区域正中）`TextAlign::CENTER` 居中显示 `...`

反之，则以**font_48**，在坐标 64,40 处（下半区域正中）`TextAlign::CENTER` 居中显示 `信号强度`+ `dB`，`%d` 表示输出整数

以**font_16**，在坐标 128,0 处（右上角）`TextAlign::RIGHT` 右对齐显示 `当前节点的 IP 地址`

```c++
if ( s <= -90 ) {
  it.image(0, 0, id(strength0));
} else if ( -90 < s &&  s <= -70) {
  it.image(0, 0, id(strength1));
} else if ( -70 < s &&  s <= -55) {
  it.image(0, 0, id(strength2));
} else if ( -55 < s &&  s <= -40) {
  it.image(0, 0, id(strength3));
} else if ( -40 < s && s <= 0) {
  it.image(0, 0, id(strength4));
} else {
  it.image(0, 0, id(strength_off));
}
```

判断 `s` 的值，在不同的区间内显示不同图标，不在已定义区间内（等同于 WiFi 还没有连接），则显示没有连接的图标 `id(strength_off)`


## 支持多个 WiFi

向固件中刷入多个 WiFi 信息，可以


```yaml
# ... 其他设置
wifi:
  networks:
  - ssid: 'wangluo1'
    password: 'mima1'
  - ssid: 'wangluo2'
    password: 'mima2'
  id: wifi
# ... 其他设置
```