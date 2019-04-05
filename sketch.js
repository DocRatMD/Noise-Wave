let yoff = 0.0;
let y;
let r,g,b;
let rdir,gdir,bdir;
let myWave;
function setup() {
  createCanvas(windowWidth, windowHeight);
  myWave = new wave();
  myWave.initialize();
}

function draw() {
  background(51);
  myWave.col();
  myWave.show();
}
