"use strict";

/******************************************************

Game - Chaser
Marie-Christine Lariviere

A "simple" game of cat and mouse played under water. The player is a circle and can move
with keys, if they overlap the (randomly moving) air bubbles, survive by merging and
adding it to their own reserve. The player "dies" slowly over time so they have to keep
swiming to stay alive.

Includes: Physics-based movement, keyboard controls, health/stamina,
random movement, screen wrap.

Background music from Bensound.com
https://www.bensound.com/royalty-free-music/track/relaxing
Notification (preyEaten)
https://notificationsounds.com/notification-sounds/intuition-561

******************************************************/

// Track whether the game is over
let gameOver = false;

// The goal, could reach to level 2
let winGame = false;
// Player position, size, velocity
let playerX;
let playerY;
let playerRadius = 20;
let playerVX = 0;
let playerVY = 0;
let playerMaxSpeed = 2;
// Player health
let playerHealth;
let playerMaxHealth = 255;
// Player fill color
let playerFill = 50;

// Prey position, size, velocity
let preyX;
let preyY;
let preyRadius = 20;
let preyVX;
let preyVY;
let preyMaxSpeed = 2;
// Prey health
let preyHealth;
let preyMaxHealth = 100;
// Something new
let numBubble = 50;
// Prey fill color
let preyFill = 200;

// Amount of health obtained per frame of "eating" (overlapping) the prey
let eatHealth = 10;
// Number of prey eaten during the game (the "score")
let preyEaten = 0;

// Time variables for Perlin Noise; tutorial from Dan Schiffman
let preyTX = 1;
let preyTY = 1;

//UX/UI
let bgImage;
let bgMusic;
let preyEatenMusic;

function preload() {
  bgMusic = loadSound("assets/sounds/relaxing.mp3");
  preyEatenMusic = loadSound("assets/sounds/intuition.mp3");
  preyEatenMusic = load
}

// setup()
//
// Sets up the basic elements of the game
function setup() {
  bgImage = loadImage("assets/images/water.png");
  bgMusic.loop = true;
  bgMusic.play();
  createCanvas(500, 500);

  noStroke();

  // We're using simple functions to separate code out
  setupPrey();
  setupPlayer();
}

// setupPrey()
//
// Initialises prey's position, velocity, and health
function setupPrey() {

  preyX = random(0,width);
  preyY = random(0,height);
  preyVX = -preyMaxSpeed;
  preyVY = preyMaxSpeed;
  preyHealth = preyMaxHealth;
}

// setupPlayer()
//
// Initialises player position and health
function setupPlayer() {
  playerX = 4 * width / 5;
  playerY = height / 2;
  playerHealth = playerMaxHealth;
}

// draw()
//
// While the game is active, checks input
// updates positions of prey and player,
// checks health (dying), checks eating (overlaps)
// displays the two agents.
// When the game is over, shows the game over screen.
function draw() {
  background(bgImage);

  if (!gameOver) {
    handleInput();

    movePlayer();
    movePrey();

    updateHealth();
    checkEating();

    drawPrey();
    drawPlayer();


// Keeping track of the player size
    if (playerRadius >= 500) {
      winGame = true;
    }
  }
  else {
    showGameOver();
  }
  // trying a new function
  // if (winGame = true) {
  //   showGameWon();
  // }
}

// handleInput()
//
// Checks arrow keys and adjusts player velocity accordingly
function handleInput() {
  // Check for horizontal movement
  if (keyIsDown(LEFT_ARROW)) {
    playerVX = -playerMaxSpeed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    playerVX = playerMaxSpeed;
  }
  else {
    playerVX = 0;
  }

  // Check for vertical movement
  if (keyIsDown(UP_ARROW)) {
    playerVY = -playerMaxSpeed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    playerVY = playerMaxSpeed;
  }
  else {
    playerVY = 0;
  }

  if (keyIsDown(SHIFT)) {
    playerMaxSpeed = 4;
  } else {
    playerMaxSpeed;
  }
}

// movePlayer()
//
// Updates player position based on velocity,
// wraps around the edges.
function movePlayer() {
  // Update position
  playerX = playerX + playerVX;
  playerY = playerY + playerVY;

  // Wrap when player goes off the canvas
  if (playerX < 0) {
    // Off the left side, so add the width to reset to the right
    playerX = playerX + width;
  }
  else if (playerX > width) {
    // Off the right side, so subtract the width to reset to the left
    playerX = playerX - width;
  }

  if (playerY < 0) {
    // Off the top, so add the height to reset to the bottom
    playerY = playerY + height;
  }
  else if (playerY > height) {
    // Off the bottom, so subtract the height to reset to the top
    playerY = playerY - height;
  }
}

