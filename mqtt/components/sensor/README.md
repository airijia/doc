# 传感器组件

诸如温湿度，光强，CO2 等传感器


## 基本配置

默认情况下，二进制传感器会匹配最接近的 `icon`、`unit_of_measurement` 等值，如果自动匹配的不合意，则可以用自定义的覆盖掉

```yaml
# Example sensor configuration
name: Livingroom Temperature

# 选填 variables:
unit_of_measurement: "°C"
icon: "mdi:water-percent"
accuracy_decimals: 1
expire_after: 30s
filters:
  - sliding_window_moving_average:
      window_size: 15
      send_every: 15
```

**配置项**

- **name** (**必填**, 字符串): 传感器名称
- **unit_of_measurement** (*选填*, 字符串): 度量衡
- **icon** (*选填*, 图标): 自定义显示图标
- **accuracy_decimals** (*选填*, 整数): 小数精度
- **expire_after** (*选填*, [时长](mqtt/guides/configuration-types#时长)): 过期时间
- **filters** (*选填*): 详情查看 [传感器过滤器](#过滤器)

**自动化**

- **on_value** (*选填*, [自动化](mqtt/guides/automations)): An automation to perform when a new value is published. See [on_value](https://esphomelib.com/esphomeyaml/components/sensor/index.html#sensor-on-value).
- **on_value_range** (*选填*, [自动化](mqtt/guides/automations)): An automation to perform when a published value transition from outside to a range to inside. See [on_value_range](https://esphomelib.com/esphomeyaml/components/sensor/index.html#sensor-on-value-range).
- **on_raw_value** (*选填*, [自动化](mqtt/guides/automations)): An automation to perform when a raw value is received that hasn’t passed through any filters. See [on_raw_value](https://esphomelib.com/esphomeyaml/components/sensor/index.html#sensor-on-raw-value).
- 以及 [MQTT 组件](mqtt/components/mqtt#MQTT-组件基本配置项) 的基本配置项



## 过滤器

借助传感器过滤器，可以就很方便的对传感器的读值进行简单的二次处理，复杂的处理还是在智能中枢的  [Filter Sensor](ctl/components/filter_sensor) 中完成

```
# 过滤器示例
filters:
  - offset: 2.0
  - multiply: 1.2
  - filter_out: 42.0
  - filter_nan:
  - sliding_window_moving_average:
      window_size: 15
      send_every: 15
  - exponential_moving_average:
      alpha: 0.1
      send_every: 15
  - throttle: 1s
  - heartbeat: 5s
  - debounce: 0.1s
  - delta: 5.0
  - unique:
  - or:
    - throttle: 1s
    - delta: 5.0
  - lambda: return x * (9.0/5.0) + 32.0;
```

Above example configuration entry is probably a bit useless, but shows every filter there is currently:

- **offset**: 偏移量
- **multiply**: 每次读值都与这个值相乘
- **filter_out**: 移除与这个数值相等的读值
- **filter_nan**: 移除所有非数字`NAN`读值
- **sliding_window_moving_average** : 简单移动平均
  - **window_size**: 计算窗口包含的元素数量
  - **send_every**: 推送频率，上面的实例中，每 `15` 次读值才计算并推送一次值
  - **send_first_at**: 设置在第几次读值发出消息。默认为 `1`，读取到的第一个原始值会未经过任何计算便发布出去
- **exponential_moving_average**  : 指数移动平均
  - **alpha**: 平滑因子
  - **send_every**: 推送频率
- **throttle**: 限制传入的值。当此过滤器获取传入值时，它会检查最后一个传入值是否早于`指定的时间段`。如果它不早于配置的值，则不传递该值
- **heartbeat**: 在指定的时间间隔内发送此传感器的最后一个值。例如设置为 `10s`，那么无论输入值如何，只有 10 秒中的最后一个值会被发送
- **debounce**: 如果最后一个传入值至少`是指定的时间段`，则仅发送值。例如，如果两个值几乎同时进入，则此过滤器将仅输出最后一个值，并且仅在指定的时间段过去之后没有任何新的传入值。
- **delta**: 此过滤器存储通过此过滤器传递的最后一个值，并且只有在绝对差值大于配置值时才传递传入值。例如，如果第一个值为1.0，则传递给它。如果delta过滤器配置为值5，则它现在不会传递传入值2.0，只传递至少6.0大或-4.0的值。
- **unique**: 这个过滤器没有参数，只做一件非常简单的事情：它只传递前向值，如果它们与通过管道的最后一个值不同
- **or**: 使用返回的第一个子过滤器传递值。以上示例仅传递至少1秒的前向值，或者如果绝对差值至少为5.0，则传递前向值。
- **lambda**: 对传感器值执行简单的数学运算。输入值为x，lambda的结果用作输出。每个浮点运算应该具有.0连接，如上面的配置。这将作为原始字符串复制到C ++代码中。


## 读数间隔

默认情况下，MQTT 固件每读值 `15` 次计算平均值后发布一次数值，同时读数间隔 `update_interval` 参数的默认值是每 `15s` 读值一次，也就是全默认的情况下，每 `15s x 15` 3分45秒 发布一次数值。将  `filters:` 设备 `[]` 可以禁用本功能，直接无间隔输出原始值


```
# 配置示例
sensor:
  - platform: adc
    # ...
    filters: []
```

## 触发器

?> TODO: 要复核
### on_value

在指定值触发

```
sensor:
  - platform: dallas
    # ...
    on_value:
      then:
        - light.turn_on:
            id: light_1
            red: !lambda "return x/255;"
```


### on_value_range

在指定值区间触发

```
sensor:
  - platform: dallas
    # ...
    on_value_range:
      above: 5
      below: 10
      then:
        - switch.turn_on: relay_1
```

**配置参数**

- **above** (*选填*, 浮点数): 可触发的最小值
- **below** (*选填*, 浮点数): 可触发的最大值


### on_raw_value

在指定原始值触发

```
sensor:
  - platform: dallas
    # ...
    on_value:
      then:
        - light.turn_on:
            id: light_1
            red: !lambda "return x/255;"
```


### lambda

使用 [lambda 表达式](mqtt/guides/automations#lambda-表达式) 控制传感器发布和获取状态

- `publish_state()`: 在任意位置使用 lambda 手动控制传感器发布状态

  ```
  // Within lambda, push a value of 42.0
  id(my_sensor).publish_state(42.0);
  ```

- `.state`: 在任意位置使用 lambda 手动获取传感器状态
  ```
  // For example, create a custom log message when a value is received:
  ESP_LOGI("main", "Value of my sensor: %f", id(my_sensor).state);
  ```

- `raw_state`: 在任意位置使用 lambda 手动获取传感器的原始状态

  ```
  // For example, create a custom log message when a value is received:
  ESP_LOGI("main", "Raw Value of my sensor: %f", id(my_sensor).raw_state);
  ```

## 相关链接

