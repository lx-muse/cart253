//This is where we give the keyboard it's properties and conditions

class Keyboard {
  constructor(x,y,w,h, keyboardImage) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.keyboardImage = keyboardImage;
      //let variables for keys
    this.d = false;
    this.g = false;
    this.p = false;
    this.r = false;

  }

  draw() {
    //here in draw because we want it every frame
    imageMode(CORNER);
    image(this.keyboardImage, this.x, this.y, this.w, this.h);
    //key list on the right side
    image(ctrlVertical,900,0,200,1100);

    // key toggle feedbacks
    let squareD = new Square(270,749,50,50);
    if(this.d === true){
      squareD.display();
    }
    // G controls Ghost
    let squareG = new Square(390,749,50,50);
    if(this.g === true){
      squareG.display();
    }
    // P/S controls Play/Stop
    let squareP = new Square(679,690,50,50);
    if(this.p === true){
      squareP.display();
    }
    let squareS = new Square(209,749,50,50);
    if(this.s === true){
      squareS.display();
    }
    //R controls Rain
    let squareR = new Square(313,690,50,50);
    if(this.r === true){
      squareR.display();
    }

  }

  //here we check which key is pressed
  keyPressed(){

    if(keyCode === 68) {
      this.d = !this.d;
    }
    if(keyCode === 71) {
      this.g = !this.g;
    }
    if(keyCode === 80) {
      this.p = !this.p;
    }
    if(keyCode === 83) {
      this.s = !this.s;
    }
    if(keyCode === 82) {
      this.r = !this.r;
    }

  }

}
