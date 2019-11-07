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
let gameOverScene;

// Our predator
let player;
let autopilot;

// The number of Prey to put into the simulation
let numPrey = 30;

// The prey array to contain all the Prey objects
// It starts out empty because we're going to add all the new Prey objects
// using a loop in our setup function.
let prey = [];

// Variables used for sounds and visuals
let bgMusic;
let preyEatenMusic;

let bgImage;
let playerImage;
let cellImages;
let numCellImages;

// preload()
// prepare sounds and visuals

function preload() {
  bgMusic = loadSound("assets/sounds/relaxing.mp3");
  preyEatenMusic = loadSound("assets/sounds/intuition.mp3");
  bgImage = bgImage = loadImage("assets/images/bgImage.png");
}

// setup()
//
// Sets up a canvas
// Creates objects for the predator and the array of prey
// Sets up music and visuals too
function setup() {
  // Create the four scenes
  titleScene = new TitleState();
  instructionsScene = new InstructionsState();
  playScene = new PlayState();
  // gameOverScene = new GameOverSate();

  currentScene = titleScene;

  //Ux/Ui
  createCanvas(windowWidth, windowHeight);
  bgMusic.loop = true;
  bgMusic.play();

  // The player is a predator with key imputs for movement
  player = new Cell(100, 100, 5, color(200, 200, 0), 20, false, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, SHIFT);

  // We use a for loop going from 0 up to the number of prey
  // and each time through the loop we create a new prey and
  // add it to our array
  for (let i = 0; i < numPrey; i++) {
    // Generate (mostly) random values for the arguments of the Prey constructor + autopilot
    let preyX = random(0, width);
    let preyY = random(0, height);
    let preySpeed = random(0.2, 2);
    let preyColor = color(100, 100, 100);
    let preyRadius = random(3, 30);

    // Create a new Prey objects with the random values
    let newPrey = new Cell(preyX, preyY, preySpeed, preyColor, preyRadius, true);
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

  // Handle input for the player
  player.handleInput();

  // Move the player
  player.move();

  // For the prey we need to use a loop to go through each
  // Prey object in the array (note the use of prey.length to automatically
  // get the length of the array, so we only count through exactly what's there)
  for (let i = 0; i < prey.length; i++) {
    // ... and tell it to move. Note the use of "i" to give the address/location
    // in the array of the specific Prey element we want to "talk to"
    // Note: our prey wont reset
    if (prey[i].health > 0) {
      prey[i].move();
      // Because the player could eat any Prey object in the array, we need to
      // do the same kind of loop again for handleEating...
      player.handleEating(prey[i]);
      // And again we ask prey[i] to display itself because i gives us the current
      // element we are counting through in the loop
      prey[i].display();
    }
  }

  // Because Osmosis happens to anyone  in the game, we need a
  // loop again for the prey'shandleEating...
  for (let i = 0; i < prey.length; i++) {
    // Then make sure everyone's eating is checked
    for (let j = i; j < prey.length; j++) {

      if (i !== j) {
        // Again, we refer to prey[i] to get the current Prey object as we
        // count through the array one by one
        prey[i].handleEating(prey[j]);

      }
    }
  }

  // Display the tiger
  player.display();

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
