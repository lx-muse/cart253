/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
let mySquare1;
let mySquare2;

let myCircle1;
let myCircle2;
let myCircle3;

let fillColor;

let myLine

// setup()
//
// Description of setup

function setup() {
createCanvas(windowWidth, windowHeight);

mySquare1 = new Square (random(0,width),random(0,height),100);
mySquare2 = new Square(random(0,width),random(0,height),100);

myCircle1 = new Circle (random(0,width),random(0,height),50, fillColor);
myCircle2 = new Circle (random(0,width),random(0,height),100, fillColor);
myCircle3 = new Circle (random(0,width),random(0,height),200, fillColor);

myLine = new Line(random(0,width),random(0,height),undefined, random(0,width),random(0,height))
}


// draw()
//
// Description of draw()

function draw() {
  background(255);

  mySquare1.update();
  mySquare2.update();

  myCircle1.update();
  myCircle2.update();
  myCircle3.update();

  myLine.update();

  mySquare1.display();
  mySquare2.display();

  myCircle1.display();
  myCircle2.display();
  myCircle3.display();

  myLine.display();
}
