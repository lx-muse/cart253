/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
let mySquare1;
let mySquare2;



// setup()
//
// Description of setup

function setup() {
createCanvas(windowWidth, windowHeight);

mySquare = new Square (random(0,width),random(0,height),100);
mySquare2 = new Square(random(0,width),random(0,height),100);

}


// draw()
//
// Description of draw()

function draw() {
  background(255);
  mySquare1.update();
  mySquare2.update();
  mySquare1.display();
  mySquare2.display()
}
