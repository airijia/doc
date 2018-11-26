# VMware 虚拟机安装 airijia/ctl 


VMware Workstation Player 是 VMware 推出的一款简易虚拟机软件，是 VMware Workstation 的免费版，功能较 VMware Workstation Pro 简单，可免费用于个人非商业用途。


苹果 MAC 下可以选择 VMware Fusion，方法相同



## 安装 Photon OS

先下载 Workstation 和 Fusion 中用的 OVA 文件： [OVA with virtual hardware v11(Workstation and Fusion)](http://dl.bintray.com/vmware/photon/2.0/GA/ova/photon-custom-lsilogic-hw11-2.0-304b817.ova)



打开 **VMware Workstation Player** 客户端，选择**打开虚拟机**


![](http://pic.airijia.com/doc/20181126104437.png)



选择刚才下载的 ova文件

![](http://pic.airijia.com/doc/20181126105541.png)



接受许可协议，然后下一步



![](http://pic.airijia.com/doc/20181126105426.png)



选择**导入**，开始部署



![](http://pic.airijia.com/doc/20181126105710.png)



启动虚拟机

![](http://pic.airijia.com/doc/20181126105743.png)



用户名 `root`，默认密码 `changeme`，首次登录需要改密码


![](http://pic.airijia.com/doc/20181126094233.png)


输入 `ip a `查看网址配置


![](http://pic.airijia.com/doc/20181126110002.png)



## 配置 Photon OS


windows 10下可以直接用 PowerShell，推荐使用 [cmder](https://www.jeffjade.com/2016/01/13/2016-01-13-windows-software-cmder/)


```
ssh root@192.168.1.235
```

`192.168.1.235` 是示例的 IP，要换成实际情况的 IP 地址


![](http://pic.airijia.com/doc/20181126110638.png)



Photon OS 默认开启防火墙，先关掉

```
systemctl stop iptables
```

?> 点击这段代码右侧的**点我复制**，之后在 cmder 窗口上点击鼠标右键，即可粘贴这段代码

![](http://pic.airijia.com/doc/20181126113622.png)


禁止防火墙启动

```
systemctl disable iptables
```

![](http://pic.airijia.com/doc/20181126115926.png)


## 配置 Docker




因为在局域网内使用，所以没有



启动 docker 

```
systemctl start docker

```


![](http://pic.airijia.com/doc/20181126110814.png)


允许docker 开机启动

```
systemctl enable docker

```


![](http://pic.airijia.com/doc/20181126110857.png)



测试执行并查看docker版本

```
docker --version

```


![](http://pic.airijia.com/doc/20181126095921.png)



下载 docker-compose

```
curl -L "https://github.com/docker/compose/releases/download/1.23.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

![](http://pic.airijia.com/doc/20181126100151.png)


给 docker-compose 加上执行权限


```
chmod +x /usr/local/bin/docker-compose
```

测试执行并查看docker-compose版本

```
docker-compose --version
```

![](http://pic.airijia.com/doc/20181126100427.png)


安装并启动 portainer


```shell
docker run -d \
--name portainer \
--restart always \
-p 19000:9000 \
-v /var/run/docker.sock:/var/run/docker.sock \
-v portainer_data:/data portainer/portainer \
--admin-password '$2y$05$M6Ut7PlnJSJZUr8yw5CgDu3tud17F9X0Z/XXGqaZVr7DVh6N6hBPu'
```

![](http://pic.airijia.com/doc/20181126100749.png)



下一步看
[X64 平台基于 docker 安装 airjiia/ctl ](ctl/deploy/x64)


## 相关链接

 - [vmware esxi6.5安装教程](https://zhuanlan.zhihu.com/p/30129843)
