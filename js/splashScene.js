/* global Phaser */

// Copyright (c) 2022 Nathan Araujo All rights reserved
//
// Created by: Nathan Araujo
// Created on: June 1 2022
// This is the Splash Scene

//This clas is the Splash Scene.
class SplashScene extends Phaser.Scene {
  //This method is the constructor
  constructor () {
    super({ key: 'splashScene' })
  }
  //This method is aclled bu the Scene Manager when the scene starts, befroe preload and create
  init (data) {
    //color is black
    this.cameras.main.setBackgroundColor('#ffffff')
  }
  //Use it to laod assets
  preload () {
    console.log("Splash Scene")
    this.load.image("splashSceneBackground", "./assets/splashSceneImage.png")
  }
  // Use it to create games objects
  create (data) {
    this.splashSceneBackgroundImage = this.add.sprite(0, 0, "splashSceneBackground")
    this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.y = 1080 / 2
  }
  //This method is aclled once pergame step while the scene is running
  update (time, delta) {
    if (time > 3000) {
      this.scene.switch("titleScene")
    }
  }
}

export default SplashScene