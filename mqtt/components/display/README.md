# 显示屏



## 字体




## 图标


[mdi 图标](https://materialdesignicons.com/)
[mdi 图标列表](https://cdn.materialdesignicons.com/3.3.92/)

比如使用 `mdi-walk` 这个图标，在 Hass 里面用来表示动作传感器无动作

```yaml
# 文件名 `mdi/walk.png`，ID 使用 `walk`，原图尺寸是 256x256，设置显示为 `32x32`
image:
  - file: "mdi/walk.png"
    id: walk
    resize: 32x32
display:
    ... 其他设置

    lambda: >-
      it.image(0, 0, id(walk));
    # 在坐标 0,0 处 显示 walk
```










## 显示渲染引擎

