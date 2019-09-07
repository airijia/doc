# 小米手环 NFC 版 模拟门禁卡


使用 NFC 小黑(PN532) 复制加密门禁卡到小米手环 NFC 版

以小米手环 4 代为例，方法 3 代和 4 代通用

[小米手环 NFC 版 模拟门禁卡](//player.bilibili.com/player.html?aid=66466058&cid=115271141&page=1 ':include :type=iframe width="720" height="530"')

## 相关产品

| ![nfc-11-1.jpg](http://pic.airijia.com/image/nfc-11-1.jpg ':size=200')| NFC模拟套件 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=600708656610) |  
|:-:|:-:|:-:|

**以下需自备**

- 小米手环NFC版(3代4代都可以)
- 带 USB 接口电脑，操作系统 **WIN 7** 及以上


## 硬件准备

![20190902183429.png](http://pic.airijia.com/image/20190902183429.png)


- 电脑 (WIN7及以上)
- 小米手环 NFC版(3代4代都可以)
- NFC读写器
- UID/CUID 空白卡
- 要复制的门禁卡

## 软件准备

- [驱动及软件下载](http://pic.airijia.com/download/nfc.zip)

下载后解压缩

###  Win 10 驱动

正常是免驱的，插上即用

![](http://pic.airijia.com/doc/20181125122630.png)


### Win 7 驱动

类似这样有感叹号，就是没有正确驱动，需要安装驱动软件

![](http://pic.airijia.com/doc/20181125122418.png)


### MifareOneTool

打开 MifareOneTool 简称“M1T”，用于读卡和写卡


![20190903143703.png](http://pic.airijia.com/image/20190903143703.png)


### WinHex

用于编辑16进制文件

![20190903143629.png](http://pic.airijia.com/image/20190903143629.png)



## 读取门禁卡

将小黑插入到USB口，点击检测连接，如图显示为工作正常，否则需要检查驱动和连线

![20190903143932.png](http://pic.airijia.com/image/20190903143932.png)

将小黑放到想要模拟的卡上

![20190903093526.png](http://pic.airijia.com/image/20190903093526.png)

M1T - 一键解原卡

![20190903093550.png](http://pic.airijia.com/image/20190903093550.png)

开始尝试破解，快的话不到1分钟，慢的要20分钟以上

![20190903093629.png](http://pic.airijia.com/image/20190903093629.png)

保存文件

![20190903093742.png](http://pic.airijia.com/image/20190903093742.png)


## 编辑数据

用 WinHex 打开刚才保存的文件

![20190903093814.png](http://pic.airijia.com/image/20190903093814.png)

数据结构

![20190903093859.png](http://pic.airijia.com/image/20190903093859.png)


将 KEY A 和 KEY B 都换成 `FFFFFFFFFFFF`

![20190903094631.png](http://pic.airijia.com/image/20190903094631.png)

将修改过的文件另存一份

![20190903094803.png](http://pic.airijia.com/image/20190903094803.png)


比较修改前后的文件，区别只有 KEY 的部分


![20190903094927.png](http://pic.airijia.com/image/20190903094927.png)

## 模拟免密卡

将 CUID 卡放到小黑上

![20190903095338.png](http://pic.airijia.com/image/20190903095338.png)

写入修改过的无密码的文件(密钥为全 F)

![20190903095525.png](http://pic.airijia.com/image/20190903095525.png)


将CUID卡放到手环上

![20190903095958.png](http://pic.airijia.com/image/20190903095958.png)

使用小米运动 APP 模拟门禁卡

![20190903100200.png](http://pic.airijia.com/image/20190903100200.png)

用时约两分钟

![20190903100253.png](http://pic.airijia.com/image/20190903100253.png)


## 写入加密卡

将手环放到小黑上

![小黑.jpg](http://pic.airijia.com/image/小黑.jpg)

M1T - 写入普通卡

![20190903101434.png](http://pic.airijia.com/image/20190903101434.png)

选择带密码的文件

![20190903101543.png](http://pic.airijia.com/image/20190903101543.png)


如此显示便是成功了，因为手环的第一个块是锁定的，无法写入

![20190903101604.png](http://pic.airijia.com/image/20190903101604.png)


## 测试

相比门禁卡，手环面积比较小，如果没反应，在读卡区域晃一晃

![20190903102145.png](http://pic.airijia.com/image/20190903102145.png)



刷卡成功

![20190903102209.png](http://pic.airijia.com/image/20190903102209.png)




加 QQ 群: 303748038,获取相关资料

关注 微信订阅号 获取更多资讯
![](http://pic.airijia.com/doc/20190603093904.png)


## 常见问题

### 校园卡/饭卡/水卡等储值卡能模拟么?

如果校园卡/饭卡/水卡等储值卡的金额信息并没有存储在卡上，而是存在服务器上
读卡扣款的过程是读取卡号后在服务器上扣除卡号对应的余额，这种情况是可以模拟的

部分带金额信息的卡也是可以模拟的，甚至可以修改余额，可自行研究，但后果自负！


### 为什么不直接用空白卡找物业写卡?

如果物业肯配合、设备能支持是可以的，但大部分物业要卖卡赚钱的，不愿意配合

空白卡不是真的空白，空白卡的序列号(UID) 不能改，也就是 0 扇区第一行






### IC 卡能模拟么？

ID 卡的通信频率不同，不能模拟



## 拓展内容


### M1 卡的数据结构



## 如何判断卡是否能模拟?

看卡的外形，类型 1 为 ID 卡，频率不同不可以模拟

![IDIC.jpg](http://pic.airijia.com/image/IDIC.jpg)


类型 2 为 IC 卡，常用的又分为三种

- SAK08 Mifare CLassic 1k, 简称 M1 卡，可以模拟
- SAK20 纯CPU卡, 无法模拟
- SAK28 CPU模拟M1卡，部分可模拟

### 使用 MCT 判断IC卡类型

安卓手机下载安装 [MCT( Mifare Classic Tool )](http://pic.airijia.com/download/MifareClassicTool.apk)




### 使用 M1T 判断IC卡类型



### 使用安卓手机

安装 装MCT


# 非接触卡类型







