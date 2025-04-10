function find_length(name: string): number {
    let letters = name.length
    return letters
}

function change_greeting(name: string) {
    let letters = 0
    letters = find_length(name)
    return "Length = " + ("" + letters)
}

let mySprite = sprites.create(assets.image`mc`, SpriteKind.Player)
mySprite.say(change_greeting("Pat"))
