# 时间

调用当前时间的组件

## hass 时间

使用 [API](esphome/components/api) 从 airi 或 hass 中枢获取时间

```yaml
# 配置示例
time:
  - platform: homeassistant
  id: homeassistant_time
```

配置参数

- **id** (*选填*, [ID](esphome/guides/configuration-types#id)): 此组件的 ID
- **timezone** (*选填*, 字符串): 时区设置，常用值 `Asia/Shanghai` 
- **on_time** (*选填*, [自动化](esphome/guides/automations)): 在指定时间触发自动化动作， 详见 [on_time](#on_time)



## SNTP 时间

从简单网络时间协议（Simple Network Time Protocol）服务器获取时间

```yaml
# 配置示例
time:
  - platform: sntp
  id: sntp_time
```

配置参数

- **id** (*选填*, [ID](esphome/guides/configuration-types#id)): 此组件的 ID
- **timezone** (*选填*, 字符串): 时区设置，常用值 `Asia/Shanghai` 
- **servers** (*选填*, 字符串列表): 指定 3 个 NTP 服务器。默认值为  `0.pool.ntp.org`，`1.pool.ntp.org`，`2.pool.ntp.org`
- **on_time** (*选填*, [自动化](esphome/guides/automations)): 在指定时间触发自动化动作， 详见 [on_time](#on_time)




## lambdas 表达式中使用

使用如下方法获取当前时间对象

```c++
auto time = id(sntp_time).now();
```

使用 `.utcnow()` 获取 UTC 时间对象

时间对象支持以下函数获取具体的时间值

| 函数 | 结果 | 结果范围 | 举例 |
| ---- | --------------- | --------------- | --- |
| .second | 秒 | [0-60] | 42 |
| .minute | 分 | [0-59] | 31 |
| .hour | 时 | [0-23] | 16 |
| .day_of_week  | 星期几  | [1-7], 周日=1  | 7 (周六) |
| .day_of_month | 月中的第几天 | [1-31] | 18 |
| .day_of_year  | 年中的第几天 | [1-366]  | 231  |
| .month  | 月 | [1-12] 一月=1| 8 (8月) |
| .year | 年 | [1970-∞[ | 2019 |
| .is_dst | 是否为夏令时| false, true  | true |
| .time | 时间戳 | [-2147483648 - 2147483647]  | 1534606002 |
| .is_valid() | 是否获取到正确时间 | false, true  | true |

当固件没有连接到网络无法获取到正确时间时，此时时间的值等于时间戳起始点 1970-01-01，`.is_valid()` 函数的返回结果是  `false`，只有当获取到正确时间，即返回结果为 `true`，再触发对应的动作



### strftime

直接使用标准的 [C 库函数 – strftime()](http://wiki.jikexueyuan.com/project/c/strftime.html) 格式化时间的显示


```c++
# 在显示屏组件中显示时间
it.strftime(0, 0, id(font), "%Y-%m-%d %H:%M", id(time).now());
```



Directive	Meaning	Example



| 函数 | 结果 |  举例 |
| ---- | --------------- | --------------- | 
| %a | 缩写的星期几| Sat |
| %A | 星期几| Saturday |
| %w | 数字星期几，星期日 = 0  | 6 |
| %d | 日期 | 01, 02, …, 31 |
| %b | 缩写的月份 | Aug |
| %B | 月份 | August |
| %m | 数字月份 |01, 02, …, 12 |
| %y | 年份末两位 |00, 01, …, 99 |
| %Y | 年份 | 2018 |
| %H | 24小时制的小时 | 00, 01, …, 23 |
| %I | 12小时制的小时 |00, 01, …, 12 |
| %p | 上午下午 |AM, PM |
| %M | 分 |00, 01, …, 59 |
| %S | 秒 |00, 01, …, 59 |
| %j | 一年中的第几天 |001, 002, …, 366 |
| %U | 一年中的第几天(星期日作为每周第一天)，每年的第一个星期日之前得几天作为第 0 个星期|00, 01, …, 53 |
| %W | 一年中的第几天(星期一作为每周第一天)，每年的第一个星期一之前得几天作为第 0 个星期|00, 01, …, 53 |
| %c | 日期时间 |Sat Aug 18 16:31:42 2018 |
| %x | 日期|08/18/18 |
| %X | 时间 |16:31:42 |
| %% | %符号 |% |

## 触发器

### on_time

强大的基于时间的自动化触发器，使用部分参考 [crontab](https://crontab.guru/)


```yaml
time:
  - platform: sntp
  # ...
  on_time:
  # 每 5 分钟切换开关状态
  - seconds: 0
  minutes: /5
  then:
  - switch.toggle: my_switch

  # 每个工作日早上 7:30 打开灯
  - seconds: 0
  minutes: 30
  hours: 7
  days_of_week: MON-FRI
  then:
  - light.turn_on: my_light

  # 每 5 分钟切换开关状态
  - cron: '* /5 * * * *'
  then:
  - switch.toggle: my_switch
```

配置参数

- **seconds** (*选填*, 字符串): 秒，默认为 `*` (任意)， 范围从 0 到 59
- **minutes** (*选填*, 字符串): 分钟，默认为 `*` (任意)， 范围从 0 到 59
- **hours** (*选填*, 字符串): 小时，默认为 `*` (任意)， 范围从 0 到 23
- **days_of_month** (*选填*, 字符串): 日，默认为 `*` (任意)， 范围从 1 到 31
- **months** (*选填*, 字符串): 月，默认为 `*` (任意)， 范围从 1 到 12
- **days_of_week** (*选填*, 字符串): 星期，默认为 `*` (任意)， 范围从 1 到 7(周日)
- **cron** (*选填*, 字符串): cron表达式，六位依次为秒、分、时、日期(按月)、月，日期(按周)，暂不支持`L`、`#`等通配符

cron 使用举例

- 0 0 12 * * * 表示每天的 12:00:00 触发
- 15 30 12 * * 1,2 表示每周1周2的 12:30:15 触发
- 0 /5 * * * * 表示每隔5分钟的 0秒，也就是每小时的 0，5，10，15，25 ...  55分时触发






## 相关链接

- [C 库函数 – strftime()](http://wiki.jikexueyuan.com/project/c/strftime.html)



