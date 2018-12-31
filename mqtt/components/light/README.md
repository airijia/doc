# 灯类核心组件

灯类组件共用的核心组件


## 灯动作

配合 [自动化](mqtt/guides/automations) 的动作

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

- **id** (**必填**, [ID](mqtt/guides/configuration-types#id)): 灯的 ID
- **transition_length** (*选填*, [时长](mqtt/guides/configuration-types#时长), [模板化](mqtt/guides/automations#模板化)): 过度时长


**模板化** 

相同动作使用 [模板化](mqtt/guides/automations#模板化) 的写法

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

- **id** (**必填**, [ID](mqtt/guides/configuration-types#id)): 当前组件的 ID
- **transition_length** (*选填*, [时长](mqtt/guides/configuration-types#时长), [模板化](mqtt/guides/automations#模板化)): 过度时长
- **brightness** (*选填*, 百分比, [模板化](mqtt/guides/automations#模板化)): 开灯时的亮度，赋值范围在 `0% ~ 100%` 或 `0.0 ~ 1.0`之间。默认不改变亮度
- **red** (*选填*, 百分比, [模板化](mqtt/guides/automations#模板化)): 开灯时红光通道的值，赋值范围在 `0% ~ 100%` 或 `0.0 ~ 1.0`之间。默认不改变原值
- **green** (*选填*, 百分比, [模板化](mqtt/guides/automations#模板化)): 开灯时绿光通道的值，赋值范围在 `0% ~ 100%` 或 `0.0 ~ 1.0`之间。默认不改变原值
- **blue** (*选填*, 百分比, [模板化](mqtt/guides/automations#模板化)): 开灯时蓝光通道的值，赋值范围在 `0% ~ 100%` 或 `0.0 ~ 1.0`之间。默认不改变原值
- **white** (*选填*, 百分比, [模板化](mqtt/guides/automations#模板化)): 开灯时白光通道的值，赋值范围在 `0% ~ 100%` 或 `0.0 ~ 1.0`之间。默认不改变原值
- **flash_length** (*选填*, [时长](mqtt/guides/configuration-types#时长), [模板化](mqtt/guides/automations#模板化)): 如果设置此参数，开灯后会在调整亮度和颜色通道到新设置的值的 `n` 秒之后，返回之前的状态（类似开关点动）
- **effect** (*选填*, 字符串, [模板化](mqtt/guides/automations#模板化)): 如果设置此参数，开灯时会启动对应的灯关特效




**模板化** 

相同动作使用 [模板化](mqtt/guides/automations#模板化) 的写法

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

- **id** (**必填**, [ID](mqtt/guides/configuration-types#id)): 灯的名称
- **transition_length** (*选填*, [时长](mqtt/guides/configuration-types#时长), [模板化](mqtt/guides/automations#模板化)): 过度时长


**模板化** 

相同动作使用 [模板化](mqtt/guides/automations#模板化) 的写法

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
          name: Random Effect With Custom Values
          transition_length: 5s
          update_interval: 7s
```

配置参数

- **name** (*选填*, 字符串): 特效名称，默认为 `Random`
- **transition_length** (*选填*, [时长](mqtt/guides/configuration-types#时长)): 颜色过渡的持续时间，默认为`5s`
- **update_interval** (*选填*, [时长](mqtt/guides/configuration-types#时长)): 单个颜色的持续时间




## 独立寻址LED特效




## 相关链接


-  [普通灯](mqtt/components/light/binary)
-  [可调亮度的灯](mqtt/components/light/monochromatic)
-  [可调色温调亮度的灯](mqtt/components/light/cwww)
-  [可调三色(红绿蓝)](mqtt/components/light/rgb)
-  [可调四色(红绿蓝白)](mqtt/components/light/rgbw)
-  [可调五色(红绿蓝冷白暖白)](mqtt/components/light/rgbww)
-  [单信号线 LED 灯带](mqtt/components/light/fastled_clockless)
-  [双信号线 LED 灯带](mqtt/components/light/fastled_spi)