# 群晖 DSM 安装 airijia/ctl 

需要支持 docker 的 群晖（x86平台 DSM 版本大于 6.0）


## 安装 Docker

比如群辉的 IP 是 192.168.1.201， 用浏览器打开 `192.168.1.201:5000`

**套件中心**，搜索 docker 并安装

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx6fud1879j30se0iwdnw.jpg)

**主菜单 - Docker**

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx6fuqvgzmj30pi0n3qcf.jpg)





## 安装前的准备



**注册表** 输入 airijia 搜索

**下载** 标签选择 latest

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx6fvabn3tj30st0c9wh3.jpg)


下载需要一段时间，先去设置配置文件用的文件夹


**DSM 主界面  - File Station**
在 docker 下新建文件夹 `airi`

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx6g0scu53j30pc0h5q39.jpg)



回到 docker **映象**


![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx6g231nnoj311y0jcaau.jpg)


还没有下载完，再等一会


![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx6g2xwik2j312f0foq3w.jpg)


这个图标显示满格，表示下载完毕


## 安装

airijia/ctl 镜像下载完成后，点击启动

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwsfjh59n8j31240kv75e.jpg)

**高级设置 - 启动自动重新启动**

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwsfk52ritj30pj0il40a.jpg)



![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx6g657v2bj30n70jlt96.jpg)


**卷 - 添加文件夹**

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwsfkosqi4j30no0jhmxk.jpg)

选择文件夹 `airi` 

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx6g48n9v1j30hc0deq2z.jpg)


装载路径 填入 `/airi/hass`

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx6h3y64ebj30me0jfmxk.jpg)


**网络** - 使用与 Docker Host 相同的网络 √

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwsfouwv4uj30od0jmmxx.jpg)


核对无误后 点击**应用** 退回到上一级界面

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx6gd4umrwj30ox0hm764.jpg)


下一步

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fwsfql3u0aj30qk0ikdhn.jpg)

**容器** 显示已运行

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx6g92vl92j31260kejs8.jpg)


`airi` 目录下会生成配置文件


![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx6ginb2baj30o20f7q3p.jpg)



## 配置文件局域网共享

`docker` 文件夹本身是共享文件夹，只是默认隐藏了

到 **控制面板 - 共享文件夹**


![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx6gs5ho4lj30x70je3zl.jpg)



如图设置

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx6gt3w65sj30u80jsgmg.jpg)


`//192.168.1.201/docker/airi` 即可访问


![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx6gurv0soj30qe0feab1.jpg)


[ctl 初次使用](ctl/init)


