# MQTT 组件

ESPHome 固件的核心组件之一，将节点作为客户端连接到 MQTT 转发器(broker)，进而通过智能中枢（airijia/clt 或 Hass）控制

!> 新版建议使用 [API 组件](esphome/components/api)


```yaml
# 配置示例
mqtt:
  broker: 192.168.1.233 # 智能中枢的 IP
```

## 基本配置

- **broker** (**必填**, 字符串): MQTT 转发器(服务端)地址
- **port** (*选填*, 整数): MQTT 转发器端口，默认 1883
- **username** (*选填*, 字符串): MQTT 用户名
- **password** (*选填*, 字符串): MQTT 密码



## 进阶配置

- **client_id** (*选填*, 字符串): 客户端 ID。默认值是节点名称 + MAC 地址
- **discovery** (*选填*, 布尔值): 自动发现功能，开启可以被智能中枢发现并自动添加。默认值为开启 `True`
- **discovery_retain** (*选填*, 布尔值): 将自动发现消息标记为保留消息，智能中枢重启时可以更快速的添加设备。默认值为开启 `True`
- **discovery_prefix** (*选填*, 字符串): 自动发现的前缀。默认值为 `airi`
- **topic_prefix** (*选填*, 字符串): 发布消息使用的主题前缀，不可以使用`/`。默认值是节点名称
- **log_topic** (*选填*, [MQTT消息](#MQTT消息)) 发布日志消息使用的主题
- **birth_message** (*选填*, [MQTT消息](#MQTT消息)): 与转发器建立连接时发布的消息。详情查看 [遗愿和重生消息](#遗愿和重生消息)
- **will_message** (*选填*, [MQTT消息](#MQTT消息)): 与转发器失去连接时发布的消息。详情查看 [遗愿和重生消息](#遗愿和重生消息)
- **shutdown_message** (*选填*, [MQTT消息](#MQTT消息)): 本节点执行关机，即将关闭与转发器连接是发布的消息。详情查看 [遗愿和重生消息](#遗愿和重生消息)
- **reboot_timeout** (*选填*, [时长](esphome/guides/configuration-types#时长)): 持续的无法连接转发器时，节点会在设置的时长后重启。默认 `60s`，设置成 `0s` 禁用此功能
- **keepalive** (*选填*, [时长](esphome/guides/configuration-types#时长)): 连接持续有效时间，增加这个值会加快节点的响应速度但同时也会增加路由器压力。默认 `15s`
- **on_message** (*选填*, [自动化](esphome/guides/automations)): 接到特定消息时触发的特定动作。详情查看 [on_message](#on_message)
- **id** (*选填*, [ID](esphome/guides/configuration-types#id)): 本组件的 ID


## MQTT消息

通过设置不同的参数， 来确定 MQTT 消息发布时的内容

以 `will_message` 为例

```yaml
# 简单使用:
will_message: topic/to/send/to

# 禁用此消息:
will_message:

# 扩展使用:
will_message:
  topic: topic/to/send/to
  payload: online
  qos: 0
  retain: True
```

**配置参数**

- **topic** (*必填*, 字符串): 消息发布到的主题
- **payload** (*必填*, 字符串): 消息的内容，发出时会被实际有效负载包裹，比如 `log_topic`
- **qos** (*选填*, 整数): QoS 等级，最多一次`0`（默认），至少一次`1`，确保仅一次`2`
- **retain** (*选填*, 布尔值): 此消息是否标记为保留消息，默认为是 `True`



## 遗愿和重生消息

MQTT 本身就是为信号不稳定的网络设计的，所以难免一些客户端会无故断开与转发器的连接，遗愿消息是节点尚与转发器保持连接时，预保留的特定消息 LWT（Last Will & Testament），当节点断线时，由转发器代为发布

![](http://pic.airijia.com/doc/20190703103011.png)

**当模块断开连接时，在 airi:8123 和 hass 中的显示**

默认配置的情况下，节点会发布内容为 `online` 的保留 MQTT 消息到主题 `<TOPIC_PREFIX>/status`，同时也告知转发器，当节点断线时，发布 `offline` 到 `<TOPIC_PREFIX>/status`

设置重生消息 `birth_message` 和遗愿消息 `will_message` 的具体参数以改变默认发送

```yaml
mqtt:
  # ...
  will_message:
    topic: myavailability/topic
    payload: offline
  birth_message:
    topic: myavailability/topic
    payload: online
```
**配置参数**
- **birth_message** (*选填*, [MQTT消息](#MQTT消息)) 与转发器建立连接时发布的消息。
- **will_message** (*选填*, [MQTT消息](#MQTT消息)) 与转发器失去连接时发布的消息。

如果遗愿和重生消息的主题`topic`留空或者不同，可用状态的功能会失效




## MQTT 子组件

其他组件(比如传感器、开关等)可以将自身扩展为 MQTT 组件的子组件，借助 MQTT 组件来实现通信等功能，同时可以向上覆盖一部分设置

**配置参数**

- **name** (**必填**, 字符串): 组件名称
- **retain** (*选填*, 布尔值): 发布的消息是否标记为保留消息。默认为是`True`
- **discovery** (*选填*, 布尔值): 子组件是否会被自动发现，默认继承父组件的值
- **availability** (*选填*): 组件发布的可用状态消息的格式。默认基于 [遗愿和重生消息](#遗愿和重生消息) 基础上扩展 
- **state_topic** (*选填*, 字符串): 组件状态变化时，消息发布到的主题名称。默认值 `<TOPIC_PREFIX>/<COMPONENT_TYPE>/<COMPONENT_NAME>/state`
- **command_topic** (*选填*, 字符串): 订阅远程控制的主题名称。默认值 `<TOPIC_PREFIX>/<COMPONENT_TYPE>/<COMPONENT_NAME>/command`
- **internal** (*选填*, 布尔值): 将组件内部化。内部化组件不会发布任何 MQTT消息，也不会自动发现侦测到，但可以被模块自身的 [自动化](esphome/guides/automations)。 只设置 `id` 不设置 `name` 等效于本参数设置为`True`


!> 改变以上参数的设置后，需要重启 Hass 服务才能生效


## 触发器

[自动化](esphome/guides/automations)相关


### on_message

当收到指定主题的消息时，触发对应的动作，作为 [自动化](esphome/guides/automations) 的触发器使用

```yaml
mqtt:
  # ...
  on_message:
    topic: my/custom/topic
    qos: 0
    then:
      - switch.turn_on:
          id: some_switch
```

**配置参数**

- **topic** (**必填**, 字符串): 订阅的主题，每收到这个主题的消息时，便触发动作


!> 精确主题，不支持通配符，比如 `+` `#`

- **qos** (*选填*, 整数): QoS 等级，最多一次`0`（默认），至少一次`1`，确保仅一次`2`



可以用列表方式同时支持多个 `on_message` 触发器：

```yaml
mqtt:
  on_message:
     - topic: some/topic
       then:
         - # ...
     - topic: some/other/topic
       then:
         - # ...
```

### on_json_message

当收到指定主题的消息时，触发对应的动作，作为 [自动化](esphome/guides/automations) 的触发器使用


With this configuration option you can write complex automations whenever a JSON-encoded MQTT message is received. To use the message content, use a [lambda](https://esphomelib.com/esphomeyaml/guides/automations.html#config-lambda)template, the decoded message payload is available under the name `x` inside that lambda.

The `x` object is of type `JsonObject` by the [ArduinoJson](https://github.com/bblanchon/ArduinoJson) library, and you can use all of the methods of that library to access data.

Basically, you can access elements by typing `x["THE_KEY"]` and save them into local variables. Please note that it’s a good idea to check if the key exists in the Json Object by calling `containsKey` first as the ESP will crash if an element that does not exist is accessed.

```yaml
mqtt:
  # ...
  on_json_message:
    topic: the/topic
      then:
      - light.turn_on:
          id: living_room_lights

          transition_length: !lambda >-
            int length = 1000;
            if (x.containsKey("length"))
              length = x["length"];
            return length;

          brightness: !lambda "return x["bright"];"

          effect: !lambda >-
            const char *effect = "None";
            if (x.containsKey("effect"))
              effect = x["effect"];
            return effect;
```

配置参数

- **topic** (**必填**, 字符串): The MQTT topic to subscribe to and listen for MQTT messages on. Every time a message with **this exact topic** is received, the automation will trigger.
- **qos** (*选填*, integer): The MQTT Quality of Service to subscribe to the topic with. Defaults to 0.

Note

Due to the way this trigger works internally it is incompatible with certain actions and will trigger a compile failure. For example with the `delay` action.

Note

This action can also be used in [lambdas](https://esphomelib.com/esphomeyaml/guides/automations.html#config-lambda):

```
App.get_mqtt_client()->subscribe_json("the/topic", [=](JsonObject &root) {
    // do something with JSON-decoded value root
});
```




## 动作

### mqtt.publish

 [自动化](esphome/guides/automations) 的动作，被触发后，发布 MQTT 消息

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
**配置参数**

- **topic** (**必填**, 字符串, [模板化](esphome/guides/automations#模板化)): 消息发布到得主题
- **payload** (**必填**, 字符串, [模板化](esphome/guides/automations#模板化)): 消息内容
- **qos** (*选填*, 整数, [模板化](esphome/guides/automations#模板化)):QoS 等级，最多一次`0`（默认），至少一次`1`，确保仅一次`2`
- **retain** (*选填*, 布尔值, [模板化](esphome/guides/automations#模板化)): 是否标记为保留消息，默认为否 `False`



### mqtt.publish_json

Publish a JSON-formatted MQTT message on a topic using this action in automations.

The JSON message will be constructed using the [ArduinoJson](https://github.com/bblanchon/ArduinoJson) library. In the `payload`option you have access to a `root` object which will represents the base object of the JSON message. You can assign values to keys by using the `root["KEY_NAME"] =VALUE;` syntax as seen below.

```
on_...:
  then:
    - mqtt.publish_json:
        topic: the/topic
        payload: |-
          root["key"] = id(my_sensor).state;
          root["greeting"] = "Hello World";

        # Will produce:
        # {"key": 42.0, "greeting": "Hello World"}
```

**配置参数**

- **topic** (*Required*, string, [templatable](https://esphomelib.com/esphomeyaml/guides/automations.html#config-templatable)): The MQTT topic to publish the message.
- **payload** (*Required*, [lambda](https://esphomelib.com/esphomeyaml/guides/automations.html#config-lambda)): The message content.
- **qos** (*选填*, 整数): The [Quality of Service](https://www.hivemq.com/blog/mqtt-essentials-part-6-mqtt-quality-of-service-levels) level of the topic. Defaults to 0.
- **retain** (*选填*, 布尔值): If the published message should have a retain flag on or not. Defaults to `False`.

Note

This action can also be written in [lambdas](https://esphomelib.com/esphomeyaml/guides/automations.html#config-lambda):

```
mqtt:
  # Give the mqtt component an ID
  id: mqtt_client
id(mqtt_client).publish_json("the/topic", [=](JsonObject &root) {
  root["something"] = id(my_sensor).state;
});
```