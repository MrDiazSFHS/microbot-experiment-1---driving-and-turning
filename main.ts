function turnLeft (sec: number, speed1: number, speed2: number) {
    basic.showLeds(`
        # # # . .
        . # # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, speed1)
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, speed2)
    basic.pause(sec)
}
input.onButtonPressed(Button.A, function () {
    motobit.enable(MotorPower.On)
    driveForward(1000, 50, 50)
    turnRight(200, 50, 50)
    driveForward(1000, 50, 50)
    pause(200)
driveReverse(1000, 50, 50)
    pause(200)
motobit.enable(MotorPower.Off)
})
function driveReverse (sec: number, speed1: number, speed2: number) {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, speed1)
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, speed2)
    basic.pause(sec)
}
function turnRight (sec: number, speed1: number, speed2: number) {
    basic.showLeds(`
        . . # # #
        . . # # .
        . . # . .
        . . # . .
        . . # . .
        `)
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, speed1)
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, speed2)
    basic.pause(sec)
}
function driveForward (sec: number, speed1: number, speed2: number) {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, speed1)
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, speed2)
    basic.pause(sec)
}
// Start
motobit.invert(Motor.Left, true)
motobit.invert(Motor.Right, false)
