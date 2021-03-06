# 网页表单创建 ESPHome 固件

网页表单创建 ESPHome 固件功能可以通过两种方式使用

1. 在线使用，浏览器打开 [http://airijia.com/ctl/firmware/list](http://airijia.com/ctl/firmware/list) ，可使用除 OTA 之外的所有功能
2. [智能中枢](ctl/)中使用，可使用包括 OTA 在内的全部功能

## 创建

打开爱睿家智能中枢的 **固件** 选项卡 或者 [在线](http://airijia.com/ctl/firmware/list)，点击 **新建固件**

![](http://pic.airijia.com/doc/20190703103850.png)

![](http://pic.airijia.com/doc/20190703103900.png)

![](http://pic.airijia.com/doc/20190703103911.png)

主机名，即 hostname，用于局域网内的设备识别；描述仅用于标识，随便填

![](http://pic.airijia.com/doc/20190703104229.png)

<!-- 如果使用的爱睿家智能中枢（airjia/ctl），MQTT 服务器的地址与 ctl 的地址相同，端口是默认的 1883 -->

<!-- 其他场景根据实际情况填写 -->

填入 WiFi 名称和密码

![](http://pic.airijia.com/doc/20190127090824.png)

核对信息无误后提交

![](http://pic.airijia.com/doc/20190127091050.png)


固件模板创建成功，等待云端编译


![](http://pic.airijia.com/doc/20190426125239.png)

一般需要等待 1 分钟左右，如果页面没变化，按 F5 刷新浏览器

显示**已完成**，表示已经编译成功

![](http://pic.airijia.com/doc/20190426125415.png)



## 刷入固件


下载文件后，解压出 `.bin` 文件，刷入工具使用 [ESPHome 固件工具](diy/flasher) ，或者  esptool ([WIN](diy/esptool)，[MAC](diy/esptool_mac))



如果使用的是 airi 智能中枢，还可以 [OTA 刷入](esphome/guides/ota)




## 相关连接


