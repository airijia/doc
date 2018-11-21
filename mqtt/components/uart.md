# UART 总线

通用异步收发传输器（Universal Asynchronous Receiver/Transmitter)，通常称作 UART 总线，是一种异步收发传输器

刷 ESP 设备时用的数据线正是 UART 总线


 - TX: 发送数据到另一端
 - RX: 从另一端接收数据

比如连接芯片 A 和传感器 B，那么 A.TX 要跟 B.RX 相连，A.RX 要跟 B.TX 相连，才可以正确收发数据

也有部分设备 TX RX 是翻转的，即 A.TX - B.TX，A.RX - B.RX

!> 总之没数据就反过来接试试

另外 UART 总线能以不同速度运行（波特率 `baud_rate`），错误的波特率会导致乱码


```
# 配置示例
uart:
  tx_pin: D0
  rx_pin: D1
  baud_rate: 9600
```



- **baud_rate** (**必填**, 整数): 波特率，常用值有 `9600` 和 `115200`
- **tx_pin** (*选填*, [引脚](mqtt/guides/configuration-types#引脚)): 发送数据用引脚
- **rx_pin** (*选填*, [引脚](mqtt/guides/configuration-types#引脚)): 接收数据用引脚
- **id** (*选填*, [ID](mqtt/guides/configuration-types#id)): 用于逻辑识别的 ID，同时使用多个 UART 总线时必须设置