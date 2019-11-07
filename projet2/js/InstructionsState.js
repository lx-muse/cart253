class InstructionsState extends Scene {
  constructor() {
    super();
  }

  draw() {
    // Here we would draw the instructions on the screen
    text("There is nothing to do because this is just an example!",0,0);
    text("Click to play",0,20);

  }

  mousePressed() {
    state = playScene;
  }
}
