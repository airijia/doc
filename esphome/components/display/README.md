# 显示屏

驱动显示屏，显示图形和文字，支持如下显示屏:

-  [SSD1306 OLED](esphome/components/display/ssd1306_i2c)






## 显示渲染引擎


以分辨率为128x64的[ssd1306 oled](esphome/components/display/ssd1306_i2c) 为例，左上角为原点，坐标为[x=0,y=0]，右下角为最远处，坐标为 [x=128,y=64]

使用 [lambda 表达式](esphome/guides/automations#lambda-表达式) 嵌入一段 C++ 代码控制渲染引擎，在显示屏组件的作用域中 `it` 表示调用渲染引擎对象

```yaml
display:
  - platform: ...
    # ...
    lambda: >-
      // 从坐标 [x=0,y=0] 到 [x=50,y=50] 画一条直线
      it.line(0, 0, 50, 50);
```

### 绘制图形

在屏幕上绘制简单的图形，例如直线，矩形和圆


```yaml
display:
  - platform: ...
    # ...
    lambda: >-
      // 从坐标  [0,0] 到 [100,50] 处画一条直线
      it.line(0, 0, 100, 50);
      // 以坐标 [50,60] 为左上角，画一个30宽，42高的矩形
      it.rectangle(50, 60, 30, 42);
      // 跟上面一样大小的矩形，区别是实心
      it.filled_rectangle(50, 60, 30, 42);

      // 以 [25,25] 为圆心，画一个半径 10 的圆
      it.circle(25, 25, 10);
      // 跟上面一样大小的圆，区别是实心
      it.filled_circle(25, 25, 10);
```



### 引用图标

引用外部的图标作为图形显示

- [中枢常用图标](https://cdn.rawgit.com/james-fry/home-assistant-mdi:efd95d7a/home-assistant-mdi.html)
- [mdi 所有图标列表](https://cdn.materialdesignicons.com/3.3.92/)
- [mdi 图标](https://materialdesignicons.com/)

比如使用 `mdi:walk` 这个图标，在 Hass 里面用来表示动作传感器无动作

?> mdi:walk，mdi-walk 这两种引用方法都可以

```yaml

image:
  # 图标名 `mdi:walk`，ID  `walk`，原图尺寸是 256x256，定义显示尺寸为 `32x32`
  - file: "mdi:walk"
    id: walk
    resize: 32x32
display:
    # ... 其他设置
    lambda: >-
      // 在坐标 0,0 处 显示 walk
      it.image(0, 0, id(walk));
```








### 字体

设置显示文本使用的字体，编译过程中会将字体转换为 ***const** 调用

```yaml
font:
  - file: "comic"
    id: my_font
    size: 20

display:
  # ...
```

配置参数

- **file** (**必填**, 字符串): 使用的字体名称，可选项有

| 名称 | 全名 | 简介 |
| ---- | --------------- | --------------- |
| arial | | |
| comic | | |
| helvetica | | |
| roboto | | |

- **id** (**必填**, [ID](esphome/guides/configuration-types#id)): 此字体的 ID
- **size** (*选填*, 整数): 字体显示的 pt (非 pixel!)，如果想要使用同一种字体的不同尺寸，需要设置两份，默认值 `20`
- **glyphs** (*选填*, list): 指定可显示的字符，只有指定范围内的字符会被转化并显示，默认值 `!"%()+,-_.:°0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz`






默认情况下，会以坐标为内容的左上角来显示，例如想在屏幕的最左上角显示内容，则坐标设置为 `[0,0]`

```yaml
display:
  - platform: ...
    # ...
    lambda: >-
      // 在坐标 [0,10]，即距左0，距上10处显示静态文字内容
      it.print(0, 10, id(my_font), "Hello World!");
      // 在坐标 [0,0]，即距左0，距上0处显示温度，精确到小数点后 1 位
      it.printf(0, 0, id(my_font), "The sensor value is: %.1f", id(my_sensor).state);
```

静态文字使用 [print](#静态字符串) ， 动态文字使用 [printf](#动态字符串)




By default, ESPHome will *align* the text at the top left. That means if you enter the coordinates `[0,10]` for your text, the top left of the text will be at `[0,10]`. If you want to draw some text at the right side of the display, it is however sometimes useful to choose a different **text alignment**. When you enter `[0,10]` you’re really telling ESPHome that it should position the **anchor point** of the text at `[0,10]`. When using a different alignment, like `TOP_RIGHT`, the text will be positioned left of the anchor pointed, so that, as the name implies, the anchor point is a the *top right* corner of the text.






默认情况下，字体显示是靠左靠上的，例如设置坐标为 `[0,10]`，则字体内容的左上角的坐标即为 `[0,10]`。如果设置字体 `TOP_RIGHT` 靠右靠上显示，则字体内容的右上角的坐标为 `[0,10]`




```yaml
display:
  - platform: ...
    # ...
    lambda: >-
      // Aligned on left by default
      it.print(0, 0, id(my_font), "Left aligned");

      // Aligned on right edge
      it.print(it.get_width(), 0, id(my_font), TextAlign::TOP_RIGHT, "Right aligned");
```

TextAlign 字体对其方式

| 名称 | 全名 | 简介 |
| ---- | --------------- | --------------- |
| TOP 	| |  |
| CENTER_VERTICAL 	| |  |
| BASELINE 	| |  |
| BOTTOM 	| |  |
| LEFT 	| |  |
| CENTER_HORIZONTAL 	| |  |
| RIGHT 	| |  |
| TOP_LEFT 	| 靠上靠左 | 默认值 |
| TOP_CENTER 	| 靠上居中 |  |
| TOP_RIGHT 	| 靠上靠右 |  |
| CENTER_LEFT 	| |  |
| CENTER 	|  |  |
| CENTER_RIGHT 	| |  |
| BASELINE_LEFT 	| |  |
| BASELINE_CENTER 	| |  |
| BASELINE_RIGHT 	| |  |
| BOTTOM_LEFT 	| |  |
| BOTTOM_CENTER 	| |  |
| BOTTOM_RIGHT | |  |




### 静态字符串

使用 `print`，资源占用低，只能显示静态内容，不能显示变量

```yaml
display:
  - platform: ...
    # ...
    lambda: >-
      // 在坐标 [0,10]，即距左0，距上10处显示静态文字内容
      it.print(0, 10, id(my_font), "Hello World!");
```

### 动态字符串

使用 `printf`，可以显示变量

```yaml
sensor:
  - platform: ...
    # ...
    id: my_sensor

display:
  - platform: ...
    # ...
    lambda: >-
      // 在坐标 [0,0]，即距左0，距上0处显示温度
      it.printf(0, 0, id(my_font), "The sensor value is: %.1f", id(my_sensor).state);
      // %.1f 表示精确到小数点后 1 位 ，例如原值为 30.02 ，则显示值为 "The sensor value is: 30.0"
```



浮点输出的语法，以 `%.1f` 为例

Let’s break `%.1f` down:

- `%` 启动格式化字符串
- `.1` 精确到小数点后一位数
- `f` 数据来源格式为浮点数 f(loat)

同理，精确到小数点后两位数标示为 `%.2f`，去掉小数点，只显示整数部分为 `%.0f`


```yaml
display:
  - platform: ...
    # ...
    lambda: >-
      // %自身为转义字符，如果需要将 % 作为字符输出，则连续输出两个 % 
      it.printf(0, 0, id(my_font), "Temperature: %.1f°C, Humidity: %.1f%%", id(temperature).state, id(humidity).state);
```

假设上例中，temperature 为 16.6666，humidity为46.11，则最终实际输出结果是 `Temperature: 16.6°C, Humidity: 46.1%`


```yaml
binary_sensor:
  - platform: ...
    # ...
    id: my_binary_sensor

display:
  - platform: ...
    # ...
    lambda: >-
      if (id(my_binary_sensor).state) {
        it.print(0, 0, id(my_font), "state: ON");
      } else {
        it.print(0, 0, id(my_font), "state: OFF");
      }
      // 简写:
      it.printf(0, 0, id(my_font), "State: %s", id(my_binary_sensor).state ? "ON" : "OFF");
```


上例，根据二进制传感器 **my_binary_sensor** 的值，显示 `state: ON` 或 `state: OFF`

**%s** 表示输出一段字符串


更详细使用参考 [C 库函数 - printf()](http://www.runoob.com/cprogramming/c-function-printf.html)


### 格式化时间

按照指定的格式显示当前的时间

具体见 [时间-strftime](esphome/components/time#strftime)














## 动作

设置不同的页面对应不同的显示内容，并使用相应的动作来切换

```yaml
display:
  - platform: ...
    # ...
    id: my_display
    pages:
      - id: page1
        lambda: >-
          it.print(0, 10, id(my_font), "This is page 1!");
      - id: page2
        lambda: >-
          it.print(0, 10, id(my_font), "This is page 2!");
```

有三个动作可用

### display.page.show_next

显示下一页，如果当前已经是最后一页，则回到第一页


```yaml
on_...:
  - display.page.show_next: my_display
```

配合 [时间间隔触发器](esphome/guides/automations#interval) 实现自动翻页


```yaml
interval:
  - interval: 5s
    then:
      - display.page.show_next: my_display
      # 使用 component.update  重绘屏幕
      - component.update: my_display
```

### display.page.show_prev

显示上一页，如果当前已经是第一页，则跳转到最后一页


```yaml
on_...:
  - display.page.show_prev: my_display
```


### display.page.show

显示指定页


```yaml
on_...:
  - display.page.show: page1

  # Templated
  - display.page.show: >-
      if (id(my_binary_sensor).state) {
        return id(page1);
      } else {
        return id(page2);
      }
```

