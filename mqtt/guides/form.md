# 网页表单创建 MQTT 固件

## 创建

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fww2lrfcnaj30qm0f8q3f.jpg)

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fww2nttyuyj30mo0e4mxs.jpg)

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fww2o32id0j30l40bkaa9.jpg)

主机名，即 hostname，用于局域网内的设备识别

描述仅用于标识，随便填

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fww2t1m1exj30vj0dadg5.jpg)

如果使用的爱睿家智能中枢（airjia/ctl），MQTT 服务器的地址与 ctl 的地址相同，端口是默认的 1883

其他场景根据实际情况填写

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fww2wznn82j30tn0p1wf8.jpg)

核对信息无误后提交

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fww4ajd4jjj30jm0fbmxf.jpg)

固件模板创建成功，等待云端编译

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fww4awjtgpj311r0grdgu.jpg)



一般需要等待 2-5 分钟，如果页面没变化，按 F5 刷新浏览器

显示**已完成**，表示已经编译成功

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fww4eac4ntj30w90dk3z4.jpg)



## 下载

下载文件到本地后解压缩，主机名.bin 文件就是供刷机的固件文件

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fww4qaz3kbj30hx06ot90.jpg)

刷机方法见 [esptool.py 的安装与使用](/flash/esptool?id=mqtt-固件)

## 刷入



即 OTA 网刷，需要 USB 连接，直接通过网络刷入目标模块，需要：

1. 目标模块已经刷入过 MQTT 固件
2. 目标模块已经启动并接入 WiFi

!> 本功能仅可在智能中枢（airijia/ctl）上使用

?> TODO: 等待配图





