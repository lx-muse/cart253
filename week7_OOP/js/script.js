/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

// preload()
//
// Description of preload
let tiger;
let deadlyMoth;
let antelope;

function preload() {

}


// setup()
//
// Description of setup

function setup() {
  createCanvas(windowWidth,windowHeight);
  //run the constructor
  //predator = class tiger = object
tiger = new Predator(0, 0, 5, color(255, 0, 0), 25);
deadlyMoth = new Predator(height/2, width/2, 5, color(200, 200, 100), 100);
antelope = new Prey(height/2, width/2,5,color(0,255,0),50);

}



// draw()
//
// Description of draw()

function draw() {
  background(0);
  tiger.handleInput();
  deadlyMoth.handleInput();

  tiger.move();
  deadlyMoth.move();
  antelope.move();

  tiger.handleEating(antelope);
  deadlymoth.handleEating(antelope);

  tiger.display();
  deadlyMoth.display();
  antelope.display();
}
