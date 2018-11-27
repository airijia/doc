# 基于 OMV 安装 airjiia/ctl 



OMV (OpenMediaVault)，是一个开源的基于Debian Linux的下一代网络附加存储(NAS)解决方案。

假设 OMV 所在的 IP 为 `192.168.1.163`，使用浏览器打开这个地址，输入用户名和密码，默认用户名：`admin`，默认密码：`openmediavault`

![](http://pic.airijia.com/doc/20181125123355.png)


## 启用 OMV-Extras 源

先下载 http://omv-extras.org/openmediavault-omvextrasorg_latest_all4.deb

依次选择 **系统 - 插件 - 上传**，选择刚才下载的文件上传

![](http://pic.airijia.com/doc/20181125130624.png)


勾选，安装

![](http://pic.airijia.com/doc/20181125130837.png)


如图显示便安装完成

![](http://pic.airijia.com/doc/20181125130957.png)



## 配置 Docker 系统服务和管理界面

依次选择 **系统 - OMV-Extras**，**双击** Docker CE

![](http://pic.airijia.com/doc/20181125131113.png)


启用 - 保存

![](http://pic.airijia.com/doc/20181125131305.png)


显示完成后确定，Docker服务会显示 **已启用**

![](http://pic.airijia.com/doc/20181125131403.png)



依次选择 **系统 - 插件**，找到 `openmediavault-docker-gui` 勾选并安装

![](http://pic.airijia.com/doc/20181125131635.png)



耐心等待，**不要**刷新页面

![](http://pic.airijia.com/doc/20181125132058.png)


![](http://pic.airijia.com/doc/20181125132217.png)


刷新后，**服务**下多出了**Docker**选项

![](http://pic.airijia.com/doc/20181125132410.png)

**Enable the plugin - 保存**

![](http://pic.airijia.com/doc/20181125132520.png)







## 拉取镜像

![](http://pic.airijia.com/doc/20181125132710.png)

软件源：`airijia/ctl`，Tag：`latest`


![](http://pic.airijia.com/doc/20181125132750.png)


点击**开始**

![](http://pic.airijia.com/doc/20181125132859.png)


拉取镜像比较慢，泡杯咖啡吧


![](http://pic.airijia.com/doc/20181125133225.png)


显示完成，点击**关闭**



## 设置文件夹


!> 已经自己建立好共享文件夹的跳过此部分

**存储器 - 磁盘**，sda 是系统盘，sdb 外接硬盘/U盘


![](http://pic.airijia.com/doc/20181127103532.png)


现在格式化 sdb，**存储器 - 文件系统 - 创建** 



![](http://pic.airijia.com/doc/20181127103917.png)

选择 sdb


![](http://pic.airijia.com/doc/20181127104026.png)


!> sdb 上的所有数据会被抹掉

![](http://pic.airijia.com/doc/20181127104119.png)


显示完成，关闭


![](http://pic.airijia.com/doc/20181127105047.png)


挂载 sba


![](http://pic.airijia.com/doc/20181127105133.png)


点击 **应用**


![](http://pic.airijia.com/doc/20181127105203.png)


**访问权限管理 - 共享文件夹**，**添加**


![](http://pic.airijia.com/doc/20181127105449.png)


选择刚才建立的 sdb1，权限全开


![](http://pic.airijia.com/doc/20181127105730.png)


点击 **应用** 使配置生效

![](http://pic.airijia.com/doc/20181127105815.png)




## 启动容器


选择拉取的镜像后，点击**Run Images**

![](http://pic.airijia.com/doc/20181125134613.png)


**restart 策略** 选择 `always`，**网络模式** 选择 `Host`，**Environment variables** 不用改



![](http://pic.airijia.com/doc/20181127121230.png)



挂载刚才建好的文件夹 `666`

![](http://pic.airijia.com/doc/20181127121301.png)


OMV 的共享文件夹在 **/sharedfolders** 下


![](http://pic.airijia.com/doc/20181127111915.png)


如图，将 OMV 的 `/sharedfolders/666` 挂载到容器的 `/airi/hass`，作用是将智能中枢的配置文件夹引出

换句话说，左边的文件夹 `666` 是你自己创建的，右边的`/airi/hass`是固定内容

![](http://pic.airijia.com/doc/20181127121723.png)



核实无误点击保存，运行容器


![](http://pic.airijia.com/doc/20181127121907.png)

!> 这里一定要选`Host` 模式，否则无法正常运行












![](http://pic.airijia.com/doc/20181125141505.png)

点击日志，查看运行情况

![](http://pic.airijia.com/doc/20181125135325.png)

如图显示，即启动成功



浏览器打开 `192.168.1.163:8233`


?>  查看 [ctl 初次使用](ctl/init) 进行下一步配置


!> 本教程基于 OMV 4.x 版本，其他版本需作适当调整




## 补充说明，开通远程共享


**服务 - SMB/CIFS**，**共享**


![](http://pic.airijia.com/doc/20181127122251.png)



添加共享文件夹 **666**


![](http://pic.airijia.com/doc/20181127122346.png)



![](http://pic.airijia.com/doc/20181127122733.png)


![](http://pic.airijia.com/doc/20181127123000.png)
资源管理器打开 `\\192.168.168.163` 是配置文件的共享文件夹

![](http://pic.airijia.com/doc/20181127122854.png)


## 相关链接


- [omv-extras 源的安装](https://www.openmediavault.cn/read-4.html)
- [树莓派3b OMV 玩转docker](https://www.jianshu.com/p/21ecf7ce1ce9)



