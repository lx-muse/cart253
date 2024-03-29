//This is where we give the cat it's properties and actions
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
    this.catImage2 = catImage2;
  }

  display() {
    //here in draw because we want it every frame + calling letter G
    if(keyCode !== 71) {
      image(this.catImage, this.x, this.y, this.w, this.h);
      catImage.play;
    }else{
      image(this.catImage2, this.x, this.y, this.w, this.h);
      catImage2.play;
    }
  }

  move(){
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
    if ((this.x < 0) || (this.x > 1100)) {
      // It hit so reverse velocity
      this.vx = -this.vx;
    }

    if ((this.y < 600) || (this.y > 900)) {
      // It hit so reverse velocity
      this.vy = -this.vy;
    }

  }

  // handleKey(square) {
  //   // Calculate distance from this "predator to the prey"
  //   let d = dist(this.x, this.y, square.size, square.size);
  //   // Check if the distance is less than their two radii (an overlap)
  //   if (d < this.w + square.size) {
  //     // trigger the key
  //     square.display === true;
  //   }
  // }



}
