# 攀藤系列颗粒物浓度传感器

驱动 PMS5003、PMS7003等型号的颗粒传感器




## 网页创建固件





## 文件模板创建

需要搭配 [UART 总线](mqtt/components/uart) 组件，使用波特率 `9600`


修改参数中 `type:` 来支持不同的设备类型：

- `PMSX003` 用于 PMS5003、PMS7003 等型号，支持 `pm_1_0`、`pm_2_5` 和`pm_10_0` 输出
- `PMS5003T` 用于 PMS5003T，支持 `pm_2_5`、`temperature` 和 `humidity` 输出
- `PMS5003ST` 用于 PMS5003ST，支持 `pm_2_5`、`temperature`、`humidity` 和 `formaldehyde` 输出


```yaml
# 配置 UART 总线 
uart:
  tx_pin: D0
  rx_pin: D1
  baud_rate: 9600
# 配置 传感器
sensor:
  - platform: pmsx003
    type: PMSX003
    pm_1_0:
      name: "Particulate Matter <1.0µm Concentration"
    pm_2_5:
      name: "Particulate Matter <2.5µm Concentration"
    pm_10_0:
      name: "Particulate Matter <10.0µm Concentration"
```

### 配置参数

- **pm_1_0** (*选填*): 
  - **name** (**必填**): PM 1.0 的显示名称
  - 以及 [传感器核心组件](mqtt/components/sensor/#基本配置) 和 [MQTT 组件基本配置](mqtt/components/mqtt#MQTT-组件基本配置项)
- **pm_2_5** (*选填*):
  - **name** (**必填**): PM 2.5 的显示名称
  - 以及 [传感器核心组件](mqtt/components/sensor/#基本配置) 和 [MQTT 组件基本配置](mqtt/components/mqtt#MQTT-组件基本配置项)
- **pm_10_0** (*选填*): 
  - **name** (**必填**): PM 10 的显示名称
  - 以及 [传感器核心组件](mqtt/components/sensor/#基本配置) 和 [MQTT 组件基本配置](mqtt/components/mqtt#MQTT-组件基本配置项)
- **temperature** (*选填*): `PMS5003T` 和 `PMS5003ST` 可用
  - **name** (**必填**): 温度传感器的名称
  - 以及 [传感器核心组件](mqtt/components/sensor/#基本配置) 和 [MQTT 组件基本配置](mqtt/components/mqtt#MQTT-组件基本配置项)
- **humidity** (*选填*): `PMS5003T` 和 `PMS5003ST` 可用 
  - **name** (**必填**): 湿度传感器的名称
  - 以及 [传感器核心组件](mqtt/components/sensor/#基本配置) 和 [MQTT 组件基本配置](mqtt/components/mqtt#MQTT-组件基本配置项)
- **formaldehyde** (*选填*): `PMS5003ST` 可用
  - **name** (**必填**): 甲醛传感器的名称
  - 以及 [传感器核心组件](mqtt/components/sensor/#基本配置) 和 [MQTT 组件基本配置](mqtt/components/mqtt#MQTT-组件基本配置项)
- **uart_id** (*选填*, [ID](mqtt/guides/configuration-types#id)): 指定使用的 UART 总线 ID，只有存在多个 UART 的时候需要配置