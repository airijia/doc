# DEBUG

开启 debug 功能，开发调试新功能时常用，显示重启原因，空闲内存数量等信息，需要配合 [日志组件](esphome/components/logger) 使用

![](http://pic.airijia.com/doc/20190222191221.png)



```yaml
# 开启debug
debug:

# 日志级别至少为默认值 debug 
logger:
  level: debug
```