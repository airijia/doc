# esptool.py(MAC) 的安装与使用


?> 如果插入 TTL刷机线 没有提示音，需要先[安装驱动](diy/ttl)



## 安装 Python 

High Sierra 之后的 Mac OS X，已经自带 python2.7，无需安装

CMD+空格 聚焦搜索 打开终端

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwweqm3w88j311p0h947j.jpg)

命令行输入

```
python -V
```

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwweudy58oj30ga0a0mxn.jpg)


MAC 默认是不带 pip 的，所以要先安装pip

```
sudo easy_install pip
```

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwwey1vjgkj30q20huwj2.jpg)


## 安装 esptool.py

用 pip 安装 esptool

```
sudo pip install esptool
```

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwwf0mdiktj30u00uygw3.jpg)



```
esptool.py
```

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwwf1laus7j30ka0g8mz1.jpg)

如图显示即安装成功，不要在意错误提示，这里只是试一下命令是否正确安装了


插入 TTL 刷机线，查询 USB串口设备

```
ls /dev/cu.usbserial-*
```

芯片不同的话，也可能这个前缀

```
ls /dev/cu.wchusb*
```


![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxbghe7995j30gy08et9e.jpg)

查询到的串口设备名为 `/dev/cu.usbserial-1410`

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxbgj3xu1uj310g09275m.jpg)

没有查询到设备，这种情况需要装驱动






##  刷入固件

以下演示，实际使用中要根据实机上的 USB 串口编号设置，如上面查到的 `/dev/cu.usbserial-1410`


### MQTT 固件

**基本流程是：刷机模式插入 - 刷入 - 普通模式插入 - 调试或配对**

 

sonoff basic 刷 MQTT 固件，文件名 666.bin，所在位置 Downloads 目录，/dev/ttyUSB0

切换到Downloads 目录下

```
cd ~/Downloads
```

 ![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwwf8eirlej30e80b0mxj.jpg)




刷入固件

```
esptool.py -p /dev/cu.usbserial-1410 write_flash -fs 1MB -fm dout 0x0 666.bin
```

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxbgt79ztzj31ay0i6aee.jpg)



刷入成功后，进入 智能中枢 使用


### 渡鸦 Homekit 直连固件


**基本流程是：刷机模式插入 - 擦除 - 刷机模式插入 - 刷入 - 普通模式插入 - 调试或配对**


esp01 模块刷 渡鸦固件，文件名 `777.bin`，所在位置 `Downloads` 目录，串口名 `/dev/cu.usbserial-1410`

1. 切换到Downloads 目录下

   ```
   cd ~/Downloads
   ```

    ![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwwf8eirlej30e80b0mxj.jpg)



2. 擦除

 

```
esptool.py -p /dev/cu.usbserial-1410 erase_flash
```

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxbh2mipqvj30xa0imgpp.jpg)



3. 刷入 ( 这条命令是**整体，不换行**)

```
esptool.py -p /dev/cu.usbserial-1410 -b 115200 write_flash -fs 1MB -fm dout -ff 40m 0x0 rboot.bin 0x1000 blank_config.bin 0x2000 777.bin
```

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxbh5jwvhsj31f803idh6.jpg)



 刷入成功后，[渡鸦固件配置 wifi 和 homekit 的方法](/diy/raven) 

 

 

 

## 调试固件

 

输入 miniterm + 实机COM口 + 波特率 (通常为 115200 )

 

```
miniterm.py /dev/cu.usbserial-1410 115200
```


![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxbh8h21q0j30z405ita6.jpg)







## 常见问题


Q： Errno 16 resource busy
显示端口已经占用，不能擦出和刷机


A: 直接执行

```
esptool.py erase_flash
```

工具会搜索可执行的 COM 口，并自动执行擦除，一般情况下可以找到正确的串口名称


## 相关链接


- [刷固件资料集合](/diy/)
    - [esptool.py 的安装与使用](/diy/esptool)
    - [MQTT 固件](/mqtt/)
    - [渡鸦固件](/diy/raven)

- [MQTT 固件](/mqtt/)