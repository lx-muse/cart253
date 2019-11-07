class PlayState extends Scene {
  constructor() {
    super();
  }

  draw() {
    // Here we would draw the game on the screen
    background(bgImage);
    console.log("Play")
    // text("THE GAME IS ON!",0,0);
    textFont();
    textSize(15);
    textAlign(CENTER,LEFT);
    noStroke();
    fill("#D8EDF2");
    text("if you click, the game restarts!", windowWidth -200, 40);

    //Here is where the game starts
    // Handle input for the player
    player.handleInput();

    // Move the player
    player.move();

    // For the prey we need to use a loop to go through each
    // Prey object in the array (note the use of prey.length to automatically
    // get the length of the array, so we only count through exactly what's there)
    for (let i = 0; i < prey.length; i++) {
      // ... and tell it to move. Note the use of "i" to give the address/location
      // in the array of the specific Prey element we want to "talk to"
      // Note: our prey wont reset
      if (prey[i].health > 0) {
        prey[i].move();
        // Because the player could eat any Prey object in the array, we need to
        // do the same kind of loop again for handleEating...
        player.handleEating(prey[i]);
        // And again we ask prey[i] to display itself because i gives us the current
        // element we are counting through in the loop
        prey[i].display();
      }
    }

    // Because Osmosis happens to anyone  in the game, we need a
    // loop again for the prey'shandleEating...
    for (let i = 0; i < prey.length; i++) {
      // Then make sure everyone's eating is checked
      for (let j = i; j < prey.length; j++) {

        if (i !== j) {
          // Again, we refer to prey[i] to get the current Prey object as we
          // count through the array one by one
          prey[i].handleEating(prey[j]);

        }
      }

      // Display the tiger
      player.display();
  }


  }

  mousePressed() {
    currentScene = titleScene;
    player.reset();

  }
}
