# NodeMCU + SHT30 温湿度

负基础智能家居DIY 




说是负基础，但还是有点基础要求：

1. 有带 USB 接口的电脑 (WIN 和 MAC都可以）
2. 会用电脑，会使用键盘和鼠标
3. 一颗创新的心



## 硬件准备

| ![](http://pic.airijia.com/doc/20181122164201.png ':size=200')| 创客温湿度套件 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=577014079869) | 
|:-:|:-:|:-:|
| ![](http://pic.airijia.com/doc/20181205171519.png ':size=200')| NodeMCU  |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=45559178968) |
| ![](http://pic.airijia.com/doc/20181122161759.png ':size=200')| SHT30 传感器 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=45528507062) |
| ![](http://pic.airijia.com/doc/20181122162418.png ':size=200')| 杜邦线 母对母 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=45608073136) |


**以下需自备**

- 带 USB 接口电脑，操作系统 **WIN7** 以上 或者 **MAC**)
- Micro USB 数据线


## 组装硬件

NodeMCU 和 SHT30 的针脚是已经焊好的，如图连线即可









## 刷 MQTT 固件 (连 Hass 等中枢)

### 中枢配置







### 下载固件



### 刷入固件

?> 首次使用，需要下载 MQTT 固件工具 ( [WIN](http://pic.airijia.com/download/win.zip)，[MAC](http://pic.airijia.com/download/mac.zip))
 
![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgto0jvc6j30pb0nizlv.jpg)





按住 `FLASH` 按钮 将 NodeMCU  插入电脑的 USB 接口

![](http://pic.airijia.com/doc/20181207125621.png)











打开 MQTT 固件工具，选择`串口`，如果列表为空，先点击`刷新`

?>  如果还没找到串口，需要安装 [驱动程序](diy/nodemcu/)

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgtwlzzh9j30o30bvjrp.jpg)

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgtxnl1agj30o60a20t4.jpg)


浏览文件并添加

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgtyujlmyj30oj0atq37.jpg)

添加了 D盘 Download 文件夹下的 666.bin

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgtzy4vl9j30o90ayzkk.jpg)



点击刷写

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgu36iiwkj30o708xjro.jpg)


控制台开始出现信息


![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgu4jloa0j30oe0f475f.jpg)

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgu4zif2rj30nx0ic76b.jpg)

刷写完成

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgu7vjt18j30o30irjtc.jpg)













## 刷渡鸦固件(HomeKit 直连)

### 下载固件

百度云地址



下载如图的 4 个文件

![](http://pic.airijia.com/doc/20181218100123.png)


例如下载到D盘的 **Download** 文件夹下

![](http://pic.airijia.com/doc/20181218100833.png)


按住 `FLASH` 按钮 将 NodeMCU  插入电脑的 USB 接口是**刷机模式**，不按直接插则是**运行模式**

![](http://pic.airijia.com/doc/20181207125621.png)



### 驱动 COM 口


?> 首次使用，需要安装 [python 和 esptool](diy/esptool)

**WIN 10**

**此电脑 - 属性**

![](http://pic.airijia.com/doc/20181218101240.png)


**设备管理器**

![](http://pic.airijia.com/doc/20181218101326.png)


查看 **端口(COM 和 LPT)**，本案例中 `COM3` 便是 NodeMCU


![](http://pic.airijia.com/doc/20181218101423.png)


?>  如果还没找到串口，需要安装 [驱动程序](diy/nodemcu/)

### 刷入固件

进入存放固件文件的文件夹，在空白处 `shift+鼠标右键`，选择 **在此处打开 Powershell 窗口**


![](http://pic.airijia.com/doc/20181218103251.png)


在弹出的 **PowerShell** 窗口中输入，nodemcu_sht30.bat + 上一步查到的 COM 口编号

```
.\nodemcu_sht30.bat 3
```

![](http://pic.airijia.com/doc/20181218103944.png)


按提示操作，刷机模式插入 NodeMCU，然后继续


![](http://pic.airijia.com/doc/20181218104019.png)

擦除完成，拔掉 NodeMCU。再次使用刷机模式插入 NodeMCU，然后继续

![](http://pic.airijia.com/doc/20181218104443.png)

开始刷入

![](http://pic.airijia.com/doc/20181218104647.png)


刷入完成，按照提示，拔掉 NodeMCU。再次使用**运行模式**插入 NodeMCU，然后继续

![](http://pic.airijia.com/doc/20181218104732.png)



如图显示才是初始化成功


![](http://pic.airijia.com/doc/20181218105010.png)


如图显示是初始化失败，要检查连线

![](http://pic.airijia.com/doc/20181218105210.png)


反复进入调试模式的方法，输入 miniterm.py + COM口 + 115200

```
miniterm.py COM3 115200
```

如果 COM口正确，会弹出另一个窗口显示调试内容

![](http://pic.airijia.com/doc/20181218105501.png)



**WIN 7**

同10的步骤




### 配置 Wi-Fi

使用 iPhone 或者 iPad

依次打开 **设置 -  无线局域网**

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv5bv798osj313c0tj11o.jpg)

如图所示「 tomato 」是当前手机接入的 WiFi 网络，「 airi-xxxxxx」是模块的 AP

把手机接入的网络切换过去

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv5bv0fn4pj314z0uqajh.jpg)

接入模块的 AP 后，等大概 20 秒会自动弹出这个界面



![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv5buigbgtj318g0xc7ax.jpg)

选择要接入的 WiFi 名称，属于密码，点击**加入**

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv5bu81f1mj313a0tptd8.jpg)

稍等一会，网页会自动关闭，并自动切换回原 WiFi



### 接入 HomeKit



打开 **家庭** APP

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv5btipro1j31710wdx6p.jpg)

依次选择 **添加配件 - 没有代码或无法扫描**

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv5bt5et03j317p0tre81.jpg)

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv5bsxvarnj31240q11kx.jpg)

正常这里会看到跟刚才接入 AP 同样名称的配件，如果看不到，要多等一会儿

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv5bskjgp7j317y0nfqn0.jpg)

输入交流Q群的号码，也就是设置编码 `38049942`

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv5bsakzffj30v90eutfl.jpg)

等待 30 ~ 60 秒之后，显示配件已添加

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv5brk7sacj317m0tp1kx.jpg)











## 进阶使用





