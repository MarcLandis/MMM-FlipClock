# Magic Mirror Module MMM-FlipClock

A classic flip clock for the [MagicMirror](https://github.com/MichMich/MagicMirror). It is powered by the awesome [flip plugin](https://pqina.nl/flip/).

![Example](/example.gif?raw=true)

## Installation

1\. Execute the following commands to install the module:

```bash
cd ~/MagicMirror/modules # navigate to module folder
git clone https://github.com/MarcLandis/MMM-FlipClock.git # clone this repository
```

2\. Then, add the following into the `modules` section of your `config/config.js` file:

```javascript
{
    module: 'MMM-FlipClock',
    position: 'top_left',
    config: {
        // See 'Configuration options' for more information.
    }
},
```

## Configuration options

The following properties can be configured:

| Option            | Description                                                                                                                                                                                                                                                                             |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `timeFormat`      | Use 12 or 24 hour format. <br><br> **Possible values:** `12` or `24` <br> **Default value:** uses value of _config.timeFormat_                                                                                                                                                          |
| `seperator`       | Seperator to use. <br><br> **Default value:** `":"`                                                                                                                                                                                                                                     |
| `displaySeconds`  | Display seconds. <br><br> **Possible values:** `true` or `false` <br> **Default value:** `true`                                                                                                                                                                                         |
| `showPeriod`      | Show the period (am/pm) with 12 hour format. <br><br> **Possible values:** `true` or `false` <br> **Default value:** `true`                                                                                                                                                             |
| `showPeriodUpper` | Show the period (AM/PM) with 12 hour format as uppercase. <br><br> **Possible values:** `true` or `false` <br> **Default value:** `false`                                                                                                                                               |
| `showDate`        | Turn off or on the Date section. <br><br> **Possible values:** `true` or `false` <br> **Default value:** `true`                                                                                                                                                                         |
| `showWeek`        | Turn off or on the Week section. <br><br> **Possible values:** `true` or `false` <br> **Default value:** `false`                                                                                                                                                                        |
| `dateFormat`      | Configure the date format as you like. <br><br> **Possible values:** [Docs](http://momentjs.com/docs/#/displaying/format/) <br> **Default value:** `"dddd, LL"`                                                                                                                         |
| `timezone`        | Specific a timezone to show clock. <br><br> **Possible examples values:** `America/New_York`, `America/Santiago`, `Etc/GMT+10` <br> **Default value:** `none`. See more informations about configuration value [here](https://momentjs.com/timezone/docs/#/data-formats/packed-format/) |
| `displaySeconds`  | Display seconds. <br><br> **Possible values:** `true` or `false` <br> **Default value:** `true`                                                                                                                                                                                         |
| `easing`          | Configure the flipping animation as you like. <br><br> **Possible values:** [Docs](https://pqina.nl/tick/#transitions-easing) <br> **Default value:** `"ease-out-bounce"`                                                                                                               |
