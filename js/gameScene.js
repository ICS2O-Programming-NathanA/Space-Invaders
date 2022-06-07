/* Global Phaser */

// Nathan Araujo All rights reserved
// Created by Nathan Araujo
// Created on June 3 2022
// This is the Game Scene

class GameScene extends Phaser.Scene {
  //Creates a new object that get called with the key "gameScene"
  constructor () {
    super({ key: "gameScene" })

    this.background = null
    this.ship = null
    this.fireMissile = false
  }
  
  //Sets up the base state of the scene
  init (data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }
  
  //Loads data before processing / displaying it to the user
  preload () {
    console.log("Game Scene")

    //images
    this.load.image('spaceinvaders-background', 'assets/spaceinvaders-background.png')

    //SpaceShip
    this.load.image('ship', 'assets/spaceinvaders-shooter.png')

      //missle
    this.load.image('missile', 'assets/missile.png')
  }
  
  //displays the content to the user
  create (data) {
    this.background = this.add.image(0, 0, 'spaceinvaders-background').setScale(3.0)
    this.background.setOrigin(0, 0)

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, 'ship')

    //creates a group for the missiles
    this.missileGroup = this.physics.add.group()
  }
  
  update (time, delta) {

    //Check if left arrow key is pressed
    const keyLeftObj = this.input.keyboard.addKey('LEFT')
    
    //Check if right arrow key is pressed
    const keyrightObj = this.input.keyboard.addKey('RIGHT')
    
    //Check if spacebar is pressed
    const keyspaceObj = this.input.keyboard.addKey('SPACE')

    //Moving the ship to the left if the left arrow key is pressed
    if (keyLeftObj.isDown === true) {
      this.ship.x -= 5
      if (this.ship.x < 0) {
        this.ship.x = 0
      }
    }
    //Moving the ship to the right if the right arrow key is pressed
    if (keyrightObj.isDown === true) {
      this.ship.x += 5
      if (this.ship.x > 1920) {
        this.ship.x = 1920
      }
    }

    //Fire missile if the spacebar is pressed
    if (keyspaceObj.isDown === true) {
      if (this.fireMissile === false) {
        //fire missile
        this.fireMissile = true
        const aNewMissile = this.physics.add.sprite(this.ship.x, this.ship.y, 'missile')
        this.missileGroup.add(aNewMissile)
      }
    }


    if (keyspaceObj.isUp === true) {
      this.fireMissile = false
    }
  }
}

export default GameScene 