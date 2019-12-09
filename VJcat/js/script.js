/*****************

VJ Cat
by MC Lariviere

cart-253, final project.
Your goal is to achieve nice visuals while your pixelated cat familiar randomly sleeps on your tools.
The only constant is change.

bgImage from: https://www.deviantart.com/lukeedee/art/Andromeda-Mod-update-255618830
cat gif from: https://hoppip.tumblr.com/post/22123054028
background music by Musway Studio; https://www.royaltyfree-music.com/ambient-music

******************/

// The game status
let currentScene; // To store the current scene; thank you Pippin
let titleScene;
let instructionsScene;
let playScene;
let gameOverScene;

//let variables for player, cat, keyboard (to-do)
let keyboard;
let cat;

//let variables for images and sounds (to-do)
// Interface
let bgImage;
let keyboardImage;
let ctrlVertical;
// Cat
let catImage;
//Ghost flip
let catImage2;
let catX = 900;
let catY = 700;
let catSpeed = 3;

//let variables for sounds and visual background
let purr;
let bgMusic;
let matrix;
let numDrops = 1000;
let rain = [];


// preload()
//
// Prepare SFX and player/cat images
function preload() {
  bgImage = loadImage("assets/images/bgImage.jpg");
  keyboardImage = loadImage("assets/images/keyboard.png");
  ctrlVertical = loadImage("assets/images/ctrlVertical.png");
  catImage = loadImage("assets/images/catAlpha.gif");
  catImage2 = loadImage("assets/images/catBW.gif");
  purr = loadSound("assets/sounds/purr.wav");
  bgMusic = loadSound("assets/sounds/magicalGravitation.mp3");
}

// setup()
// track game status + create objects for cat, keyboard and visuals
// setup SFX / visuals (to-do)
function setup() {
  createCanvas(1100, 900);
  // Set background
  background(bgImage);
  //Set Music
  bgMusic.setVolume(1, 5000, 1);
  bgMusic.play();
  bgMusic.loop();

  // Create the four scenes
  titleScene = new TitleState();
  instructionsScene = new InstructionsState();
  playScene = new PlayState();
  // gameOverScene = new GameOverState();
  currentScene = titleScene;

  //game objects
  keyboard = new Keyboard(0,600,900,300,keyboardImage);
  cat = new Cat(catX,catY,catSpeed,132,114,catImage);
  //and visual class
  matrix = new Matrix (width/2,0,1);
  //let variable for Matrix effect
  for( let i = 0; i < numDrops; i++) {
    let rainX;
    let rainY;
    let rainSpeed;
    let drops = new Matrix (rainX, rainY, rainSpeed);
    rain.push(drops);
  }
}

// draw()
//
// Handles input, movement and displaying for the system's objects (to-do)
function draw() {
  // In draw we just tell the current scene to draw
  // and whichever scene it is will display as per its class
  currentScene.setup();
  currentScene.draw();
}
function mousePressed() {
  // In mousePressed we call the mousePressed of the current scene
  currentScene.mousePressed();
}
  // same for keyPressed
function keyPressed(){
  currentScene.keyPressed();
}
