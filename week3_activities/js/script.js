/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

// preload()
//
// Description of preload


let x;
let y;
// increase velocity
let vx = 2;
let vy = -0.5;
// change the angle too

// delete as much harcoded numbers as possible
let speed = 5
let vx = speed
let vy = -speed

// acceleration
let ax
let ay


function setup() {
  createCanvas(500,500);
  x = 0;
  y = height/2;
}

function draw() {
  // x = x + 1;
  // acceleration
  x = ax + vx;
  y = ay + vy;
  ellipse(x,y,50,50);
}









let hasEnteredCircle = false;
let circleX;
let circleY;
let circleRadius = 50;

function setup() {
  createCanvas(500,500);
  circleX = width/2;
  circleY = height/2;
}

function draw() {
  background(200);

  let d = dist(mouseX,mouseY,circleX,circleY);
  if (d < circleRadius) {
    hasEnteredCircle = true;
  }

  else {
    hasEnteredCircle = false;
  }

  if (hasEnteredCircle) {
    fill(255,0,0);
  }
  else {
    fill(0);
  }

  ellipse(circleX,circleY,circleRadius*2);
}
