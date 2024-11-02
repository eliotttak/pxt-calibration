//% color="#FFAB19"
namespace Calibrate { 
    //% block
    //% pin1.defl=AnalogPin.P1
    export function calibrateone(pin1: AnalogPin) {
        while (!calibrate([pin1])) {}
    }
    //% block
    //% pin1.defl=AnalogPin.P1 pin2.defl=AnalogPin.P2
    export function calibrateTwo(pin1: AnalogPin, pin2: AnalogPin) {
        while (!calibrate([pin1, pin2])) {}
    }
    //% block
    //% pin.defl=AnalogPin.P1
    export function read(pin: AnalogPin) {
        if (!ranges || !ranges[pin]) {
            return NaN
        }
        let value = pins.analogReadPin(pin)
        if (value < ranges[pin].zero) {
            return pins.map(value, ranges[pin].min, ranges[pin].zero, -100, 0)
        }
        return pins.map(value, ranges[pin].zero, ranges[pin].max, 0, 100)
    }
    let timer = 0
    let stage = 0
    let ranges: {[key: string]: { min: number, max: number, zero: number }} = null

    function calibrate(pinss: AnalogPin[]): boolean {
        basic.pause(50)
        updateDisplay(50)

        if (stage == 0) {
            calibrateRange(pinss)
            return false
        } else if (stage == 1) {
            calibrateZero(pinss)
            return false
        }
        return true
    }
 
    input.onButtonPressed(Button.A, function () {
        stage += 1
    })

    function updateDisplay (delta: number) {
        let dispy = 0
        let dispx = 0
        let index = 0
        if (stage == 0) {
            timer += delta
            timer = timer % 2000
            index = Math.floor(timer * 16 / 2000)
            if (index <= 4) {
                dispx = index
                dispy = 0
            } else if (index <= 8) {
                dispx = 4
                dispy = index - 4
            } else if (index <= 12) {
                dispx = 12 - index
                dispy = 4
            } else {
                dispx = 0
                dispy = 16 - index
            }
            basic.clearScreen()
            led.plot(dispx, dispy)
        } else if (stage == 1) {
            basic.clearScreen()
            led.plot(2, 2)
        } else {
            basic.showIcon(IconNames.Yes)
        }
    }
 
    function calibrateRange(pinss: AnalogPin[]) {
        if (ranges == null) {
            ranges = {}
            pinss.forEach(p => {
                let value = pins.analogReadPin(p)
                ranges[p] = {
                    min: value,
                    max: value,
                    zero: value
                }
            })
        } else {
            pinss.forEach(p => {
                let value2 = pins.analogReadPin(p)
                if (value2 < ranges[p].min) {
                    ranges[p].min = value2
                }
                if (value2 > ranges[p].max) {
                    ranges[p].max = value2
                }
            })
        }
    }
    function calibrateZero(pinss: AnalogPin[]) {
        pinss.forEach(p => {
            ranges[p].zero = pins.analogReadPin(p)
        })
    }
}
