# esptool.py 的安装与使用

?> 如果插入 TTL刷机线 没有提示音，需要先[安装驱动](diy/ttl)

[esptool 刷机](//player.bilibili.com/player.html?aid=28695194&cid=49702131&page=1 ':include :type=iframe width="720" height="530"')

!> 部分参考此视频



先安装 python2，然后用 pip (python2 自带) 安装 esptool.py



## 安装 Python 2

打开官方网站 python.org

![](http://pic.airijia.com/doc/20190703095138.png)



进入下载界面，选择 Python 2

![](http://pic.airijia.com/doc/20190703095146.png)

下载如图所示安装文件

![](http://pic.airijia.com/doc/20190703095156.png)

点击下载到本地的文件安装

![](http://pic.airijia.com/doc/20190703095206.png)

![](http://pic.airijia.com/doc/20190703095216.png)

![](http://pic.airijia.com/doc/20190703095226.png)

![](http://pic.airijia.com/doc/20190703095236.png)

!> 一定要记得勾选“Add python.exe to Path"

![](http://pic.airijia.com/doc/20190703095246.png)

点击左下角开始按钮，输入 cmd
打开：WIN 10 命令行提示符，WIN 7 命令行

WIN 10

![](http://pic.airijia.com/doc/20190703095256.png)
WIN 7




?> 鼠标在命令内容上悬停时，可以点击右侧的**点击复制**，复制内容，然后到 cmd 窗口中鼠标右键粘贴

![](http://pic.airijia.com/doc/20190703095845.png)





命令行中输入

```shell
python --version
```

![](http://pic.airijia.com/doc/20190703095857.png)

如图显示即正确安装 python 2



![](http://pic.airijia.com/doc/20190703095906.png)

如果提示命令不存在，需要设置环境变量

```shell
path=%path%;C:\Python27
```

然后再执行 `python --version`


!> 如果重试多次依旧不显示，重启电脑后再试



## 安装 esptool.py

命令行输入

```shell
pip install esptool
```

然后输入

```shell
esptool.py
```

![](http://pic.airijia.com/doc/20181123172622.png)

输入显示即安装完成


## 驱动 COM 口


?> 首次使用，需要安装 [python 和 esptool](diy/esptool)

### WIN 10

**此电脑 - 属性**

![](http://pic.airijia.com/doc/20181218101240.png)


**设备管理器**

![](http://pic.airijia.com/doc/20181218101326.png)


查看 **端口(COM 和 LPT)**，本案例中 `COM3` 便是 NodeMCU


![](http://pic.airijia.com/doc/20181218101423.png)


?>  如果还没找到串口，需要安装 [驱动程序](diy/nodemcu/)



## 刷入 ESPHome 固件

以下演示，实际使用中要根据实机上的 COM 口编号设置，如 COM3，COM6，COM7




**基本流程是：刷机模式插入 - 刷入 - 拔掉USB - 普通模式插入 - 调试或配对**

sonoff basic 刷 ESPHome 固件，文件名 666.bin，所在位置D盘 Download 目录，COM6

```shell
esptool.py -p COM6 write_flash -fs 1MB -fm dout 0x0 D:\Download\666.bin
```

![](http://pic.airijia.com/doc/20190703095922.png)

刷入成功后，进入 智能中枢 使用

## 刷入渡鸦 Homekit 直连固件

**基本流程是：刷机模式插入 - 擦除 - 拔掉USB - 刷机模式插入 - 刷入 - 拔掉USB - 普通模式插入 - 调试或配对**


### 手动输入命令


esp01 模块刷 渡鸦固件，**假设** 文件名为 666.bin，所在位置 D 盘 Download 目录，串口编号 COM6

1. 切换到D:\Download  下

进入D:盘

```shell
D:
```

进入 Download 目录

```shell
cd Download
```

![](http://pic.airijia.com/doc/20190703095932.png)

2. 擦除

```
esptool.py -p COM6 erase_flash
```
![](http://pic.airijia.com/doc/20190703095942.png)

3. 刷入 ( 这条命令是**整体，不换行**)

```shell
esptool.py -p COM6 -b 115200 write_flash -fs 1MB -fm dout -ff 40m 0x0 rboot.bin 0x1000 blank_config.bin 0x2000 666.bin
```
![](http://pic.airijia.com/doc/20190703095953.png)

刷入成功后，[渡鸦固件配置 wifi 和 homekit 的方法](diy/raven) 

### 视频中的 1.bat

新建一个文件，命名为 `1.bat`，复制下面的内容填入

**假设** 文件名为 666.bin，所在位置 D 盘 Download 目录，里面的和 `文件名` 要换成实际值

!>  `rboot.bin`，`blank_config.bin`，`666.bin` 这三个固件文件要跟 `1.bat` 在同一个文件夹下

```bat
@echo off

set one=%1

if "%one%"=="" (
echo "你要刷COM几?") else (
echo 刷 **COM%one%**
echo 用 **刷机模式**，硬件设备和USB刷机线一起插入 USB口 ，然后...
pause
esptool.py -p COM8 erase_flash
echo 拔掉整个 USB，用 **刷机模式** 重新插入，然后...
pause
esptool.py -p COM8 --baud 115200 write_flash -fs 8m -fm dout -ff 40m 0x0 rboot.bin 0x1000 blank_config.bin 0x2000 666.bin
echo 拔掉整个 USB，用 **运行模式** 重新插入，然后...
pause
miniterm.py COM8 115200
)


```

进入存放固件文件的文件夹，在空白处 `shift+鼠标右键`，选择 **在此处打开 Powershell 窗口**


![](http://pic.airijia.com/doc/20181218103251.png)


在弹出的 **PowerShell** 窗口中输入，1.bat + 上一步查到的 COM 口编号

```
.\1.bat 3
```

![](http://pic.airijia.com/doc/20181218103944.png)


按提示操作，刷机模式插入 NodeMCU，然后继续


![](http://pic.airijia.com/doc/20181218104019.png)

擦除完成，拔掉 NodeMCU。再次使用刷机模式插入 NodeMCU，然后继续

![](http://pic.airijia.com/doc/20181218104443.png)

开始刷入

![](http://pic.airijia.com/doc/20181218104647.png)


刷入完成，按照提示，拔掉 NodeMCU。再次使用**运行模式**插入 NodeMCU，然后继续

![](http://pic.airijia.com/doc/20181218104732.png)



如图显示才是初始化成功


![](http://pic.airijia.com/doc/20181218105010.png)


如图显示是初始化失败，要检查连线

![](http://pic.airijia.com/doc/20181218105210.png)


反复进入调试模式的方法，输入 miniterm.py + COM口 + 115200

```
miniterm.py COM3 115200
```

如果 COM口正确，会弹出另一个窗口显示调试内容

![](http://pic.airijia.com/doc/20181218105501.png)



## 调试固件

输入 miniterm + 实机COM口 + 波特率 (通常为 115200 )

```shell
miniterm.py COM3 115200
```

![](http://pic.airijia.com/doc/20190703100008.png)


## 备份与恢复固件

!> 用于 Sonoff 原厂固件时，只能一对一恢复，即只能恢复到原备份模块
备份

```shell
esptool.py --port COM3 read_flash 0x00000 0x100000 sonoff-backup.bin
```

恢复

```shell
esptool.py --port COM3 write_flash --flash_size 1MB --flash_mode dout 0x00000 sonoff-backup.bin
```



## 常见问题


Q pip 等各种莫名其妙错误
A 网络原因引起

打开`文件资源管理器`
![](http://pic.airijia.com/doc/20190703100019.png)


填入 

```
%HOMEPATH%
```
后回车，进入到用户文件夹


![](http://pic.airijia.com/doc/20190703100029.png)

新建并进入到名为 `pip` 的文件夹


![](http://pic.airijia.com/doc/20190703100038.png)


新建 `pip.ini` 文件, 填入内容

```
[global]
index-url = https://mirrors.ustc.edu.cn/pypi/web/simple  
format = columns
```

保存, 然后重新执行 pip 安装



Q pip 安装 esptool 显示 UnicodeDecodeError 错误

A 重装pip



Q: 不知道我电脑上 COM 口的编号

A: 命令行输入 

```python
python -m serial.tools.list_ports
```

![](http://pic.airijia.com/doc/20190703100048.png)

COM6 正是 TTL 线插入的 COM 口


Q: 提示 'esptool' , 'miniterm'不是内部或外部命令，也不是可运行的程序或批处理文件。

A: 这两个命令运用的时候需要加上后缀py，即 esptool.py 和  miniterm.py

![](http://pic.airijia.com/doc/20190703100058.png)

Q 提示AttributeError: function 'CancelIoEx' not found

![](http://pic.airijia.com/doc/20181202201630.png)


A 原因 CancelIoEx 函数，只在Vista及以上版本运行

下载安装pyserial-3.0版本成功解决此问题

```
pip install pyserial==3.0
```


## 相关链接

[cmd里面快速粘贴复制的设置方式](https://blog.csdn.net/u010684585/article/details/78655559)