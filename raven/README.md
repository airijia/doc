# 渡鸦 HomeKit 直连固件

?> 文档完善中，有问题详询交流QQ群 [38049942](//shang.qq.com/wpa/qunwpa?idkey=eb028eb95506e4ee49beab0dc0147e821298e1865ba3379963e45a1900e40c22)


## 编译固件

打开 [在线编译固件](http://airijia.com/ctl/firmware/list)，点击`新建固件`

选择最下方的 **渡鸦 HomeKit 直连**，以 Sonoff Basic 为例

![](http://pic.airijia.com/doc/20181224145524.png)


主机名，即 hostname，用于局域网内的设备识别；描述仅用于标识，随便填


![](http://pic.airijia.com/doc/20181224145635.png)


Wifi 信息和 homekit 配对码

![](http://pic.airijia.com/doc/20181224145657.png)


设置开关的初始名称，支持中文，如果是 4 路开关(比如 4ch)，这里会显示 4 行

![](http://pic.airijia.com/doc/20181224145741.png)


确认信息无误后提交

![](http://pic.airijia.com/doc/20181224145840.png)


一般需要等待 2-5 分钟，如果页面没变化，按 F5 刷新浏览器

显示**已完成**，表示已经编译成功

![](http://pic.airijia.com/doc/20181224150054.png)



## 刷入固件

下载文件后，解压出 `.bin` 文件，刷入工具使用 [渡鸦固件工具](raven/flasher)

![](http://pic.airijia.com/doc/20181221163930.png)










命令行方法


- [esptool.py 的安装与使用](diy/esptool)
- [esptool.py(MAC)的安装与使用](diy/esptool_mac)






















