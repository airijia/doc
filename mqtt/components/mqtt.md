# MQTT 客户端组件

?> mqtt 简介

配置节点上的 MQTT 客户端组件，连接到智能中枢。例如 airijia/ctl 分配到的 IP 是 `192.168.1.233`

```
# 如此配置即可
mqtt:
  broker: 192.168.1.233
```

## 基本配置

- **broker** (**必填**, 字符串): MQTT 转发器(服务端)地址
- **port** (*选填*, 整数): MQTT 转发器端口，默认 1883
- **username** (*选填*, 字符串): MQTT 用户名
- **password** (*选填*, 字符串): MQTT 密码

## 适配中枢

 - 爱睿家智能中枢（airijia/ctl）

    免配置，自动发现

 - Hass (Home Assistant)

   在配置文件（通常为 configuration.yaml）中增加如下内容

```yaml
mqtt:
  discovery: true
  discovery_prefix: airi
```


## 进阶配置

<!-- - **client_id** (*选填*, 字符串): The client id to use for opening connections. See [Defaults](https://esphomelib.com/esphomeyaml/components/mqtt.html#mqtt-defaults) for more information. -->
<!-- - **discovery** (*选填*, 布尔值): 自动发现功能，开启可以被中枢自动发现并添加。默认值为开启 `True` -->
<!-- - **discovery_retain** (*选填*, 布尔值): Whether to retain MQTT discovery messages so that entities are added automatically on Home Assistant restart。默认值为开启 `True` -->
<!-- - **discovery_prefix** (*选填*, 字符串): The prefix to use for Home Assistant’s MQTT discovery. Should not contain trailing slash。默认值为 `airi` -->
<!-- - **topic_prefix** (*选填*, 字符串): The prefix used for all MQTT messages. Should not contain trailing slash. Defaults to `<APP_NAME>`. -->
<!-- - **log_topic** (*选填*, [MQTT消息](https://esphomelib.com/esphomeyaml/components/mqtt.html#mqtt-message)) The topic to send MQTT log messages to. -->
<!-- - **birth_message** (*选填*, [MQTT消息](https://esphomelib.com/esphomeyaml/components/mqtt.html#mqtt-message)): The message to send when a connection to the broker is established. See [Last Will And Birth Messages](https://esphomelib.com/esphomeyaml/components/mqtt.html#mqtt-last-will-birth) for more information. -->
<!-- - **will_message** (*选填*, [MQTT消息](https://esphomelib.com/esphomeyaml/components/mqtt.html#mqtt-message)): The message to send when the MQTT connection is dropped. See [Last Will And Birth Messages](https://esphomelib.com/esphomeyaml/components/mqtt.html#mqtt-last-will-birth) for more information. -->
<!-- - **shutdown_message** (*选填*, [MQTT消息](https://esphomelib.com/esphomeyaml/components/mqtt.html#mqtt-message)): The message to send when the node shuts down and the connection is closed cleanly. See [Last Will And Birth Messages](https://esphomelib.com/esphomeyaml/components/mqtt.html#mqtt-last-will-birth) for more information. -->
<!-- - **ssl_fingerprints** (*选填*, list): Only on ESP8266. A list of SHA1 hashes used for verifying SSL connections. See [SSL Fingerprints](https://esphomelib.com/esphomeyaml/components/mqtt.html#mqtt-ssl-fingerprints) for more information. -->
<!-- - **reboot_timeout** (*选填*, [time](https://esphomelib.com/esphomeyaml/guides/configuration-types.html#config-time)): The amount of time to wait before rebooting when no MQTT connection exists. Can be disabled by setting this to `0s`. Defaults to `60s`. -->
<!-- - **keepalive** (*选填*, [Time](https://esphomelib.com/esphomeyaml/guides/configuration-types.html#config-time)): The time to keep the MQTT socket alive, decreasing this can help with overall stability due to more WiFi traffic with more pings. Defaults to 15 seconds. -->
<!-- - **on_message** (*选填*, [Automation](https://esphomelib.com/esphomeyaml/guides/automations.html#automation)): An action to be performed when a message on a specific MQTT topic is received. See [on_message](https://esphomelib.com/esphomeyaml/components/mqtt.html#mqtt-on-message). -->
- **id** (*选填*, [ID](mqtt/guides/configuration-types#id)): 用于逻辑识别的 ID



## MQTT消息

With the MQTT Message schema you can tell esphomeyaml how a specific MQTT message should be sent. It is used in several places like last will and birth messages or MQTT log options.

```
# 简单使用:
some_option: topic/to/send/to

# 禁用:
some_option:

# 扩展使用:
some_option:
  topic: topic/to/send/to
  payload: online
  qos: 0
  retain: True
```

Configuration options:

- **topic** (*必填*, 字符串): 消息发布到的主题
- **payload** (*必填*, 字符串): 消息的内容，实际发出时会被实际有效负载包裹，比如 `log_topic`
- **qos** (*Optional*, int): QoS 等级，最多一次`0`（默认），至少一次`1`，确保仅一次`2`
- **retain** (*Optional*, boolean): 此消息是否为保留消息，默认为是 `True`







## 遗愿和重生消息

MQTT 本身就是为信号不稳定的网络设计的，所以难免一些客户端会无故断开与转发器的连接。

![](https://ws1.sinaimg.cn/large/007fN5Xegy1fx3diou3x8j30k00ca3z1.jpg)

**当模块断开连接时，在 airi:8123 和 hass 中的显示**

默认配置的情况下，模块会发布

By default, esphomelib will send a retained MQTT message to `<TOPIC_PREFIX>/status`with payload `online`, and will tell the broker to send a message `<TOPIC_PREFIX>/status`with payload `offline` if the connection drops.

You can change these messages by overriding the 重生消息 `birth_message` and 遗愿消息 `will_message` with the following options.

```
mqtt:
  # ...
  will_message:
    topic: myavailability/topic
    payload: offline
  birth_message:
    topic: myavailability/topic
    payload: online
```

- **birth_message** (*Optional*, [MQTT消息](https://esphomelib.com/esphomeyaml/components/mqtt.html?highlight=app_name#mqtt-message))
- **will_message** (*Optional*, [MQTT消息](https://esphomelib.com/esphomeyaml/components/mqtt.html?highlight=app_name#mqtt-message))

If the birth message and last will message have empty topics or topics that are different from each other, availability reporting will be disabled.





## MQTT 子组件

其他组件(比如传感器、开关等)可以将自身扩展为 MQTT 组件的子组件，借助 MQTT 组件来实现通信等功能，同时可以向上覆盖一部分设置

**配置项**

- **name** (**必填**, 字符串): The name to use for the MQTT Component.
- **retain** (*Optional*, boolean): If all MQTT state messages should be retained. Defaults to `True`.
- **discovery** (*Optional*, boolean): 子组件是否会被自动发现，默认集成父组件的值
- **availability** (*Optional*): Manually set what should be sent to Home Assistant for showing entity availability. Default derived from [global birth/last will message](https://esphomelib.com/esphomeyaml/components/mqtt.html?highlight=app_name#mqtt-last-will-birth).
- **state_topic** (*Optional*, 字符串): The topic to publish state updates to. Defaults to`<TOPIC_PREFIX>/<COMPONENT_TYPE>/<COMPONENT_NAME>/state`.
- **command_topic** (*Optional*, 字符串): The topic to subscribe to for commands from the remote. Defaults to`<TOPIC_PREFIX>/<COMPONENT_TYPE>/<COMPONENT_NAME>/command`.
- **internal** (*Optional*, boolean): Mark this component as internal. Internal components will not send any MQTT messages and can be used for [on-device automations](https://esphomelib.com/esphomeyaml/guides/automations.html#automation). Only specifying an `id` without a `name` will implicitly set this to true.





## on_message

With this configuration option you can write complex automations whenever an MQTT message on a specific topic is received. To use the message content, use a [lambda](https://esphomelib.com/esphomeyaml/guides/automations.html#config-lambda)template, the message payload is available under the name `x` inside that lambda.

```
mqtt:
  # ...
  on_message:
    topic: my/custom/topic
    qos: 0
    then:
      - switch.turn_on:
          id: some_switch
```

Configuration variables:

- **topic** (**必填**, 字符串): The MQTT topic to subscribe to and listen for MQTT messages on. Every time a message with **this exact topic** is received, the automation will trigger.

  Note

  Currently the topic does not support MQTT wildcards like `+` or `#`.

- **qos** (*Optional*, integer): The MQTT Quality of Service to subscribe to the topic with. Defaults to 0.

Note

You can even specify multiple `on_message` triggers by using a YAML list:

```
mqtt:
  on_message:
     - topic: some/topic
       then:
         - # ...
     - topic: some/other/topic
       then:
         - # ...
```



## mqtt.publish Action

在自动化中使用，发布 MQTT 消息 `message` 到指定的主题 `topic` 中

```
on_...:
  then:
    - mqtt.publish:
        topic: some/topic
        payload: "Something happened!"

    # Templated:
    - mqtt.publish:
        topic: !lambda >-
          if (id(reed_switch).value) return "topic1";
          else return "topic2";
        payload: !lambda >-
          return id(reed_switch).value ? "YES" : "NO";
```

Configuration options:

- **topic** (*必填*, 字符串, [模型化](https://esphomelib.com/esphomeyaml/guides/automations.html#config-templatable)): The MQTT topic to publish the message.
- **payload** (*必填*, 字符串, [模型化](https://esphomelib.com/esphomeyaml/guides/automations.html#config-templatable)): The message content.
- **qos** (*Optional*, int, [模型化](https://esphomelib.com/esphomeyaml/guides/automations.html#config-templatable)): The [Quality of Service](https://www.hivemq.com/blog/mqtt-essentials-part-6-mqtt-quality-of-service-levels) level of the topic. Defaults to 0.
- **retain** (*Optional*, boolean, [模型化](https://esphomelib.com/esphomeyaml/guides/automations.html#config-templatable)): If the published message should have a retain flag on or not. Defaults to `False`.