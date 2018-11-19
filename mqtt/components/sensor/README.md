# 传感器组件

诸如温湿度，光照，CO2 等传感器


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
# Example filters:
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

- **offset**: Add an offset to every sensor value.
- **multiply**: Multiply each sensor value by this number.
- **filter_out**: Remove every sensor value that equals this number.
- **filter_nan**: Remove every value that is considered `NAN` (not a number) in C.
- sliding_window_moving_average  : Asimple moving average over the last few values.
  - **window_size**: The number of values over which to perform an average when pushing out a value.
  - **send_every**: How often a sensor value should be pushed out. For example, in above configuration the weighted average is only pushed out on every 15th received sensor value.
  - **send_first_at**: By default, the very first raw value on boot is immediately published. With this parameter you can specify when the very first value is to be sent. Defaults to `1`.
- exponential_moving_average  : A simple  exponential moving average  over the last few values.
  - **alpha**: The forget factor/alpha value of the filter.
  - **send_every**: How often a sensor value should be pushed out.
- **throttle**: Throttle the incoming values. When this filter gets an incoming value, it checks if the last incoming value is at least `specified time period` old. If it is not older than the configured value, the value is not passed forward.
- **heartbeat**: Send the last value that this sensor in the specified time interval. So a value of `10s` will cause the filter to output values every 10s regardless of the input values.
- **debounce**: Only send values if the last incoming value is at least `specified timeperiod` old. For example if two values come in at almost the same time, this filter will only output the last value and only after the specified time period has passed without any new incoming values.
- **delta**: This filter stores the last value passed through this filter and only passes incoming values through if the absolute difference is greater than the configured value. For example if a value of 1.0 first comes in, it’s passed on. If the delta filter is configured with a value of 5, it will now not pass on an incoming value of 2.0, only values that are at least 6.0 big or -4.0.
- **unique**: This filter has no parameter and does one very simple thing: It only passes forward values if they are different from the last one that got through the pipeline.
- **or**: Pass forward a value with the first child filter that returns. Above example will only pass forward values that are *either* at least 1s old or are if the absolute difference is at least 5.0.
- **lambda**: Perform a simple mathematical operation over the sensor values. The input value is `x` and the result of the lambda is used as output. Each floating point operation should have `.0` attached as in above configuration. This will be copied over to the C++ code as a raw 字符串.


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

