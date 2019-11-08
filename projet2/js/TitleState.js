class TitleState extends Scene {
  constructor() {
    super();
  }

  draw() {
    background(bgImage);
    // Here we would draw the title on the screen
    console.log("Title")
    textFont();
    textSize(50);
    textAlign(CENTER,CENTER);
    noStroke();
    //cloud blue
    fill("#D8EDF2");
    text("Osmosis Simulation", windowWidth / 2, windowHeight / 2 -20);
    textSize(30);
    text("Click for instructions", windowWidth / 2, windowHeight / 2 + 60);


  }

  mousePressed() {
    // state and instructionsScene are global variables defined in the main script
    // and we use them to change the current state of the program
    // so this will switch the state to the instructions
    currentScene = instructionsScene;
  }
}
