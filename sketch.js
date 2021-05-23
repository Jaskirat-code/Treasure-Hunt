var bg;
var bg2;
var form;
var system;
var code;
var security;
var score=0;

function preload() {
  bg = loadImage("Images/aladdin_cave.jpg");
  bg2 = loadImage("Images/treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System();
  security = new Security();
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear();
    background(bg2);
    fill("black");
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }



  drawSprites();
}