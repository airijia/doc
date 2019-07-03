# SPI 总线

SPI是串行外设接口(Serial Peripheral Interface)的缩写。是 Motorola 公司推出的一 种同步串行接口技术，是一种**高速的，全双工，同步**的通信总线。


基本信号线为3根传输线，即SI、SO、SCK。传输的速率由时钟信号SCK决定，SI为数据输入、SO为数据输出。采用SPI总线的系统如图所示，它包含了一个主片和多个从片，主片通过发出片选信号-CS来控制对哪个从片进行通信，当某个从片的-CS信号有效时，能通过SI接收指令、数据，并通过SO发回数据。而未被选中的从片的SO端处于高阻状态。

![](http://pic.airijia.com/doc/20190703103816.png)

- **CLK**: 时钟信号，决定总线传输速率，所有从片共享这条线，又名 `SCK`
- **CS**: 片选信号，单个从片独享，又名 `SS`
- **MOSI**: 数据输入，所有从片共享这条线，又名 `DIN`、`SI`
- **MISO**: 数据输出，所有从片共享这条线，又名 `DOUT`、`SO`

?> 某些只发送或只接收数据的设备，不存在 **MOSI** 或 **MISO** 接口


```
# 配置示例
spi:
  clk_pin: GPIO21
  mosi_pin: GPIO22
  miso_pin: GPIO23
```

## 配置参数

- **clk_pin** (**必填**, [引脚](esphome/guides/configuration-types#引脚)): CLK 线
- **mosi_pin** (*选填*, [引脚](esphome/guides/configuration-types#引脚)): MOSI 线
- **miso_pin** (*选填*, [引脚](esphome/guides/configuration-types#引脚)): miso 线
- **id** (*选填*, [ID](esphome/guides/configuration-types#id)): 当前 SPI 总线的 ID，使用多个 SPI 总线时需要设置。



## 相关链接


 - [SPI总线 通俗易懂讲解](http://bbs.mydigit.cn/read.php?tid=726343)
 - [简单快速的总线协议——SPI](https://zhuanlan.zhihu.com/p/33356830)


