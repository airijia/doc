# 日志

通过 UART (比如 TTL 线)输出日志的功能，方便调试设备功能。默认情况下，所以高于 `DEBUG` 级别的日志都输出，降低输出级别可以减少内存使用


```yaml
# 配置示例
logger:
  level: DEBUG
```

## 基本配置

- **baud_rate** (*选填*, 整数): 通过 UART 传输的波特率，默认为 `115200`，设置成 `0` 将禁用本功能
- **tx_buffer_size** (*选填*, 字符串): TX 缓冲区大小，默认为 `512`，降低这个值可以减少内存占用
- **level** (*选填*, 字符串): 输出日志级别，所有低于这个级别的日志将不显示，默认为 `DEBUG`
<!-- - **logs** (*选填*, mapping): Manually set the log level for a specific component or tag. See -->
- **id** (*选填*, [ID](mqtt/guides/configuration-types#id)): 本组件的 ID


## 日志级别

按重要程度排序:

- `NONE`：不显示日志
- `ERROR`：只显示**错误**日志，红色文字
- `WARN`：显示**错误**和**警告**级别的日志，黄色文字
- `INFO`：显示**错误**、**警告**和**信息**级别的日志，绿色文字
- `DEBUG`：默认值，显示所有级别的的日志，青色文字
- `VERBOSE`：类似 **DEBUG**，但会附带更多通常无价值的日志，灰色文字
- `VERY_VERBOSE`：所有内部信息都输出，包括各种总线的信息，白色文字


## 动作 

### logger.log

使用 **printf** 式样化输出一段信息到日志，具体使用方法参考 [格式化字符串](mqtt/components/display/#格式化字符串) 


Print a formatted message to the logs.

In the `format` option, you can use `printf`-style formatting (see [Formatted Text](https://esphomelib.com/esphomeyaml/components/display/index.html#display-printf)).

```yaml
on_...:
  then:
    # 静态字符串
    - logger.log: "Hello World"

    # 格式化字符串
    - logger.log:
        format: "The temperature sensor reports value %.1f and humidity %.1f"
        args: [ 'id(temperature_sensor).state', 'id(humidity_sensor).state' ]
```

**配置参数**

- **format** (**必填**, 字符串): printf 式样化字符串
- **args** (*选填*, [Lambda 表达式](mqtt/guides/automations#lambdas-表达式) 列表): 供输出的变量
- **level** (*选填*, 字符串): 参考[日志级别](#日志级别)，默认为 `DEBUG`
- **tag** (*选填*, 字符串): 标签分类，默认为 `main`