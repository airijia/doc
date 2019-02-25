# 显示屏



## 字体





### 静态字符串




### 格式化字符串





## 图标





- [中枢常用图标](https://cdn.rawgit.com/james-fry/home-assistant-mdi:efd95d7a/home-assistant-mdi.html)
- [mdi 所有图标列表](https://cdn.materialdesignicons.com/3.3.92/)
- [mdi 图标](https://materialdesignicons.com/)

比如使用 `mdi:walk` 这个图标，在 Hass 里面用来表示动作传感器无动作

?> mdi:walk，mdi-walk 这两种引用方法都可以

```yaml
# 图标名 `mdi:walk`，ID 使用 `walk`，原图尺寸是 256x256，设置显示为 `32x32`
image:
  - file: "mdi:walk"
    id: walk
    resize: 32x32
display:
    # ... 其他设置

    lambda: >-
      it.image(0, 0, id(walk));
    # 在坐标 0,0 处 显示 walk
```










## 显示渲染引擎




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

显示上一页，如果当前已经是第一页，则调转到最后一页


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

