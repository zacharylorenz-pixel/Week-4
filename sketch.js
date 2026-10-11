let angle;
let posX;
let posY;

function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  angle = 0;
angle2 = 15;
rotSpeed1 = 0;
rotSpeed2 = random(1,10);

  rectMode(CENTER);
}

function draw() {
  // Set background to black
  background(0);



  push();
  stroke(255);
  strokeWeight(2);
  noFill();
  translate(width/2,height/2);
  rotate (angle);
  rect (0,0,100,100);
  pop();

  push();
  stroke(255);
  strokeWeight(2);
  noFill();
  translate (width/3,height/4);
  rotate (angle2);
  rect (0,0,100,100);
  pop();

 angle += rotSpeed2;
  angle2 += rotSpeed1;
 
  if(rotSpeed1 > 20){
    rotSpeed1 += 0.1;
  }else{
    rotSpeed1 -= 0.1;
  }
 
  
}

