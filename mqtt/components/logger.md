# 日志

通过 UART (比如 TTL 线)输出日志的功能，方便调试设备功能。默认情况下，所以高于 `DEBUG` 级别的日志都输出，降低输出级别可以减少内存使用


```yaml
# 配置示例
logger:
  level: DEBUG
```

## 基本配置

- **baud_rate** (*选填*, int): 通过 UART 传输的波特率，默认为 `115200`，设置成 `0` 将禁用本功能
- **tx_buffer_size** (*选填*, string): TX 缓冲区大小，默认为 `512`，降低这个值可以减少内存占用
- **level** (*选填*, string): 输出日志级别，所有低于这个级别的日志将不显示，默认为 `DEBUG`
<!-- - **logs** (*选填*, mapping): Manually set the log level for a specific component or tag. See -->
- **id** (*选填*, [ID](mqtt/guides/configuration-types#id)): 本组件的 ID


## 日志级别

按重要程度排序:

- `NONE`
- `ERROR`
- `WARN`
- `INFO`
- `DEBUG`
- `VERBOSE`
- `VERY_VERBOSE`


## 动作 

### logger.log

?> TODO: 要配合显示组件，稍后完成