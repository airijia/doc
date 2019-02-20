# Cover Component

The `cover` component is a generic representation of covers in esphomelib/yaml. A cover can (currently) either be *closed* or *open* and supports three types of commands: *open*, *close* and *stop*.



## `cover.open` Action

This action opens the cover with the given ID when executed.

```
on_...:
  then:
    - cover.open: cover_1
```

Note

This action can also be expressed in [lambdas](https://esphome.io/guides/automations#config-lambda):

```
id(cover_1).open();
```



## `cover.close` Action

This action closes the cover with the given ID when executed.

```
on_...:
  then:
    - cover.close: cover_1
```

Note

This action can also be expressed in [lambdas](https://esphome.io/guides/automations#config-lambda):

```
id(cover_1).close();
```



## `cover.stop` Action

This action stops the cover with the given ID when executed.

```
on_...:
  then:
    - cover.stop: cover_1
```

Note

This action can also be expressed in [lambdas](https://esphome.io/guides/automations#config-lambda):

```
id(cover_1).stop();
```

## lambda calls

From [lambdas](https://esphome.io/guides/automations#config-lambda), you can call several methods on all covers to do some advanced stuff.

- `publish_state()`: Manually cause the cover to publish a new state and store it internally. If it’s different from the last internal state, it’s additionally published to the frontend.

  ```
  // Within lambda, make the cover report a specific state
  id(my_cover).publish_state(cover::COVER_OPEN);
  id(my_cover).publish_state(cover::COVER_CLOSED);
  ```

- `state`: Retrieve the current state of the cover.

  ```
  if (id(my_cover).state == cover::COVER_OPEN) {
    // Cover is open
  } else {
    // Cover is closed
  }
  ```