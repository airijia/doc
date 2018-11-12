# OTA 刷入固件

将编译好的固件刷入局域网内的设备，本功能只有在智能中枢(airijia/ctl)才可以使用

## 使用前提
 - 智能中枢已经正确启动
 
 - 目标已刷入过 MQTT 固件并正常运行


## 日常使用

点击网刷

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwzm9eq0sij30yn0cp74n.jpg)


![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwzmhg6vzhj30ia0eq3yr.jpg)


!> 这里的主机名，端口和密码，都是想要刷入的目标设备当前的设定值

**比如，目标设备当前运行的固件，主机名为 basic，想要刷入的新固件预设的主机名是 666**

**这里应该填写的值是 basic，而不是 666**







## 调试

如果遇到故障不能刷入，可以将设备经由 TTL 线插到电脑上

开启调试
`miniterm.py COM6 115200`







![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwzm0k3baej30ns0kf0vo.jpg)


ctl 上点击 OTA 刷入，并正确执行后，调试端会输出类似的信息

如图所示

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwzm58hv5zj30mk0n2wil.jpg)



OTA 刷入完成后，设备会自动重启

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwzm6wsl3mj30s90pbdjn.jpg)






## 常见问题



Q 提示 Host XXX Not Found

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwzlwi5ydxj30m705g0sq.jpg)


A hostname 错误，改用 IP 试试；如果用 IP 也不行，检查模块连线状态



Q 提示 No response from the ESP

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwzmjd2ophj30n4046t8q.jpg)

A 两种可能
 - 目标地址运行的是其他设备，并不是支持 OTA 网刷的设备
 - 其他问题




Q No handlers could be found for logger "__main__"






