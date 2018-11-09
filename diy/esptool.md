## 安装

先安装 python2，然后用 pip (python2 自带) 安装 esptool.py

[esptool 刷机](//player.bilibili.com/player.html?aid=28695194&cid=49702131&page=1 ':include :type=iframe width="720" height="405"')

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

!> 一定要记得勾选“Add python.exe to Path"

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwvye584exj30gm0dvwgk.jpg)

点击左下角开始按钮，输入 cmd
打开：WIN10 命令行提示符，WIN7 命令行

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwvyi5cmq0j30ec0njq39.jpg)

命令行中输入

```python
python --version
```

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwvykeqblpj30hq06g0sq.jpg)

如图显示即正确安装 python 2

?> TODO: path 不正确的解决方法

### 安装 esptool.py

命令行输入

```python
pip install esptool
```

然后输入

```python
esptool.py
```





![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwvynfayc6j308k0bg3yr.jpg)

输入显示即安装完成



## 使用

以下演示，实际使用中要根据实机上的 COM 口编号设置，如 COM3，COM6，COM7

### 刷入

#### MQTT 固件

**基本流程是：刷机模式插入 - 刷入 - 普通模式插入 - 调试或配对**

sonoff basic 刷 MQTT 固件，文件名 666.bin，所在位置D盘 Download 目录，COM6

```python
esptool.py -p COM6 write_flash -fs 1MB -fm dout 0x00000 D:\Download\666.bin
```

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwvzaublysj30w304gdg7.jpg)

刷入成功后，进入 智能中枢 使用

#### 渡鸦 Homekit 直连固件

**基本流程是：刷机模式插入 - 擦除 - 刷机模式插入 - 刷入 - 普通模式插入 - 调试或配对**

esp01 模块刷 渡鸦固件，文件名 777.bin，所在位置D盘 Download 目录，COM7

1. 切换到D:\Download  下

进入D:盘

```cmd
D:
```

进入 Download 目录

```cmd
cd Download
```

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwvzjwaq11j30a90afaa0.jpg)

2. 擦除

```
esptool.py -p COM7 erase_flash
```

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwvzhjncgmj30fj0biq3o.jpg)

3. 刷入 ( 这条命令是**整体，不换行**)

```python
esptool.py -p COM7 -b 115200 write_flash -fs 1MB -fm dout -ff 40m 0x0 rboot.bin 0x1000 blank_config.bin 0x2000 777.bin
```

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwvzkkcgulj316305raam.jpg)

刷入成功后，[渡鸦固件配置 wifi 和 homekit 的方法](diy/raven) 



### 调试

输入 miniterm + 实机COM口 + 波特率 (通常为 115200 )

```python
miniterm.py COM3 115200
```

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwvzdxtl9kj30o2047aa6.jpg)



### 备份与恢复

备份

```python
esptool.py --port COM3 read_flash 0x00000 0x100000 sonoff-backup.bin
```

恢复

```python
esptool.py --port COM3 write_flash --flash_size 1MB --flash_mode dout 0x00000 sonoff-backup.bin
```







## 常见问题



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