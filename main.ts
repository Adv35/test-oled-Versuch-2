for (let index = 0; index < 4; index++) {
    OLED12864_I2C.init(60)
    OLED12864_I2C.showNumber(
    0,
    0,
    2,
    1
    )
    basic.pause(500)
    OLED12864_I2C.showString(
    0,
    2,
    "Hello!",
    1
    )
    basic.pause(1000)
    OLED12864_I2C.clear()
}
OLED12864_I2C.showString(
0,
0,
"Advik",
1
)
OLED12864_I2C.showString(
0,
1,
"ist",
1
)
OLED12864_I2C.showString(
0,
2,
" cool!",
0
)
basic.forever(function () {
	
})
