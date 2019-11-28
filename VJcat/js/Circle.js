class Circle extends Shape {
  constructor(x,y,size, fillColor) {
    super(x,y);
    this.size = size;
    this.fillColor = fillColor;
  }

  update() {
    super.update();
    this.size += random(-5,5)
    // make sure += not just =
  }

  display() {
    push();
    this.fillColor = fill("#2e004f");
    noStroke();
    ellipse(this.x,this.y,this.size,this.size);
    pop();
  }
}
