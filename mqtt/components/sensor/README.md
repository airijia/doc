# 传感器组件

各种传感器，诸如温湿度，光照，CO2 等


## 网页创建固件

直接搜索具体传感器型号即可


## YAML 模板创建

### 基本配置



```yaml
# Example sensor configuration
name: Livingroom Temperature

# Optional variables:
unit_of_measurement: "°C"
icon: "mdi:water-percent"
accuracy_decimals: 1
expire_after: 30s
filters:
  - sliding_window_moving_average:
      window_size: 15
      send_every: 15
```

### 传感器过滤序列

```yaml
# Example filters:
filters:
  - offset: 2.0
  - multiply: 1.2
  - filter_out: 42.0
  - filter_nan:
  - sliding_window_moving_average:
      window_size: 15
      send_every: 15
  - exponential_moving_average:
      alpha: 0.1
      send_every: 15
  - throttle: 1s
  - heartbeat: 5s
  - debounce: 0.1s
  - delta: 5.0
  - unique:
  - or:
    - throttle: 1s
    - delta: 5.0
  - lambda: return x * (9.0/5.0) + 32.0;
```

### 使用案例


### 读数间隔



### 传感器自动化


##### on_value


##### on_value_range



##### on_raw_value


##### lambda calls



## 相关链接

