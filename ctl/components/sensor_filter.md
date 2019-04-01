# Filter Sensor

------

The `filter` platform enables sensors that process the states of other entities.

`filter` applies a signal processing algorithm to a sensor, previous and current states, and generates a `new state` given the chosen algorithm. The next image depicts an original sensor and the filter sensor of that same sensor using the [History Graph](https://www.home-assistant.io/components/history_graph/)component.

![img](https://d33wubrfki0l68.cloudfront.net/0551445a2ba85e40c473781d5386ac054fd9b2c1/59fff/images/screenshots/filter-sensor.png)

## Configuration

To enable Filter Sensors in your installation, add the following to your `configuration.yaml` file:

```
# Example configuration.yaml entry
sensor:
  - platform: filter
    name: "filtered realistic humidity"
    entity_id: sensor.realistic_humidity
    filters:
      - filter: outlier
        window_size: 4
        radius: 4.0
      - filter: lowpass
        time_constant: 10
        precision: 2
  - platform: filter
    name: "filtered realistic temperature"
    entity_id: sensor.realistic_temperature
    filters:
      - filter: outlier
        window_size: 4
        radius: 2.0
      - filter: lowpass
        time_constant: 10
      - filter: time_simple_moving_average
        window_size: 00:05
        precision: 2
```

Filters can be chained and are applied according to the order present in the configuration file.

### 配置参数

- entity_id

  (字符串)(Required)The entity ID of the sensor to be filtered.

- name

  (字符串)(Optional)Name to use in the frontend.

- filters

  (list)(Required)Filters to be used.

  filter(字符串)(Required)Algorithm to be used to filter data. Available filters are `lowpass`, `outlier`, `range`, `throttle` and `time_simple_moving_average`.window_size(int | time)(Optional)Size of the window of previous states. Time based filters such as `time_simple_moving_average` will require a time period (size in time), while other filters such as `outlier` will require an integer (size in number of states)Default value: 1precision(integer)(Optional)See [*lowpass*](https://www.home-assistant.io/components/sensor.filter/#low-pass) filter. Defines the precision of the filtered state, through the argument of round().Default value: Nonetime_constant(integer)(Optional)See [*lowpass*](https://www.home-assistant.io/components/sensor.filter/#low-pass) filter. Loosely relates to the amount of time it takes for a state to influence the output.Default value: 10radius(float)(Optional)See [*outlier*](https://www.home-assistant.io/components/sensor.filter/#outlier) filter. Band radius from median of previous states.Default value: 2.0type(字符串)(Optional)See [*time_simple_moving_average*](https://www.home-assistant.io/components/sensor.filter/#time-simple-moving-average) filter. Defines the type of Simple Moving Average.Default value: lastlower_bound(float)(Optional)See [*range*](https://www.home-assistant.io/components/sensor.filter/#range) filter. Lower bound for filter range.Default value: negative infinityupper_bound(float)(Optional)See [*range*](https://www.home-assistant.io/components/sensor.filter/#range) filter. Upper bound for filter range.Default value: positive infinity

## Filters

### LOW-PASS

The Low-pass filter (`lowpass`) is one of signal processing most common filters, as it smooths data by shortcutting peaks and valleys.

The included Low-pass filter is very basic and is based on [exponential smoothing](https://en.wikipedia.org/wiki/Exponential_smoothing), in which the previous data point is weighted with the new data point.

```
B = 1.0 / time_constant
A = 1.0 - B
LowPass(state) = A * previous_state + B * state
```

The returned value is rounded to the number of decimals defined in (`precision`).

### OUTLIER

The Outlier filter (`outlier`) is a basic Band-pass filter, as it cuts out any value outside a specific range.

The included Outlier filter will discard any value beyond a band centered on the median of the previous values, replacing it with the median value of the previous values. If inside the band, the

```
distance = abs(state - median(previous_states))

if distance > radius:
    median(previous_states)
else:
    state
```

### THROTTLE

The Throttle filter (`throttle`) will only update the state of the sensor for the first state in the window. This means the filter will skip all other values.

To adjust the rate you need to set the window_size. To throttle a sensor down to 10%, the `window_size` should be set to 10, for 50% should be set to 2.

This filter is relevant when you have a sensor which produces states at a very high-rate, which you might want to throttle down for storing or visualization purposes.

### TIME SIMPLE MOVING AVERAGE

The Time SMA filter (`time_simple_moving_average`) is based on the paper [Algorithms for Unevenly Spaced Time Series: Moving Averages and Other Rolling Operators](http://www.eckner.com/papers/Algorithms%20for%20Unevenly%20Spaced%20Time%20Series.pdf) by Andreas Eckner.

The paper defines three types/versions of the Simple Moving Average (SMA): *last*, *next* and *linear*. Currently only *last* is implemented.

Theta, as described in the paper, is the `window_size` parameter, and can be expressed using time notation (e.g., 00:05 for a five minutes time window).

### RANGE

The Range filter (`range`) restricts incoming data to a range specified by a lower and upper bound.

All values greater then the upper bound are replaced by the upper bound and all values lower than the lower bound are replaced by the lower bound. Per default there are neither upper nor lower bound.

```
if new_state > upper_bound:
    upper_bound
if new_state < lower_bound:
    lower_bound
new_state
```