# 树莓派安装 Docker 和 Portainer

## 安装系统

安装系统并开启 ssh 服务

参考 [树莓派开启SSH的N种方法](https://www.jianshu.com/p/654ee08d2b3a)


## SSH客户端

WIN 10 可以直接使用 PowerShell 和 cmd 自带的 ssh

WIN 7 推荐使用 [Win下必备神器之Cmder](https://www.jeffjade.com/2016/01/13/2016-01-13-windows-software-cmder/)


MAC 参考 [如何在Mac电脑上打开终端](https://zh.wikihow.com/%E5%9C%A8Mac%E7%94%B5%E8%84%91%E4%B8%8A%E6%89%93%E5%BC%80%E7%BB%88%E7%AB%AF)





## 基本准备

到路由器的设备列表或者 DHCP 分配中查客户端的 IP 地址


![](http://pic.airijia.com/doc/20190703092854.png)

输入 ssh 用户名@IP

```shell
ssh pi@192.168.1.127
```

![](http://pic.airijia.com/doc/20190703092911.png)

yes

![](http://pic.airijia.com/doc/20190703092920.png)


默认的密码 `raspberry`

-- 换源
```shell
sudo sed -i 's|raspbian.raspberrypi.org/raspbian/|mirrors.aliyun.com/raspbian/raspbian/|g' /etc/apt/sources.list
```

![](http://pic.airijia.com/doc/20190703092934.png)


```shell
sudo apt-get update
```


![](http://pic.airijia.com/doc/20190703092945.png)

## 安装docker

```shell
sudo curl -sSL https://get.docker.com/ | sh
```

![](http://pic.airijia.com/doc/20190703092957.png)



安装docker-compose

```shell
sudo apt-get install docker-compose --no-install-recommends
```


![](http://pic.airijia.com/doc/20190703093008.png)



## 安装并启动 portainer


```shell
sudo docker run -d \
--name portainer \
--restart always \
-p 19000:9000 \
-v /var/run/docker.sock:/var/run/docker.sock \
-v portainer_data:/data portainer/portainer \
--admin-password '$2y$05$M6Ut7PlnJSJZUr8yw5CgDu3tud17F9X0Z/XXGqaZVr7DVh6N6hBPu'
```

重启设备

```shell
sudo reboot
```

?> 下一步看 [ARM 平台基于 docker 安装 airjiia/ctl ](ctl/deploy/arm32v6)


