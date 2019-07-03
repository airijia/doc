#  Homekit 相关设置

### 开关改为灯


homekit 里面直接修改





### 湿度不显示

假设 ctl 所在 IP 为 `192.168.1.249`，entity_id 为 `sensor.666_humidity_1`

![](http://pic.airijia.com/doc/20190703094112.png)

到 `\\192.168.1.249\hass\configuration\customize` 文件夹下编辑 `sensor.666_humidity_1.yaml` 文件 (没有则新建)

![](http://pic.airijia.com/doc/20190703094121.png)

增加一行

```yaml
device_class : humidity
```

然后，**服务 - hass - 重启** 

编辑设备会多出一项

![](http://pic.airijia.com/doc/20190703094132.png)

 
同时 homekit 中也可见了

![](http://pic.airijia.com/doc/20190703094141.png)





### 水泵/喷灌器

假设 ctl 所在 IP 为 `192.168.1.249`，要改为喷灌器的开关的 entity_id 为 `switch.666_switch_1`

![](http://pic.airijia.com/doc/20190703094150.png)

到 `\\192.168.1.249\hass\configuration\homekit\entity_config` 文件夹下新建 `switch.666_switch_1.yaml` 文件

![](http://pic.airijia.com/doc/20190703094202.png)

喷灌器:

```yaml
type : sprinkler
```

然后，**服务 - hass - 重启** 后，在homekit中会显示为 喷灌器


![](http://pic.airijia.com/doc/20190703094212.png)

阀门:

```yaml
type : valve
```


![](http://pic.airijia.com/doc/20190703094221.png)