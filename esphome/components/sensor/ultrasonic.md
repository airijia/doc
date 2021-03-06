# Ultrasonic Distance Sensor

The ultrasonic distance sensor allows you to use simple ultrasonic sensors like the HC-SR04 ([datasheet](https://www.electroschematics.com/wp-content/uploads/2013/07/HC-SR04-datasheet-version-2.pdf), [sparkfun](https://www.sparkfun.com/products/13959)) with esphomelib to measure distances. These sensors usually can’t measure anything more than about two meters and may sometimes make some annoying clicking sounds.

This sensor platform expects a sensor that can be sent a **trigger pulse** on a specific pin and will send out a **echo pulse** once a measurement has been taken. Because sometimes (for example if no object is detected) the echo pulse is never returned, this sensor also has a timeout option which specifies how long to wait for values. During this timeout period the whole core will be blocked and therefore shouldn’t be set too high.

![https://d33wubrfki0l68.cloudfront.net/1db917d7aa8eca04a5130ddf004ad76f3770389b/e7d33/_images/ultrasonic-full.jpg](https://d33wubrfki0l68.cloudfront.net/1db917d7aa8eca04a5130ddf004ad76f3770389b/e7d33/_images/ultrasonic-full.jpg)

HC-SR04 Ultrasonic Distance Sensor.

[![https://d33wubrfki0l68.cloudfront.net/3af1d26721667d7b7da7cea66568d06f52371fff/81d50/_images/ultrasonic-ui.png](https://d33wubrfki0l68.cloudfront.net/3af1d26721667d7b7da7cea66568d06f52371fff/81d50/_images/ultrasonic-ui.png)](https://esphome.io/_images/ultrasonic-ui.png)

```
# 配置示例
sensor:
  - platform: ultrasonic
    trigger_pin: D1
    echo_pin: D2
    name: "Ultrasonic Sensor"
```

## **配置参数**

- **trigger_pin** (**必填**, [Pin Schema](https://esphome.io/guides/configuration-types#config-pin-schema)): The output pin to periodically send the trigger pulse to.
- **echo_pin** (**必填**, [Pin Schema](https://esphome.io/guides/configuration-types#config-pin-schema)): The input pin on which to wait for the echo.
- **name** (**必填**, 字符串): The name of the sensor.
- **timeout_meter** (*选填*, 浮点数): The number of meters for the timeout. Use either this or `timeout_time`. Defaults to 2 meters.
- **timeout_time** (*选填*, 整数): The number of microseconds for the timeout. Use either this or `timeout_meter`. Defaults to 11662µs.
- **update_interval** (*选填*, [时长](esphome/guides/configuration-types#时长)): The interval to check the sensor. Defaults to `60s`.
- **id** (*选填*, [ID](esphome/guides/configuration-types#id)): Manually specify the ID used for code generation.
- All other options from [Sensor](https://esphome.io/components/sensor/#config-sensor) and [MQTT Component](https://esphome.io/components/mqtt#config-mqtt-component).

## Ultrasonic Timeouts

The ultrasonic sensor works by sending a small ultrasonic pulse out and then waiting until the pulse arrives back. However, there are cases where no such signal arrives back. This is most commonly caused by either having the sensor pointed at a soft surface that muffles the incoming signal. The other case where this can happen is when the the obje