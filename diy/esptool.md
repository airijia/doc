## 安装

?> 如果插入 TTL刷机线 没有提示音，需要先安装驱动

先安装 python2，然后用 pip (python2 自带) 安装 esptool.py

[esptool 刷机](//player.bilibili.com/player.html?aid=28695194&cid=49702131&page=1 ':include :type=iframe width="720" height="530"')

!> 部分参考此视频

### 安装 Python 2

打开官方网站 python.org

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwvyag3yqzj310n0kadjm.jpg)



进入下载界面，选择 Python 2

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwvyb0leinj30yv0mfacp.jpg)

下载如图所示安装文件

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwvy8pubh0j30ri0r9mzw.jpg)

点击下载到本地的文件安装

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwvybqrqjbj30hr09u0tp.jpg)

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx7e5gzwuij30e00bzn0l.jpg)

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx7e7qttrsj30do0bzad8.jpg)

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx7e8b5xgej30dl0bwq88.jpg)

!> 一定要记得勾选“Add python.exe to Path"

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwvye584exj30gm0dvwgk.jpg)

点击左下角开始按钮，输入 cmd
打开：WIN 10 命令行提示符，WIN 7 命令行

WIN 10

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwvyi5cmq0j30ec0njq39.jpg)

WIN 7




?> 鼠标在命令内容上悬停时，可以点击右侧的**点击复制**，复制内容，然后到 cmd 窗口中鼠标右键粘贴

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx7ea3y5yij30h9047t8h.jpg)





命令行中输入

```shell
python --version
```

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwvykeqblpj30hq06g0sq.jpg)

如图显示即正确安装 python 2



![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx7gsua4eyj30e003ydg8.jpg)

如果提示命令不存在，需要设置环境变量

```shell
path=%path%;C:\Python27
```

然后再执行 `python --version`


!> 如果重试多次依旧不显示，重启电脑后再试



### 安装 esptool.py

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



## 使用

以下演示，实际使用中要根据实机上的 COM 口编号设置，如 COM3，COM6，COM7

### 刷入

#### MQTT 固件

**基本流程是：刷机模式插入 - 刷入 - 拔掉USB - 普通模式插入 - 调试或配对**

sonoff basic 刷 MQTT 固件，文件名 666.bin，所在位置D盘 Download 目录，COM6

```shell
esptool.py -p COM6 write_flash -fs 1MB -fm dout 0x0 D:\Download\666.bin
```

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwvzaublysj30w304gdg7.jpg)

刷入成功后，进入 智能中枢 使用

#### 渡鸦 Homekit 直连固件

**基本流程是：刷机模式插入 - 擦除 - 拔掉USB - 刷机模式插入 - 刷入 - 拔掉USB - 普通模式插入 - 调试或配对**


##### 手动输入命令


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

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwvzjwaq11j30a90afaa0.jpg)

2. 擦除

```
esptool.py -p COM6 erase_flash
```
![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx57bxd1trj30if0cjjs8.jpg)

3. 刷入 ( 这条命令是**整体，不换行**)

```shell
esptool.py -p COM6 -b 115200 write_flash -fs 1MB -fm dout -ff 40m 0x0 rboot.bin 0x1000 blank_config.bin 0x2000 666.bin
```
![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx57abklv5j317d0l6wgh.jpg)

刷入成功后，[渡鸦固件配置 wifi 和 homekit 的方法](diy/raven) 

##### 视频中的 1.bat

新建一个文件，命名为 `1.bat`，复制下面的内容填入

**假设** 文件名为 666.bin，所在位置 D 盘 Download 目录，串口编号 COM6，里面的 `COM口` 和 `文件名` 要换成实际值

!> 1.bat 文件要放到固件文件的同级目录下

```bat
@echo off

echo 刷机模式(安装黑色按钮)把硬件设备和USB刷机线一起插入 USB ...
pause
esptool.py -p COM3 erase_flash
echo 拔掉整个 USB，用刷机模式重新插入...
pause
esptool.py -p COM3 --baud 115200 write_flash -fs 8m -fm dout -ff 40m 0x0 rboot.bin 0x1000 blank_config.bin 0x2000 666.bin
echo 刷固件完成
pause

```

### 调试

输入 miniterm + 实机COM口 + 波特率 (通常为 115200 )

```shell
miniterm.py COM3 115200
```

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwvzdxtl9kj30o2047aa6.jpg)



### 备份与恢复

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
![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx5432fmw0j30ph0d2ta5.jpg)


填入 

```
%HOMEPATH%
```
后回车，进入到用户文件夹


![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx546xpwhkj30gk0efaaw.jpg)

新建并进入到名为 `pip` 的文件夹


![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx54xfn849j30lz04ot8n.jpg)


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

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwzkjfe5rvj30cu06zjre.jpg)

COM6 正是 TTL 线插入的 COM 口


Q: 提示 'esptool' , 'miniterm'不是内部或外部命令，也不是可运行的程序或批处理文件。

A: 这两个命令运用的时候需要加上后缀py，即 esptool.py 和  miniterm.py

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwzkpkkrovj30j60l4dho.jpg)




## 相关链接

[cmd里面快速粘贴复制的设置方式](https://blog.csdn.net/u010684585/article/details/78655559)