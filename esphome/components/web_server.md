# Web Server Component

The `web_server` component creates a simple web server on the node that can be accessed through any browser and a simple [REST API](https://esphome.io/web-api/). Please note that enabling this component will take up *a lot* of memory and can lead to problems, especially on the ESP8266.

!> 这个组件会耗费大量的内存，除非特别需要，否则不建议使用

To navigate to the web server in your browser, either use the IP address of the node or use `<node_name>.local/` (note the trailing forward slash) via mDNS.

To conserve flash size, the CSS and JS files used on the root page to show a simple user interface are hosted by esphome.io. If you want to use your own service, use the `css_url`and `js_url` options in your configuration.

![](http://pic.airijia.com/doc/20190303121907.png)

![](http://pic.airijia.com/doc/20190303121922.png)

Example web server frontend.

```yaml
# Example configuration entry
web_server:
  port: 80
```

## Configuration variables:

- **port** (*Optional*, int): The port the web server should open its socket on.
- **css_url** (*Optional*, url): The URL that should be used for the CSS stylesheet. Defaults to <https://esphome.io/_static/webserver-v1.min.css> (updates will go to `v2`, `v3`, etc).
- **js_url** (*Optional*, url): The URL that should be used for the JS script. Defaults to <https://esphome.io/_static/webserver-v1.min.js>.
- **id** (*Optional*, [ID](https://esphome.io/guides/configuration-types#config-id)): Manually specify the ID used for code generation.

Note

Starting with version 1.9.0, you can also upload firmware files OTA with the web server.