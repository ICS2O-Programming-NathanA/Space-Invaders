/* Global Phaser */

// Nathan Araujo All rights reserved
// Created by Nathan Araujo
// Created on June 3 2022
// This is the Menu Scene

class MenuScene extends Phaser.Scene {
  //Creates a new object that get called with the key "menuScene"
  constructor () {
    super({ key: "menuScene" })

    this.menuSceneBackgroundImage = null
    this.startButton = null
  }
  
  //Sets up the base state of the scene
  init (data) {
    this.cameras.main.setBackgroundColor("#ffffff")
  }
  
  //Loads data before processing / displaying it to the user
  preload () {
    console.log("Menu Scene")
    this.load.image('menuSceneBackground', 'assets/SpaceInvadersMenu.png')
    this.load.image('play-button', 'assets/play-button.png')
  }

  //displays the content to the user
  create (data) {
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, 'menuSceneBackground').setScale(2.8)
    this.menuSceneBackgroundImage.x = 1920 / 2
    this.menuSceneBackgroundImage.y = 1080 / 2

    //Button
    this.startButton = this.add.sprite(1920 / 2, (1080 / 2) + 300, 'play-button')
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on('pointerdown', () => this.clickButton ())
  }
  
  update (time, delta) {
  }

  //Clickbutton function
  clickButton () {
    this.scene.start('gameScene')
  }
}

export default MenuScene