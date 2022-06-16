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
    anAlien.body.velocity.y = 100
    anAlien.body.velocity.x = alienXVelocity

    this.alienGroup.add(anAlien)
    
  }
   
  //Creates a new object that get called with the key "gameScene"
  constructor () {
    super({ key: "gameScene" })

    this.background = null
    this.ship = null
    this.fireMissile = false
    this.score = 0
    this.scoreText = null
    this.scoreTextStyle = { font: '65px Arial', fill: '#ffffff', align: 'center'}

    //game over text variable
    this.gameOverText = null
    this.gameOverTextStyle = {font: '65px Arial', fill: '#ff0000', align: 'center'}

    // game win text variable
    this.gameWinText = null
    // game over text variable styling
    this.gameWinTextStyle = { font: '65px Arial', fill: '#ff0000', align: 'center' }
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

    //homebutton
    this.load.image('homeButton', 'assets/home-button.png')
    
    //sound for missile
    this.load.audio('laser', 'sounds/invaderkilled.wav')

    //sound for alien being destroyed
    this.load.audio('explosion', 'sounds/shoot.wav')

    //sound for ship being destroyed
    this.load.audio('boom', 'sounds/explosion.wav')

    //sound for winning the game
    this.load.audio('gameWin', 'sounds/game-win.mp3')
  }
  //displays the content to the user
  create (data) {
    //centers background
    //centers text
    this.background = this.add.image(0, 0, 'spaceinvaders-background').setScale(3.0)
    this.background.setOrigin(0, 0)

    this.scoreText = this.add.text(10, 10, 'Score: ' + this.score.toString(), this.scoreTextStyle)

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, 'ship')

    // create home button
    this.homeButton = this.add.sprite(1750, (1080 / 7) + 1, 'homeButton').setScale(2)
    this.homeButton.setInteractive({ useHandCursor: true })
    this.homeButton.on('pointerdown', () => this.scene.start('menuScene', this.score = 0))

    //creates a group for the missiles
    this.missileGroup = this.physics.add.group()

    //creates a group for the aliens
    this.alienGroup = this.add.group()
    this.createAlien()

    //Collisons between missiles and aliens
    this.physics.add.collider(this.missileGroup, this.alienGroup, function (missileCollide, alienCollide) {
      //destroys alien and missile
      alienCollide.destroy()
      missileCollide.destroy()
      // explosion sound on contact
      this.sound.play('explosion')
      //add 1 point to the score
      this.score = this.score + 1
      this.scoreText.setText('Score: ' + this.score.toString())
      //creates 2 new aliens
      this.createAlien()
      this.createAlien()
    // end game if 50 points is reached
    if (this.score >= 40) {
      // pause physics to stop new enemies from spawning
      this.physics.pause()
      // play win sound
      this.sound.play('gameWin')
      //destroy alien 
      alienCollide.destroy()
      // display and style win text
      this.gameWinText = this.add.text(1920 / 2, 1080 / 2, 'You won!\nClick to play again.', this.gameWinTextStyle).setOrigin(0.5)
      // make game win text clickable to take you back to gameScene
      this.gameWinText.setInteractive({ useHandCursor: true })
      this.gameWinText.on('pointerdown', () => this.scene.start('gameScene', this.score = 0))
    }
      }.bind(this))

      // collisions between ship and alien
      this.physics.add.collider(this.ship, this.alienGroup, function (shipCollide, alienCollide) {
        // explosion sound on contact
        this.sound.play('boom')
        // pause physics to stop new enemies for spawning
        this.physics.pause()
        // destroy cannon on contact with ant
        alienCollide.destroy()
        shipCollide.destroy()
        // set score to 0 score on contact
        this.score = this.score * 0
        // display game over text
        this.gameOverText = this.add.text(1920 / 2, 1080 / 2, 'Game Over!\nClick to play again.', this.gameOverTextStyle).setOrigin(0.5)
        this.gameOverText.setInteractive({ useHandCursor: true })
        this.gameOverText.on('pointerdown', () => this.scene.start('gameScene'))
      }.bind(this))
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
      this.ship.x -= 10
      if (this.ship.x < 0) {
        this.ship.x = 1920
      }
    }
    //Moving the ship to the right if the right arrow key is pressed
    if (keyrightObj.isDown === true) {
      this.ship.x += 10
      if (this.ship.x > 1920) {
        this.ship.x = 0
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
      item.y = item.y - 8
      if (item.y < 0) {
        item.destroy()
      }
    })

    this.alienGroup.children.each(function (item) {
      if (item.y > 1080 || item.x < 0 || item.x > 1920) {
        item.y = -5
        const alienXLocationCord = Math.floor(Math.random() * 1920) + 1
        item.x = alienXLocationCord
      }
    })
  }
}

export default GameScene 