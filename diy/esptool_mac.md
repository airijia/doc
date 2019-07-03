# esptool.py(MAC) 的安装与使用


?> 如果插入 TTL刷机线 没有提示音，需要先[安装驱动](diy/ttl)



## 安装 Python 

High Sierra 之后的 Mac OS X，已经自带 python2.7，无需安装

CMD+空格 聚焦搜索 打开终端

![](http://pic.airijia.com/doc/20190703094915.png)

命令行输入

```
python -V
```

![](http://pic.airijia.com/doc/20190703094924.png)


MAC 默认是不带 pip 的，所以要先安装pip

```
sudo easy_install pip
```

![](http://pic.airijia.com/doc/20190703094934.png)


## 安装 esptool.py

用 pip 安装 esptool

```
sudo pip install esptool
```

![](http://pic.airijia.com/doc/20190703094944.png)



```
esptool.py
```

![](http://pic.airijia.com/doc/20190703094955.png)

如图显示即安装成功，不要在意错误提示，这里只是试一下命令是否正确安装了


插入 TTL 刷机线，查询 USB串口设备

```
ls /dev/cu.usbserial-*
```

芯片不同的话，也可能这个前缀

```
ls /dev/cu.wchusb*
```


![](http://pic.airijia.com/doc/20190703095004.png)

查询到的串口设备名为 `/dev/cu.usbserial-1410`

![](http://pic.airijia.com/doc/20190703095014.png)

没有查询到设备，这种情况需要装驱动






##  刷入固件

以下演示，实际使用中要根据实机上的 USB 串口编号设置，如上面查到的 `/dev/cu.usbserial-1410`


### ESPHome 固件

**基本流程是：刷机模式插入 - 刷入 - 普通模式插入 - 调试或配对**

 

sonoff basic 刷 ESPHome 固件，文件名 666.bin，所在位置 Downloads 目录，/dev/ttyUSB0

切换到Downloads 目录下

```
cd ~/Downloads
```

![](http://pic.airijia.com/doc/20190703095025.png)




刷入固件

```
esptool.py -p /dev/cu.usbserial-1410 write_flash -fs 1MB -fm dout 0x0 666.bin
```

![](http://pic.airijia.com/doc/20190703095036.png)



刷入成功后，进入 智能中枢 使用


### 渡鸦 Homekit 直连固件


**基本流程是：刷机模式插入 - 擦除 - 刷机模式插入 - 刷入 - 普通模式插入 - 调试或配对**


esp01 模块刷 渡鸦固件，文件名 `777.bin`，所在位置 `Downloads` 目录，串口名 `/dev/cu.usbserial-1410`

1. 切换到Downloads 目录下

   ```
   cd ~/Downloads
   ```

![](http://pic.airijia.com/doc/20190703095049.png)



2. 擦除

 

```
esptool.py -p /dev/cu.usbserial-1410 erase_flash
```

![](http://pic.airijia.com/doc/20190703095058.png)



3. 刷入 ( 这条命令是**整体，不换行**)

```
esptool.py -p /dev/cu.usbserial-1410 -b 115200 write_flash -fs 1MB -fm dout -ff 40m 0x0 rboot.bin 0x1000 blank_config.bin 0x2000 777.bin
```

![](http://pic.airijia.com/doc/20190703095108.png)


 刷入成功后，[渡鸦固件配置 wifi 和 homekit 的方法](/diy/raven) 

 

 

 

## 调试固件

 

输入 miniterm + 实机COM口 + 波特率 (通常为 115200 )

 

```
miniterm.py /dev/cu.usbserial-1410 115200
```


![](http://pic.airijia.com/doc/20190703095118.png)






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
    - [ESPHome 固件](/mqtt/)
    - [渡鸦固件](/diy/raven)

- [ESPHome 固件](/mqtt/)