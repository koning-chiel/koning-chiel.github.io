let clicked: boolean
let tiles: ClickableTile[] = []
let onceArr: string[] = []
const ignore: any = 0
let allPixels: number[] = []
let bombTiles: string[] = []
let zeroTiles: string[] = []
let filledTiles: string[] = []
let clickedTiles: string[] = []
let alive: boolean = true
let flaggedTiles: string[] = []
type img = p5.Image
type binary = 0 | 1
type tile = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "flag" | "empty" | "bomb" | "bomb_pressed" | "bomb_pressed_red" | "no_bomb" | "pressed" | "unknown" | "unknown_pressed"
type singleDigit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type timerValue = `${singleDigit | "-" | " "}${singleDigit | "-" | " "}${singleDigit | "-" | " "}`
let currentTimer: timerValue = "000"
let currentBombsLeft: timerValue = "040"
let currentBombsNumLeft: number = 40
let png_timer: Record<string, p5.Image> = {}
let png_tile: Record<string, p5.Image> = {}
let png_outline: img
let png_smiley_cool: img
let png_smiley_dead: img
let png_smiley_happy: img
let png_smiley_pressed: img
let png_smiley_click: img
let png_tile_1: img
let png_tile_2: img
let png_tile_3: img
let png_tile_4: img
let png_tile_5: img
let png_tile_6: img
let png_tile_7: img
let png_tile_8: img
let png_tile_bomb_pressed_red: img
let png_tile_bomb_pressed: img
let png_tile_bomb: img
let png_tile_no_bomb: img
let png_tile_pressed: img
let png_tile_unknown: img
let png_tile_flag: img
let png_tile_unknown_pressed: img
let png_tile_empty: img
let png_timer_0: img
let png_timer_1: img
let png_timer_2: img
let png_timer_3: img
let png_timer_4: img
let png_timer_5: img
let png_timer_6: img
let png_timer_7: img
let png_timer_8: img
let png_timer_9: img
let png_timer_empty: img
let png_timer_minus: img

function preload() {
  png_outline = loadImage("assets/outline.png")
  png_smiley_cool = loadImage("assets/smileys/cool.png")
  png_smiley_dead = loadImage("assets/smileys/dead.png")
  png_smiley_happy = loadImage("assets/smileys/happy.png")
  png_smiley_pressed = loadImage("assets/smileys/pressed.png")
  png_smiley_click = loadImage("assets/smileys/click.png")
  png_tile_1 = loadImage("assets/tile/1.png")
  png_tile_2 = loadImage("assets/tile/2.png")
  png_tile_3 = loadImage("assets/tile/3.png")
  png_tile_4 = loadImage("assets/tile/4.png")
  png_tile_5 = loadImage("assets/tile/5.png")
  png_tile_6 = loadImage("assets/tile/6.png")
  png_tile_7 = loadImage("assets/tile/7.png")
  png_tile_8 = loadImage("assets/tile/8.png")
  png_tile_bomb_pressed_red = loadImage("assets/tile/bomb_pressed_red.png")
  png_tile_bomb_pressed = loadImage("assets/tile/bomb_pressed.png")
  png_tile_bomb = loadImage("assets/tile/bomb.png")
  png_tile_no_bomb = loadImage("assets/tile/no_bomb.png")
  png_tile_pressed = loadImage("assets/tile/pressed.png")
  png_tile_unknown = loadImage("assets/tile/unknown.png")
  png_tile_flag = loadImage("assets/tile/flag.png")
  png_tile_unknown_pressed = loadImage("assets/tile/unknown_pressed.png")
  png_tile_empty = loadImage("assets/tile/empty.png")
  png_timer_0 = loadImage("assets/timer/0.png")
  png_timer_1 = loadImage("assets/timer/1.png")
  png_timer_2 = loadImage("assets/timer/2.png")
  png_timer_3 = loadImage("assets/timer/3.png")
  png_timer_4 = loadImage("assets/timer/4.png")
  png_timer_5 = loadImage("assets/timer/5.png")
  png_timer_6 = loadImage("assets/timer/6.png")
  png_timer_7 = loadImage("assets/timer/7.png")
  png_timer_8 = loadImage("assets/timer/8.png")
  png_timer_9 = loadImage("assets/timer/9.png")
  png_timer_empty = loadImage("assets/timer/empty.png")
  png_timer_minus = loadImage("assets/timer/-.png")
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
    " ": png_timer_empty,
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
    "bomb": png_tile_bomb,
    "bomb_pressed": png_tile_bomb_pressed,
    "bomb_pressed_red": png_tile_bomb_pressed_red,
    "no_bomb": png_tile_no_bomb,
    "pressed": png_tile_pressed,
    "unknown": png_tile_unknown,
    "unknown_pressed": png_tile_pressed,
    "empty": png_tile_empty,
    "flag": png_tile_flag
  };
}
function setup() {
  const debug = false
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });
  createCanvas(280, 321)
  background(png_outline)
  generateRandomBombs(debug)
  let x = 1;
  let y = 1;
  for (let i = 0; i < 256; i++) {
    const pixelName = filledTiles.length + 1;
    if (bombTiles.indexOf(`${x},${y}`) == -1 || debug === false) {
      const tile = createClickableTile(
        toPixelRange(x, "x"),
        toPixelRange(y, "y"),
        x,
        y,
        png_tile_empty,
        png_tile_pressed,
        pixelName.toString()
      );
      filledTiles.push(`${x},${y}`);
      tiles.push(tile);
    }
    x++;
    if (x > 16) {
      x = 1;
      y++;
    }
  }
  drawTiles(tiles);
}

