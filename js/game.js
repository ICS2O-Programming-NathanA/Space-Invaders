/* global Phaser */

// Created by Nathan Araujo
//Created on June 1 2022
//Phaser 3 config file

import SplashScene from './splashSceen.js'

// Game scene
const splashScene = new SplashScene()

/*Game scene*/
const config = {
type: Phaser.AUTO,
width: 1920,
height: 1080,
physics: {
default: 'arcade',
arcade: {
debug: true
}
},
  //Sets background color
backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    //we place it in the middle of the page
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)


// load scenes
// NOTE: remember any "key" is gloabal and CAN NOT be resued
game.scene.add('splashScene', splashScene)

// start scene
game.scene.start('splashScene')