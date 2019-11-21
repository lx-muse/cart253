class Keyboard {
  constructor(x,y,w,h, keyboardImage) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.keyboardImage = keyboardImage;
  }

  preload() {

  }


  draw() {
    imageMode(CORNER);
    image(this.keyboardImage, this.x, this.y, this.w, this.h);
    //key codes on the right side
    image(ctrlVertical,900,0,200,1100);

  }

  handleInput(){


  }

}
