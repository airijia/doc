
# ARM 平台基于 docker 安装 airjiia/ctl 

arm32v6，包括树莓派等

前提已经安装好，Dockder 和 Portainer

假设设备的 IP 是 **192.168.1.127**，浏览器打开 `192.168.1.127:19000`

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwsd6rvy5dj30s20f2dg6.jpg)

用户名 `admin`，密码 `airijia.com`

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwsd7goncrj31f80o9gnc.jpg)

选择 Local

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwsd82ksfnj31f00isjt8.jpg)

## 部署准备

!> 全新安装直接跳过这节

如果之前安装过 ctl samba 等，需要先停止容器，并删除相关项 **(ctl 记得先云备份)**

Container中，除了 **portainer** 相关，其他全部先停止再删除

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx6cf9lzk8j30w90hiq4u.jpg)

Images 和 Volumes 中的项目，除了 **portainer** 相关，其他全部删除

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx6cherg30j311t0mktaz.jpg)

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx6cil66exj30ps0j30u7.jpg)

## 全新安装

部署 airjia/ctl + postgres + samba 全家桶

打开 Stack

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwsd8vw1vej30n30mc3zr.jpg)

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx6co324jjj30pq0mwq4s.jpg)


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

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwsdnms7mvj30t50hedh1.jpg)


![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwsdtuz5tdj30x40dut9u.jpg)


用时大概 20 分钟， 因为要下载部署合计 3 个容器，可以先去泡杯咖啡



222222







