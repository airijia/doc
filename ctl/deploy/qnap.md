# 威联通 QNAP 安装 airijia/ctl 

?> 软件容器工作站仅支持QTS 4.2.0（或之后）之版本。X86 和 ARM 都支持



## 安装配置 Container Station

进入［App Center］>［工具］或［QTS必备］，并找到Container Station软件容器工作站，点击［安装］

![](http://pic.airijia.com/doc/20181130165326.png)

![](http://pic.airijia.com/doc/20181130165418.png)

安装完成

![](http://pic.airijia.com/doc/20181130173821.png)






## 新建配置文件文件夹

**主菜单 - File Station 文件总管**

![](http://pic.airijia.com/doc/20181130180532.png)


在 **Container Station** 的工作目录下文件建立一个文件夹

![](http://pic.airijia.com/doc/20181130180802.png)

本例中文件夹的名称是 `airi`

![](http://pic.airijia.com/doc/20181130181017.png)

![](http://pic.airijia.com/doc/20181130181046.png)







## 安装 airijia/ctl


**主菜单 - Container Station**

![](http://pic.airijia.com/doc/20181130173806.png)


![](http://pic.airijia.com/doc/20181130173952.png)



在 Container Station 的主界面选择 **+创建Container**

![](http://pic.airijia.com/doc/20181130175709.png)

搜索 `airijia`，然后点击 **安装**


![](http://pic.airijia.com/doc/20181130175900.png)



![](http://pic.airijia.com/doc/20181130175948.png)


![](http://pic.airijia.com/doc/20181130180002.png)


点击 **高级配置**

![](http://pic.airijia.com/doc/20181130180140.png)


**网络 -  网络模式**，选择 `Host`

!> 这里一定要选`Host` 模式，否则无法正常运行

![](http://pic.airijia.com/doc/20181130180218.png)


**共享文件夹 - 挂载本机共享文件夹**，点击 **新增**

![](http://pic.airijia.com/doc/20181130180311.png)


选择上一步建好的文件夹 `airi`



![](http://pic.airijia.com/doc/20181130181126.png)


挂载路径 `/airi/hass`，然后点击 **创建**


![](http://pic.airijia.com/doc/20181130181437.png)


**Container Station** 主界面右上角可以看到下载进度，速度比较慢，可以先去泡杯咖啡

![](http://pic.airijia.com/doc/20181130181554.png)


完成后会显示在 **Container Station** 主界面

![](http://pic.airijia.com/doc/20181130182927.png)


## 配置 airijia/ctl



配置文件在这个目录下


![](http://pic.airijia.com/doc/20181130183106.png)



假如 QNAP 的 IP 是 192.168.1.174，windows 访问 `\\192.168.1.174\Container\airi`

![](http://pic.airijia.com/doc/20181130183422.png)




浏览器输入 `192.168.1.174:8233`，打开 ctl 主界面



![](http://pic.airijia.com/doc/20181130183329.png)


详细配置方式 [ctl 初次使用](ctl/init)



## 相关连接


- [如何使用软件容器工作站?](https://www.qnap.com/zh-cn/how-to/tutorial/article/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E8%BD%AF%E4%BB%B6%E5%AE%B9%E5%99%A8%E5%B7%A5%E4%BD%9C%E7%AB%99/)
- [Container Station 运行 Docker 容器](http://einverne.github.io/post/2018/06/qnap-container-station.html)