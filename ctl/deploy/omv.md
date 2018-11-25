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


## 启动容器


选择拉取的镜像后，点击**Run Images**

![](http://pic.airijia.com/doc/20181125134613.png)




网络模式选择 `Host`。映射一个可被共享的目录——比如 `/home/airi/hass` 到 `/airi/hass`，作用是将智能中枢的配置文件夹引出。


![](http://pic.airijia.com/doc/20181125134908.png)

换句话说，左边的文件夹是你自己创建的，右边的`/airi/hass`是固定内容

!> 这里一定要选`Host` 模式，否则无法正常运行

点击保存，即运行容器


## 查看运行状态


点击日志，查看运行情况


![](http://pic.airijia.com/doc/20181125135417.png)


如图显示，即启动成功，

![](http://pic.airijia.com/doc/20181125135325.png)


浏览器打开 `192.168.1.163:8233`


查看 [ctl 初次使用](ctl/init) 进行下一步配置


?> 本教程基于 OMV 4.x 版本，其他版本需作适当调整


## 相关链接


- [omv-extras 源的安装](https://www.openmediavault.cn/read-4.html)
- [树莓派3b——玩转docker](https://www.jianshu.com/p/21ecf7ce1ce9)



