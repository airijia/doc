# Sonoff 系列


在 [核心组件](esphome/components/esphome) 中，要设置 `board` 为 `esp01_1m`， `board_flash_mode` 为 `dout`

```
airi:
  name: <NAME_OF_NODE>
  platform: ESP8266
  board: esp01_1m
  board_flash_mode: dout
```

## Sonoff Basic

| GPIO0  | Button (inverted)               |
| -------- | ------------------------------- |
| GPIO1  | RX pin (for external sensors) |
| GPIO3  | TX pin (for external sensors) |
| GPIO4  | Optional Sensor                 |
| GPIO12 | Relay and Red LED               |
| GPIO13 | Green LED (inverted)            |
| GPIO14 | Optional Sensor                 |
| GPIO17 | Analog Input                    |



## Sonoff S20/S26


| GPIO0  | Push Button (HIGH = off, LOW = on) |
| -------- | ---------------------------------- |
| GPIO12 | Relay and its status LED           |
| GPIO13 | Green LED (HIGH = off, LOW = on)   |
| GPIO1  | RX pin (for external sensors)    |
| GPIO3  | TX pin (for external sensors)    |



## Sonoff S22

| GPIO0  | Push Button (HIGH = off, LOW = on) |
| -------- | ---------------------------------- |
| GPIO12 | Relay and its status LED           |
| GPIO13 | Green LED (HIGH = off, LOW = on)   |
| GPIO1  | RX pin (for external sensors)    |
| GPIO3  | TX pin (for external sensors)    |




## Sonoff 4CH/4CH Pro


| GPIO0  | Button #1 (inverted)            |
| -------- | ------------------------------- |
| GPIO9  | Button #2 (inverted)            |
| GPIO10 | Button #3 (inverted)            |
| GPIO14 | Button #4 (inverted)            |
| GPIO12 | Relay #1 and red LED            |
| GPIO5  | Relay #2 and red LED            |
| GPIO4  | Relay #3 and red LED            |
| GPIO15 | Relay #4 and red LED            |
| GPIO13 | Blue LED (inverted)             |
| GPIO1  | RX pin (for external sensors) |
| GPIO3  | TX pin (for external sensors) |


## Sonoff T1 1CH, 2CH, 3CH

| Pin      | Function                           |
| -------- | ---------------------------------- |
| GPIO0  | **Button 1 (inverted)**            |
| GPIO12 | **Relay 1 and Blue LED**           |
| GPIO9  | **Button 2 (inverted)**            |
| GPIO5  | **Relay 2 and Blue LED**           |
| GPIO10 | **Button 3 (inverted)**            |
| GPIO4  | **Relay 3 and Blue LED**           |
| GPIO1  | UART TX pin (for external sensors) |
| GPIO3  | UART RX pin (for external sensors) |

## Sonoff RF

| Pin      | Function                           |
| -------- | ---------------------------------- |
| GPIO0  | **Button (inverted)**              |
| GPIO12 | **Relay and Red LED**              |
| GPIO13 | **Green LED (inverted)**           |
| GPIO1  | UART TX pin (for external sensors) |
| GPIO3  | UART RX pin (for external sensors) |
| GPIO4  | Optional sensor                    |
| GPIO14 | Optional sensor                    |

## Sonoff SV

| Pin      | Function                           |
| -------- | ---------------------------------- |
| GPIO0  | **Button (inverted)**              |
| GPIO12 | **Relay and Red LED**              |
| GPIO13 | **Green LED (inverted)**           |
| GPIO17 | **Analog Input**                   |
| GPIO1  | UART TX pin (for external sensors) |
| GPIO3  | UART RX pin (for external sensors) |
| GPIO4  | Optional sensor                    |
| GPIO5  | Optional sensor                    |
| GPIO14 | Optional sensor                    |

## Sonoff TH10/TH16

| Pin      | Function                           |
| -------- | ---------------------------------- |
| GPIO0  | **Button (inverted)**              |
| GPIO12 | **Relay and Red LED**              |
| GPIO13 | **Green LED (inverted)**           |
| GPIO1  | UART TX pin (for external sensors) |
| GPIO3  | UART RX pin (for external sensors) |
| GPIO4  | Optional sensor                    |
| GPIO14 | Optional sensor                    |

## Sonoff Dual R1

| Pin      | Function                |
| -------- | ----------------------- |
| GPIO1  | **Relay #1**            |
| GPIO3  | **Relay #2**            |
| GPIO13 | **Blue LED (inverted)** |
| GPIO4  | Optional sensor         |
| GPIO14 | Optional sensor         |

## Sonoff Dual R2

| Pin      | Function                |
| -------- | ----------------------- |
| GPIO12 | **Relay #1**            |
| GPIO5  | **Relay #2**            |
| GPIO10 | **Button**              |
| GPIO13 | **Blue LED (inverted)** |
| GPIO4  | Optional sensor         |
| GPIO14 | Optional sensor         |

## Sonoff Pow R1

(equivalent to Huafan SS)

