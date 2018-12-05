# 圣诞树彩灯


## 硬件准备






## 固件准备















## hass 中的设置

添加device class




增加 template switch





```
# TODO: 要么把这部分做到固件里面去
toggle = 顺序切换 effect

用 mqtt的 effect_command_topic，伪装成hass 发出的命令 


--------

# 从state 中 获取 effect list 和 effect

# 切换到下一个effect
# 切换完成 复位



switch:
  - platform: template
    switches:
      skylight:
      service: light.turn_on
entity_id: group.living_room
data:
  effect:   
  
  rgb_color: [255, 0, 0]

        value_template: "{{ is_state('sensor.skylight', 'on') }}"
        turn_on:
          service: switch.turn_on
          data:
            entity_id: switch.skylight_open


```


