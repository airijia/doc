# Hass 自动化











## 案例

在配置文件的 `configuration\automations` 目录下新建数字或字母名称的 **yaml** 文件，如下图

![](http://pic.airijia.com/doc/20181217102451.png)


添加后，重启 Hass，自动化会在两处出现

**首页**

![](http://pic.airijia.com/doc/20181217103754.png)

**开发者工具 - 状态**


![](http://pic.airijia.com/doc/20181217104110.png)


### 双重条件触发

室外温度低于二十度，红外感应有人回家的时候打开暖气

**entity_id** 要以实际值为准

```yaml
alias: '999'
trigger:
    # 温度低于 20 ℃
  - platform: numeric_state
    entity_id: sensor.777_temperature_1
    below: '20'
    # 人体感知触发
  - platform: state
    entity_id: binary_sensor.888_motion_1
    to: 'on'
action:
    # 开关打开
    service: homeassistant.turn_on
    entity_id: switch.666_switch_1
```
