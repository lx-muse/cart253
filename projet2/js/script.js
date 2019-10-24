// Predator-Prey Simulation
// by Pippin Barr
//
// Creates a predator and three prey (of different sizes and speeds)
// The predator chases the prey using the arrow keys and consumes them.
// The predator loses health over time, so must keep eating to survive.

// Our predator
let player;

// The three prey
let cellA;
let cellB;
let cellC;

// setup()
//
// Sets up a canvas
// Creates objects for the predator and three prey
function setup() {
  createCanvas(windowWidth, windowHeight);
  player = new Predator(100, 100, 5, color(200, 200, 0), 40);
  cellA = new Predator(100, 100, 10, color(255, 100, 10), 50);
  cellB = new Predator(100, 100, 8, color(255, 255, 255), 60);
  cellC = new Predator(100, 100, 20, color(255, 255, 0), 10);
}

// draw()
//
// Handles input, movement, eating, and displaying for the system's objects
function draw() {
  // Clear the background to black
  background(0);

  // Handle input for the tiger
  player.handleInput();

  // Move all the "animals"
  player.move();
  cellA.move();
  cellB.move();
  cellC.move();

  // Handle the player eating any of the prey
  player.handleEating(cellA);
  player.handleEating(cellB);
  player.handleEating(cellC);
  // Handle the other cell eating
  cellA.handleEating(player);
  cellA.handleEating(cellB);
  cellA.handleEating(cellC);

  cellB.handleEating(player);
  cellB.handleEating(cellA);
  cellB.handleEating(cellC);

  cellC.handleEating(player);
  cellC.handleEating(cellA);
  cellC.handleEating(cellB);

  // Display all the "animals"
  player.display();
  cellA.display();
  cellB.display();
  cellC.display();
}
