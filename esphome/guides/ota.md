# OTA 刷入固件

?> 本功能只能在智能中枢 ([airijia/ctl](ctl/)) 的固件界面中使用


使用智能中枢的隔空网刷 (OTA，Over The Air) 功能将 ESPHome 固件刷入局域网内的设备


使用前提：

- 智能中枢已经正确启动
- 目标设备已刷 ESPHome 固件
- 目标设备与智能中枢在同一个局域网内


## 刷入固件

点击网刷

![](http://pic.airijia.com/doc/20190703104322.png)


![](http://pic.airijia.com/doc/20190703104331.png)

!> 这里的主机名，端口和密码，都是想要刷入的目标设备当前的设定值

**比如，目标设备当前运行的固件，主机名为 basic，想要刷入的新固件预设的主机名是 666**

**这里应该填写的值是 basic，而不是 666**







## 调试运行

如果遇到故障不能刷入，可以将设备经由 TTL 线插到电脑上，开启调试功能查找原因

?> 使用运行模式插入设备，不要使用刷机模式



使用 [ESPHome 固件工具](diy/flasher)




![](http://pic.airijia.com/doc/20190703104344.png)


使用 [esptool](diy/esptool)

 

开启调试
`miniterm.py COM6 115200`







![](http://pic.airijia.com/doc/20190703104353.png)


ctl 上点击 OTA 刷入，并正确执行后，调试端会输出类似的信息

如图所示

![](http://pic.airijia.com/doc/20190703104403.png)


OTA 刷入完成后，设备会自动重启

![](http://pic.airijia.com/doc/20190703104414.png)





## 常见问题



Q 提示 Host XXX Not Found

![](http://pic.airijia.com/doc/20190703104423.png)

A hostname 错误，改用 IP 试试；如果用 IP 也不行，检查模块连线状态



Q 提示 No response from the ESP

![](http://pic.airijia.com/doc/20190703104432.png)

A 两种可能
 - 目标地址运行的是其他设备，并不是支持 OTA 网刷的设备
 - 其他问题








Q Error Uploading


A 


![](http://pic.airijia.com/doc/20190703104444.png)


Q No handlers could be found for logger "__main__"

A 主机上python 版本错误， 正常应该为python3
