# 显示屏



## 字体




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

