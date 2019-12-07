class Shape {
  constructor(x,y,size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  update() {
    this.x += random(-0.1,0.1);
    this.y += random(-0.1,0.1);
  }
  display() {
    // A generic shape cannot be displayed
    // Must add display() in every children
    console.log("Error! Generic shape cant be display!")
  }
}
