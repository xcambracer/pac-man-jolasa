let janaria2: game.LedSprite = null
let pac_man = game.createSprite(randint(0, 4), randint(0, 4))
let janaria = game.createSprite(4, 4)
let mamua = game.createSprite(2, 2)
mamua.set(LedSpriteProperty.Brightness, 50)
mamua.set(LedSpriteProperty.Blink, 100)
janaria.set(LedSpriteProperty.Brightness, 10)
basic.forever(function () {
    basic.pause(500)
    mamua.ifOnEdgeBounce()
    if (input.acceleration(Dimension.X) < 200) {
        basic.pause(200)
        mamua.move(1)
    }
    if (input.acceleration(Dimension.X) < -200) {
        mamua.move(1)
    }
})
basic.forever(function () {
    if (pac_man.isTouching(mamua)) {
        game.gameOver()
        game.setScore(1)
    }
    if (pac_man.isTouching(janaria)) {
        game.addScore(1)
        janaria.delete()
        janaria2 = game.createSprite(randint(0, 4), randint(0, 4))
        janaria2.set(LedSpriteProperty.Brightness, 10)
    }
})
