# VMware vSphere Hypervisor(ESXi) 安装 airijia/ctl 


简单的说，vSphere是一种解决方案，也是 vmware 一整套产品的总称，其中包含了几大产品，我们主要用的就是 ESXi，vCenter 以及 vSphere Client。 

本教程基于已经安装好的 **vSphere 6.0/6.5/6.7** ，还没有安装的可以先到文末寻找安装方法


## 安装 Photon OS

查阅 [VMware 兼容性指南](https://www.vmware.com/resources/compatibility/search.php) 选择适合的版本



### 在 vSphere 6.0 下安装

先下载 OVA 文件：[vSphere 6.0 用 OVA with virtual hardware v11](http://dl.bintray.com/vmware/photon/2.0/GA/ova/photon-custom-hw11-2.0-304b817.ova)

打开 vSphere Client，登录

![](http://pic.airijia.com/doc/20181125171137.png)



**文件 - 部署 OVF 模板**

![](http://pic.airijia.com/doc/20181126092310.png)


选择刚才下载的 OVA 文件

![](http://pic.airijia.com/doc/20181126092404.png)



默认配置，一路下一步

![](http://pic.airijia.com/doc/20181126092439.png)


勾选 **部署后打开电源**，点击完成

![](http://pic.airijia.com/doc/20181126093000.png)



在刚才建立的虚拟机上点击鼠标右键，选择**打开控制台**


![](http://pic.airijia.com/doc/20181125175947.png)



用户名 `root`，默认密码 `changeme`，首次登录需要改密码


![](http://pic.airijia.com/doc/20181126094233.png)


输入 `ip a ` 查看 IP


![](http://pic.airijia.com/doc/20181126094857.png)



### 在 vSphere  6.5/6.7 下安装


先下载 OVA 文件：[vSphere 6.5/6.7 用 OVA with virtual hardware v13](http://dl.bintray.com/vmware/photon/2.0/GA/ova/photon-custom-hw13-2.0-304b817.ova)


浏览器打开 VMware ESXi 的管理界面
![](http://pic.airijia.com/doc/20181126122735.png)




选择 **创建/注册虚拟机**

![](http://pic.airijia.com/doc/20181126122918.png)


**从 OVF 或 OVA 文件部署虚拟机

![](http://pic.airijia.com/doc/20181126123004.png)



选择刚才下载的 OVA 文件

![](http://pic.airijia.com/doc/20181126123106.png)

![](http://pic.airijia.com/doc/20181126123141.png)

![](http://pic.airijia.com/doc/20181126123220.png)

![](http://pic.airijia.com/doc/20181126123305.png)

后面一路默认，点击完成后启动虚拟机


主界面打开左侧的 **导航器**


![](http://pic.airijia.com/doc/20181126123526.png)


依次选择 **虚拟机** 和 刚才创建的虚拟机名称

![](http://pic.airijia.com/doc/20181126123708.png)


打开 **控制台**

![](http://pic.airijia.com/doc/20181126123816.png)


用户名 `root`，默认密码 `changeme`，首次登录需要改密码


![](http://pic.airijia.com/doc/20181126124052.png)


输入 `ip a ` 查看 IP

![](http://pic.airijia.com/doc/20181126124153.png)


## 配置 Photon OS


WIN 10 下可以直接用 powershell

WIN 7 推荐使用 [Win下必备神器之Cmder](https://www.jeffjade.com/2016/01/13/2016-01-13-windows-software-cmder/)

MAC 参考 [如何在Mac电脑上打开终端](https://zh.wikihow.com/%E5%9C%A8Mac%E7%94%B5%E8%84%91%E4%B8%8A%E6%89%93%E5%BC%80%E7%BB%88%E7%AB%AF)


```
ssh root@192.168.168.131
```

`192.168.168.131` 是示例的 IP，要换成实际情况的 IP 地址

![](http://pic.airijia.com/doc/20181126094749.png)


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



启动 docker 

```
systemctl start docker

```

![](http://pic.airijia.com/doc/20181126095703.png)

允许docker 开机启动

```
systemctl enable docker

```

![](http://pic.airijia.com/doc/20181126095806.png)



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


?> 下一步看 [X64 平台基于 docker 安装 airjiia/ctl ](ctl/deploy/x64)


## 相关链接


- [vSphere 6.0安装和设置](https://docs.vmware.com/cn/VMware-vSphere/6.0/vsphere-esxi-vcenter-server-602-installation-setup-guide.pdf)
- [vSphere 6.5安装和设置](https://docs.vmware.com/cn/VMware-vSphere/6.5/vsphere-esxi-vcenter-server-65-installation-setup-guide.pdf)
- [vSphere 6.7安装和设置](https://docs.vmware.com/tw/VMware-vSphere/6.7/vsphere-esxi-67-installation-setup-guide.pdf)


- [ESXi 6.5安装配置](https://www.yeboyzq.com/xvnihua/850.html)
