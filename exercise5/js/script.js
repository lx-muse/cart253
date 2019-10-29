// Predator-Prey Simulation
// by Marie-Christine Lariviere, original by Pippin Barr
//
// Creates a predator and three prey (of different sizes and speeds)
// The predator chases the prey using the arrow keys and consumes them.
// The predator loses health over time, so must keep eating to survive.

// Our predators
let tiger;
let lion;

// The three prey
let antelope;
let zebra;
let bee;

//preload()
//
// Loads the predators and prey images
function preload() {
  tigerImage = loadImage("assets/images/cat.png");
  lionImage = loadImage("assets/images/cat2.png")
  preyImage = loadImage("assets/images/fish.png");
}

// setup()
//
// Sets up a canvas
// Creates objects for the predator and three prey
function setup() {
  createCanvas(windowWidth, windowHeight);
  tiger = new Predator(100, 100, 5, color(200, 200, 0), 40, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, SHIFT);
  lion = new Predator(windowWidth - 100, windowHeight - 100, 5, color(0, 200, 200), 40, 87, 83, 65, 68, 70);

  antelope = new Prey(100, 100, 10, color(0,0,200), 50);
  zebra = new Prey(100, 100, 8, color(255, 255, 255), 60);
  bee = new Prey(100, 100, 20, color(255, 255, 0), 10);
}

// draw()
//
// Handles input, movement, eating, and displaying for the system's objects
function draw() {
  // Clear the background to black
  background(0);

  // Handle input for the tiger
  tiger.handleInput();
  lion.handleInput();
  // Move all the "animals"
  tiger.move();
  lion.move();
  antelope.move();
  zebra.move();
  bee.move();

  // Handle the tiger eating any of the prey
  tiger.handleEating(antelope);
  tiger.handleEating(zebra);
  tiger.handleEating(bee);

  lion.handleEating(antelope);
  lion.handleEating(zebra);
  lion.handleEating(bee);

  // Display all the "animals"
  tiger.display();
  lion.display();
  antelope.display();
  zebra.display();
  bee.display();
}
