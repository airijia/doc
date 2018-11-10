# MQTT 客户端组件

The MQTT Client Component sets up the MQTT connection to your broker and is currently 必填 for esphomelib to work. In most cases, you will just be able to copy over the [MQTT section](https://www.home-assistant.io/components/mqtt/) of your Home Assistant configuration.
MQTT的全名為 Message Queuing Telemetry Transport
```
# 配置示例
mqtt:
  broker: 10.0.0.2
  username: livingroom
  password: MyMQTTPassword
```

## 配置项

- **broker** (**必填**, 字符串): MQTT 服务器地址
- **port** (*选填*, 整数): MQTT 服务器端口，默认 1883
- **username** (*选填*, 字符串): MQTT 用户名
- **password** (*选填*, 字符串): MQTT 密码
<!-- - **client_id** (*选填*, 字符串): The client id to use for opening connections. See [Defaults](https://esphomelib.com/esphomeyaml/components/mqtt.html#mqtt-defaults) for more information. -->
<!-- - **discovery** (*选填*, 布尔值): 自动发现功能，开启可以被中枢自动发现并添加。默认值为开启 `True` -->
<!-- - **discovery_retain** (*选填*, 布尔值): Whether to retain MQTT discovery messages so that entities are added automatically on Home Assistant restart。默认值为开启 `True` -->
<!-- - **discovery_prefix** (*选填*, 字符串): The prefix to use for Home Assistant’s MQTT discovery. Should not contain trailing slash。默认值为 `airi` -->
<!-- - **topic_prefix** (*选填*, 字符串): The prefix used for all MQTT messages. Should not contain trailing slash. Defaults to `<APP_NAME>`. -->
<!-- - **log_topic** (*选填*, [MQTTMessage](https://esphomelib.com/esphomeyaml/components/mqtt.html#mqtt-message)) The topic to send MQTT log messages to. -->
<!-- - **birth_message** (*选填*, [MQTTMessage](https://esphomelib.com/esphomeyaml/components/mqtt.html#mqtt-message)): The message to send when a connection to the broker is established. See [Last Will And Birth Messages](https://esphomelib.com/esphomeyaml/components/mqtt.html#mqtt-last-will-birth) for more information. -->
<!-- - **will_message** (*选填*, [MQTTMessage](https://esphomelib.com/esphomeyaml/components/mqtt.html#mqtt-message)): The message to send when the MQTT connection is dropped. See [Last Will And Birth Messages](https://esphomelib.com/esphomeyaml/components/mqtt.html#mqtt-last-will-birth) for more information. -->
<!-- - **shutdown_message** (*选填*, [MQTTMessage](https://esphomelib.com/esphomeyaml/components/mqtt.html#mqtt-message)): The message to send when the node shuts down and the connection is closed cleanly. See [Last Will And Birth Messages](https://esphomelib.com/esphomeyaml/components/mqtt.html#mqtt-last-will-birth) for more information. -->
<!-- - **ssl_fingerprints** (*选填*, list): Only on ESP8266. A list of SHA1 hashes used for verifying SSL connections. See [SSL Fingerprints](https://esphomelib.com/esphomeyaml/components/mqtt.html#mqtt-ssl-fingerprints) for more information. -->
<!-- - **reboot_timeout** (*选填*, [time](https://esphomelib.com/esphomeyaml/guides/configuration-types.html#config-time)): The amount of time to wait before rebooting when no MQTT connection exists. Can be disabled by setting this to `0s`. Defaults to `60s`. -->
<!-- - **keepalive** (*选填*, [Time](https://esphomelib.com/esphomeyaml/guides/configuration-types.html#config-time)): The time to keep the MQTT socket alive, decreasing this can help with overall stability due to more WiFi traffic with more pings. Defaults to 15 seconds. -->
<!-- - **on_message** (*选填*, [Automation](https://esphomelib.com/esphomeyaml/guides/automations.html#automation)): An action to be performed when a message on a specific MQTT topic is received. See [on_message](https://esphomelib.com/esphomeyaml/components/mqtt.html#mqtt-on-message). -->
- **id** (*选填*, [ID](mqtt/guides/configuration-types#id)): 用于逻辑识别的 ID


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





## MQTTMessage

With the MQTT Message schema you can tell esphomeyaml how a specific MQTT message should be sent. It is used in several places like last will and birth messages or MQTT log options.

```
# Simple:
some_option: topic/to/send/to

# Disable:
some_option:

# Advanced:
some_option:
  topic: topic/to/send/to
  payload: online
  qos: 0
  retain: True
```

Configuration options:

- **topic** (*必填*, 字符串): The MQTT topic to publish the message.
- **payload** (*必填*, 字符串): The message content. Will be filled by the actual payload with some options, like log_topic.
- **qos** (*Optional*, int): The [Quality of Service](https://www.hivemq.com/blog/mqtt-essentials-part-6-mqtt-quality-of-service-levels) level of the topic. Defaults to 0.
- **retain** (*Optional*, boolean): If the published message should have a retain flag on or not. Defaults to `True`.







## Last Will And Birth Messages

MQTT本身就是为信号不稳定的网络设计的，所以难免一些客户端会无故的和Broker断开连接。 

esphomelib (and esphomeyaml) uses the [last will testament](https://www.hivemq.com/blog/mqtt-essentials-part-9-last-will-and-testament) and birth message feature of MQTT to achieve availability reporting for Home Assistant. If the node is not connected to MQTT, Home Assistant will show all its entities as unavailable (a feature 😉).

[![../../_images/mqtt-availability.png](https://esphomelib.com/_images/mqtt-availability.png)](https://esphomelib.com/_images/mqtt-availability.png)

By default, esphomelib will send a retained MQTT message to `<TOPIC_PREFIX>/status`with payload `online`, and will tell the broker to send a message `<TOPIC_PREFIX>/status`with payload `offline` if the connection drops.

You can change these messages by overriding the `birth_message` and `will_message` with the following options.

```
mqtt:
  # ...
  birth_message:
    topic: myavailability/topic
    payload: online
  will_message:
    topic: myavailability/topic
    payload: offline
```

- **birth_message** (*Optional*, [MQTTMessage](https://esphomelib.com/esphomeyaml/components/mqtt.html?highlight=app_name#mqtt-message))
- **will_message** (*Optional*, [MQTTMessage](https://esphomelib.com/esphomeyaml/components/mqtt.html?highlight=app_name#mqtt-message))

If the birth message and last will message have empty topics or topics that are different from each other, availability reporting will be disabled.





## MQTT 组件基本配置项

其他组件可以调用 MQTT 组件，借助 MQTT 组件来实现通信等功能，同时可以覆盖一些特殊选项的设置

**配置项**

- **name** (**必填**, 字符串): The name to use for the MQTT Component.
- **retain** (*Optional*, boolean): If all MQTT state messages should be retained. Defaults to `True`.
- **discovery** (*Optional*, boolean): Manually enable/disable discovery for a component. Defaults to the global default.
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