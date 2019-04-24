# 易微联单火改装模块


易微联单火改装模块刷机方法


?> TODO: 视频 2019-4-24

## 常见错误

1. 没进入刷机模式
2. 接错线(比如RX TX接反)
3. TTL 跳线错误
4. 中途断线
5. 数据线有问题
6. 机箱 USB 口供电不足
7. 操作系统残缺
8. 手抖




## 相关产品

| ![](http://pic.airijia.com/doc/20190423112935.png ':size=200')| 单火改装模块 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=551950726641) |
|:-:|:-:|:-:|
| ![](http://pic.airijia.com/doc/20181122161759.png ':size=200')| CH340G 刷机线 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=45528507062) |
| ![](http://pic.airijia.com/doc/20190423111153.png ':size=200')| 刷机顶针 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=592072988764) |
| ![](http://pic.airijia.com/doc/20181122162418.png ':size=200')| 杜邦线 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=45608073136) |

## 其他所需软硬件

带 USB 口的电脑



## 组装硬件

如果所示，针脚定义

![](http://pic.airijia.com/doc/DSC_5553-2.jpg)


按钮在背面

![](http://pic.airijia.com/doc/单火接线.jpg)





用剪刀在背面开个口，足够顶针插入即可













模块有两种工作模式

1. 直接插入 USB，是普通工作模式
2. 按住背面的黑色按钮插入USB，为刷机模式


## 刷 ESPHome 固件

打开 [在线编译固件](http://airijia.com/ctl/firmware/list)，点击 **新建固件**


?> TODO: 视频截图


### 刷入固件



下载文件后，解压出 **666.bin** 文件，刷入工具使用 **ESPHome 固件工具**


- [下载 ESPHome 固件 Windows 版](http://pic.airijia.com/download/win.zip)
- [下载 ESPHome 固件 MAC OS 版](http://pic.airijia.com/download/mac.zip)





### 适配中枢

- [适配 hass](esphome/guides/integration#hass)
- [适配 airi](esphome/guides/integration#airi)




## 进阶使用

**上传模板文件** 的方式创建 ESPHome 固件



[完整模板文件下载](https://gitee.com/airijia/esphome-config/blob/master/Sonoff/SA-018/single.yaml)






## 相关软件

[交流QQ群 303748038](//shang.qq.com/wpa/qunwpa?idkey=3bbdaf94d24cfee521803a3cf91cca04938b00848b72efdc9a3ec01cac802100), 获取软件和固件


关注 微信订阅号 获取更多教程

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv99qfit90j30by0byjsh.jpg)