# 可调速风扇

可以调速的风扇，需要配合 [输出组件](esphome/components/output/) 使用


```yaml
# 配置示例
fan:
  - platform: speed
    output: my_output_1
    name: "Living Room Fan"
```

## 配置参数

- **output** (**必填**, [ID](esphome/guides/configuration-types#id)): 控制开关的浮点输出组件 ID
- **name** (**必填**, 字符串): The name for this fan.
- **oscillation_output** (*选填*, [ID](esphome/guides/configuration-types#id)): 控制摇摆的输出组件 ID
- speed(*选填*): Set the 浮点数 values for each speed setting:
  - **low** (*Required*, 浮点数): 低转速的值，范围 0 ~ 1，默认值 `0.33`
  - **medium** (*Required*, 浮点数): 低转速的值，范围 0 ~ 1，默认值 `0.66`
  - **high** (*Required*, 浮点数): 低转速的值，范围 0 ~ 1，默认值 `1`
- **id** (*选填*, [ID](esphome/guides/configuration-types#id)): 风扇的 ID
- 以及 [风扇基本组件](esphome/components/fan/) 的所有配置项