/* Global Phaser */

// Nathan Araujo All rights reserved
// Created by Nathan Araujo
// Created on June 3 2022
// This is the Game Scene

class GameScene extends Phaser.Scene {

  // create an alien
  createAlien () {
    //random number generator
    //this will get a number between 1 and 1920
    const alienXLocation = Math.floor(Math.random() * 1920) + 1
    //this will get a number between 1 and 50
    let alienXVelocity = Math.floor(Math.random() * 50) + 1
    //this will add a minus in 50% of cases
    alienXVelocity *= Math.round(Math.random()) ? 1 : -1
    const anAlien = this.physics.add.sprite(alienXLocation, -100, 'alien')
    anAlien.body.velocity.y = 75
    anAlien.body.velocity.x = alienXVelocity

    this.alienGroup.add(anAlien)
    
  }
   
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

    //missile
    this.load.image('missile', 'assets/rocket-space.png')

    //alien1
    this.load.image('alien', 'assets/space-invaders-enemy1.png')
    
    //sound for missile
    this.load.audio('laser', 'assets/shoot.wav')
  }
  //displays the content to the user
  create (data) {
    this.background = this.add.image(0, 0, 'spaceinvaders-background').setScale(3.0)
    this.background.setOrigin(0, 0)

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, 'ship')

    //creates a group for the missiles
    this.missileGroup = this.physics.add.group()

    //creates a group for the aliens
    this.alienGroup = this.add.group()
    this.createAlien()
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
        //plays laser sound
        this.sound.play('laser')
      }
    }
    //sets firemissile to false
    if (keyspaceObj.isUp === true) {
      this.fireMissile = false
    }

    //creates a function group for the missile group
    this.missileGroup.children.each(function (item) {
      item.y = item.y - 5
      if (item.y < 0) {
        item.destroy()
      }
    })
  }
}

export default GameScene 