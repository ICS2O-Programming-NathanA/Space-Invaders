/* Global Phaser */

// Nathan Araujo All rights reserved
// Created by Nathan Araujo
// Created on June 3 2022
// This is the Title Scene

class TitleScene extends Phaser.Scene {
  //Creates a new object that get called with the key "titleScene"
  constructor () {
    super({ key: "titleScene" })

    this.titleSceneBackgroundImage = null
    //Holds text
    this.titleSceneText = null
    this.titleSceneTextStyle = { font: '200px Times', fill: '#00000', align: 'center'}
  }
  
  //Sets up the base state of the scene
  init (data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }
  
  //Loads data before processing / displaying it to the user
  preload () {
    console.log("Title Scene")
    this.load.image('titleSceneBackground', 'assets/spaceInvaders-TitleScreen.jpg')
  }

  //displays the content to the user
  create (data) {
    //Centers image on the Screen
    this.titleSceneBackgroundImage =   this.add.sprite(0, 0, 'titleSceneBackground').setScale(1.5)
    this.titleSceneBackgroundImage.x = 1920 / 2
    this.titleSceneBackgroundImage.y = 1080 / 2

    //Displays Text
    this.titleSceneText = this.add.text(1920 / 2, (1080 / 2) + 350, 'Space Invaders', this.titleSceneTextStyle).setOrigin(0.5)
  }
  
  update (time, delta) {
    if (time > 6000) {
      this.scene.switch("menuScene")
    }
  }
}

export default TitleScene