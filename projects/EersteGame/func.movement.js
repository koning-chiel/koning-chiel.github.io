//---------------------------------------------------------------------
function stick(tX, tY, h) {
  if (gameover == 0) {
    timer = frameCount;
    noStroke();
    fill(0);
    circle(tX + 35, tY - 10, 30); //hoofd
    fill(255,255,255)
    textSize(40)
    textAlign(CENTER);
    text("😃",tX + 35, tY); //gezicht
    textAlign(LEFT);
    fill(0)
    stroke(0); //lichaamdikte
    line(tX + 35, tY + 65, tX + 35, tY + 8); //lichaamsstok
    line(tX + 60, tY + 95, tX + 35, tY + 65); //been2
    line(tX + 20, tY + 95, tX + 35, tY + 65); //been1
    line(tX + 80, tY + 50 + h, tX + 35, tY + 8); //arm1
    line(tX, tY + 50 + h, tX + 35, tY + 8); //arm2
    fill(0, 200, 0);
    strokeWeight(3);
    rectMode(CENTER);
    rect(tX + 39, tY + 100, 80, 20, 20);
    stickX = tX;
    stickY = tY;
    x = tX;
    y = tY;
    if (dev == 1) {
      cursor();
      fill(350, 0, 0);
      fill(255, 0, 0);
      line(windowWidth - 50,windowHeight - 50,windowWidth - 20,windowHeight - 20);
      line(windowWidth - 50,windowHeight - 20,windowWidth - 20,windowHeight - 50);
      fill(255, 0, 0, 50);
      noStroke();
      ellipseMode(CENTER);
      circle(tX + 35, tY + 40, radiusplayer);
      rect(tX,tY,500,30);
      fill(0)
      console.log("dsd");
      textSize(19);
      text("Radius Geen Coin tp",tX-230,tY);
      strokeWeight(1);
    }
    }
  }
//---------------------------------------------------------------------
function stone(x, y, seed, seed2, seed3) {
    if (gameover == 0) {
      //stenen
      noStroke();
      fill(50);
      ellipse(x + seed, y + seed, seed2 + 1, seed3);
      ellipse(x + seed, y + seed, seed2 - 1, seed3);
      ellipse(x + seed, y + seed, seed2, seed3 + 1);
      ellipse(x + seed, y + seed, seed2, seed3 - 1);
      ellipse(x + seed, y + seed, seed2, seed3 * 1.1);
      ellipse(x + seed, y + seed, seed2 * 1.1, seed3);
      radiusstone = (seed2 + seed3) / 2;
      distance = dist(a, b, x, y);
      if (dev == 1) {
        fill(255, 0, 0, 50);
        ellipseMode(CENTER);
        circle(x, y, radiusstone);
        fill(0, 0, 255);
        strokeWeight(2);
        stroke(0);
        line(a + 35, b + 40, x, y);
        push();
        strokeWeight(1);
        translate((a + x) / 2, (b + y) / 2);
        rotate(atan2(y - b, x - a));
        text(nfc(distance, 1), 0, -5);
        pop();
        stroke(12);
      }
    }
  }
//---------------------------------------------------------------------
function coin(x, rad) {
    if (gameover == 0) {
      radiuscoin = (rad / 4) * 3;
  
      //    relatief x=921 rad=20
      fill(0);
      ellipseMode(CENTER);
      if(x<500) {
        circle(glideX+2, b-2, rad);
        }
      if(x>=500) {
        circle(glideX-2, b-2, rad);
        }
      fill("#FFC107");
      circle(glideX, b, rad);
      fill(0);
      textSize(0.7 * rad);
      text(inputhud, glideX - rad / 4, b + rad / 4);
      textSize(12);
      distancecoin = dist(a, b, glideX, b);
      coinX = x;
      if (dev == 1) {
        line(glideX, b, glideX, b);
        line(a + 35, b + 40, glideX, b);
        fill(0, 0, 255);
        push();
        translate((a + glideX) / 2, (b + b) / 2);
        rotate(atan2(b - b, glideX - a));
        text(nfc(distancecoin, 1), 0, -5);
        pop();
        fill(0);
        noStroke();
        strokeWeight(1);
        textSize(12);
        text(x, 67, windowHeight - 35);
        text(glideX, 95, windowHeight - 24);
        text("x=", 55, windowHeight - 35);
        text("glideX=", 55, windowHeight - 24);
      }
      }
    }
//---------------------------------------------------------------------