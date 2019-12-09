//adapted from purple rain coding challenge #4 from https://youtu.be/KkyIDI6rQJI
class Matrix {
  //rain drops
  constructor(rainX, rainY, rainSpeed) {
    this.rainX = random(0,1100);
    this.rainY = random(0,100);
    this.rainSpeed = random(0.0000004,0.4);
    this.length = random(5,25);
  }

  fall() {
    //the spped of the animation in variables
    this.rainY += this.rainY + this.rainSpeed;
    this.rainSpeed + 1;

    if ( this.rainY > 900){
      this.rainY = random(0,100);
    }
  }
  display() {
    //purple rose. 20px long
    stroke("#5E2D79");
    line(this.rainX, this.rainY, this.rainX, this.rainY + this.length);
  }
}
