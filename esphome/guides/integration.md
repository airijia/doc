# 适配中枢




## airi

在爱睿家智能中枢 (airijia/ctl) 中使用 (版本 > 0.3)

点击 **设备 - DIY 设备** ，点击已被自动发现的设备后的 载入

![](http://pic.airijia.com/doc/20190126163048.png)

出现 **entity_id**，表示已经载入

![](http://pic.airijia.com/doc/20190126163157.png)


!> 设备已经刷好固件，但 **DIY 设备** 列表中没有显示


直接点击 **添加 DIY 设备**，输入目标设备的 hostname 添加

![](http://pic.airijia.com/doc/20190126163246.png)


## hass

在 Hass 中枢 (Home assistant) 中使用 (版本 > 0.85)

点击 **配置 - 集成**

![](http://pic.airijia.com/doc/20190126162531.png)


点击 **已发现 - ESPHome - 配置** 

![](http://pic.airijia.com/doc/20190126162559.png)

!> 设备已经刷好固件，但**已发现**中没有显示

输入正确的 Host (.local如果不能识别就换成 .lan，如果还不行换成 IP ) 和端口(通常默认 6053，不用改)，然后SUBMIT

![](http://pic.airijia.com/doc/20190126162652.png)

