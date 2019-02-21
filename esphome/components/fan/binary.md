# 普通风扇

即只有开关两个状态、不可以调速的风扇，需要配合 [输出组件](esphome/components/output/) 使用



```yaml
# 输出组件


# 风扇组件
fan:
  - platform: binary
    output: my_output_1
    name: "Living Room Fan"
```

## **配置参数**

- **output** (**必填**, [ID](esphome/guides/configuration-types#id)): 控制开关的输出组件的 ID
- **name** (**必填**, 字符串): 风扇的名称
- **oscillation_output** (*选填*, [ID](esphome/guides/configuration-types#id)): 控制摇摆的输出组件的 ID
- **id** (*选填*, [ID](esphome/guides/configuration-types#id)): 风扇的 ID
- 以及 [风扇基本组件](esphome/components/fan/) 的所有配置项