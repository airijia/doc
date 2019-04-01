# ESP32 摄像头

The `esp32_camera` component allows you to use ESP32-based camera boards in ESPHome that directly integrate into Home Assistant through the native API.

```yaml
# 配置示例
esp32_camera:
  name: My Camera
  external_clock:
    pin: GPIO27
    frequency: 20MHz
  i2c_pins:
    sda: GPIO25
    scl: GPIO23
  data_pins: [GPIO17, GPIO35, GPIO34, GPIO5, GPIO39, GPIO18, GPIO36, GPIO19]
  vsync_pin: GPIO22
  href_pin: GPIO26
  pixel_clock_pin: GPIO21
  reset_pin: GPIO15
  resolution: 640x480
  jpeg_quality: 10
```

## 配置参数:

- **name** (**必填**, 字符串): The name of the camera.


连线配置:
- **data_pins** (**必填**, [引脚](esphome/guides/configuration-types#引脚)列表): The data lanes of the camera, this must be a list of 8 gpio pins.
- **vsync_pin** (**必填**, [引脚](esphome/guides/configuration-types#引脚)): The pin the VSYNC line of the camera is connected to.
- **href_pin** (**必填**, [引脚](esphome/guides/configuration-types#引脚)): The pin the HREF line of the camera is connected to.
- **pixel_clock_pin** (**必填**, [引脚](esphome/guides/configuration-types#引脚)): The pin the pixel clock line of the camera is connected to.
- external_clock(**必填**): The configuration of the external clock to drive the camera.
  - **pin** (**必填**, [引脚](esphome/guides/configuration-types#引脚)): The pin the external clock line is connected to.
  - **frequency** (*选填*, 浮点数): The frequency of the external clock, must be either 20MHz or 10MHz. Defaults to `20MHz`.
- i2c_pins(**必填**): The i2c control pins of the camera.
  - **sda** (**必填**, [引脚](esphome/guides/configuration-types#引脚)): The SDA pin of the i2c interface.
  - **scl** (**必填**, [引脚](esphome/guides/configuration-types#引脚)): The SCL pin of the i2c interface.
- **reset_pin** (*选填*, [引脚](esphome/guides/configuration-types#引脚)): The ESP pin the reset pin of the camera is connected to. If set, this will reset the camera before the ESP boots.
- **power_down_pin** (*选填*, [引脚](esphome/guides/configuration-types#引脚)): The ESP pin to power down the camera. If set, this will power down the camera while it is inactive.
- **test_pattern** (*选填*, 布尔值): When enabled, the camera will show a test pattern that can be used to debug connection issues.

帧配置:
- **max_framerate** (*选填*, 浮点数): The maximum framerate the camera will generate images at. Up to 60Hz is possible (with reduced frame sizes), but beware of overheating. Defaults to `10 fps`.
- **idle_framerate** (*选填*, 浮点数): The framerate to capture images at when no client is requesting a full stream. Defaults to `0.1 fps`.
- **resolution** (*选填*, enum): The resolution the camera will capture images at. Higher resolutions require more memory, if there’s not enough memory you will see an error during startup.
  - `160x120` (QQVGA)
  - `128x160` (QQVGA2)
  - `176x144` (QCIF)
  - `240x176` (HQVGA)
  - `320x240` (QVGA)
  - `400x296` (CIF)
  - `640x480` (VGA, default)
  - `800x600` (SVGA)
  - `1024x768` (XGA)
  - `1280x1024` (SXGA)
  - `1600x1200` (UXGA)
- **jpeg_quality** (*选填*, 整数): The JPEG quality that the camera should encode images with. From 10 to 63. Defaults to `10`.
- **contrast** (*选填*, 整数): The contrast to apply to the picture, from -2 to 2. Defaults to `0`.
- **brightness** (*选填*, 整数): The brightness to apply to the picture, from -2 to 2. Defaults to `0`.
- **saturation** (*选填*, 整数): The saturation to apply to the picture, from -2 to 2. Defaults to `0`.
- **vertical_flip** (*选填*, 布尔值): Whether to flip the image vertically. Defaults to `true`.
- **horizontal_mirror** (*选填*, 布尔值): Whether to mirror the image horizontally. Defaults to `true`.

Note

The camera integration in Home Assistant isn’t in stable or beta HA builds, so until 0.91 ships or goes into beta you will need to use a development version of Home Assistant.

## 安信可 ESP32-CAM

```yaml
# 配置示例
esp32_camera:
  external_clock:
    pin: GPIO0
    frequency: 20MHz
  i2c_pins:
    sda: GPIO26
    scl: GPIO27
  data_pins: [GPIO5, GPIO18, GPIO19, GPIO21, GPIO36, GPIO39, GPIO34, GPIO35]
  vsync_pin: GPIO25
  href_pin: GPIO23
  pixel_clock_pin: GPIO22
  power_down_pin: GPIO32

  # Image settings
  name: My Camera
  # ...
```

## M5Stack ESP32CAM

Warning

This camera board has insufficient cooling and will overheat over time, ESPHome does only activate the camera when Home Assistant requests an image, but the camera until can still heat up considerably for some boards.

If the camera is not recognized after a reboot and the unit feels warm, try waiting for it to cool down and check again - if that still doesn’t work try enabling the test pattern.

```
# 配置示例
esp32_camera:
  external_clock:
    pin: GPIO27
    frequency: 20MHz
  i2c_pins:
    sda: GPIO25
    scl: GPIO23
  data_pins: [GPIO17, GPIO35, GPIO34, GPIO5, GPIO39, GPIO18, GPIO36, GPIO19]
  vsync_pin: GPIO22
  href_pin: GPIO26
  pixel_clock_pin: GPIO21
  reset_pin: GPIO15

  # Image settings
  name: My Camera
  # ...
```

## Configuration for Wrover Kit Boards

```
# 配置示例
esp32_camera:
  external_clock:
    pin: GPIO21
    frequency: 20MHz
  i2c_pins:
    sda: GPIO26
    scl: GPIO27
  data_pins: [GPIO4, GPIO5, GPIO18, GPIO19, GPIO36, GPIO39, GPIO34, GPIO35]
  vsync_pin: GPIO25
  href_pin: GPIO23
  pixel_clock_pin: GPIO22

  # Image settings
  name: My Camera
  # ...
```