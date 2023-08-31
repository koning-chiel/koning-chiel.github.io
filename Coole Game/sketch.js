var rrr = 0;
var stickX = 0;
var stickY = 0;
var x = 0;
var y = 0;
var a = 0;
var b = 411;
var g = 25;
var radio;
var walkspeed = 6;
var jumpspeed = 9;
var fulltoggle = 0;
var zwaartekracht = 16;
var seed = 0;
var seed2 = 0;
var seed3 = 0;
var seed4 = 0;
var seed5 = 0;
var seed6 = 0;
var inputhud = "€";
var bSlider = 0;
var cSlider = 0;
var radiusstone = 0;
var radiusplayer = 50;
var radiuscoin = 0;
var coins = 0;
var coinRandomizer = 10;
var timer = 0;
var nogEenTimer = 0;
var eenAndereTimer = 0;
var calc1 = 0;
var calc2 = 10 / 1.5;
var calc3 = 10 / 2.25;
var fps = 60;
var inf = "∞";
var Stoneval = 0;
var backgroundImage;
var glideX = 0;
var coinX = 0;
var colorRandom = 0;
var xRandom = 0;
var yRandom = 0;
var pd = 0;
var start;
//
var dev = 0;
//
var distancecoin = 1000;
var distance = 1000;
var gameover = 0;

function preload() {
  //imgs
  backgroundImage = loadImage('assets/background.jpg');
  //muziek
  soundFormats('mp3', 'ogg');
  start = loadSound('assets/startSound.mp3');
  soundFormats('mp3', 'ogg');
  music = loadSound('assets/Music.mp3');
  start.volume(0.01)
}

