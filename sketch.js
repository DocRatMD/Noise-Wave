let yoff = 0.0;
let y;
// let randomcolor = {
//   r:random(0,255),
//   g:random(0,255),
//   b:random(0,255)
// };
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(51);
  beginShape();

  let xoff = 0.0;
  for (let x=0; x<=width; x+=10) {
    let y = map(noise(xoff,yoff),0,1,200,300);
    stroke(random(0,255),random(0,255),random(0,255));
    vertex(x,y);
    point(x,y);
    xoff += 0.05;
  }
  yoff += 0.01;
  fill(255);
  vertex(width+70, height);
  vertex(0, height);
  endShape(CLOSE);
}
