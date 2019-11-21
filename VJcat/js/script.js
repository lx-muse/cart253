/*****************

VJ Cat
by MC Lariviere

This is a template for cart-253, final project.
Your goal is to achieve nice visuals while your pixelated cat familiar randomly sleeps on your tools.
The only constant is change.

bgImage from: https://www.deviantart.com/lukeedee/art/Andromeda-Mod-update-255618830
cat gifs from: https://hoppip.tumblr.com/post/22123054028
keyboard from vectorstock (free preview modified)

******************/


// The game status
let currentScene; // To store the current scene; thank you Pippin
let titleScene;
let instructionsScene;
let playScene;
let gameOverScene;


//let variables for player, cat, keyboard (to-do)
let keyboard;

//let variables for images and sounds (to-do)
let bgImage;
let keyboardImage;
let ctrlVertical;

// preload()
//
// Prepare SFX and player/cat images
function preload() {
  bgImage = loadImage("assets/images/bgImage.jpg");
  keyboardImage = loadImage("assets/images/keyboard.jpg");
  ctrlVertical = loadImage("assets/images/ctrlVertical.png");
}


// setup()
// track game status
// create objects for player, cat, keyboard (to-do)
// setup SFX / visuals (to-do)
function setup() {
  createCanvas(1100, 900);

  // Create the four scenes
  titleScene = new TitleState();
  instructionsScene = new InstructionsState();
  playScene = new PlayState();
  // gameOverScene = new GameOverState();

  currentScene = titleScene;

  //game objects
  keyboard = new Keyboard(0,600,900,300,keyboardImage);
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
