# 网页表单创建 MQTT 固件

## 创建

打开爱睿家智能中枢的 `固件` 选项卡 或者 [在线版](http://airijia.com/ctl/firmware/list)，点击`新建固件`

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



## 刷入固件


下载文件后刷入，工具使用 esptool ([WIN](diy/esptool)，[MAC](diy/esptool_mac)) ，或者 [MQTT 固件工具](diy/esptool/flasher)



如果使用的是 airi 智能中枢，还可以 [OTA 刷入](mqtt/guides/ota)




## 相关连接


