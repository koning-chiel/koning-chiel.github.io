"use strict";
function isTileClicked(x, y) {
    return filledTiles.indexOf("".concat(x, ",").concat(y)) !== -1;
}
function isTileFlagged(x, y) {
    return flaggedTiles.indexOf("".concat(x, ",").concat(y)) !== -1;
}
function isTileBomb(x, y) {
    return bombTiles.indexOf("".concat(x, ",").concat(y)) !== -1;
}
function isTileNumber(x, y) {
    var num = 0;
    if (isTileBomb(x - 1, y - 1)) {
        num++;
    }
    if (isTileBomb(x, y - 1)) {
        num++;
    }
    if (isTileBomb(x + 1, y - 1)) {
        num++;
    }
    if (isTileBomb(x + 1, y)) {
        num++;
    }
    if (isTileBomb(x + 1, y + 1)) {
        num++;
    }
    if (isTileBomb(x, y + 1)) {
        num++;
    }
    if (isTileBomb(x - 1, y + 1)) {
        num++;
    }
    if (isTileBomb(x - 1, y)) {
        num++;
    }
    if (isTileBomb(x, y)) {
        num = 9;
    }
    return num;
}
function isTileNextToZero(x, y) {
    var num = 0;
    if (isTileZero(x - 1, y - 1)) {
        num++;
    }
    if (isTileZero(x, y - 1)) {
        num++;
    }
    if (isTileZero(x + 1, y - 1)) {
        num++;
    }
    if (isTileZero(x + 1, y)) {
        num++;
    }
    if (isTileZero(x + 1, y + 1)) {
        num++;
    }
    if (isTileZero(x, y + 1)) {
        num++;
    }
    if (isTileZero(x - 1, y + 1)) {
        num++;
    }
    if (isTileZero(x - 1, y)) {
        num++;
    }
    return num;
}
function isTileZero(x, y) {
    var valid = tiles.find(function (tile) { return tile.gridX === x && tile.gridY === y; });
    var bool = isTileNumber(x, y) === 0;
    if (!valid)
        bool = false;
    return bool;
}
function generateRandomBombs(debug, firstClickX, firstClickY) {
    bombTiles = [];
    var arrayLength = 256;
    var bombs = 40;
    var array = new Array(arrayLength).fill(0);
    for (var i = 0; i < bombs + 1; i++) {
        var randomIndex = void 0;
        do {
            randomIndex = Math.floor(Math.random() * arrayLength);
        } while (array[randomIndex] === 1);
        array[randomIndex] = 1;
    }
    var x = 1;
    var y = 1;
    var currentLocationInArray = 0;
    while (!(y > 16)) {
        if (array[currentLocationInArray] === 1) {
            if (debug)
                changePixel(x, y, "bomb", false);
            bombTiles.push("".concat(x, ",").concat(y));
        }
        currentLocationInArray++;
        x++;
        if (x > 16) {
            x = 1;
            y++;
        }
    }
}
var clicked;
var tiles = [];
var onceArr = [];
var ignore = 0;
var allPixels = [];
var bombTiles = [];
var zeroTiles = [];
var filledTiles = [];
var clickedTiles = [];
var alive = true;
var flaggedTiles = [];
var firstClick = true;
var currentTimer = "000";
var currentBombsLeft = "040";
var currentBombsNumLeft = 40;
var png_timer = {};
var png_tile = {};
var png_outline;
var png_smiley_cool;
var png_smiley_dead;
var png_smiley_happy;
var png_smiley_pressed;
var png_smiley_click;
var png_tile_1;
var png_tile_2;
var png_tile_3;
var png_tile_4;
var png_tile_5;
var png_tile_6;
var png_tile_7;
var png_tile_8;
var png_tile_bomb_pressed_red;
var png_tile_bomb_pressed;
var png_tile_bomb;
var png_tile_no_bomb;
var png_tile_pressed;
var png_tile_unknown;
var png_tile_flag;
var png_tile_unknown_pressed;
var png_tile_empty;
var png_timer_0;
var png_timer_1;
var png_timer_2;
var png_timer_3;
var png_timer_4;
var png_timer_5;
var png_timer_6;
var png_timer_7;
var png_timer_8;
var png_timer_9;
var png_timer_empty;
var png_timer_minus;
function preload() {
    png_outline = loadImage("assets/outline.png");
    png_smiley_cool = loadImage("assets/smileys/cool.png");
    png_smiley_dead = loadImage("assets/smileys/dead.png");
    png_smiley_happy = loadImage("assets/smileys/happy.png");
    png_smiley_pressed = loadImage("assets/smileys/pressed.png");
    png_smiley_click = loadImage("assets/smileys/click.png");
    png_tile_1 = loadImage("assets/tile/1.png");
    png_tile_2 = loadImage("assets/tile/2.png");
    png_tile_3 = loadImage("assets/tile/3.png");
    png_tile_4 = loadImage("assets/tile/4.png");
    png_tile_5 = loadImage("assets/tile/5.png");
    png_tile_6 = loadImage("assets/tile/6.png");
    png_tile_7 = loadImage("assets/tile/7.png");
    png_tile_8 = loadImage("assets/tile/8.png");
    png_tile_bomb_pressed_red = loadImage("assets/tile/bomb_pressed_red.png");
    png_tile_bomb_pressed = loadImage("assets/tile/bomb_pressed.png");
    png_tile_bomb = loadImage("assets/tile/bomb.png");
    png_tile_no_bomb = loadImage("assets/tile/no_bomb.png");
    png_tile_pressed = loadImage("assets/tile/pressed.png");
    png_tile_unknown = loadImage("assets/tile/unknown.png");
    png_tile_flag = loadImage("assets/tile/flag.png");
    png_tile_unknown_pressed = loadImage("assets/tile/unknown_pressed.png");
    png_tile_empty = loadImage("assets/tile/empty.png");
    png_timer_0 = loadImage("assets/timer/0.png");
    png_timer_1 = loadImage("assets/timer/1.png");
    png_timer_2 = loadImage("assets/timer/2.png");
    png_timer_3 = loadImage("assets/timer/3.png");
    png_timer_4 = loadImage("assets/timer/4.png");
    png_timer_5 = loadImage("assets/timer/5.png");
    png_timer_6 = loadImage("assets/timer/6.png");
    png_timer_7 = loadImage("assets/timer/7.png");
    png_timer_8 = loadImage("assets/timer/8.png");
    png_timer_9 = loadImage("assets/timer/9.png");
    png_timer_empty = loadImage("assets/timer/empty.png");
    png_timer_minus = loadImage("assets/timer/-.png");
    png_timer = {
        "0": png_timer_0,
        "1": png_timer_1,
        "2": png_timer_2,
        "3": png_timer_3,
        "4": png_timer_4,
        "5": png_timer_5,
        "6": png_timer_6,
        "7": png_timer_7,
        "8": png_timer_8,
        "9": png_timer_9,
        "-": png_timer_minus,
        " ": png_timer_empty
    };
    png_tile = {
        "1": png_tile_1,
        "2": png_tile_2,
        "3": png_tile_3,
        "4": png_tile_4,
        "5": png_tile_5,
        "6": png_tile_6,
        "7": png_tile_7,
        "8": png_tile_8,
        bomb: png_tile_bomb,
        bomb_pressed: png_tile_bomb_pressed,
        bomb_pressed_red: png_tile_bomb_pressed_red,
        no_bomb: png_tile_no_bomb,
        pressed: png_tile_pressed,
        unknown: png_tile_unknown,
        unknown_pressed: png_tile_pressed,
        empty: png_tile_empty,
        flag: png_tile_flag
    };
}
function setup() {
    document.addEventListener("contextmenu", function (event) {
        event.preventDefault();
    });
    createCanvas(280, 321);
    background(png_outline);
    generateRandomBombs(false);
    var x = 1;
    var y = 1;
    for (var i = 0; i < 256; i++) {
        var pixelName = filledTiles.length + 1;
        var tile = createClickableTile(toPixelRange(x, "x"), toPixelRange(y, "y"), x, y, png_tile_empty, png_tile_pressed, pixelName.toString());
        filledTiles.push("".concat(x, ",").concat(y));
        tiles.push(tile);
        x++;
        if (x > 16) {
            x = 1;
            y++;
        }
    }
    drawTiles(tiles);
}
var frame = 0;
var seconds = 0;
function draw() {
    if (mouseX >= 128 && mouseY >= 15 && mouseX <= 128 + 24 && mouseY <= 15 + 24) {
        if (mouseIsPressed) {
            location.reload();
        }
    }
    if (alive) {
        if (tiles.length === 40) {
            image(png_smiley_cool, 128, 15);
        }
        else {
            image(png_smiley_happy, 128, 15);
        }
        frame++;
        if (frame > frameRate()) {
            seconds++;
            frame = 0;
        }
        if (seconds < 10) {
            changeTimer("00".concat(seconds));
        }
        else {
            if (seconds < 100) {
                changeTimer("0".concat(seconds));
            }
            else {
                changeTimer(seconds);
            }
        }
        if (currentBombsNumLeft < -99) {
            currentBombsLeft = "   ";
            once(console.warn("Bomb counter crashed because of an unexpected amount of flags."));
        }
        else if (currentBombsNumLeft < -10) {
            currentBombsLeft = "-".concat(currentBombsNumLeft / -1);
        }
        else if (currentBombsNumLeft < 0) {
            currentBombsLeft = "-0".concat((currentBombsNumLeft / -1));
        }
        else if (currentBombsNumLeft < 10) {
            currentBombsLeft = "00".concat(currentBombsNumLeft);
        }
        else if (currentBombsNumLeft < 100) {
            currentBombsLeft = "0".concat(currentBombsNumLeft);
        }
        else {
            currentBombsLeft = currentBombsNumLeft;
        }
        imageMode(CORNER);
        image(png_timer[currentTimer.toString().charAt(0)], 16, 15);
        image(png_timer[currentTimer.toString().charAt(1)], 29, 15);
        image(png_timer[currentTimer.toString().charAt(2)], 42, 15);
        image(png_timer[currentBombsLeft.toString().charAt(0)], 225, 15);
        image(png_timer[currentBombsLeft.toString().charAt(1)], 238, 15);
        image(png_timer[currentBombsLeft.toString().charAt(2)], 251, 15);
        drawTiles(tiles);
        for (var _i = 0, tiles_1 = tiles; _i < tiles_1.length; _i++) {
            var tile = tiles_1[_i];
            tile.checkHover();
        }
    }
    else {
        image(png_smiley_dead, 128, 15);
        once(showAll());
    }
}
function changeTimer(number) {
    currentTimer = number;
}
function changeScore(number) {
    currentBombsLeft = number;
}
var pixelCounter = 1;
function changePixel(x, y, tile, onGrid) {
    if (x > 16 || x < 1 || y > 16 || y < 1) {
        console.error("changing pixel `".concat(x, ",").concat(y, "` is not possible because x or y is not in range: 1..16"));
    }
    else {
        imageMode(CORNER);
        if (onGrid)
            image(png_tile[tile], x, y);
        if (!onGrid)
            image(png_tile[tile], toPixelRange(x, "x"), toPixelRange(y, "y"));
        filledTiles.push("".concat(x, ",").concat(y));
    }
}
function toPixelRange(num, XY) {
    if (XY === "x" || XY === "X") {
        return 12 + (num - 1) * 16;
    }
    else if (XY === "y" || XY === "Y") {
        return 54 + (num - 1) * 16;
    }
    else {
        return NaN;
    }
}
function ignoreCallSignatures(func, par1, par2, par3, par4, par5, par6, par7) {
    func(par1, par2, par3, par4, par5, par6, par7);
    console.warn("The call signature expressions of ".concat(func, " where ignored because of the function ").concat(ignoreCallSignatures));
}
var nonObjectMassa;
function drawTiles(tiles) {
    for (var _i = 0, tiles_2 = tiles; _i < tiles_2.length; _i++) {
        var tile = tiles_2[_i];
        tile.display();
        tile.checkHover();
    }
}
function mousePressed() {
    for (var _i = 0, tiles_3 = tiles; _i < tiles_3.length; _i++) {
        var tile = tiles_3[_i];
        tile.clicked();
        tile.rightClicked();
    }
    return false;
}
function createClickableTile(x, y, gridX, gridY, img, onHoverImage, name) {
    var tile = {
        rollover: false,
        x: x,
        y: y,
        image: img,
        hoverImage: onHoverImage,
        name: name,
        gridX: gridX,
        gridY: gridY,
        isFlagged: false,
        delayTimer: 0,
        display: function () {
            imageMode(CORNER);
            zeroTiles.push("".concat(x, ",").concat(y));
            image(this.image, this.x, this.y, 16, 16);
            if (this.rollover) {
                image(this.hoverImage, this.x, this.y, 16, 16);
            }
        },
        checkHover: function () {
            if (mouseX > this.x && mouseX < this.x + 16 && mouseY > this.y && mouseY < this.y + 16) {
                this.rollover = true;
            }
            else {
                this.rollover = false;
            }
        },
        rightClicked: function () {
            if (this.rollover === true && mouseButton === RIGHT) {
                if (this.isFlagged) {
                    unFlag(gridX, gridY);
                    console.log("Flag removed on grid location ".concat(this.gridX, ",").concat(this.gridY));
                }
                else {
                    flag(gridX, gridY);
                    console.log("Flag placed on grid location ".concat(this.gridX, ",").concat(this.gridY));
                }
            }
        },
        clicked: function () {
            if (this.rollover === true && mouseButton === LEFT) {
                if (!this.isFlagged) {
                    console.log("tile clicked on grid location ".concat(this.gridX, ",").concat(this.gridY));
                    click(gridX, gridY);
                }
                else
                    console.log("flag clicked on grid location ".concat(this.gridX, ",").concat(this.gridY));
            }
        }
    };
    return tile;
}
function tileFromMap(gridX, gridY) {
    var x = gridX;
    var y = gridY;
    if (isTileBomb(x, y)) {
        console.log("You clicked on a bomb!");
        return "bomb_pressed_red";
    }
    else if (isTileNumber(x, y) !== 0) {
        console.log("You clicked on a ".concat(isTileNumber(x, y), "!"));
        return isTileNumber(x, y).toString();
    }
    else {
        console.log("You clicked on a empty tile!");
        return "pressed";
    }
}
function showAll() {
    var x = 1;
    var y = 1;
    var important = console.log;
    console.log = function () { };
    var important2 = console.warn;
    console.warn = function () { };
    for (var i = 0; i < 256; i++) {
        var valid = tiles.find(function (tile) { return tile.x === x && tile.gridY === y; }) || tiles[1];
        if (isTileFlagged(x, y)) {
            var index = tiles.indexOf(valid);
            changePixel(x, y, "no_bomb", false);
            flaggedTiles.splice(index, 1);
            tiles.splice(index, 1);
            clickedTiles.push("".concat(x, ",").concat(y));
        }
        else if (!isTileFlagged(x, y)) {
            var index = tiles.indexOf(valid);
            changePixel(x, y, tileFromMap(x, y), false);
            flaggedTiles.splice(index, 1);
            tiles.splice(index, 1);
            clickedTiles.push("".concat(x, ",").concat(y));
        }
        filledTiles.push("".concat(x, ",").concat(y));
        x++;
        if (x > 16) {
            x = 1;
            y++;
        }
    }
    console.log = important;
    console.warn = important2;
}
function click(gridX, gridY, immortal, forceImg) {
    var loadZeros = false;
    immortal = immortal || false;
    var valid = tiles.find(function (tile) { return tile.gridX === gridX && tile.gridY === gridY; });
    if (valid) {
        var index = tiles.indexOf(valid);
        if (forceImg == undefined) {
            if (isTileZero(gridX, gridY))
                loadZeros = true;
            changePixel(gridX, gridY, tileFromMap(gridX, gridY), false);
        }
        else {
            changePixel(gridX, gridY, forceImg, false);
        }
        flaggedTiles.splice(index, 1);
        tiles.splice(index, 1);
        clickedTiles.push("".concat(gridX, ",").concat(gridY));
        if (!immortal && tileFromMap(gridX, gridY) === "bomb_pressed_red")
            alive = false;
    }
    else {
        console.warn("The function click() crashed: ".concat(gridX, ", ").concat(gridY, " is not a valid tile."));
    }
    if (loadZeros) {
        var x = gridX;
        var y = gridY;
        click(x - 1, y - 1);
        click(x, y - 1);
        click(x + 1, y - 1);
        click(x + 1, y);
        click(x + 1, y + 1);
        click(x, y + 1);
        click(x - 1, y + 1);
        click(x - 1, y);
    }
}
function flag(gridX, gridY) {
    var valid = tiles.find(function (tile) { return tile.gridX === gridX && tile.gridY === gridY; });
    if (valid) {
        var index = tiles.indexOf(valid);
        tiles[index].image = png_tile_flag;
        tiles[index].isFlagged = true;
        tiles[index].hoverImage = png_tile_flag;
        flaggedTiles.push("".concat(gridX, ",").concat(gridY));
        currentBombsNumLeft--;
    }
    else {
        console.warn("The function flag() crashed: ".concat(gridX, ", ").concat(gridY, " is not a valid tile."));
    }
}
function unFlag(gridX, gridY) {
    var valid = tiles.find(function (tile) { return tile.gridX === gridX && tile.gridY === gridY; });
    if (valid) {
        var index = tiles.indexOf(valid);
        tiles[index].image = png_tile_empty;
        tiles[index].isFlagged = false;
        tiles[index].hoverImage = png_tile_pressed;
        flaggedTiles.splice(index, 1);
        flaggedTiles.push("".concat(gridX, ",").concat(gridY));
        currentBombsNumLeft++;
    }
    else {
        console.warn("The function unFlag() crashed: ".concat(gridX, ", ").concat(gridY, " is not a valid tile."));
    }
}
function once(code, returnPar) {
    if (code === undefined || code === null) {
        code = "";
    }
    if (onceArr.indexOf(code.toString()) !== -1) {
        code;
        onceArr.push(code.toString());
        if (returnPar === true) {
            return true;
        }
    }
    else {
        if (returnPar === true)
            return false;
    }
}
//# sourceMappingURL=build.js.map