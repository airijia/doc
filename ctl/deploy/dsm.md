# 群晖 DSM 安装 airijia/ctl 

需要支持 docker 的 群晖（x86平台 DSM 版本大于 6.0）


## 安装 Docker

比如群辉的 IP 是 192.168.1.201， 用浏览器打开 `192.168.1.201:5000`

**套件中心**，搜索 docker 并安装

![](http://pic.airijia.com/doc/20190703093430.png)

**主菜单 - Docker**

![](http://pic.airijia.com/doc/20190703093444.png)





## 安装前的准备



**注册表** 输入 airijia 搜索

**下载** 标签选择 latest

![](http://pic.airijia.com/doc/20190703093459.png)

下载需要一段时间，先去设置配置文件用的文件夹


**DSM 主界面  - File Station**
在 docker 下新建文件夹 `airi`

![](http://pic.airijia.com/doc/20190703093541.png)



回到 docker **映象**


![](http://pic.airijia.com/doc/20190703093554.png)


还没有下载完，再等一会


![](http://pic.airijia.com/doc/20190703093605.png)


这个图标显示满格，表示下载完毕


## 安装

airijia/ctl 镜像下载完成后，点击启动

![](http://pic.airijia.com/doc/20190703093614.png)

**高级设置 - 启动自动重新启动**

![](http://pic.airijia.com/doc/20190703093624.png)



![](http://pic.airijia.com/doc/20190703093633.png)


**卷 - 添加文件夹**

![](http://pic.airijia.com/doc/20190703093643.png)

选择文件夹 `airi` 

![](http://pic.airijia.com/doc/20190703093655.png)


装载路径 填入 `/airi/hass`

![](http://pic.airijia.com/doc/20190703093705.png)


**网络** - 使用与 Docker Host 相同的网络 √

![](http://pic.airijia.com/doc/20190703093720.png)


核对无误后 点击**应用** 退回到上一级界面

![](http://pic.airijia.com/doc/20190703093730.png)


下一步

![](http://pic.airijia.com/doc/20190703093741.png)

**容器** 显示已运行

![](http://pic.airijia.com/doc/20190703093756.png)


`airi` 目录下会生成配置文件


![](http://pic.airijia.com/doc/20190703093805.png)



## 配置文件局域网共享

`docker` 文件夹本身是共享文件夹，只是默认隐藏了

到 **控制面板 - 共享文件夹**


![](http://pic.airijia.com/doc/20190703093848.png)



如图设置

![](http://pic.airijia.com/doc/20190703093859.png)


文件管理器输入 **\\192.168.1.201\docker\airi** 即可访问


![](http://pic.airijia.com/doc/20190703093907.png)



?> 下一步看 [ctl 初次使用](ctl/init)


