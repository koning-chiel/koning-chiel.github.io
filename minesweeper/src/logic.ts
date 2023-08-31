function tileFromMap(gridX: number, gridY: number): tile {
  const x = gridX;
  const y = gridY;
  if (isTileBomb(x, y)) {
    console.log("You clicked on a bomb!");
    return "bomb_pressed_red";
  } else if (isTileNumber(x, y) !== 0) {
    console.log(`You clicked on a ${isTileNumber(x, y)}!`);
    return isTileNumber(x, y).toString() as tile;
  } else {
    console.log("You clicked on a empty tile!");
    return "pressed";
  }
}
function showAll() {
  let x = 1;
  let y = 1;
  const important = console.log;
  console.log = function () {};
  const important2 = console.warn;
  console.warn = function () {};
  for (let i = 0; i < 256; i++) {
    const valid =
      tiles.find((tile) => tile.x === x && tile.gridY === y) || tiles[1];
    if (isTileFlagged(x, y)) {
      const index = tiles.indexOf(valid);
      changePixel(x, y, "no_bomb", false);
      flaggedTiles.splice(index, 1);
      tiles.splice(index, 1);
      clickedTiles.push(`${x},${y}`);
    } else if (!isTileFlagged(x, y)) {
      const index = tiles.indexOf(valid);
      changePixel(x, y, tileFromMap(x, y), false);
      flaggedTiles.splice(index, 1);
      tiles.splice(index, 1);
      clickedTiles.push(`${x},${y}`);
    }
    filledTiles.push(`${x},${y}`);
    x++;
    if (x > 16) {
      x = 1;
      y++;
    }
  }
}
