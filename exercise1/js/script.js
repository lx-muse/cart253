// Exercise 1 - Movement
// Marie-Christine Lariviere
//
// Starter code for exercise 1.
// Draws a moving square and circle that intersect
// in the middle of the canvas.

// The current position and size of the circle
let circleX;
let circleY;
let circleSize = 100;

// The current position and size of the square
let squareX;
let squareY;
let squareSize = 100;

// The current position and size of the line//

let lineX;
let lineY;
// let lineStroke = (0,255,0,10);
// lineStroke variable wasn't working as expected


// create a variable for mouseOver()
// let centerCircle;
// let d;

// preload()
//
// Nothing here

function preload() {

}


// setup()
//
// Set up the canvas, position the images, set the image mode.

function setup() {
  // Create our canvas
  createCanvas(640,640);

  // Start the circle off screen to the bottom left
  // We divide the size by two because we're drawing from the center
  circleX = -circleSize/2;
  circleY = height + circleSize/2;

  // Start the square off screen to the bottom right
  // We divide the size by two because we're drawing from the center
  squareX = width + squareSize/2;
  squareY = height + squareSize/2;

  // We'll draw rectangles from the center
  rectMode(CENTER);
  // We won't have a stroke in this
  noStroke();

  //Start the line off the screen at center left
  lineX = (0,320);
  lineY = (0,320);
  lineStroke = stroke(0,255,0,10);

  // MouseOver challenge
  // centerCircle = ellipse(320,320,d,d);
  // centerCircle.mouseOver(changeGray);
  // d = 10;
}



// draw()
//
// Change the circle and square's positions so they move
// Draw the circle and square on screen

function draw() {
  // We don't fill the background so we get a drawing effect

  // Move circle up and to the right
  circleX += 1;
  circleY -= 1;
  // Make the circle transparent red
  fill(255,0,0,10);
  // Display the circle
  ellipse(circleX,circleY,circleSize,circleSize);

  // Move square up and to the left
  squareX -= 1;
  squareY -= 1;
  // Make the square transparent blue
  fill(0,0,255,10);
  // Display the square
  rect(squareX,squareY,squareSize,squareSize);


  // Move line to the left
  lineX += 1;
  // lineY = 320;
  // Make the line transparent green, Display the line??
  line(lineX,lineY);
  // stroke(0,255,0,10);
  strokeWeight(4);

  // object following the mouseX,mouseY coordinates
  fill(128,0,128,10)
  ellipse(mouseX,mouseY,50,50);


}
// mouseOver challenge

// function changeGray() {
//   d = d + 10;
//   if (d > 100) {
//     d = 0;
//     }
//
// }
