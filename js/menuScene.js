/* Global Phaser */

// Nathan Araujo All rights reserved
// Created by Nathan Araujo
// Created on June 3 2022
// This is the Menu Scene

class MenuScene extends Phaser.Scene {
  //Creates a new object that get called with the key "titleScene"
  constructor () {
    super({ key: "menuScene" })
  }
  
  //Sets up the base state of the scene
  init (data) {
    this.cameras.main.setBackgroundColor("000000")
  }
  
  //Loads data before processing / displaying it to the user
  preload () {
    console.log("Menu Scene")
  }
  
  create (data) {
  }
  
  update (time, delta) {
  }
}

export default MenuScene