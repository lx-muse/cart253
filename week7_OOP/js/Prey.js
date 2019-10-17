class Prey { // A Prey class describes what a Prey is and does
  constructor(x, y, speed, fillColor, radius) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.maxHealth = radius; // Maximum health is the starting radius
    this.health = this.maxHealth; // Must be AFTER defining this.maxHealth
    this.healthLossPerMove = 0.1;
    this.healthGainPerEat = 1;
    this.speed = speed;
    this.fillColor = fillColor;
    this.radius = this.health; // Radius is matched to health
    this.tx = 1;
    this.ty = 1;
    // this.upKey = UP_ARROW;
    // this.downKey = DOWN_ARROW;
    // this.leftKey = LEFT_ARROW;
    // this.rightKey = RIGHT_ARROW;
  }

  move() {
    // Move the predator based on velocity
    // Lose health from movement
    // Wrap at the canvas edges
    this.vx = map(noise(this.tx), 0, 1, -this.speed, this.speed);
    this.vy = map(noise(this.ty), 0, 1, -this.speed, this.speed);

    this.x += this.vx;
    this.y += this.vy;

    this.tx += 0.01;
    this.ty += 0.01;

    this.handlewrapping();
  }


  handleWrapping(){
    if (this.x < 0) {
      this.x += width;
    }
    else if (this.x > width) {
      this.x -= width;
    }
    if (this.y < 0) {
      this.y += height;
    }
    else if (this.y > height) {
      this.y -= height;
    }
  }


  display() {
    // Draw the predator on the canvas. push and pop refer to the drawing setting , save current stetting
    push();
    noStroke();
    fill(this.fillColor);
    this.radius = this.health;
    ellipse(this.x,this.y,this.radius * 2);
    pop();
    }
}

  reset(){
    this.x = random(0,width);
    this.y = random(0,height);
    this.health = maxHealth;
    this.radius = this.health;
  }
