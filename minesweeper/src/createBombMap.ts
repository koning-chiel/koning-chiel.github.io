function generateRandomBombs(debug: boolean) {
  bombTiles = []
  const arrayLength = 256;
  const bombs = 40;
  const array = new Array<number>(arrayLength).fill(0);
  for (let i = 0; i < (bombs + 1); i++) {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * arrayLength);
    } while (array[randomIndex] === 1);
    array[randomIndex] = 1;
  }
  let x: number = 1;
  let y: number = 1;
  let currentLocationInArray: number = 0
  while (!(y > 16)) {
    if (array[currentLocationInArray] === 1) {
      if (debug) changePixel(x, y, "bomb", false)
      bombTiles.push(`${x},${y}`)
    }
    currentLocationInArray++
    x++
    if (x > 16) {
      x = 1
      y++
    }
  }
}