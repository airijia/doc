# 渡鸦固件工具

刷写和调试渡鸦 HomeKit 直连固件的专用工具，不需要配置繁杂的参数，只要选择目标 **串口** 、 **模式** 和 **固件** 文件即可


## 软件下载

- [Windows 版(WIN 7 及以上)](http://pic.airijia.com/download/raven-win.zip)
- [MAC OS 版](http://pic.airijia.com/download/raven-mac.zip)


?> 使用中若有疑问，详询交流QQ群  [38049942](//shang.qq.com/wpa/qunwpa?idkey=eb028eb95506e4ee49beab0dc0147e821298e1865ba3379963e45a1900e40c22)


## 选择串口


刷机模式插入 USB 刷机线，打开软件，点击 **串口**



![](http://pic.airijia.com/doc/20181221161003.png)


如果列表为空，先点击 **刷新**


![](http://pic.airijia.com/doc/20181221161049.png)


选择了 `COM3`

![](http://pic.airijia.com/doc/20181221161357.png)

!> 如果还没找到串口，需要 [安装 TTL刷机线驱动](diy/ttl)

## 选择固件

浏览文件并添加

![](http://pic.airijia.com/doc/20181221161427.png)


![](http://pic.airijia.com/doc/20181221161512.png)



添加了 D盘 Download 文件夹下的 `basic_off.bin` 文件

![](http://pic.airijia.com/doc/20181221161524.png)


## 选择模式

NodeMcu, D1 mini等开发板选择 **DIO**，Sonoff、ESP01等选择 **DOUT**

本示例是刷 Sonoff Basic，所以选择 `DOUT`


![](http://pic.airijia.com/doc/20181221161800.png)



## 刷入固件


!> 插入 TTL 线的时候，模块一定要处在**刷机模式**，比如 basic 的刷机模式就是按住黑色按钮后再插入 USB 口

点击刷写


![](http://pic.airijia.com/doc/20181221162000.png)



控制台开始出现信息

![](http://pic.airijia.com/doc/20181221162021.png)


![](http://pic.airijia.com/doc/20181221162033.png)


刷写完成



## 调试固件

运行模式插入 TTL 线，比如 basic，插入的时候什么都不按就是运行模式

选择 **串口** 后点击 **调试** (不需要选择固件)

![](http://pic.airijia.com/doc/20181221162418.png)


如图显示便连接成功了


点击模块上微动按钮的日志

![](http://pic.airijia.com/doc/20181221162545.png)



手机进入了 Wifi 配置页面


![](http://pic.airijia.com/doc/20181221162842.png)


接入 WiFi


![](http://pic.airijia.com/doc/20181221163102.png)


关闭 AP，开启 mDNS，等待手机配对

![](http://pic.airijia.com/doc/20181221163349.png)



配对过程


![](http://pic.airijia.com/doc/20181221163638.png)


从手机端开关的日志


![](http://pic.airijia.com/doc/20181221163725.png)


## 苹果 MAC 版

只是界面略有不同，功能和使用方法是一样的


![](http://pic.airijia.com/doc/20181222190219.png)

### 不能执行的解决方法

![](http://pic.airijia.com/doc/20181222192623.png)


打开 **系统偏好设置 - 安全性与隐私**

![](http://pic.airijia.com/doc/20181222192828.png)

点击 **仍然打开**


![](http://pic.airijia.com/doc/20181222192931.png)

点击 **打开**

![](http://pic.airijia.com/doc/20181222193021.png)




## 常见问题

### Unexpected error: could not open port 'COM3': PermissionError(13, '拒绝访问。', None, 5)


![](http://pic.airijia.com/doc/20181130152853.png)

TTL 线没有连接任何模块的时候，就会报这个错误

所以如果你认为自己已经把线连好了还是看到这个错误，再去检查三遍连线



### Unexpected error: could not open port 'COM3': FileNotFoundError(2, '系统找不到指定的文件。', None, 2)


![](http://pic.airijia.com/doc/20181130154519.png)


TTL 线没有插到 USB 上，或者接错线，比如线接反了

所以如果你认为自己已经把线连好了还是看到这个错误，再去检查三遍连线



###  无法定位程序输入点 Getfinalpathnamebyhandlew 于动态链接库 kernel32.dll 上

![](http://pic.airijia.com/doc/20181202172626.png)

最低系统要求为 Vista，WIN XP不能用

