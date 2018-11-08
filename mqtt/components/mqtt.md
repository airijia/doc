# MQTT 客户端组件





配图以及更详细的说明





**适配中枢**

 - 爱睿家智能中枢（airijia/ctl）
 
    免配置，自动发现


 - Hass (Home Assistant)

   在配置文件（通常为 configuration.yaml）中增加如下内容

```
mqtt:
  discovery: true
  discovery_prefix: airi




## MQTT 组件基本配置项