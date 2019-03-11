# 灯类核心组件

灯类组件共用的核心组件


## 灯动作

配合 [自动化](esphome/guides/automations) 的动作

### light.toggle

此动作用于切换指定 ID 的灯的开关状态

```yaml
on_...:
  then:
    - light.toggle:
        id: light_1
    # 缩写:
    - light.toggle: light_1
```

**配置参数**

- **id** (**必填**, [ID](esphome/guides/configuration-types#id)): 灯的 ID
- **transition_length** (*选填*, [时长](esphome/guides/configuration-types#时长), [模板化](esphome/guides/automations#模板化)): 过度时长


**模板化** 

相同动作使用 [模板化](esphome/guides/automations#模板化) 的写法

```c++
// 定义动作
auto call = id(light_1).toggle();
// 执行动作
call.perform();
```

### light.turn_on

此动作用于打开指定 ID 的灯



```yaml
on_...:
  then:
    - light.turn_on:
        id: light_1
        brightness: 100%
        red: 100%
        green: 100%
        blue: 1.0

    # 模板化
    - light.turn_on:
        id: light_1
        brightness: >-
          // output value must be in range 0 - 1.0
          return id(some_sensor).state / 100.0;

    # 缩写
    - light.turn_on: light_1
```

**配置参数**

- **id** (**必填**, [ID](esphome/guides/configuration-types#id)): 当前组件的 ID
- **transition_length** (*选填*, [时长](esphome/guides/configuration-types#时长), [模板化](esphome/guides/automations#模板化)): 过度时长
- **brightness** (*选填*, 百分比, [模板化](esphome/guides/automations#模板化)): 开灯时的亮度，赋值范围在 `0% ~ 100%` 或 `0.0 ~ 1.0`之间。默认不改变亮度
- **red** (*选填*, 百分比, [模板化](esphome/guides/automations#模板化)): 开灯时红光通道的值，赋值范围在 `0% ~ 100%` 或 `0.0 ~ 1.0`之间。默认不改变原值
- **green** (*选填*, 百分比, [模板化](esphome/guides/automations#模板化)): 开灯时绿光通道的值，赋值范围在 `0% ~ 100%` 或 `0.0 ~ 1.0`之间。默认不改变原值
- **blue** (*选填*, 百分比, [模板化](esphome/guides/automations#模板化)): 开灯时蓝光通道的值，赋值范围在 `0% ~ 100%` 或 `0.0 ~ 1.0`之间。默认不改变原值
- **white** (*选填*, 百分比, [模板化](esphome/guides/automations#模板化)): 开灯时白光通道的值，赋值范围在 `0% ~ 100%` 或 `0.0 ~ 1.0`之间。默认不改变原值
- **flash_length** (*选填*, [时长](esphome/guides/configuration-types#时长), [模板化](esphome/guides/automations#模板化)): 如果设置此参数，开灯后会在调整亮度和颜色通道到新设置的值的 `n` 秒之后，返回之前的状态（类似开关点动）
- **effect** (*选填*, 字符串, [模板化](esphome/guides/automations#模板化)): 如果设置此参数，开灯时会启动对应的灯关特效




**模板化** 

相同动作使用 [模板化](esphome/guides/automations#模板化) 的写法

```c++
// 定义动作
auto call = id(light_1).turn_on();
// 设置参数 (选填)
call.set_transition_length(1000); // in ms
call.set_brightness(1.0); // 1.0 is full brightness
call.set_rgb(1.0, 1.0, 1.0); // color, 1.0 is fully lit
call.set_effect("The Effect");
// 执行动作
call.perform();
```





### light.turn_off

此动作用于关闭指定 ID 的灯

```yaml
on_...:
  then:
    - light.turn_off:
        id: light_1

    # 缩写
    - light.turn_off: light_1
```

配置参数

- **id** (**必填**, [ID](esphome/guides/configuration-types#id)): 灯的名称
- **transition_length** (*选填*, [时长](esphome/guides/configuration-types#时长), [模板化](esphome/guides/automations#模板化)): 过度时长


**模板化** 

相同动作使用 [模板化](esphome/guides/automations#模板化) 的写法

```c++
// 定义动作
auto call = id(light_1).turn_off();
// 设置参数 (选填)
call.set_transition_length(1000); // in ms
// 执行动作
call.perform();
```


## 灯类通用特效


### 随机颜色

持续的渐变成随机颜色

```yaml
light:
  - platform: ...
    # ...
    effects:
      - random:
          name: Random
          transition_length: 5s
          update_interval: 7s
```

配置参数

- **name** (*选填*, 字符串): 特效名称，默认为 `Random`
- **transition_length** (*选填*, [时长](esphome/guides/configuration-types#时长)): 颜色过渡的持续时间，默认为`5s`
- **update_interval** (*选填*, [时长](esphome/guides/configuration-types#时长)): 单个颜色的持续时间


### 频闪

定义一组颜色亮度的列表，并按顺序执行

```yaml
light:
  - platform: ...
    # ...
    effects:
      - strobe:
          name: Strobe
          colors:
            - state: True
              brightness: 100%
              red: 100%
              green: 90%
              blue: 0%
              duration: 500ms
            - state: False
              duration: 250ms
            - state: True
              brightness: 100%
              red: 0%
              green: 100%
              blue: 0%
              duration: 500ms
```

配置参数

- **name** (*选填*, 字符串): 特效名称，默认为 `Strobe`
- **colors**(*选填*, 列表): 执行颜色和亮度的列表，默认为快速切换灯的开关
  - **state** (*选填*, 布尔值): 定义灯的开关状态，默认为打开 `True`
  - **brightness** (*选填*, 百分比): 开灯时的亮度，默认为 `100%`
  - **red** (*选填*, 百分比): 开灯时红光通道的值，默认为 `100%`
  - **green** (*选填*, 百分比): 开灯时绿光通道的值，默认为 `100%`
  - **blue** (*选填*, 百分比): 开灯时蓝光通道的值，默认为 `100%`
  - **white** (*选填*, 百分比): 开灯时白光通道的值，默认为 `100%`
  - **duration** (**必填**, [时长](esphome/guides/configuration-types#时长)): 此颜色和亮度的持续时间

### 同步闪烁

整体在当前的颜色和亮度值附近徘徊

```yaml
light:
  - platform: ...
    # ...
    effects:
      - flicker:
          name: Flicker
          alpha: 95%
          intensity: 1.5%
```

配置参数

- **name** (*选填*, 字符串): 特效名称，默认为 `Flicker`
- **alpha** (*选填*, 百分比): 末次颜色对闪烁变幻的影响，类似指数移动平均值的平滑因子，默认为 `95%`
- **intensity** (*选填*, 百分比): 闪烁强度，即随机偏移量的最大幅度，默认为 `1.5%`

### 自定义特效

借助 [Lambda 表达式](esphome/guides/automations#lambdas-表达式), 自定义灯光特效

```yaml
light:
  - platform: ...
    # ...
    effects:
      - lambda:
          name: My Custom Effect
          update_interval: 60s
          lambda: >-
            static int state = 0;
            if (state == 0) {
              id(my_light).start_transition(light::LightColorValues::from_rgb(1.0, 1.0, 1.0)));
            } else if (state == 1) {
              id(my_light).start_transition(light::LightColorValues::from_rgb(1.0, 0.0, 1.0)));
            } else if (state == 2) {
              id(my_light).start_transition(light::LightColorValues::from_rgb(0.0, 0.0, 1.0)));
            } else {
              id(my_light).start_transition(light::LightColorValues::from_rgb(0.0, 0.0, 0.0)));
            }
            state += 1;
            if (state == 4)
              state = 0;
```

配置参数

- **name** (**必填**, 字符串): 特效名称
- **update_interval** (*选填*, [时长](esphome/guides/configuration-types#时长)): 执行间隔，默认为 `0ms` 表示无间隔执行
- **lambda** (**必填**, [Lambda 表达式](esphome/guides/automations#lambdas-表达式)): 执行的代码，多使用静态变量



## 独立寻址LED特效



### 彩虹

类似彩虹的多彩变幻效果

```yaml
light:
  - platform: fastled_...
    # ...
    effects:
      - fastled_rainbow:
          name: Rainbow
          speed: 10
          width: 50
```

配置参数

- **name** (*选填*, 字符串): 特效名称，默认为 `Rainbow`
- **speed** (*选填*, 整数): 特效的速度，默认为 `10`
- **width** (*选填*, 整数): 彩虹的整体尺寸，默认为 `50`

### 跑马灯

即颜色擦除，随机生成的颜色组成队列，步进并替换掉当前的显示

```yaml
light:
  - platform: fastled_...
    # ...
    effects:
      - fastled_color_wipe:
          name: Color Wipe
          colors:
            - red: 100%
              green: 100%
              blue: 100%
              num_leds: 1
            - red: 0%
              green: 0%
              blue: 0%
              num_leds: 1
          add_led_interval: 100ms
          reverse: False
```

配置参数

- **name** (*选填*, 字符串): 特效名称，默认为 `Color Wipe`
- **colors**(*选填*, 列表): The colors to shift in at the beginning of the strip. Defaults to shifting in random colors.
  - **red** (*选填*, 百分比): 红光通道的值，默认为 `100%`
  - **green** (*选填*, 百分比): 绿光通道的值，默认为 `100%`
  - **blue** (*选填*, 百分比): 蓝光通道的值，默认为 `100%`
  - **random** (*选填*, 布尔值): 是否设为随机颜色，如果设为 `True`，则覆盖前面三项的 RGB 赋值, 默认为 `False`
  - **num_leds** (*选填*, 整数): 此组颜色的灯珠数量
- **add_led_interval** (*选填*, [时长](esphome/guides/configuration-types#时长)): The interval with which to shift in new leds at the beginning of the strip. Defaults to `100ms`.
- **reverse** (*选填*, 布尔值): 是否反转步进的方向，默认为不反转 `False`


### 流光
 
单点、快速的做往复运动

```yaml
light:
  - platform: fastled_...
    # ...
    effects:
      - fastled_scan:
          name: Scan
          move_interval: 100ms
```

配置参数

- **name** (*选填*, 字符串): 特效名称，默认为 `Scan`
- **move_interval** (*选填*, [时长](esphome/guides/configuration-types#时长)): 向前移动一个等著的时间间隔，默认为 `100ms`

### 闪亮

随机单点的渐亮渐灭

```yaml
light:
  - platform: fastled_...
    # ...
    effects:
      - fastled_twinkle:
      - fastled_twinkle:
          name: Twinkle
          twinkle_probability: 5%
          progress_interval: 4ms
```

配置参数

- **name** (*选填*, 字符串): 特效名称，默认为 `Twinkle`
- **twinkle_probability** (*选填*, 百分比): 选中概率
- **progress_interval** (*选填*, [时长](esphome/guides/configuration-types#时长)): 闪烁持续时间，会影响到单个灯珠特效的持续时间，默认为 `4ms`

### 随机色闪亮

随机单点、随机颜色的渐亮渐灭

```yaml
light:
  - platform: fastled_...
    # ...
    effects:
      - fastled_random_twinkle:
          name: Random Twinkle
          twinkle_probability: 5%
          progress_interval: 32ms
```

配置参数

- **name** (*选填*, 字符串): 特效名称，默认为 `Random Twinkle`
- **twinkle_probability** (*选填*, 百分比): 选中概率
- **progress_interval** (*选填*, [时长](esphome/guides/configuration-types#时长)): 闪烁持续时间，会影响到单个灯珠特效的持续时间，默认为 `4ms`

### 烟花

类似烟花样式的随机火花效果

```yaml
light:
  - platform: fastled_...
    # ...
    effects:
      - fastled_fireworks:
          name: Fireworks
          update_interval: 32ms
          spark_probability: 10%
          use_random_color: false
          fade_out_rate: 120
```

配置参数

- **name** (*选填*, 字符串): 特效名称，默认为 `Fireworks`
- **update_interval** (*选填*, [时长](esphome/guides/configuration-types#时长)): 特效间隔，默认为 `32ms`
- **spark_probability** (*选填*, 百分比): 选中概率，默认为 `10%`
- **use_random_color** (*选填*, 布尔值): 是否使用随机颜色，默认为 `False` 使用当前设置的颜色
- **fade_out_rate** (*选填*, 整数): 淡出(熄灭)速度，谨慎设置，防止太慢导致单点火花不“熄灭”或太快导致无法”点燃“整条灯带，默认为 `120`

### 异步闪烁

各个点分别当前颜色和亮度值附近徘徊

```yaml
light:
  - platform: fastled_...
    # ...
    effects:
      - fastled_flicker:
          name: FastLED Flicker
          update_interval: 16ms
          intensity: 5%
```

配置参数

- **name** (*选填*, 字符串): 特效名称，默认为 `FastLED Flicker`
- **update_interval** (*选填*, [时长](esphome/guides/configuration-types#时长)): 更新间隔，默认为 `16ms`
- **intensity** (*选填*, 百分比): 闪烁强度，即随机偏移量的最大幅度，默认为`5%`









## 相关链接


-  [普通灯](esphome/components/light/binary)
-  [可调亮度的灯](esphome/components/light/monochromatic)
-  [可调色温调亮度的灯](esphome/components/light/cwww)
-  [可调三色(红绿蓝)](esphome/components/light/rgb)
-  [可调四色(红绿蓝白)](esphome/components/light/rgbw)
-  [可调五色(红绿蓝冷白暖白)](esphome/components/light/rgbww)
-  [单信号线 LED 灯带](esphome/components/light/fastled_clockless)
-  [双信号线 LED 灯带](esphome/components/light/fastled_spi)


- [WS2812FX library by @kitesurfer1404](https://github.com/kitesurfer1404/WS2812FX)