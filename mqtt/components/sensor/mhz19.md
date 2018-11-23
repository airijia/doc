# MH-Z19 二氧化碳传感器

MH-Z19 支持二氧化餐（CO2）和温度的探测
![](http://pic.airijia.com/doc/20181123213635.png)




## 网页创建固件





## 文件模板创建

需要搭配 [UART 总线](mqtt/components/uart) 组件，使用波特率 `9600`


```yaml
# 配置 UART 总线 
uart:
  tx_pin: D0
  rx_pin: D1
  baud_rate: 9600
# 配置 传感器
sensor:
  - platform: mhz19
    co2:
      name: "MH-Z19 CO2 Value"
    temperature:
      name: "MH-Z19 Temperature"
    update_interval: 15s
```

### 配置参数

- **co2**(**必填**): 二氧化碳传感器，单位 ppm
  - **name** (**必填**, 字符串): 二氧化碳传感器的名称
  - **id** (*选填*, [ID](mqtt/guides/configuration-types#id)): 本子组件的 ID
  - 以及 [传感器核心组件](mqtt/components/sensor/#基本配置) 和 [MQTT 组件基本配置](mqtt/components/mqtt#MQTT-组件基本配置项) 
- **temperature**(**必填**): 温度传感器的，这个功能官方文档并没有提及，貌似也不太准
  - **name** (**必填**, 字符串): 温度传感器的名称
  - **id** (*选填*, [ID](mqtt/guides/configuration-types#id)): 本子组件的 ID
  - 以及 [传感器核心组件](mqtt/components/sensor/#基本配置) 和 [MQTT 组件基本配置](mqtt/components/mqtt#MQTT-组件基本配置项)
- **update_interval** (*选填*, [时长](mqtt/guides/configuration-types#时长)): [读数间隔](mqtt/components/sensor/#读数间隔)，默认 `15s`
- **uart_id** (*选填*, [ID](mqtt/guides/configuration-types#id)): 指定使用的 UART 总线 ID，只有存在多个 UART 的时候需要配置

?>只有红圈里面的引脚需要连接， 5V 供电

![](http://pic.airijia.com/doc/20181123214512.png)

