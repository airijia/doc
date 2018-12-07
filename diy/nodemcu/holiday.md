# 圣诞树彩灯




[](//player.bilibili.com/player.html?aid=35602736&cid=62434203&page=1 ':include :type=iframe width="720" height="1280"')

节日装饰彩灯





## 硬件准备



| ![](http://pic.airijia.com/doc/20181122164201.png ':size=200')| DIY 装饰彩灯套餐 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=583765007252) |
|:-:|:-:|:-:|
| ![](http://pic.airijia.com/doc/20181205171519.png ':size=200')| NodeMCU  |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=45559178968) |
| ![](http://pic.airijia.com/doc/20181207141945.png ':size=200')| 灯串 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=45559318689) |
| ![](http://pic.airijia.com/doc/20181207143052.png ':size=200')| 3A 数据线 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=551847261565) |
| ![](http://pic.airijia.com/doc/20181207143538.png ':size=200')| 3P 转接头 |  [![买买买](http://cdn.airijia.com/b6eca8da724952cc0251.gif ':size=150')](https://item.taobao.com/item.htm?id=554416181732) |


**以下需自备**

- 带 USB 接口电脑，操作系统 **WIN7** 以上 或者 **MAC**)

- USB电源，或者**充电宝**(推荐)



## 编译固件




打开 [在线编译固件](http://airijia.com/ctl/firmware/list)

如图选择






默认情况下，MQTT 服务器填入智能中枢的 IP 即可，例如 `192.168.1.201`，端口默认 `1883`



彩灯设置，默认值即可，灯珠数 `50`，排序 `RGB`







等待编译



编译完成







下载文件到本地，解压，`666.bin` 文件



## 刷入固件

下载 MQTT 固件工具 ( [WIN](http://pic.airijia.com/download/win.zip)，[MAC](http://pic.airijia.com/download/mac.zip))
 
![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgto0jvc6j30pb0nizlv.jpg)





按住 `FLASH` 将 NodeMCU  插入电脑的 USB 接口

![](http://pic.airijia.com/doc/20181207125621.png)











打开 MQTT 固件工具，选择`串口`，如果列表为空，先点击`刷新`

?>  如果还没找到串口，需要安装 [驱动程序](mqtt/devices/nodemcu)

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgtwlzzh9j30o30bvjrp.jpg)

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgtxnl1agj30o60a20t4.jpg)


浏览文件并添加

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgtyujlmyj30oj0atq37.jpg)

添加了 D盘 Download 文件夹下的 666.bin

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgtzy4vl9j30o90ayzkk.jpg)


!> 插入 TTL 线的时候，模块一定要处在**刷机模式**，即按住 `RESET` 按钮后再插入 USB 口

点击刷写

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgu36iiwkj30o708xjro.jpg)


控制台开始出现信息


![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgu4jloa0j30oe0f475f.jpg)

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgu4zif2rj30nx0ic76b.jpg)

刷写完成

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fxgu7vjt18j30o30irjtc.jpg)





## 连接灯串


![](http://pic.airijia.com/doc/20181207125233.png)


需要连3根线，5V GND 信号


![](http://pic.airijia.com/doc/20181207145427.png)



信号默认接在 D5,



cp2102 接 vin
ch340g 接 






## 中枢设置

浏览器打开 `192.168.1.201:8233`

![](http://pic.airijia.com/doc/20181207100541.png)

点击编辑

![](http://pic.airijia.com/doc/20181207102553.png)



![](http://pic.airijia.com/doc/20181207102637.png)


全部修改完后**提交**重启


![](http://pic.airijia.com/doc/20181207102721.png)


|英文名   | 中文名   | 简介  |
|:-:|:-:|:-:|
| color_wipe | 颜色擦除  | 随机生成的颜色队列，步进并替换掉当前的显示 |
| fireworks | 焰火  | 类似焰火样式的多彩效果  |
| flicker | 同步闪烁  | 整体在当前的颜色和亮度值附近徘徊  |
| flicker_fastled | 异步闪烁  | 各个点分别当前颜色和亮度值附近徘徊  |
| rainbow | 彩虹  | 类似彩虹的多彩效果 |
| random |  随机色 | 整体变换为不同的颜色  |
| scan |  流光 | 单点、快速的做往复运动 |
| twinkle |  闪亮 |  随机的单点渐亮渐灭 |
| twinkle_random | 随机色闪亮 |  随机单点、随机颜色的渐亮渐灭 |
| z!!_strobe |  爆闪 |  **最高亮度**爆闪！！！除非有特殊需求，否则不建议使用 |








## 添加到 Apple HomeKit

浏览器打开 `192.168.1.201:8233`，查看首页左上角的一串**随机生成**数字

![](http://pic.airijia.com/doc/20181207104512.png)

打开 **家庭** APP

![](http://pic.airijia.com/doc/20181207105513.png)



依次选择 **添加配件 - 没有代码或无法扫描**

![](http://pic.airijia.com/doc/20181207105902.png)


![](http://pic.airijia.com/doc/20181207105927.png)



![](http://pic.airijia.com/doc/20181207105944.png)

![](http://pic.airijia.com/doc/20181207110100.png)

输入刚才记下的那一串**随机生成**数字


![](http://pic.airijia.com/doc/20181207110115.png)



添加成功

![](http://pic.airijia.com/doc/20181207110402.png)


![](http://pic.airijia.com/doc/20181207110427.png)


![](http://pic.airijia.com/doc/20181207110452.png)


## HomeKit 控制

点击开灯

![](http://pic.airijia.com/doc/20181207110542.png)


长按弹出详细设置窗口

![](http://pic.airijia.com/doc/20181207110631.png)

调整亮度

![](http://pic.airijia.com/doc/20181207110705.png)

调整颜色

![](http://pic.airijia.com/doc/20181207110745.png)

![](http://pic.airijia.com/doc/20181207110805.png)


切换特效

![](http://pic.airijia.com/doc/20181207110848.png)

## 安卓或者网页控制

浏览器打开 `192.168.1.201:8123`


**灯光** 条目下可以控制灯串的开关

![](http://pic.airijia.com/doc/20181207095050.png)

点击弹出的浮动窗可以控制 **亮度**，**颜色** 和 **特效**

![](http://pic.airijia.com/doc/20181207095310.png)



**开关** 条目下可以切换灯串的特效


![](http://pic.airijia.com/doc/20181207095118.png)






## 其他板的接线


![](http://pic.airijia.com/doc/20181207145200.png)

