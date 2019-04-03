let yoff = 0.0;
let y;
let r,g,b;
let rdir,gdir,bdir;
function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255);
  r = random(0,255);
  g = random(0,255);
  b = random(0,255);
  rdir = true;
  gdir = true;
  bdir = true;
}

function draw() {
  background(51);

  //RED
  if (r <= 0) {
    rdir = true;
  }
  if (r >= 255) {
    rdir = false;
  }

  if (rdir == true) {
    r += 1;
  }

  if(rdir == false) {
    r -= 1;
  }

  //GREEN
  if (g <= 0) {
    gdir = true;
  }
  if (g >= 255) {
    gdir = false;
  }

  if (gdir == true) {
    g += 0.8;
  }

  if(gdir == false) {
    g -= 0.8;
  }

  //BLUE
  if (b <= 0) {
    bdir = true;
  }
  if (r >= 255) {
    bdir = false;
  }

  if (bdir == true) {
    b += 1.2;
  }

  if(bdir == false) {
    b -= 1.2;
  }

  beginShape();

  let xoff = 0.0;
  for (let x=0; x<=width; x+=10) {
    let y = map(noise(xoff,yoff),0,1,height/3,height/2);
    strokeWeight(5);
    stroke(r,g,b);
    vertex(x,y);
    point(x,y);
    xoff += 0.05;
  }
  yoff += 0.01;
  vertex(width+70, height+10);
  vertex(-25, height+10);
  endShape(CLOSE);
}
