class InstructionsState extends Scene {
  constructor() {
    super();
  }

  draw() {
    background(bgImage);
    //Ambiant background
      let matrix = new Matrix (width/2, 0, 10);
    matrix.display();
    matrix.fall();


    // Here we draw the instructions on the screen
    console.log("Instructions")
    textFont();
    textSize(50);
    textAlign(CENTER,CENTER);
    noStroke();
    //Indigo monochromatic : #2e004f
    push();
    fill("#2E0854");
    text("Try stuff, see what happens", width / 2, height / 2 - 100);
    pop();
    push();
    fill("#2e004f");
    textSize(30);
    //Tell the user what's up
    text("Controls list\n" + "D\n" + "G\n",width / 2, height / 2 + 60);
    pop();
    //Start drawing the keyboard at the bottom left of the screen

  }

  mousePressed() {
    currentScene = playScene;
  }
}
