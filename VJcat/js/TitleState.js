class TitleState extends Scene {
  constructor() {
    super();
  }

  draw() {
    background(bgImage);
    // Here we draw the title on the screen
    console.log("Title");
    textFont();
    textSize(50);
    textAlign(CENTER,CENTER);
    noStroke();
    //Indigo monochromatic : #2e004f
    fill("#2E0854");
    text("VJcat beta", width / 2, height / 2 -20);
    textSize(30);
    text("Click for instructions", width / 2, height / 2 + 60);


  }

  mousePressed() {
    // state and instructionsScene are global variables defined in the main script
    // and we use them to change the current state of the program
    // so this will switch the state to the instructions
    currentScene = instructionsScene;
  }
}
