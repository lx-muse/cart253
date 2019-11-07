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
    fill("#D8EDF2");
    text("Become the biggest!",windowWidth / 2, windowHeight / 2 - 20);
    textSize(30);
    text("Click to play",windowWidth / 2, windowHeight / 2 + 60);

  }

  mousePressed() {
    currentScene = playScene;
  }
}
