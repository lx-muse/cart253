// Osmosis Simulation
// by Marie-Christine Lariviere, original by Pippin Barr
//
// Creates a predator and many prey (of different sizes and speeds)
// The predator chases the prey using the arrow keys and consumes them.
// The predator loses health over time, so must keep eating to survive.

// The game status
let currentScene; // To store the current scene; thank you Pippin
let titleScene;
let instructionsScene;
let playScene;
// let gameOverScene;

// Our predator
let player;
let autopilot;

// The number of Prey to put into the simulation
let numPrey = 40;

// The prey array to contain all the Prey objects
// It starts out empty because we're going to add all the new Prey objects
// using a loop in our setup function.
let prey = [];

// Variables used for sounds and visuals
let bgMusic;
let preyEatenMusic;

let bgImage;
let playerImage;
let preyImage;
let numCellImages;

// preload()
// prepare sounds and visuals
function preload() {
  bgMusic = loadSound("assets/sounds/relaxing.mp3");
  preyEatenMusic = loadSound("assets/sounds/intuition.mp3");

  bgImage = loadImage("assets/images/bgImage.png");
  playerImage = loadImage("assets/images/cellPlayer2.png");
  preyImage = loadImage("assets/images/cellPrey.png");
  console.log(playerImage);
}

// setup()
//
// Sets up a canvas
// Creates objects for the predator and the array of prey
// Sets up music and visuals too
function setup() {

  //Ux/Ui
  createCanvas(windowWidth, windowHeight);
  bgMusic.loop = true;
  bgMusic.play();

  // Create the four scenes
  titleScene = new TitleState();
  instructionsScene = new InstructionsState();
  playScene = new PlayState();
  // gameOverScene = new GameOverSate();

  currentScene = titleScene;

  // The player is a predator with key imputs for movement
  player = new Cell(100, 100, 5, playerImage, 20, false, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, SHIFT);

  // We use a for loop going from 0 up to the number of prey
  // and each time through the loop we create a new prey and
  // add it to our array
  for (let i = 0; i < numPrey; i++) {
    // Generate (mostly) random values for the arguments of the Prey constructor + autopilot
    let preyX = random(0, width);
    let preyY = random(0, height);
    let preySpeed = random(0.2, 2);
    let preyRadius = random(3, 30);

    // Create a new Prey objects with the random values
    let newPrey = new Cell(preyX, preyY, preySpeed, preyImage, preyRadius, true);
    // Add the new Prey object to the END of our array using push()
    prey.push(newPrey);
  }
}

// draw()
//
// Handles input, movement, eating, and displaying for the system's objects
function draw() {
  // Clear the background to black
  background(bgImage);

  // In draw we just tell the current scene to draw
  // and whichever scene it is will display as per its class
  currentScene.draw();

}


function mousePressed() {
  // In mousePressed we call the mousePressed of the current scene
  // so it knows the mouse was pressed
  currentScene.mousePressed();
}


///////////////////////////////////////////////////////////////////
// Yes you could actually combine those three loops into one...
//
// function draw() {
//   // Clear the background to black
//   background(0);
//
//   // Handle input for the tiger
//   tiger.handleInput();
//
//   // Move the tiger
//   tiger.move();
//
//   // Move, handle eating, and display for each Prey in the array
//   for (let i = 0; i < prey.length; i++) {
//     prey[i].move();
//     tiger.handleEating(prey[i]);
//     prey[i].display();
//   }
//
//   // Display the tiger
//   tiger.display();
// }
