class InstructionsState extends Scene {
  constructor() {
    super();
  }

  draw() {
    background(bgImage);
    // Here we would draw the instructions on the screen
    console.log("Instructions")
    textFont();
    textSize(50);
    textAlign(CENTER,CENTER);
    noStroke();
    //cloud blue
    fill("#D8EDF2");
    text("Don't get eaten!",windowWidth / 2, windowHeight / 2 - 20);
    textSize(30);
    text("Click to play",windowWidth / 2, windowHeight / 2 + 60);

  }

  mousePressed() {
    currentScene = playScene;
  }
}
