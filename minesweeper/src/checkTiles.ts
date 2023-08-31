function isTileClicked(x: number, y: number): boolean {
    return filledTiles.indexOf(`${x},${y}`) !== -1
}
function isTileFlagged(x: number, y: number): boolean {
    return flaggedTiles.indexOf(`${x},${y}`) !== -1
}
function isTileBomb(x: number, y: number): boolean {
    return bombTiles.indexOf(`${x},${y}`) !== -1
}
function isTileNumber(x: number, y: number): singleDigit {
    let num: number = 0
    if (isTileBomb(x - 1, y - 1)) {
        num++
        //7
    }
    if (isTileBomb(x, y - 1)) {
        num++
        //8
    }
    if (isTileBomb(x + 1, y - 1)) {
        num++
        //9
    }
    if (isTileBomb(x + 1, y)) {
        num++
        //6
    }
    if (isTileBomb(x + 1, y + 1)) {
        num++
        //3
    }
    if (isTileBomb(x, y + 1)) {
        num++
        //2
    }
    if (isTileBomb(x - 1, y + 1)) {
        num++
        //1
    }
    if (isTileBomb(x - 1, y)) {
        num++
        //4
    }
    return num as singleDigit
}
function isTileNextToZero(x: number, y: number): singleDigit {
    let num: number = 0
    if (isTileEmpty(x - 1, y - 1)) {
        num++
        //7
    }
    if (isTileEmpty(x, y - 1)) {
        num++
        //8
    }
    if (isTileEmpty(x + 1, y - 1)) {
        num++
        //9
    }
    if (isTileEmpty(x + 1, y)) {
        num++
        //6
    }
    if (isTileEmpty(x + 1, y + 1)) {
        num++
        //3
    }
    if (isTileEmpty(x, y + 1)) {
        num++
        //2
    }
    if (isTileEmpty(x - 1, y + 1)) {
        num++
        //1
    }
    if (isTileEmpty(x - 1, y)) {
        num++
        //4
    }
    return num as singleDigit
}
function isTileEmpty(x: number, y: number) {
    return zeroTiles.indexOf(`${x},${y}`) !== -1
}