| Pin      | Function              |
| -------- | --------------------- |
| GPIO0  | **Button (inverted)** |
| GPIO12 | **Relay and Red LED** |
| GPIO15 | **Blue LED**          |
| GPIO5  | HLW8012 SEL Pin       |
| GPIO13 | HLW8012 CF1 Pin       |
| GPIO14 | HLW8012 CF Pin        |

搭配 [HLW8012 功率](esphome/components/sensor/hlw8012)

## Sonoff Pow R2

(equivalent to Huafan SS)

| Pin      | Function                |
| -------- | ----------------------- |
| GPIO0  | **Button (inverted)**   |
| GPIO12 | **Relay and Red LED**   |
| GPIO13 | **Blue LED (inverted)** |

搭配 [CSE7766 功率](esphome/components/sensor/cse7766)


## Slampher

| Pin      | Function                           |
| -------- | ---------------------------------- |
| GPIO0  | **Button (inverted)**              |
| GPIO3  | **Relay and Red LED**              |
| GPIO13 | **Blue LED (inverted)**            |
| GPIO1  | UART TX pin (for external sensors) |
| GPIO3  | UART RX pin (for external sensors) |

## Sonoff Touch

| Pin      | Function                           |
| -------- | ---------------------------------- |
| GPIO0  | **Button (inverted)**              |
| GPIO12 | **Relay and Red LED**              |
| GPIO13 | **Blue LED (inverted)**            |
| GPIO1  | UART TX pin (for external sensors) |
| GPIO3  | UART RX pin (for external sensors) |

## Sonoff LED

| Pin      | Function                |
| -------- | ----------------------- |
| GPIO0  | **Button (inverted)**   |
| GPIO13 | **Blue LED (inverted)** |
| GPIO5  | Red Channel             |
| GPIO4  | Green Channel           |
| GPIO15 | Blue Channel            |
| GPIO12 | Cold White Channel      |
| GPIO14 | Warm White Channel      |

配合 [可调五色(红绿蓝冷白暖白)](esphome/components/light/rgbww)，[ESP8266 PWM(软调光)](esphome/components/output/esp8266_pwm) 这两个组件使用



## Sonoff SC

| Pin      | Function           |
| -------- | ------------------ |
| GPIO12 | **Light**          |
| GPIO13 | Red LED (inverted) |

配合 [可调亮度的灯](esphome/components/light/monochromatic)， [ESP8266 PWM(软调光)](esphome/components/output/esp8266_pwm)  组件使用

## Sonoff B1, Ai-Thinker AiLight

配合 [MY9231/MY9291 LED](esphome/components/output/my9231) 使用

## Sonoff S31

| Pin      | Function                 |
| -------- | ------------------------ |
| GPIO0  | **Button (inverted)**    |
| GPIO12 | **Relay and Red LED**    |
| GPIO13 | **Green LED (inverteD)** |

搭配 [CSE7766 功率](esphome/components/sensor/cse7766)



## Arilux LC10, Magic Home

| Pin      | Function                           |
| -------- | ---------------------------------- |
| GPIO2  | **Blue LED**                       |
| GPIO14 | **Red Channel**                    |
| GPIO5  | **Green Channel**                  |
| GPIO12 | **Blue Channel**                   |
| GPIO13 | **White Channel**                  |
| GPIO1  | UART TX pin (for external sensors) |
| GPIO3  | UART RX pin (for external sensors) |


配合 [可调四色(红绿蓝白)](esphome/components/light/rgbw)，[ESP8266 PWM(软调光)](esphome/components/output/esp8266_pwm) 组件使用

## Arilux LC01

| Pin      | Function                           |
| -------- | ---------------------------------- |
| GPIO0  | **Button (inverted)**              |
| GPIO2  | **Blue LED**                       |
| GPIO5  | **Red Channel**                    |
| GPIO12 | **Green Channel**                  |
| GPIO13 | **Blue Channel**                   |
| GPIO14 | **White Channel**                  |
| GPIO1  | UART TX pin (for external sensors) |
| GPIO3  | UART RX pin (for external sensors) |


配合 [可调四色(红绿蓝白)](esphome/components/light/rgbw)，[ESP8266 PWM(软调光)](esphome/components/output/esp8266_pwm) 组件使用

## Arilux LC11

| Pin      | Function                           |
| -------- | ---------------------------------- |
| GPIO0  | **Button (inverted)**              |
| GPIO2  | **Blue LED**                       |
| GPIO5  | **Red Channel**                    |
| GPIO4  | **Green Channel**                  |
| GPIO14 | **Blue Channel**                   |
| GPIO13 | **Cold White Channel**             |
| GPIO12 | **Warm White Channel**             |
| GPIO1  | UART TX pin (for external sensors) |
| GPIO3  | UART RX pin (for external sensors) |

配合 [可调五色(红绿蓝冷白暖白)](esphome/components/light/rgbww)，[ESP8266 PWM(软调光)](esphome/components/output/esp8266_pwm) 这两个组件使用

