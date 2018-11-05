# 单总线 LED 灯带控制器

单数据信号的 LED 灯带控制器，总计三根线连接( VCC, GND, DO/SIG/DIN)，典型的型号如 WS2801

实例连接中，由 供电 + 控制器 + 灯带 三部分组成  


[WS2801 灯带](//player.bilibili.com/player.html?aid=35359361&cid=61980878&page=1 ':include :type=iframe width="720" height="1280"')

**airi:8123 和 Hass 中的显示**

## 支持产品

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwxbtrw9fzj30eu09l7ci.jpg)

WS2812灯带


![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwxbejdrw1j30b40b4tdc.jpg)

ESP01S模块用连接器，配合EPS01S模块和灯带使用 [购买](https://item.taobao.com/item.htm?id=551951370518)


## 网页创建固件

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwxd9eryfnj30op0e00tb.jpg)

选择主控盒


![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwxda34579j30ku0djmxh.jpg)

数据端口：即GPIO，可以填开发板上的编号，例如「D1」；也可以填纯数字，例如「2」
灯珠数量：灯带上的灯珠总数，填写错误会导致部分特效工作不正常
RGB 序列：三种颜色的排序；R=红，G=绿，B=蓝，根据实际情况填写




## YAML 模板



