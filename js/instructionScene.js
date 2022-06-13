/* global phaser */

// Copyright (c) 2020 Mr Coxall All rights reserved
// Modified 2022 Rory Mackay
//
// Created by: Rory Mackay
// Date: June 2022
// This is an instruction scene

class InstructionScene extends Phaser.Scene {
  constructor () {
    super({ key: 'instructionScene' })
    // creates variable for instruction scene backround image
    this.instructionSceneBackgroundImage = null

    // creates variable for back button
    this.backButton = null
  }
  
// set instruction scene background colour
  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }
  
  preload () {
    // log 'Instruction Scene' to console
    console.log('Instruction Scene')
    // load background image
    this.load.image('instructionSceneBackground', './assets/space-instructions.png')
    // load back button image
    this.load.image('backButton', './assets/back.png')
  }
  
  create (data) {
    // create instruction scene backround image
    this.instructionSceneBackgroundImage = this.add.sprite(0, 0, 'instructionSceneBackground').setScale(1.5)
    // cemter background image
    this.instructionSceneBackgroundImage.x = 1920 / 2
    this.instructionSceneBackgroundImage.y = 1080 / 2

    // create back button
    this.backButton = this.add.sprite(100, 100, 'backButton').setScale(0.37)
    // execute clickButtonBack function on button clicked
    this.backButton.setInteractive({ useHandCursor: true })
    this.backButton.on('pointerdown', () => this.clickButtonBack())
  }
  
  // update time
  update (time, delta) {
  }
  // switch to menuScene and play button sound on back button clicked
  clickButtonBack () {
    this.scene.start('menuScene')
  }
}

export default InstructionScene