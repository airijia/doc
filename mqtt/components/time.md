# 时间



# Time

The `time` component allows you to set up real time clock time sources for esphomelib. You can then get the current time in [lambdas](https://esphomelib.com/esphomeyaml/guides/automations.html#config-lambda). Currently only sntp (internet-based) and homeassistant time sources are supported.

## Home Assistant Time Source

The preferred way to get time in esphomelib is using Home Assistant. With the `homeassistant` time platform, the [native API](https://esphomelib.com/esphomeyaml/components/api.html) connection to Home Assistant will be used to periodically synchronize the current time.

```
# 配置示例
time:
  - platform: homeassistant
    id: homeassistant_time
```

配置参数

- **id** (*选填*, [ID](mqtt/guides/configuration-types#id)): Specify the ID of the time for use in lambdas.
- **timezone** (*选填*, 字符串): Manually tell esphomelib what timezone to use with [this format](https://www.gnu.org/software/libc/manual/html_node/TZ-Variable.html) (warning: the format is quite complicated) or the simpler [TZ database name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) in the form <Region>/<City>. esphomeyaml tries to automatically infer the timezone string based on the timezone of the computer that is running esphomeyaml, but this might not always be accurate.
- **on_time** (*选填*, [Automation](https://esphomelib.com/esphomeyaml/guides/automations.html#automation)): Automation to run at specific intervals using a cron-like syntax. See [on_time](https://esphomelib.com/esphomeyaml/components/time.html#time-on-time).

## SNTP Configuration

```
# 配置示例
time:
  - platform: sntp
    id: sntp_time
```

配置参数

- **id** (*选填*, [ID](mqtt/guides/configuration-types#id)): Specify the ID of the time for use in lambdas.
- **timezone** (*选填*, 字符串): Manually tell esphomelib what timezone to use with [this format](https://www.gnu.org/software/libc/manual/html_node/TZ-Variable.html) (warning: the format is quite complicated) or the simpler [TZ database name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) in the form <Region>/<City>. esphomeyaml tries to automatically infer the timezone string based on the timezone of the computer that is running esphomeyaml, but this might not always be accurate.
- **servers** (*选填*, list of strings): Choose up to 3 NTP servers that are used for the clock source. Defaults to `0.pool.ntp.org`, `1.pool.ntp.org` and `2.pool.ntp.org`
- **on_time** (*选填*, [Automation](https://esphomelib.com/esphomeyaml/guides/automations.html#automation)): Automation to run at specific intervals using a cron-like syntax. See [on_time](https://esphomelib.com/esphomeyaml/components/time.html#time-on-time).

## Use In Lambdas

To get the current local time with the timezone applied in [lambdas](https://esphomelib.com/esphomeyaml/guides/automations.html#config-lambda), just call the `.now()`method like so:

```
auto time = id(sntp_time).now();
```

Alternatively, you can use `.utcnow()` to get the current UTC time.

The returned object can either be used directly to get the current minute, hour, … as numbers or a string can be created based on a given format. If you want to get the current time attributes, you have these fields

| **Name**        | **Meaning**                                                  | **Range (inclusive)**                                        | **Example**  |
| --------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------ |
| `.second`       | Seconds after the minute                                     | [0-60] (generally [0-59], extra range is to accommodate leap seconds.) | 42           |
| `.minute`       | Minutes after the hour                                       | [0-59]                                                       | 31           |
| `.hour`         | Hours since midnight                                         | [0-23]                                                       | 16           |
| `.day_of_week`  | Day of the week, sunday=1                                    | [1-7]                                                        | 7 (saturday) |
| `.day_of_month` | Day of the month                                             | [1-31]                                                       | 18           |
| `.day_of_year`  | Day of the year                                              | [1-366]                                                      | 231          |
| `.month`        | Month, january=1                                             | [1-12]                                                       | 8 (august)   |
| `.year`         | Year since 0 A.C.                                            | [1970-∞[                                                     | 2018         |
| `.is_dst`       | Is daylight savings time                                     | false, true                                                  | true         |
| `.time`         | Unix epoch time (seconds since UTC Midnight January 1, 1970) | [-2147483648 - 2147483647] (negative values for time past January 19th 2038) | 1534606002   |
| `.is_valid()`   | Basic check if the time is valid (i.e. not January 1st 1970) | false, true                                                  | true         |

Note

Before the ESP has connected to the internet and can get the current time the date will be January 1st 1970. So make sure to check if `.is_valid()` evaluates to `true` before triggering any action.



### strftime

直接使用标准的 [C 库函数 – strftime()](http://wiki.jikexueyuan.com/project/c/strftime.html) 格式化时间的显示


```c++
# 在显示屏组件中显示时间
it.strftime(0, 0, id(font), "%Y-%m-%d %H:%M", id(time).now());
```


## on_time

强大的基于时间的自动化触发器，使用部分参考 [crontab](https://crontab.guru/)

比如

This powerful automation can be used to run automations at specific intervals at specific times of day. The syntax is a subset of the syntax.

There are two ways to specify time intervals: Either with using the `seconds:`, `minutes:`, … keys as seen below or using a cron expression like `* /5 * * * *`.

Basically, the automation engine looks at your configured time schedule every second and evaluates if the automation should run.

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

- **seconds** (*选填*, 字符串): 秒，默认为 `*` (任意)， 范围从 0 到 59 Specify for which seconds of the minute the automation will trigger. Defaults to `*` (all seconds). Range is from 0 to 59.
- **minutes** (*选填*, 字符串): 分钟，默认为 `*` (任意)， 范围从 0 到 59Specify for which minutes of the hour the automation will trigger. Defaults to `*` (all minutes). Range is from 0 to 59.
- **hours** (*选填*, 字符串): 小时，默认为 `*` (任意)， 范围从 0 到 23 Specify for which hours of the day the automation will trigger. Defaults to `*` (all hours). Range is from 0 to 23.
- **days_of_month** (*选填*, 字符串): 日，默认为 `*` (任意)， 范围从 1 到 31Specify for which days of the month the automation will trigger. Defaults to `*` (all hours). Range is from 1 to 31.
- **months** (*选填*, 字符串): 月，默认为 `*` (任意)， 范围从 1 到 12
- **days_of_week** (*选填*, 字符串): 星期，默认为 `*` (任意)， 范围从 1 到 7(周日)
- **cron** (*选填*, 字符串): Alternatively, you can specify a whole cron expression like`* /5 * * * *`. Please note years and some special characters like `L`, `#` are currently not supported.
- See [Automation](https://esphomelib.com/esphomeyaml/guides/automations.html#automation).

In the `seconds:`, `minutes:`, … fields you can use the following operators:

- ```
  seconds: 0
  ```

  An integer like `0` or `30` will make the automation only trigger if the current second is **exactly** 0 or 30, respectively.

- ```
  seconds: 0,30,45
  ```

  You can combine multiple expressions with the `,` operator. This operator makes it so that if either one of the expressions separated by a comma holds true, the automation will trigger. For example `0,30,45` will trigger if the current second is either `0` or `30` or `45`.

- ```
  days_of_week: 2-6
  # same as
  days_of_week: MON-FRI
  # same as
  days_of_week: 2,3,4,5,6
  # same as
  days_of_week: MON,TUE,WED,THU,FRI
  ```

  The `-` (hyphen) operator can be used to create a range of values and is shorthand for listing all values with the `,` operator.

- ```
  # every 5 minutes
  seconds: 0
  minutes: /5
  
  # every timestamp where the minute is 5,15,25,...
  seconds: 0
  minutes: 5/10
  ```

  The `/` operator can be used to create a step value. For example `/5` for `minutes:`makes an automation trigger only when the minute of the hour is 0, or 5, 10, 15, … The value in front of the `/` specifies the offset with which the step is applied.

- ```
  # Every minute
  seconds: 0
  minutes: '*'
  ```

  Lastly, the `*` operator matches every number. In the example above, `*` could for example be substituted with `0-59`.

Warning

Please note the following automation would trigger for each second in the minutes 0,5,10,15 and not once per 5 minutes as the seconds variable is not set:

```yaml
time:
  - platform: sntp
    # ...
    on_time:
      - minutes: /5
        then:
          - switch.toggle: my_switch
```







## 相关链接

- [C 库函数 – strftime()](http://wiki.jikexueyuan.com/project/c/strftime.html)