function setup() {
  //dev switch
    radio = createRadio();
    radio.option('cheats_on');
    radio.option('cheats_off');
    radio.style('width', '60px');
    textAlign(CENTER);
    fill(255, 0, 0);
    //loc= 10, 100
 
  //achtergrond canvas setup
  achtergrond = createGraphics(windowWidth, windowHeight);
  achtergrond.clear();
  achtergrond.background(0);
  achtergrond.imageMode(CENTER);
  achtergrond.image(backgroundImage,windowWidth/2,windowHeight/2,windowWidth,windowHeight);

  //vars
  inf = pow(10, 1000);
  inf = pow(inf, inf);
  seed5 = random(40, 200);
  seed4 = random(windowWidth);
  seed3 = random(10, 90);
  seed2 = random(10, 90);
  seed = random(10);

  //setup
  frameRate(inf);
  clear();

  //check & slider & input
  checkbox = createCheckbox("dev", false);
  checkbox.changed(functionDev);
  checkbox.position(10, 100);
  cSlider = createSlider(0.1,25,15,0.5);
  cSlider.position(20, 60);
  bSlider = createSlider(0.05,1.5,1,0.1);
  bSlider.position(20, 80);
  inp = createInput(inputhud)
  inp.position(windowWidth/2,0)
  inp.size(100);
  inp.input(inputFunc);

  //canvas
  createCanvas(windowWidth, windowHeight);
  background(37, 234, 335);
  stick(10, 10, rrr);
  
  //images
  image(achtergrond, 0, 0);
}
// END SETUP
function draw() {
  if(timer<5) {
    music.stop();
    music.play();
  }
  if(keyIsPressed === false) {
    nogEenTimer++
    if(nogEenTimer > 5) {
      key = "q";
      nogEenTimer=0
  }

  }
  //pixel slider
  pixelDensity(pd);
  pd = bSlider.value();
  walkspeed = cSlider.value();


  //images
  image(achtergrond, 0, 0);

  //movement keys & fullscreen
  if (key == "a" || key == "A") {
    a = stickX - walkspeed;
    b = stickY;
  }
  if (key == "f" || key == "F" || key == "p" || key == "P") {
    let fs = fullscreen();
    if(fulltoggle>7.3) {
      fullscreen(!fs);
      fulltoggle=0
    }
    fulltoggle++
  }
  if (key == "d" || key == "D") {
    a = stickX + walkspeed;
    b = stickY;
  }
  function keyReleased() {
    key = "q";
  }

  //rand fps
  if (round(random(0, 1)) == 1) {
    if (round(random(0, 1)) == 1) {
      fps = round(frameRate(), 3);
    }
  }

  //zwaartekracht
  if (b < windowHeight / 2) {
    b = b + zwaartekracht;
  }
  if (b < windowHeight / 3) {
    key = "q";
  }

  //cursor
  if (dev == 0) {
    noCursor();
    fill(255, 249, 47);
    ellipse(mouseX, mouseY, 10, 10);

    ellipse(mouseX, mouseY, 10, 10);
    ellipse(pmouseX, pmouseY, 5, 5);
  }


  //steen resetten
  stone(seed4, Stoneval, seed, seed2, seed3);
  Stoneval = Stoneval + zwaartekracht;
  if (Stoneval >= windowHeight) {
    seed4 = random(windowWidth);
    seed3 = random(10, 90);
    seed2 = random(10, 90);
    seed = random(10);
    Stoneval = 0;
  }

  //glide animatie van coin
  if (glideX <= coinX) {
    glideX = glideX + walkspeed * 3;
  }
  if (glideX > coinX) {
    glideX = glideX - walkspeed * 3;
  }
    
  //gameover
  if (distance <= radiusplayer + radiusstone) {
    if (dev == 0) {
      gameover = 1;
    }
  }
  if (gameover == 1) {
    background(100, 0, 0);
    fill(0);
    textSize(100);
    textAlign(CENTER);
    textStyle(BOLD);
    text("Game Over!", windowWidth / 2, windowHeight / 2);
    textStyle(NORMAL);
    textAlign(RIGHT);
    dev = 0;
    cursor("progress");
    cursor("progress");
    frameRate(0);

  }
  if (distancecoin <= radiusplayer + radiuscoin) {
    //seed5 = random(40,200) no ngvbvbgbggggggggmbt in radius x
    redo();
    if(eenAndereTimer>50) {
    coins++;
    eenAndereTimer = 0;
    start.play();
    }
  }


  //eenAndereTimer
  eenAndereTimer++;
  //clear() stick
  coin(seed6, seed5);
  stick(a, b, rrr);
  stickX = a;
  stickY = b;

  //stenen vallen sneller
  zwaartekracht = round(timer / 100) + 2.9;

  //timer
  text(round(TicksToSeconds(timer)), 10, windowHeight - 10);
  if (dev == 1) {
    fill(0);
    noStroke();
    text(timer, 170, windowHeight - 5);
    text("timer (ticks):", 60, windowHeight - 5);
  }

//tekst
textStyle(NORMAL);
textAlign(LEFT);
noStroke();
textSize(30);
fill("#FFC107");
text("Coins=", 120, 30);
text(coins, 220, 30);
textSize(15);
fill(0);
text("X=", 20, 30);
text("Y=", 70, 30);
text("WindowX,WindowY=", 250, 30);
text(windowWidth+", "+windowHeight, 390, 30);
text(round(y), 90, 30);
text(round(x), 40, 30);
fill(0);
text(round(pd*100), 150, 95);
text(round(walkspeed), 150, 75);
if(dev==1) {
noStroke();
textSize(30);
fill(255,0,0);
text("Developer Mode = ON",windowWidth/3*2,80);
fill(0, 200, 0);
textSize(12);
fill(0);
text("rad="+radiusplayer+" , "+round(radiusstone)+" , "+round(radiuscoin),x+10,y+130);
text(round(seed3), 130, windowHeight - 50);
text(round(seed2), 50, windowHeight - 50);
text("seed2=", 10, windowHeight - 50);
text("seed3=", 90, windowHeight - 50);
text("pixels=", 200, windowHeight - 50);
text(getURL(),275,windowHeight - 25);
text(windowHeight*windowWidth*pd, 238, windowHeight - 50);
textSize(50);
text(round(fps, 2),windowWidth/3*2+125, windowHeight - 20);
text("FPS=",windowWidth/3*2, windowHeight - 20);
textSize(12);
}
}

// update screen
// END DRAW



//checkbox
function functionDev() {
  if (checkbox.checked()) {
    dev = 1;
  } else {
    dev = 0;
  }
}

function TicksToSeconds(ticks) {
  //60 fps
  calc1 = ticks / 60;
  return calc1;
}
function inputFunc() {
  inputhud=this.value();
}

function redo() {
  //coin tp't niet naar stick
  coinRandomizer = random(windowWidth);
  if(coinRandomizer > x-250 && coinRandomizer < x+250) {
    redo();
  } else {
    seed6 = coinRandomizer
  }
}