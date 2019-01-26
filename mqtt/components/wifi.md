# WiFi 组件

配置 WiFI 信息

强烈建议设置成静态 IP，可以显著提升连接速度


```yaml
# 最简使用
wifi:
  ssid: MyHomeNetwork
  password: VerySafePassword

# 常规使用
wifi:
  ssid: MyHomeNetwork
  password: VerySafePassword
  fast_connect : true
  id: wifi

# 设置成静态 IP
wifi:
  ssid: MyHomeNetwork
  password: VerySafePassword
  fast_connect : true
  id: wifi
  manual_ip:
    static_ip: 192.168.1.66
    gateway: 192.168.1.1
    subnet: 255.255.255.0

# 多个 WiFi
wifi:
  networks:
  - ssid: FirstNetworkToConnectTo
    password: VerySafePassword
  - ssid: SecondNetworkToConnectTo
    password: VerySafePassword
```

## 配置参数

- **ssid** (*选填*, 字符串): 要连入的 WiFi 网络名称
- **password** (*选填*, 字符串): 要连入的 WiFi 密码
- **manual_ip** (*选填*): 手动设置节点的 IP 地址
  - **static_ip** (**必填**, IPv4): 静态 IP 地址
  - **gateway** (**必填**, IPv4): 网关地址
  - **subnet** (**必填**, IPv4): 子网掩码
  - **dns1** (*选填*, IPv4): 首选 DNS
  - **dns2** (*选填*, IPv4): 备用 DNS
- **hostname** (*选填*, 字符串): 自定义主机名
- **ap** (*选填*): AP 模式
  - **ssid** (**必填**, 字符串): AP 的网络名称
  - **password** (*选填*, 字符串): AP 的密码
  - **channel** (*选填*, 整数): AP 使用的信道，1 到 14，默认为1
  - **manual_ip** (*选填*): 手动设置 AP 的 IP 地址
- **domain** (*选填*, 字符串): 此节点的域名后缀，如果设置为 `.local`, 则所有上传数据会指向 `<HOSTNAME>.local`。默认为`.local`
- **reboot_timeout** (*选填*, [时长](mqtt/guides/configuration-types#时长)): 没有可用的的 WiFi 时，节点会在设置的时间后重启。默认 `60s`，设置成 `0s` 禁用此功能 
- **power_save_mode** (*选填*, 字符串): [节能模式](#节能模式)
- **fast_connect** (*选填*, 布尔值): 如果开启 (true)，则固件启动的时候，跳过全局扫描的步骤直连连接指定的 WiFi，显著提高启动速度，并方便连接隐藏 WiFi。默认为 `false`，不开启
- **id** (*选填*, [ID](mqtt/guides/configuration-types#id)): 用于逻辑识别的 ID


## AP 模式

AP 可以跟 STA 模式共存，但没有可用的 WiFi 可连接是，节点会只开启 AP 模式



## 手动设置 IP 地址

默认是通过路由器的 DHCP 功能自动分配 IP，但网络不稳定时，可以手动设置成静态 IP 减轻路由器压力，提高节点的联网速度


```yaml
wifi:
  # ...
  manual_ip:
    # 静态 IP 地址
    static_ip: 10.0.0.42
    # 网关地址
    gateway: 10.0.0.1
    # 子网掩码
    subnet: 255.255.255.0
```

同时，静态也可以提高 OTA 的成功率

## 节能模式

WiFi 的节能模式，开启节能模式会降低 WiFi 的连接品质，导致节点频繁的断开连接，除非有特殊需求，比如电池供电，否则不建议设置。默认 `NONE` 不开启。


- `NONE` (默认, 不节能)
- `LIGHT`
- `HIGH` (最好的节能效果)

```
wifi:
  # ...
  power_save_mode: none
```


## 多个 WiFi


设置多个网络信息，固件启动时将选择信号最强的连入

```yaml
# 配置示例
wifi:
  networks:
  - ssid: FirstNetworkToConnectTo
    password: VerySafePassword
  - ssid: SecondNetworkToConnectTo
    password: VerySafePassword
  # Other options
  # ...
```

**配置参数**

- **ssid** (字符串): 要连入的 WiFi 网络名称
- **password** (字符串): 要连入的 WiFi 密码
- **channel** (整数): 使用的信道，可用值 1 到 14
- **bssid** (字符串): 指定 bssid 即目标路由的物理地址 (MAC) 