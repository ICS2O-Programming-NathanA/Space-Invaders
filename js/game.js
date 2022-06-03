/* global Phaser */

// Copyright (c) 2022 Nathan Araujo All rights reserved
//
// Created by Nathan Araujo
//Created on June 1 2022
//Phaser 3 config file

//imports the scenes
import SplashScene from "./splashScene.js"

// create the scenes
const splashScene = new SplashScene()

/**
  * Start Phaser Game. 
  */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
  },
},
  //Sets background color to grey
  backgroundColor: 0xFFFFFF,
  scale: {
    mode: Phaser.Scale.FIT,
    //centers the image in the middle of the screen
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
}

const game = new Phaser.Game(config)
console.log(game)

// load scenes
// NOTE: remember any "key" is gloabal and CAN NOT be resued
game.scene.add('splashScene', splashScene)

// the start scene
game.scene.start('splashScene')
