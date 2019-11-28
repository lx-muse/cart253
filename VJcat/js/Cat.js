class Cat {

  constructor(x,y,speed,w,h, keyboardImage) {
    // Position
    this.x = x;
    this.y = y;
    // Velocity and speed
    this.vx = 0;
    this.vy = 0;
    this.speed = catSpeed;
    // Time properties for noise() function
    this.tx = random(0, 1000); // To make x and y noise different
    this.ty = random(0, 1000); // we use random starting values
    // Display
    this.w = w;
    this.h = h;
    this.catImage = catImage;
  }

  display() {
    //here in draw because we want it every frame
    image(this.catImage, this.x, this.y, this.w, this.h);
    catImage.play;
  }

  move(){
    console.log("cat move");
    // Set velocity via noise()
    this.vx = map(noise(this.tx), 0, 1, -this.speed, this.speed);
    this.vy = map(noise(this.ty), 0, 1, -this.speed, this.speed);
    // Update position
    this.x += this.vx;
    this.y += this.vy;
    // Update time properties
    this.tx += 0.01;
    this.ty += 0.01;
    // Lock him to the keyboard

    this.handleBouncing();

  }
handleBouncing(){
  if (this.x < 0 || this.x > width) {
    // It hit so reverse velocity
    this.vx = -this.vx;
  }

  if (this.y < 600 || this.y > 900) {
    // It hit so reverse velocity
    this.vy = -this.vy;
  }

}


}
