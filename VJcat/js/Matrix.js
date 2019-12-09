//adapted from purple rain challenge from The Coding Train https://youtu.be/KkyIDI6rQJI
class Matrix {
  //rain drops
  constructor(rainX, rainY, rainSpeed) {
    this.rainX = random(0,1100);
    this.rainY = random(0,100);
    this.rainSpeed = random(4, 10);
  }

  fall() {
    this.rainY += this.rainY + this.rainSpeed;
    if ( this.rainY > 900){
      this.rainY = random(0,100);
      this.rainSpeed = random(4, 10);
    }
  }
  display() {
    //purple rose. 20px long
    stroke("#5E2D79");
    line(this.rainX, this.rainY, this.rainX, this.rainY +20);
  }
}
