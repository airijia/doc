# 文本传感器

文本传感器类似[普通传感器](mqtt/)，区别是普通传感器输出**数字**类型的数值，文本传感器则输出任何类型的**文本值**



## 基本配置

```yaml
# 配置实例
name: Livingroom Temperature
icon: "mdi:water-percent"
```

**配置项**

- **name** (**必填**, 字符串): 传感器名称
- **icon** (*选填*, 图标): 自定义显示图标

**自动化**

- **on_value** (*选填*, [自动化](mqtt/guides/automations)): [在指定值触发](#on_value)

## 触发器




### `on_value`


在指定值触发，可以用 **x** 来获取此触发器的值

```yaml
text_sensor:
  - platform: version
    # ...
    on_value:
      then:
        - lambda: >-
            ESP_LOGD("main", "The current version is %s", x.c_str());
```

详细使用参考 [自动化组件](mqtt/guides/automations) 


### lambda

使用 [lambda 表达式](mqtt/guides/automations#lambda-表达式) 控制文本传感器发布和获取值

- `publish_state()`: 手动控制文本传感器发布值

  ```c++
  // Within lambda, push a value of "Hello World"
  id(my_sensor).publish_state("Hello World");
  ```

- `.state`: 获取指定文本传感器的值为为 **std::string** 对象

  ```c++
  // For example, create a custom log message when a value is received:
  std::字符串 val = id(my_sensor).state;
  ESP_LOGI("main", "Value of my sensor: %s", val.c_str());
  ```
