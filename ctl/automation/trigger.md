













## 多重触发


```
automation:
  trigger:
      # first trigger
    - platform: time
      minutes: 5
      seconds: 00
      # our second trigger is the sunset
    - platform: sun
      event: sunset

```