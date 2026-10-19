input.onButtonPressed(Button.B, function () {
    basic.showString("Move it you egoist.")
    basic.pause(200)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("D A F B D E A G ", 500), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    for (let index = 0; index < 6; index++) {
    	
    }
})
