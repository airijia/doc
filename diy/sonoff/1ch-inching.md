

# Itead 1CH Inching 刷机接线方法





这几天在寻找一个智能家居模块，期待的功能有

1. 单路继电器，最好带硬件开关
2. 有自锁和点动两种模式，并支持硬件切换
3. 隔离模式，即低压模块供电 + 无输出电压的继电器纯开关模式

然后就遇到了它...



![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv6z7su6n0j30ku0fa7cg.jpg)

![img](http://dl.itead.cc/IM160722001/Self-lockIing-Inching-Mode-Wireless-Switch-5V-self-locking-1.gif)




![img](http://dl.itead.cc/IM160722001/self-locking-inching-wireless-switch-5V-self-locking-2.gif)



![img](http://dl.itead.cc/IM160722001/self-locking-inching-wireless-switch-5V-inching1.gif)

![img](http://dl.itead.cc/IM160722001/self-locking-inching-wireless-switch-5V-inching2.gif)

很惊艳，对吧

按惯例，我是不用原厂固件的，拿到手第一件事就是开刷

## 硬件

Itead 1CH Inching

各种杜邦线杜邦端子若干...



## 软件

渡鸦固件  itead-1ch-inching



## 接线

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv6zkla2bmj31ai0ka4qq.jpg)

乍一看，跟 basic 有点像，那个 4pin 是依次是 3V3, RX, TX， GND？ 无脑接一下看看

没反应...

那就找资料吧，略去过程不表

最终确认的针脚定义是这个 ↓

![37117875-6ce0241c-2220-11e8-8a70-6b4a9b67a025.jpg (2375Ã1012)](https://user-images.githubusercontent.com/5835733/37117875-6ce0241c-2220-11e8-8a70-6b4a9b67a025.jpg)

呃... RX , TX 就没引出？GPIO0呢？都没接出来？

查下PSF-B01的针脚定义吧

![1536752670358](../../../Users/wbird/AppData/Local/Temp/1536752670358.png)

原来是对 8285 的封装

要这样接线?



![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv702t46dtj31200whnpe.jpg)

上电时，GPIO0接GND，跟 basic 模块上电时按住黑色按钮一样

主要是PSF-B01上那几个脚比较麻烦.. 先看下网友们是如何发挥得把

![29034982-580482a4-7b9a-11e7-901b-a8cf83351804.JPG (3024Ã4032)](https://user-images.githubusercontent.com/29548608/29034982-580482a4-7b9a-11e7-901b-a8cf83351804.JPG)

这个焊的有点夸张了...

![âItead 1CHâçå¾çæç´¢ç"æ](http://tinkerman.cat/wp-content/uploads/2017/02/20170213_221200x.jpg)

这个主意不错



## 最终方案

上电之前，先接好左边的两个 （GND和3V3）

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv70zq8yywj316u0x51kz.jpg)

另分一根GND出来，接到如图的GPIO 0上上电，确认模块已通电，就可以送开（原理跟 basic 上电按黑色按钮一样 ）

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv710szmz5j30wj0tuu0x.jpg)

开始擦除/写入动作前，接上RX/TX两根线



## 测试

所幸，刷完之后工作还挺正常的...

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv711vyklaj31s80s7npf.jpg)

上电默认这个红灯亮，是自锁模式，就是平时常用的开关模式



![](https://i.loli.net/2018/09/12/5b9909f412b4f.png)

按灯左侧按钮切换锁定模式，灯灭，是闪动模式

按中间按钮继电器开，1秒后自动关闭，一般用开关型操作，比如 ↓



![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv71ctn5h3j30py0fo7h4.jpg)

#### 加 QQ 群：303748038，获取相关软件

#### 关注 微信订阅号 获取更多教程

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fv99qfit90j30by0byjsh.jpg)