// updateHealth()
//
// Reduce the player's health (happens every frame)
// Check if the player is dead
function updateHealth() {
  // Reduce player health
  playerHealth = playerHealth - 0.5;
  // Constrain the result to a sensible range
  playerHealth = constrain(playerHealth, 0, playerMaxHealth);
  // Check if the player is dead (0 health)
  if (playerHealth === 0) {
    // If so, the game is over
    gameOver = true;
  }
}

// checkEating()
//
// Check if the player overlaps the prey and updates health of both
function checkEating() {
  // Get distance of player to prey
  let d = dist(playerX, playerY, preyX, preyY);
  // Check if it's an overlap
  if (d < playerRadius + preyRadius) {
    // Increase the player health
    playerHealth = playerHealth + eatHealth;
    // Constrain to the possible range
    playerHealth = constrain(playerHealth, 0, playerMaxHealth);
    // Reduce the prey health
    preyHealth = preyHealth - eatHealth;
    // Constrain to the possible range
    preyHealth = constrain(preyHealth, 0, preyMaxHealth);

    // Check if the prey died (health 0)
    if (preyHealth === 0) {
      // give audio feedback to the player
      preyEatenMusic.play();
      // Move the "new" prey to a random position
      preyX = random(0, width);
      preyY = random(0, height);
      // Give it full health
      preyHealth = preyMaxHealth;
      // Track how many prey were eaten
      preyEaten = preyEaten + 1;
      // because everything gets easier when practice
      playerRadius++;

    }
  }
}

// movePrey()
//
// Moves the prey based on random/perlin noise velocity changes
function movePrey() {
    // Set velocity based on noise values to get a more natural new direction
    // and speed of movement
    //
    // Use map() to convert from the 0-1 range of the random() function
    // to the appropriate range of velocities for the prey
    preyVX = map(noise(preyTX), 0, 1, -preyMaxSpeed, preyMaxSpeed);
    preyVY = map(noise(preyTY), 0, 1, -preyMaxSpeed, preyMaxSpeed);
    // update time variable
    preyTX += 0.01;
    preyTY += 0.01;

  // Update prey position based on velocity
  preyX = preyX + preyVX;
  preyY = preyY + preyVY;

  // Screen wrapping
  if (preyX < 0) {
    preyX = preyX + width;
  }
  else if (preyX > width) {
    preyX = preyX - width;
  }

  if (preyY < 0) {
    preyY = preyY + height;
  }
  else if (preyY > height) {
    preyY = preyY - height;
  }
}

// drawPrey()
//
// Draw the prey as an ellipse with alpha based on health
function drawPrey() {
  console.log(drawPrey);
  fill(preyFill, preyHealth);
  ellipse(preyX, preyY, preyRadius * 2);

  // good idea, wrong logic. Tried many preys. I will come back to make this work.
  // for (var i = 0; i < numBubble; i++) {
  //   // Choose a random location for air bubbles
  //   preyX = random(0,width);
  //   preyY = random(0,height);
  //   // Generate a random number we can use for probability
  //   var r = random();
  //
  //   // Use the random number to display 4 kinds of air reserves, each with
  //   // a 25% chance of being shown
  //   if (r < 0.25) {
  //     preyRadius = preyRadius / 2;
  //   }
  //   else if (r < 0.25) {
  //     preyRadius;
  //   }
  //   else if (r < 0.25) {
  //     preyRadius = preyRadius * 2;
  //   }
  //   else if (r < 0.25) {
  //     preyRadius = preyRadius * 3;
  //   }
}

// drawPlayer()
//
// Draw the player as an ellipse with alpha value based on health
function drawPlayer() {
  fill(playerFill, playerHealth);
  ellipse(playerX, playerY, playerRadius * 2);
}

// showGameOver()
//
// Display text about the game being over!
function showGameOver() {
  // Set up the font
  textSize(32);
  textStyle(ITALIC);
  textAlign(CENTER, CENTER);
  fill(0);
  // Set up the text to display
  let gameOverText = "GAME OVER\n"; // \n means "new line"
  gameOverText = gameOverText + "You survived " + preyEaten + " rounds\n";
  gameOverText = gameOverText + "before you died."
  // Display it in the centre of the screen
  text(gameOverText, width / 2, height / 2);
}


// Display the game won, or level two. It's a working on your base for the next design.
// function showGameWon() {
//   textSize(32);
//   textStyle(ITALIC);
//   textAlign(CENTER, CENTER);
//   fill(0);
//
//   // Set up the text to display
//   let gameOverText = "YOU SURVIVED\n"; // \n means "new line"
//   gameOverText = gameOverText + "preyEaten + " rounds\n";
//   // Display it in the centre of the screen
//   text(gameOverText, width / 2, height / 2);
//
// }
