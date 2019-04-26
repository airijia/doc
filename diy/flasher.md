# ESPHome 固件工具

刷写和调试 ESPHome 固件的专用工具，不需要配置繁杂的参数，只要选择目标 **串口** 和 **固件** 文件即可


## 软件下载

- [Windows 版(WIN 7 及以上)](http://pic.airijia.com/download/win.zip)
- [MAC OS版](http://pic.airijia.com/download/mac.zip)

使用中有疑问，加 QQ群 **303748038** 咨询

## 基本界面

![](http://pic.airijia.com/doc/20190426123511.png)


插入 TLL 刷机线，打开软件，选择`串口`，如果列表为空，先点击`刷新`，如果还没找到串口，则需要 [安装 TTL 线驱动](diy/ttl)

![](http://pic.airijia.com/doc/20190426123540.png)

![](http://pic.airijia.com/doc/20190426123553.png)


## 刷写固件

浏览文件并添加

![](http://pic.airijia.com/doc/20190426123606.png)

添加了 D盘 Download 文件夹下的 666.bin

![](http://pic.airijia.com/doc/20190426123616.png)


!> 插入 TTL 线的时候，模块一定要处在**刷机模式**，比如 basic 的刷机模式就是按住黑色按钮后再插入 USB 口

点击刷写

![](http://pic.airijia.com/doc/20190426123627.png)

控制台开始出现信息


![](http://pic.airijia.com/doc/20190426123636.png)

![](http://pic.airijia.com/doc/20190426123645.png)

![](http://pic.airijia.com/doc/20190426123653.png)

刷写完成




## 调试固件

运行模式插入 TTL 线，比如 basic，插入的时候什么都不按就是运行模式

选择`串口`后点击`调试` (不需要选择固件)

![](http://pic.airijia.com/doc/20190426123703.png)

如图显示便连接成功了

![](http://pic.airijia.com/doc/20190426123711.png)

传感器类型会持续输出日志

![](http://pic.airijia.com/doc/20190426123720.png)

开关类型随意从`智能中枢`发出指令，或者按物理按钮

![](http://pic.airijia.com/doc/20190426123729.png)

## 苹果 MAC 版

只是界面略有不同，功能和使用方法是一样的

![](http://pic.airijia.com/doc/20181122212616.png)




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