let frame: number = 0
let seconds: number = 0
function draw() {
  if (alive) {
    frame++
    if (frame > frameRate()) {
      seconds++
      frame = 0
    }
    if (seconds < 10) {
      changeTimer(`00${seconds as singleDigit}`)
    } else {
      if (seconds < 100) {
        changeTimer(`0${seconds}` as timerValue)
      } else {
        changeTimer(seconds as unknown as timerValue)
      }
    }
    if (currentBombsNumLeft < -99) {
      currentBombsLeft = "   "
      once(console.warn("Bomb counter crashed because of an unexpected amount of flags."))
    } else if (currentBombsNumLeft < -10) {
      currentBombsLeft = `-${currentBombsNumLeft / -1}` as timerValue
    } else if (currentBombsNumLeft < 0) {
      currentBombsLeft = `-0${currentBombsNumLeft / -1 as singleDigit}`
    } else if (currentBombsNumLeft < 10) {
      currentBombsLeft = `00${currentBombsNumLeft as singleDigit}`
    } else if (currentBombsNumLeft < 100) {
      currentBombsLeft = `0${currentBombsNumLeft}` as timerValue
    } else {
      currentBombsLeft = currentBombsNumLeft as unknown as timerValue
    }

    imageMode(CORNER)
    image(png_timer[currentTimer.toString().charAt(0)], 16, 15);
    image(png_timer[currentTimer.toString().charAt(1)], 29, 15);
    image(png_timer[currentTimer.toString().charAt(2)], 42, 15);
    image(png_timer[currentBombsLeft.toString().charAt(0)], 225, 15);
    image(png_timer[currentBombsLeft.toString().charAt(1)], 238, 15);
    image(png_timer[currentBombsLeft.toString().charAt(2)], 251, 15);
    drawTiles(tiles);
    for (const tile of tiles) {
      tile.checkHover();
    }
  } else {
    once(showAll())
  }
}
function changeTimer(number: timerValue) {
  currentTimer = number
}
function changeScore(number: timerValue) {
  currentBombsLeft = number
}
let pixelCounter = 1

function changePixel(x: number, y: number, tile: tile, onGrid: boolean) {
  if (x > 16 || x < 1 || y > 16 || y < 1) {
    console.error(`changing pixel \`${x},${y}\` is not possible because x or y is not in range: 1..16`)
  } else {
    imageMode(CORNER)
    if (onGrid) image(png_tile[tile], x, y)
    if (!onGrid) image(png_tile[tile], toPixelRange(x, "x"), toPixelRange(y, "y"))
    filledTiles.push(`${x},${y}`)
  }
}
function toPixelRange(num: number, XY: "x" | "y" | "X" | "Y"): number {
  if (XY === "x" || XY === "X") {
    return 12 + (num - 1) * 16;
  } else if (XY === "y" || XY === "Y") {
    return 54 + (num - 1) * 16;
  } else {
    return NaN;
  }
}

function ignoreCallSignatures(func: Function, par1: any, par2?: any, par3?: any, par4?: any, par5?: any, par6?: any, par7?: any) {
  func(par1, par2, par3, par4, par5, par6, par7)
  console.warn(`The call signature expressions of ${func} where ignored because of the function ${ignoreCallSignatures}`)
}

