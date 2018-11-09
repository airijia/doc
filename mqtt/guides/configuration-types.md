# 配置类型

YAML 配置文件中经常使用的几种类型

## ID

用于不同模块之间的识别，不可以重复，同时遵循以下规则（C++ 变量命名规则）

 - 必须字母开头，可以数字结尾
 - 不能用空格
 - 除下划线 _ 外，不能使用任何特殊字符
 - 不能是 C++ 保留字（比如 if，void，class 等）


## 引脚

即 GPIO，可以使用芯片引脚编号，可以使用纯数字如`2`、`17`，也可以用全称如 `GPIO2`、`GPIO17`

在[核心组件] 中配置好主板后，可以使用改版型对应的引脚编号，比如 NodeMCU ESP8266 ，可以直接用 `D1`、`A1`定义引脚

?> TODO: d1mini 

```yaml
config_a:
  pin: 2

config_B:
  pin: GPIO2

# NodeMCU ESP8266:

some_config_option:
  pin: D1
```


## 多参引脚
定义复杂的引脚的类型


```
some_config_option:
  # 引脚:
  pin: D0

  # 多参引脚:
  pin:
    number: D0
    inverted: True
    mode: INPUT_PULLUP
```


### 配置参数

- **number** (**Required**, pin): 引脚编号
- **inverted** (*Optional*, boolean): 翻转读值，可选 `True`，`False`，默认值 `False`
- **mode** (*Optional*, string): 引脚模式，参考 Arduino 的`pinMode`


#### 常用引脚模式

- `INPUT`
- `OUTPUT`
- `OUTPUT_OPEN_DRAIN`
- `ANALOG` (仅限 ESP32)
- `INPUT_PULLUP`
- `INPUT_PULLDOWN` (仅限 ESP32)
- `INPUT_PULLDOWN_16` (仅限 ESP8266 的 GPIO16)

#### 其他引脚模式

- `WAKEUP_PULLUP` (仅限 ESP8266)
- `WAKEUP_PULLDOWN` (仅限 ESP8266)
- `SPECIAL`
- `FUNCTION_0` (仅限 ESP8266)
- `FUNCTION_1`
- `FUNCTION_2`
- `FUNCTION_3`
- `FUNCTION_4`
- `FUNCTION_5` (仅限 ESP32)
- `FUNCTION_6` (仅限 ESP32)


## 时长

定义时间持续的一个长度单位

```yaml
some_config_option:
  some_time_option: 1000us  # 1000 微秒 (等于 1 毫秒)
  some_time_option: 1000ms  # 1000 毫秒
  some_time_option: 1.5s  # 1.5 秒
  some_time_option: 0.5min  # 半分钟
  some_time_option: 2h  # 2 小时

  # 这种格式记得收尾加引号
  some_time_option: '2:01'  # 2 小时 1 分钟
  some_time_option: '2:01:30'  # 2 小时 1 分钟 30 秒

  # 10ms + 30s + 25min + 3h
  some_time_option:
    milliseconds: 10
    seconds: 30
    minutes: 25
    hours: 3
    days: 0

  # 读取周期 'update_interval' 还可以配置如下参数
  update_interval: never  # 永不更新
  update_interval: 0ms  # 每个循环 loop() 都更新
```



