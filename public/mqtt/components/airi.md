# 核心组件配置

编译固件时用到的基本信息，设置模块名称，芯片组和主板信息


```yaml
# 配置示例
airi:
  name: livingroom
  platform: ESP8266
  board: esp01_1m
```

## 配置参数

- **name** (**必填**, 字符串): 模块的名称，同时也是默认的主机名，在同一局域网内应该是唯一的，不可以重名。只可以使用大小写字母，数字和下划线
- **platform** (**必填**, 字符串): 主板芯片组，可选项 `ESP32` 和 `ESP8266`
- **board** (**必填**, 字符串): 主板型号，常用值有 `esp01_1m`(sonoff  系列和 esp01)，`d1_mini`，`nodemcuv2`，`nodemcu-32s`
- **on_boot** (*选填*, [自动化](mqtt/guides/automations)): 模块启动时执行的自动化动作 详情看 [on_boot](#on_boot).
- **on_shutdown** (*选填*, [自动化](mqtt/guides/automations)): 模块启动时执行的自动化动作 详情看 [on_shutdown](#on_shutdown).
- **on_loop** (*选填*, [自动化](mqtt/guides/automations)): 模块启动时执行的自动化动作 详情看 [on_loop](#on_loop).

## 动作

### on_boot

ESP 模块启动时执行的自动化动作，此动作默认排在所有启动项初始化完成之后，可以通过修改优先权 `priority` 来修改自动化动作的启动次序

```yaml
airi:
  # ...
  on_boot:
    priority: -10
    # ...
    then:
      - switch.turn_off:
          id: switch_1
```

- **priority** (*选填*, 浮点数): 此区段代码指定的次序，越大的值越早执行，默认值`-10` 在最后执行。可以设置`100`~`-10`区间内的任意值，比如`99`、`66.6`和`-0.1` 都可以正确识别
  - `100`: 所有的基础硬件初始化的时间点
  - `10`: WiFi 初始化
  - `7.5`:  MQTT 初始化
  - `0.0`: 大部分传感器
  - `-5.0`: 大部分自定义功能的配置
  - `-10.0`: 所有初始化基本完成
<!-- ，比如设置开关的初始状态就要放在此处 -->



### on_shutdown

ESP 模块即将关闭时时执行的自动化动作，



```yaml
airi:
  # ...
  on_boot:
    priority: -10
    # ...
    then:
      - switch.turn_off:
          id: switch_1
```


### on_loop

每个循环 (大概 16ms) 均执行的自动化动作


```yaml
airi:
  # ...
  on_loop:
    then:
      # do something
```