let nonObjectMassa: number;
function drawTiles(tiles: ClickableTile[]) {
  for (const tile of tiles) {
    tile.display();
    tile.checkHover();
  }
}
function mousePressed() {
  for (const tile of tiles) {
    tile.clicked();
    tile.rightClicked();
  }
  return false;
}
interface ClickableTile {
  rollover: boolean;
  x: number;
  y: number;
  gridX: number,
  gridY: number,
  image: p5.Image;
  hoverImage: p5.Image;
  name: string;
  isFlagged: boolean
  display(): void;
  checkHover(): void;
  clicked(): void;
  rightClicked(): void;
  delayTimer: number
}


function createClickableTile(
  x: number,
  y: number,
  gridX: number,
  gridY: number,
  img: p5.Image,
  onHoverImage: p5.Image,
  name: string
): ClickableTile {
  const tile: ClickableTile = {
    rollover: false,
    x,
    y,
    image: img,
    hoverImage: onHoverImage,
    name,
    gridX,
    gridY,
    isFlagged: false,
    delayTimer: 0,
    display() {
      imageMode(CORNER);
      zeroTiles.push(`${x},${y}`);
      image(this.image, this.x, this.y, 16, 16);
      if (this.rollover) {
        image(this.hoverImage, this.x, this.y, 16, 16);
      }
    },
    checkHover() {
      if (
        mouseX > this.x &&
        mouseX < this.x + 16 &&
        mouseY > this.y &&
        mouseY < this.y + 16
      ) {
        this.rollover = true;
      } else {
        this.rollover = false;
      }
    },
    rightClicked() {
      if (this.rollover === true && mouseButton === RIGHT) {
        if (this.isFlagged) {
          unFlag(gridX, gridY)
          console.log(`Flag removed on grid location ${this.gridX},${this.gridY}`)
        } else {
          flag(gridX, gridY)
          console.log(`Flag placed on grid location ${this.gridX},${this.gridY}`)
        }
      }
    },
    clicked() {
      if (this.rollover === true && mouseButton === LEFT) {
        if (!this.isFlagged) {
          console.log(`tile clicked on grid location ${this.gridX},${this.gridY}`)
          click(gridX, gridY)
        } else console.log(`flag clicked on grid location ${this.gridX},${this.gridY}`)
      }
    }
  }
  return tile;
}
function click(gridX: number, gridY: number, immortal?: boolean, forceImg?: tile) {
  if (immortal == undefined) immortal = false
  const valid = tiles.find(tile => tile.gridX === gridX && tile.gridY === gridY);
  if (valid) {
    const index = tiles.indexOf(valid);
    if (forceImg == undefined) {
      changePixel(gridX, gridY, tileFromMap(gridX, gridY), false)
    } else {
      changePixel(gridX, gridY, forceImg, false)
    }
    flaggedTiles.splice(index, 1);
    tiles.splice(index, 1);
    clickedTiles.push(`${gridX},${gridY}`);
    if (!immortal && tileFromMap(gridX, gridY) === "bomb") alive = false
  } else {
    console.warn(`The function click() crashed: ${gridX}, ${gridY} is not a valid tile.`);
  }
}

function flag(gridX: number, gridY: number) {
  const valid = tiles.find(tile => tile.gridX === gridX && tile.gridY === gridY);
  if (valid) {
    const index = tiles.indexOf(valid);
    tiles[index].image = png_tile_flag;
    tiles[index].isFlagged = true
    tiles[index].hoverImage = png_tile_flag;
    flaggedTiles.push(`${gridX},${gridY}`);
    currentBombsNumLeft--
  } else {
    console.warn(`The function flag() crashed: ${gridX}, ${gridY} is not a valid tile.`);
  }
}

function unFlag(gridX: number, gridY: number) {
  const valid = tiles.find(tile => tile.gridX === gridX && tile.gridY === gridY);
  if (valid) {
    const index = tiles.indexOf(valid);
    tiles[index].image = png_tile_empty;
    tiles[index].isFlagged = false
    tiles[index].hoverImage = png_tile_pressed;
    flaggedTiles.splice(index, 1);
    flaggedTiles.push(`${gridX},${gridY}`);
    currentBombsNumLeft++
  } else {
    console.warn(`The function unFlag() crashed: ${gridX}, ${gridY} is not a valid tile.`);
  }
}
function once(code: any, returnPar?: boolean): boolean | void {
  if (onceArr.indexOf(code.toString()) !== -1) {
    code;
    onceArr.push(code.toString())
    if (returnPar = true) return true
  } else {
    if (returnPar = true) return false
  }
}