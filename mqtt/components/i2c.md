# I²C 总线

I2C(Inter－Integrated Circuit)总线是80年代 PHILIPS 公司开发的**两线**串行总线，如今已经成为芯片间**低速**串行通信的事实标准，被广泛使用在消费、控制类电子设备场合

SDA（串行数据线）和SCL（串行时钟线）都是双向I/O线，只需要两根线即可同时连多个器件，每个连接到总线上的器件都有唯一的地址


```
# 配置示例
i2c:
  sda: 21
  scl: 22
  scan: False
```

## 配置参数

- **sda** (*选填*, [引脚](mqtt/guides/configuration-types#引脚)): 串行数据线。ESP8266 通常为 GPIO4，ESP32通常为GPIO21
- **scl** (*选填*, [引脚](mqtt/guides/configuration-types#引脚)): 串行时钟线。ESP8266 通常为 GPIO5，ESP32通常为GPIO22
- **scan** (*选填*, 布尔值): 节点启动时是否扫描 I²C 的地址空间。默认为否 `False`，开启这个功能会严重拖慢启动速度，建议只有在调试未知地址的模块时候使用此功能
- **frequency** (*选填*, 浮点数): 设置 I²C 总线的工作频率，默认为 `“100kHz”`




## 相关链接

 - [简单优雅的总线协议——I2C](https://zhuanlan.zhihu.com/p/31086959)


