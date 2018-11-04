# esptool.py 的安装与使用

## 安装

### 安装 Python 

High Sierra 之后的 Mac OS X，已经自带 python2.7，无需安装

CMD+空格 聚焦搜索 打开终端

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwweqm3w88j311p0h947j.jpg)

命令行输入

` python -V `

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwweudy58oj30ga0a0mxn.jpg)

?> TODO: 没有 python 的解决方法

MAC 默认是不带 pip 的，所以要先安装pip

` sudo easy_install pip `

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwwey1vjgkj30q20huwj2.jpg)

然后用 pip 安装 esptool

`sudo pip install esptool`

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwwf0mdiktj30u00uygw3.jpg)



`esptool.py`

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwwf1laus7j30ka0g8mz1.jpg)

如图显示即安装成功，不要在意错误提示，这里只是试一下命令是否正确安装了



## 使用

以下演示，实际使用中要根据实机上的 USB 口编号设置，如 /dev/ttyUSB0 或 /dev/ttyUSB1

###  刷入

 

#### MQTT 固件

**基本流程是：刷机模式插入 - 刷入 - 普通模式插入 - 调试或配对**

 

sonoff basic 刷 MQTT 固件，文件名 666.bin，所在位置 Downloads 目录，/dev/ttyUSB0

切换到Downloads 目录下

``` cd ~/Downloads ```

 ![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwwf8eirlej30e80b0mxj.jpg)

刷入固件

``` esptool.py --port /dev/ttyUSB0 write_flash --flash_size 1MB --flash_mode dout 0x00000 666.bin ```

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwwfaq5x1jj31km074dij.jpg)

 

刷入成功后，进入 智能中枢 使用

 

#### 渡鸦 Homekit 直连固件

 

**基本流程是：刷机模式插入 - 擦除 - 刷机模式插入 - 刷入 - 普通模式插入 - 调试或配对**

 

esp01 模块刷 渡鸦固件，文件名 777.bin，所在位置 Downloads 目录，/dev/ttyUSB0

1. 切换到Downloads 目录下

   ``` cd ~/Downloads ```

    ![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwwf8eirlej30e80b0mxj.jpg)



2. 擦除

 

``` esptool.py -p /dev/ttyUSB0 erase_flash```

 ![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwwfew1eobj30sk062wfx.jpg)

 

3. 刷入 ( 这条命令是**整体，不换行**)

 

``` esptool.py -p /dev/ttyUSB0 --baud 115200 write_flash -fs 1MB -fm dout -ff 40m 0x0 rboot.bin 0x1000 blank_config.bin 0x2000 777.bin```

 ![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwwfhil9lnj31n205qtbd.jpg)



 刷入成功后，[渡鸦固件配置 wifi 和 homekit 的方法](/flash/raven) 

 

 

 

### 调试

 

输入 miniterm + 实机COM口 + 波特率 (通常为 115200 )

 

``` miniterm.py /dev/ttyUSB0 115200 ```

 ![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwwfmilr9dj30js04y74w.jpg)







### 备份与恢复

 

备份

 

`esptool.py --port /dev/ttyUSB0 read_flash 0x00000 0x100000 sonoff-backup.bin`

 

恢复

 

`esptool.py --port /dev/ttyUSB0 write_flash --flash_size 1MB --flash_mode dout 0x00000 sonoff-backup.bin`

