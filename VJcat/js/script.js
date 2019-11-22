/*****************

VJ Cat
by MC Lariviere

This is a template for cart-253, final project.
Your goal is to achieve nice visuals while your pixelated cat familiar randomly sleeps on your tools.
The only constant is change.

bgImage from: https://www.deviantart.com/lukeedee/art/Andromeda-Mod-update-255618830
cat gif from: https://hoppip.tumblr.com/post/22123054028

******************/

// The game status
let currentScene; // To store the current scene; thank you Pippin
let titleScene;
let instructionsScene;
let playScene;
let gameOverScene;

//let variables for player, cat, keyboard (to-do)
<<<<<<< Updated upstream
=======
let keyboard;
let cat;
>>>>>>> Stashed changes

//let variables for images and sounds (to-do)
// Interface
let bgImage;
<<<<<<< Updated upstream
=======
let keyboardImage;
let ctrlVertical;
// Cat
let catImage;
let catX = 940;
let catY = 750;
let catSpeed;
>>>>>>> Stashed changes

// preload()
//
// Prepare SFX and player/cat images
function preload() {
  bgImage = loadImage("assets/images/bgImage.jpg");
<<<<<<< Updated upstream

=======
  keyboardImage = loadImage("assets/images/keyboard.png");
  ctrlVertical = loadImage("assets/images/ctrlVertical.png");
  catImage = loadImage("assets/images/catAlpha.gif");
>>>>>>> Stashed changes
}


// setup()
// track game status
// create objects for player, cat, keyboard (to-do)
// setup SFX / visuals (to-do)
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create the four scenes
  titleScene = new TitleState();
  instructionsScene = new InstructionsState();
  playScene = new PlayState();
  // gameOverScene = new GameOverState();

  currentScene = titleScene;
<<<<<<< Updated upstream
=======

  //game objects
  keyboard = new Keyboard(0,600,900,300,keyboardImage);
  cat = new Cat(catX,catY,catSpeed,132,114,catImage)
>>>>>>> Stashed changes
}


// draw()
//
// Handles input, movement and displaying for the system's objects (to-do)
function draw() {
  // Set background
  background(bgImage);

  // In draw we just tell the current scene to draw
  // and whichever scene it is will display as per its class
  currentScene.draw();

}


// MUST ADAPT INPUTS FOR A BETTER GAMEPLAY :  switch to another key? lock the mouse in playState?
function mousePressed() {
  // In mousePressed we call the mousePressed of the current scene
  // so it knows the mouse was pressed
  currentScene.mousePressed();
}
