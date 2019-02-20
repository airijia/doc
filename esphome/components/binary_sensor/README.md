# 二进制传感器核心组件

二进制传感器本质上是个开关量。比如应用在开关上，自复位按钮就是个按下为 `ON`，抬起为 `OFF` 的二进制传感器。非自复位的，比如传统墙壁开关，默认状态是保持 `OFF`，按下开关，是保持 `ON`。

同理，作为传感器使用，比如人体传感器，`on_press` 就是激活，`on_release` 是非激活。

作为传感器使用时，要定义名称，这样才可以在前端 (智能中枢和 Homekit 等) 中显示；反之，作为开关使用时，则只定义 `ID`，不要定义名称，只通过逻辑调用，不在前端显示。



## 基本配置

默认情况下，二进制传感器会匹配最接近的 `device_class`，如果自动匹配的不合意，则可以用自定义的覆盖掉

```yaml
binary_sensor:
  - platform: ...
    device_class: motion
```

**配置项**

- **device_class** (*选填*, 字符串): 详情查看 [binary_sensor](ctl/components/binary_sensor)
- **filters** (*选填*, 列表):  详情查看 [二进制传感器过滤器](#过滤器)

**自动化**

- **on_press** (*选填*, [自动化](esphome/guides/automations)): 按下按钮时触发，[on_press](esphome/components/binary_sensor/#on_press)
- **on_release** (*选填*, [自动化](esphome/guides/automations)): 松开按钮时触发，[on_release](esphome/components/binary_sensor/#on_release)
- **on_click** (*选填*, [自动化](esphome/guides/automations)): 单击按钮时触发，[on_click](esphome/components/binary_sensor/#on_click)
- **on_double_click** (*选填*, [自动化](esphome/guides/automations)): 双击按钮时触发，[on_double_click](esphome/components/binary_sensor/#on_double_click)
<!-- - **on_multi_click** (*选填*, [自动化](esphome/guides/automations)): -->
- 以及 [MQTT 组件](esphome/components/mqtt#MQTT-组件基本配置项) 的基本配置项



## 过滤器

借助二进制传感器的过滤器，可以就很方便的对传感器的读值进行二次处理，类似 [传感器过滤器](esphome/components/sensor/#过滤器).

```yaml
binary_sensor:
  - platform: ...
    # ...
    filters:
      - invert:
      - delayed_on: 100ms
      - delayed_off: 100ms
      - lambda: >-
          if (id(other_binary_sensor).state) {
            return x;
          } else {
            return {};
          }
      - heartbeat: 5s
```

**配置参数**

- **invert**: 翻转
- **delayed_on**: 收到 `ON` 信号时，开始计时，计时结束后，如果 `ON` 信号仍在，则正式发布状态为 `ON`，如果在等待过程中收到 `OFF` 信号，则立即取消发布。简单说，按下按钮足够长的时间才触发。**在触摸按钮防抖动上很好用**
- **delayed_off**: 类似 `delayed_on`，用于判断 `OFF`
- **lambda**: 将 [lambda 表达式](esphome/guides/automations#lambda-表达式) 用作过滤器，可以引入其他判断条件来决定返回值的方式， `x`为传感器的实际值， `true` 为 ON, `false` 为 OFF, `{}` 为结束当前过滤器链
- **heartbeat**: 定期以给定间隔发布传感器的状态。状态变化时依旧会即时发布，不受此周期影响




## 触发器

### on_press

按下按钮时触发

```yaml
binary_sensor:
  - platform: gpio
    # ...
    on_press:
      then:
        - switch.turn_on: relay_1
```


### on_release

松开按钮时触发

```yaml
binary_sensor:
  - platform: gpio
    # ...
    on_release:
      then:
        - switch.turn_off: relay_1
```

### on_click

单击按钮时触发，即 `min_length` < (`on_press`+ `on_release`) < `max_length` 时触发

```yaml
binary_sensor:
  - platform: gpio
    # ...
    on_click:
      min_length: 50ms
      max_length: 350ms
      then:
        - switch.turn_off: relay_1
```

**配置参数**

- **min_length** (*选填*, [时长](esphome/guides/configuration-types#时长)): 判断为单次点击最短时长，默认为 `50ms`
- **max_length** (*选填*, [时长](esphome/guides/configuration-types#时长)): 判断为单次点击最大时长，默认为 `350ms`


### on_double_click

双击按钮时触发，即单击点击 `on_click` x 2

```yaml
binary_sensor:
  - platform: gpio
    # ...
    on_double_click:
      min_length: 50ms
      max_length: 350ms
      then:
        - switch.turn_off: relay_1
```

**配置参数**

- **min_length** (*选填*, [时长](esphome/guides/configuration-types#时长)): 判断为单次点击最短时长，默认为 `50ms`
- **max_length** (*选填*, [时长](esphome/guides/configuration-types#时长)): 判断为单次点击最大时长，默认为 `350ms`



### on_multi_click

预先定义一组动作，按钮执行匹配预定义序列的动作时触发

```yaml
binary_sensor:
  - platform: gpio
    # ...
    on_multi_click:
    - timing:
        - ON for at most 1s
        - OFF for at most 1s
        - ON for 0.5s to 1s
        - OFF for at least 0.2s
      then:
        - logger.log: "Double-Clicked"
```

**配置实例**

- **timing**(**必填**): 定义多次点击动作序列的时长，语法结构如下
  - `<ON/OFF> for <TIME> to <TIME>`
  - `<ON/OFF> for at least <TIME>`
  - `<ON/OFF> for at most <TIME>`
- **invalid_cooldown** (*选填*, [时长](esphome/guides/configuration-types#时长)): 多击动作的匹配开始时，如果后续的动作与预先设置的动作序列的时长 `timing`  不能完全匹配，视作没有激活多击动作。多击动作将在此参数设置的时长后才恢复匹配功能，默认 `1s`


!> 务必在每段 `timing` 的结尾处设置 `OFF`，不然当存在多个序列时长定义时，极易混淆

正确的样例，每段 `timing` 都以 `OFF` 结束

```yaml
on_multi_click:
- timing:
    - ON for at most 1s
    - OFF for at most 1s
    - ON for at most 1s
    - OFF for at least 0.2s
  then:
    - logger.log: "Double Clicked"
- timing:
    - ON for 1s to 2s
    - OFF for at least 0.5s
  then:
    - logger.log: "Single Long Clicked"
- timing:
    - ON for at most 1s
    - OFF for at least 0.5s
  then:
    - logger.log: "Single Short Clicked"
```




## 条件


### is_on

检查二进制传感器的值是否为 `ON`

```yaml
on_...:
  if:
    condition:
      binary_sensor.is_on: my_binary_sensor
```


### is_off

检查二进制传感器的值是否为 `OFF`

```yaml
on_...:
  if:
    condition:
      binary_sensor.is_off: my_binary_sensor
```


## lambda

使用 [lambda 表达式](esphome/guides/automations#lambda-表达式) 控制二进制传感器发布和获取状态


- `publish_state()`: 在任意位置使用 lambda 手动控制二进制传感器发布状态

  ```c++
  // Within lambda, publish an OFF state.
  id(my_binary_sensor).publish_state(false);
  
  // Within lambda, publish an ON state.
  id(my_binary_sensor).publish_state(true);
  ```

- `.state`: 在任意位置使用 lambda 手动获取二进制传感器状态

  ```c++
  // Within lambda, get the binary sensor state and conditionally do something
  if (id(my_binary_sensor).state) {
    // Binary sensor is ON, do something here
  } else {
    // Binary sensor is OFF, do something else here
  }
  ```




## 相关链接

