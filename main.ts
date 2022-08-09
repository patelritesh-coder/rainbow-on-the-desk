let Rainbow = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB)
basic.forever(function () {
    Rainbow.showRainbow(1, pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1100,
    0,
    500
    ))
})
