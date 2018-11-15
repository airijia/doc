#  Homekit 相关设置



### 湿度不显示

假设 ctl 所在 IP 为 `192.168.1.249`，entity_id 为 `sensor.666_humidity_1`

![](https://ws1.sinaimg.cn/large/007fN5Xely1fx8qxrfhisj30io0cnaad.jpg)

到 `\\192.168.1.249\hass\configuration\customize` 文件夹下编辑 `sensor.666_humidity_1.yaml` 文件 (没有则新建)

![](https://ws1.sinaimg.cn/large/007fN5Xely1fx8r1sr5nuj30k405rmx8.jpg)

增加一行

```yaml
device_class : humidity
```

然后，**服务 - hass - 重启** 

编辑设备会多出一项

![](https://ws1.sinaimg.cn/large/007fN5Xely1fx8rd9jc09j30iu0e774m.jpg)

 
同时 homekit 中也可见了

![](https://ws1.sinaimg.cn/large/007fN5Xely1fx8rhdweioj308x08vgmo.jpg)





### 水泵/喷灌器

假设 ctl 所在 IP 为 `192.168.1.249`，要改为喷灌器的开关的 entity_id 为 `switch.666_switch_1`

![](https://ws1.sinaimg.cn/large/007fN5Xely1fx8qecjki3j30if09saa9.jpg)

到 `\\192.168.1.249\hass\configuration\homekit\entity_config` 文件夹下新建 `switch.666_switch_1.yaml` 文件

![](https://ws1.sinaimg.cn/large/007fN5Xely1fx8q9u74kqj30lr07gdfz.jpg)

喷灌器:

```yaml
type : sprinkler
```

然后，**服务 - hass - 重启** 后，在homekit中会显示为 喷灌器


![](https://ws1.sinaimg.cn/large/007fN5Xely1fx8qs38m42j30ax0c7gne.jpg)

阀门:

```yaml
type : valve
```


![](https://ws1.sinaimg.cn/large/007fN5Xely1fx8qz3706zj30av09975k.jpg)