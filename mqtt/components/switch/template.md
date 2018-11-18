# 模板化开关


通过模板化 `template` 功能虚拟出的开关，与物理开关无直接关联，可以通过修改配置改变关联形式。模板化开关会出现在智能中枢中并且像普通开关一样可被控制

!> 可以简单的理解为虚拟开关

```yaml
# 配置示例
switch:
  - platform: template
    name: "Template Switch"
    lambda: >-
      if (id(some_binary_sensor).state) {
        return true;
      } else {
        return false;
      }
    turn_on_action:
      - switch.turn_on: switch2
    turn_off_action:
      - switch.turn_on: switch1
    optimistic: true
```

lambda 表达式可用的返回值:

> - `return true;` 如果开关状态应该变为开
> - `return false;` 如果开关状态应该变为关
> - `return {};` 如果开关状态应该保持旧状态

## 配置项

- **name** (**必填**, string): 开关的名称
- **lambda** (*选填*, [lambda](mqtt/guides/automations#lambda-表达式)): 定义开关状态的 lambda 表达式，只有 **有变化** 的状态才会发布相关消息到 MQTT，此参数跟 `optimistic` 参数二选一即可
- **optimistic** (*选填*, 布尔值): 动作乐观化，开启这个模式后，每次动作无需核查便更新状态。默认为不开启 `false`，如果开启本参数，则无需配置 lambda 参数
- **turn_on_action** (*选填*, [动作](mqtt/guides/automations#动作)): 远端（比如智能中枢）发送打开开关的指令时执行的动作
- **turn_off_action** (*选填*, [动作](mqtt/guides/automations#动作)): 远端（比如智能中枢）发送关闭开关的指令时执行的动作
- **restore_state** (*选填*, 布尔值): 上电时是否尝试恢复断电前的状态。默认为是 `yes`
- **id** (*选填*, [ID](mqtt/guides/configuration-types#id)): 开关的 ID
- 以及 [二进制传感器核心组件](mqtt/components/sensor/) 和 [MQTT 组件](mqtt/components/mqtt#MQTT-组件基本配置项) 的基本配置项


