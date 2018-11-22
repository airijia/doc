# MQTT 固件工具

刷写和调试 MQTT 固件的专用工具，不需要配置繁杂的参数，只要选择目标 **串口** 和 **固件** 文件即可

软件下载，加 [QQ群 303748038](//shang.qq.com/wpa/qunwpa?idkey=3bbdaf94d24cfee521803a3cf91cca04938b00848b72efdc9a3ec01cac802100)

## 基本界面

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgto0jvc6j30pb0nizlv.jpg)



插入 TLL 刷机线，打开软件，选择`串口`，如果列表为空，先点击`刷新`，如果还没找到串口，则需要 [安装 TTL 线驱动](diy/ttl)

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgtwlzzh9j30o30bvjrp.jpg)

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgtxnl1agj30o60a20t4.jpg)


## 刷写固件

浏览文件并添加

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgtyujlmyj30oj0atq37.jpg)

添加了 D盘 Download 文件夹下的 666.bin

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgtzy4vl9j30o90ayzkk.jpg)


!> 插入 TTL 线的时候，模块一定要处在**刷机模式**，比如 basic 的刷机模式就是按住黑色按钮后再插入 USB 口

点击刷写

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgu36iiwkj30o708xjro.jpg)


控制台开始出现信息


![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgu4jloa0j30oe0f475f.jpg)

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgu4zif2rj30nx0ic76b.jpg)

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgu7vjt18j30o30irjtc.jpg)

刷写完成




## 调试固件

运行模式插入 TTL 线，比如 basic，插入的时候什么都不按就是运行模式

选择`串口`后点击`调试` (不需要选择固件)

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgub1cp33j30o90bfwes.jpg)


如图显示便连接成功了

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxguc9y7pdj30ny0itgm5.jpg)


传感器类型会持续输出日志

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxguej26wkj316o0e3dij.jpg)


开关类型随意从`智能中枢`发出指令，或者按物理按钮

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgui6lh1vj30ry0hr41d.jpg)


## 苹果 MAC 版

只是界面略有不同，功能一样

![](http://pic.airijia.com/doc/20181122212616.png)





