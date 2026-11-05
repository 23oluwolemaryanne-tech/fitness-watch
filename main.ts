let Steps = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Steps)
    basic.pause(100)
})
input.onGesture(Gesture.Shake, function () {
    Steps += 1
    basic.showNumber(Steps)
})
basic.forever(function () {
	
})
