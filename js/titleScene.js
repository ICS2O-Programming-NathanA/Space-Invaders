/* Global Phaser */

// Nathan Araujo All rights reserved
// Created by Nathan Araujo
// Created on June 3 2022
// This is the Title Scene

class TitleScene extends Phaser.Scene {
  //Creates a new object that get called with the key "titleScene"
  constructor () {
    super({ key: "titleScene" })
  }
  
  //Sets up the base state of the scene
  init (data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }
  
  //Loads data before processing / displaying it to the user
  preload () {
    console.log("Title Scene")
  }
  
  create (data) {
  }
  
  update (time, delta) {
  }
}

export default TitleScene