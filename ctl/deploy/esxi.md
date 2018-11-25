# ESXi 安装 


简单的说，vSphere是一种解决方案，也是vmware一整套产品的总称，其中包含了几大产品，我们主要用的就是ESXI，vCenter以及vSphere Client。 

本教程基于已经安装好的 **ESXi** ，还没有安装的可以先到文末寻找安装方法




## 安装 Photon OS

下载介质分多种版本，Full ISO包含了所有的包，可用于完整安装；OVA with virtual hardware v11用于vSphere 6.0平台；OVA with virtual hardware v13用于vSphere 6.5、6.7平台

http://dl.bintray.com/vmware/photon/2.0/GA/ova/photon-custom-hw11-2.0-304b817.ova

http://dl.bintray.com/vmware/photon/2.0/GA/ova/photon-custom-hw13-2.0-304b817.ova

workstation
http://dl.bintray.com/vmware/photon/2.0/GA/ova/photon-custom-lsilogic-hw11-2.0-304b817.ova

打开 vSphere Client，登录

![](http://pic.airijia.com/doc/20181125171137.png)


### 配置虚拟机





将下载好的 镜像文件 上传到 ESXi 的内置存储


![](http://pic.airijia.com/doc/20181125174006.png)




![](http://pic.airijia.com/doc/20181125174102.png)





新建虚拟机

![](http://pic.airijia.com/doc/20181125172311.png)



![](http://pic.airijia.com/doc/20181125172855.png)

鼠标右键 - 编辑设置

![](http://pic.airijia.com/doc/20181125173128.png)


添加下载的镜像

![](http://pic.airijia.com/doc/20181125173221.png)


选择刚才上传的镜像


![](http://pic.airijia.com/doc/20181125174421.png)


记得勾选**打开电源时连接**，确定返回上一次层界面

![](http://pic.airijia.com/doc/20181125180727.png)



右键 打开控制台


![](http://pic.airijia.com/doc/20181125175947.png)

打开电源


![](http://pic.airijia.com/doc/20181125180132.png)



### 安装

用键盘控制，方向键控制上下左右，按 **Enter** 是确认

![](http://pic.airijia.com/doc/20181125180844.png)



选择 **Accept**


![](http://pic.airijia.com/doc/20181125180948.png)

![](http://pic.airijia.com/doc/20181125181206.png)

![](http://pic.airijia.com/doc/20181125181226.png)

![](http://pic.airijia.com/doc/20181125181252.png)


![](http://pic.airijia.com/doc/20181125181322.png)


![](http://pic.airijia.com/doc/20181125181411.png)



输入密码，然后还要重复一遍

![](http://pic.airijia.com/doc/20181125181510.png)



密码太简单，要换个复杂的，选 **Go Back** 上一步后重来



![](http://pic.airijia.com/doc/20181125181550.png)


安装成功，按 **Enter** 虚拟机会重启


![](http://pic.airijia.com/doc/20181125181718.png)


## 配置

输入上一步设置的用户名和密码登录


![](http://pic.airijia.com/doc/20181125182000.png)


开启 root 同一个户 登录ssh

输入

```
vim /etc/ssh/sshd_config
```
![](http://pic.airijia.com/doc/20181125183358.png)



找到 **PermitRootLogin** 项，去掉`#`, 并把值改成 `yes`

依次按 `ESC`， `:`， `x`， `Enter`，保存退出


```
systemctl restart sshd
```
![](http://pic.airijia.com/doc/20181125184034.png)


之后便可以用熟悉的 shell 工具登录进行配置









![](http://pic.airijia.com/doc/20181125183653.png)




依次输入
```
systemctl start docker

systemctl enable docker
```

![](http://pic.airijia.com/doc/20181125182302.png)

## 相关链接

 - [vmware esxi6.5安装教程](https://zhuanlan.zhihu.com/p/30129843)
