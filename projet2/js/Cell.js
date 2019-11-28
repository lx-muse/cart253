// Cell - template used for predator AND prey
//
// A class that represents cells
// controlled by the arrow keys/AI. It can move around
// the screen and consume objects to maintain its health.

class Cell {

  // constructor
  //
  // Sets the initial values for the Predator's & Prey mixed properties
  // Either sets default values or uses the arguments provided
  constructor(x, y, speed, avatar, radius, autopilot, upKey, downKey, leftKey, rightKey, sprintKey) {
    // Position
    this.x = x;
    this.y = y;
    this.w = this.radius;
    this.h = this.radius;
    // Velocity and speed
    this.vx = 0;
    this.vy = 0;
    this.speed = speed;
    this.defaultSpeed = speed;
    this.doubleSpeed = speed * 2;
    // Time properties for noise() function
    this.tx = random(0, 1000); // To make x and y noise different
    this.ty = random(0, 1000); // we use random starting values
    // Health properties
    this.maxHealth = radius;
    this.health = this.maxHealth; // Must be AFTER defining this.maxHealth
    this.healthLossPerMove = 0.1;
    this.healthGainPerEat = 1;
    // Display properties
    this.avatar = avatar;
    console.log(avatar);
    this.radius = this.health; // Radius is defined in terms of health
    // Input properties
    this.autopilot = autopilot;
    this.upKey = upKey;
    this.downKey = downKey;
    this.leftKey = leftKey;
    this.rightKey = rightKey;
    this.sprintKey = sprintKey;
  }

  // handleInput
  //
  // Checks if an arrow key is pressed and sets the predator's
  // velocity appropriately.
  handleInput() {
    // Horizontal movement
    if (keyIsDown(this.leftKey)) {
      this.vx = -this.speed;
    } else if (keyIsDown(this.rightKey)) {
      this.vx = this.speed;
    } else {
      this.vx = 0;
    }
    // Vertical movement
    if (keyIsDown(this.upKey)) {
      this.vy = -this.speed;
    } else if (keyIsDown(this.downKey)) {
      this.vy = this.speed;
    } else {
      this.vy = 0;
    }
    //Added sprintKey input for player
    if (keyIsDown(this.sprintKey)) {
      this.speed = this.doubleSpeed;
    } else {
      this.speed = this.defaultSpeed;
    }
  }

  // move
  //
  // Updates the position according to velocity
  // Lowers health (as a cost of living)
  // Handles wrapping
  move() {
    if (this.autopilot == false) {
      // Update position
      this.x += this.vx;
      this.y += this.vy;
      // Update health or not
      // this.health = this.health - this.healthLossPerMove;
      // this.health = constrain(this.health, 0, this.maxHealth);
      // Handle wrapping
      this.handleWrapping();
    } else {
      // Set velocity via noise()
      this.vx = map(noise(this.tx), 0, 1, -this.speed, this.speed);
      this.vy = map(noise(this.ty), 0, 1, -this.speed, this.speed);
      // Update position
      this.x += this.vx;
      this.y += this.vy;
      // Update time properties
      this.tx += 0.0000000001;
      this.ty += 0.0000000001;
      // Handle wrapping
      this.handleWrapping();
    }
  }

  // handleWrapping
  //
  // Checks if the cells have gone off the canvas and
  // wraps it to the other side if so
  handleWrapping() {
    // Off the left or right
    if (this.x < 0) {
      this.x += width;
    } else if (this.x > width) {
      this.x -= width;
    }
    // Off the top or bottom
    if (this.y < 0) {
      this.y += height;
    } else if (this.y > height) {
      this.y -= height;
    }
  }

  // handleEating
  //
  // Takes a Prey object as an argument and checks if the predator
  // overlaps it. If so, reduces the prey's health and increases
  // the predator's. If the prey dies, it gets reset.
  handleEating(cell) {
    // Calculate distance from this predator to the prey
    let d = dist(this.x, this.y, cell.x, cell.y);
    // Check if the distance is less than their two radii (an overlap)
    if (d < this.radius + cell.radius && cell.health > 0) {
      if (this.radius > cell.radius) {
        // Increase predator health and constrain it to its possible range
        this.health += this.healthGainPerEat;
        this.health = constrain(this.health, 0, this.maxHealth);
        preyEatenMusic.play();
        // Decrease prey health by the same amount
        cell.health -= this.healthGainPerEat;
        // Check if the prey died and reset it if so
        if (cell.health < 0) {
          this.radius = this.radius + cell.radius;
          // player.radius++;
        }
      } else {
        //Decrease predator health
        this.health -= this.healthGainPerEat;
        this.health = constrain(this.health, 0, this.maxHealth)
        cell.health = constrain(cell.health, 0, cell.maxHealth);
        //Increase prey health
        cell.health += this.healthGainPerEat;
        //check if the player died
        if (player.health <= 0) {
          currentScene = gameOverScene;
          console.log("eaten")
        }
      }
    }
  }
  // display
  //
  // Draw the predator as an ellipse on the canvas
  // with a radius the same size as its current health.
  display() {
    if (this.health > 0) {
      push();
      noStroke();
      image(this.avatar, this.x, this.y, this.radius, this.radius);
      this.radius = this.health;
      // ellipse(this.x, this.y, this.radius * 2);
      pop();
    }
  }

  reset() {
    // Random position
    this.x = 100;
    this.y = 100;
    // Default health
    this.health = this.maxHealth;
    // Default radius
    this.radius = this.health;
  }
}
