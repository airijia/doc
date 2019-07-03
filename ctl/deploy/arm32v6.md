
# ARM 平台基于 docker 安装 airjiia/ctl 

arm32v6，包括树莓派等

前提已经安装好，Dockder 和 Portainer

假设设备的 IP 是 **192.168.1.127**，浏览器打开 `192.168.1.127:19000`

![](http://pic.airijia.com/doc/20190703090545.png)



用户名 `admin`，密码 `airijia.com`

![](http://pic.airijia.com/doc/20190703090602.png)



选择 Local

![](http://pic.airijia.com/doc/20190703090616.png)


## 部署准备

!> 全新安装直接跳过这节

如果之前安装过 ctl samba 等，需要先停止容器，并删除相关项 **(ctl 记得先云备份)**

Container中，除了 **portainer** 相关，其他全部先停止再删除

![](http://pic.airijia.com/doc/20190703090629.png)

Images 和 Volumes 中的项目，除了 **portainer** 相关，其他全部删除

![](http://pic.airijia.com/doc/20190703090646.png)



![](http://pic.airijia.com/doc/20190703090701.png)



## 全新安装

部署 airjia/ctl + postgres + samba 全家桶

打开 Stack

![](http://pic.airijia.com/doc/20190703090716.png)



![](http://pic.airijia.com/doc/20190703090735.png)



复制以下脚本内容，yaml 格式，注意空格



```yaml
version: '2'

services:
  sql:
    image: arm32v6/postgres:9.3-alpine
    volumes:
      - db_data:/var/lib/postgresql/data
    restart: always
    ports:
      - "5433:5432"
    environment:
      POSTGRES_PASSWORD: airijia.com5433
      POSTGRES_USER: hass
  ctl:
    depends_on:
      - sql
    image: airijia/ctl:arm32v6
    environment:
      - DATABASE=postgresql://hass:airijia.com5433@127.0.0.1:5433/hass
    volumes:
      - hass_data:/airi/hass
    network_mode: "host"
    restart: always
  samba:
    depends_on:
      - ctl
    image: dperson/samba:armhf
    volumes:
      - hass_data:/hass
    ports:
      - "139:139"
      - "445:445"
    environment:
      - TZ=Asia/Shanghai
    restart: unless-stopped
    tmpfs:
      - /tmp
    read_only: false
    stdin_open: true
    tty: true
    command: '-u "airi;airijia.com" -s "hass;/hass;yes;no;yes;airi;airi"'
volumes:
    db_data:
    hass_data:

```


确认格式无误后，开始部署
![](http://pic.airijia.com/doc/20190703090749.png)



![](http://pic.airijia.com/doc/20190703090759.png)



用时大概 20 分钟， 因为要下载部署合计 3 个容器，可以先去泡杯咖啡

![](http://pic.airijia.com/doc/20190703090810.png)

如图显示即安装完成


浏览器打开 `192.168.1.127:8233`


?> 下一步看 [ctl 初次使用](ctl/init)




## 进阶使用


### 想在宿主机上编辑配置文件

如图找到配置文件 **hass_data** 对应的的目录，本案例中是 `/var/lib/docker/volumes/hass_data/_data`

![](http://pic.airijia.com/doc/20190703090821.png)









