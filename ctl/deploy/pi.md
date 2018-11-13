# 树莓派安装 Docker 和 Portainer

## 安装系统

安装系统并开启 ssh 服务，这一步骤需要接显示器


## SSH客户端

windows 10下可以直接用 powershell
推荐使用 cmder https://www.jeffjade.com/2016/01/13/2016-01-13-windows-software-cmder/

mac 调出终端

https://zh.wikihow.com/%E5%9C%A8Mac%E7%94%B5%E8%84%91%E4%B8%8A%E6%89%93%E5%BC%80%E7%BB%88%E7%AB%AF



## 基本准备

到路由器的设备列表或者 DHCP 分配中查客户端的 IP 地址


![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx69qme01fj30tj06y74e.jpg)

输入 ssh 用户名@IP

```shell
ssh pi@192.168.1.127
```

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx69mojmvlj30ss0e8dj1.jpg)

yes

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx6a9r16baj30qw0a40vk.jpg)


默认的密码 `raspberry`

-- 换源
```shell
sudo sed -i 's|raspbian.raspberrypi.org/raspbian/|mirrors.aliyun.com/raspbian/raspbian/|g' /etc/apt/sources.list
```

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx6an28bz9j314u064go9.jpg)


```shell
sudo apt-get update
```


![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx6ao3clwvj30nb0botci.jpg)

## 安装docker

```shell
sudo curl -sSL https://get.docker.com/ | sh
```

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx6arrnd6fj30yi0tyk43.jpg)



安装docker-compose

```shell
sudo apt-get install docker-compose --no-install-recommends
```


![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx6astagmfj31160qmqhl.jpg)



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


[ctl 初次使用](ctl/init)


