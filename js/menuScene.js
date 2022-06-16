/* Global Phaser */

// Copyright (c) 2022 Mr Coxall All rights reserved
//
//Modified by Nathan Araujo
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
    this.load.image('Instructions', 'assets/Instructions.png')
    this.load.image('singlePlayer', 'assets/single_player.png')
    this.load.image('twoPlayer', 'assets/two_player.png')
  }

  //displays the content to the user
  create (data) {
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, 'menuSceneBackground').setScale(2.8)
    this.menuSceneBackgroundImage.x = 1920 / 2
    this.menuSceneBackgroundImage.y = 1080 / 2

    //Button - single player
    this.startButton = this.add.sprite(1920 / 2, (1080 / 2) + 100, 'singlePlayer')
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on('pointerdown', () => this.clickButton ())

    //Button - two player
    this.startButton = this.add.sprite(1920 / 2, (1080 / 2) + 300, 'twoPlayer')
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on('pointerdown', () => this.clickButton1 ())
  
  
    //Button - Instructions
    this.startButton = this.add.sprite(1920 / 2, (1080 / 2) + 500, 'Instructions')
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on('pointerdown', () => this.clickButton2 ())
  }
  
  update (time, delta) {
  }

  //Clickbutton function
  clickButton () {
    this.scene.start('gameScene')
  }
  
  //Clickbutton function
  clickButton1 () {
    this.scene.start('gameSceneTwo')
  }

  //Clickbutton function
  clickButton2 () {
    this.scene.start('instructionScene')
  }
}

export default MenuScene