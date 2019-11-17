class InstructionsState extends Scene {
  constructor() {
    super();
  }

// Do I need to create my new keyboard in a setup() here >   ?




  draw() {
    background(bgImage);
    // Here we draw the instructions on the screen
    console.log("Instructions")
    textFont();
    textSize(50);
    textAlign(CENTER,CENTER);
    noStroke();
    //Indigo monochromatic : #2e004f
    push();
    fill("#2E0854");
    text("This is your console",windowWidth / 2, windowHeight / 2 - 20);
    pop();
    push();
    fill("#2e004f");
    textSize(30);
    //Tell the user what's up
    text("Controls list\n" + "ctrl placeholder\n" + "ctrl placeholder\n" + "ctrl placeholder\n",windowWidth / 2, windowHeight / 2 + 60);
    pop();
    //Start drawing the keyboard at the bottom left of the screen

  }

  mousePressed() {
    currentScene = playScene;
  }
}
