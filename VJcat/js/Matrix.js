class Matrix {
  //rain drops
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = 10;
  }
  fall() {
    console.log("matrix update");
    this.y === this.y + this.speed;
  }
  display() {
    //purple rose
    stroke("#5E2D79");
    line(this.x, this.y, this.x, this.y+10);
  }
}


//adapted from urple rain challenge from The Coding Train https://youtu.be/KkyIDI6rQJI
