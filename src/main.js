/* 
** Name: Zhendong Jiang
** Porject: Rocket Patrol Mods
** Date: April 16, 2021
** 
** Track a high score that persists across scenes and display it in the UI (5)
** Implement the 'FIRE' UI text from the original game (5)
** Display the time remaining (in seconds) on the screen (10)
** Create new artwork for all of the in-game assets (rocket, spaceships, explosion) (20)
** Implement mouse control for player movement and mouse click to fire (20)
*/

// game configuration
let config = {
    type: Phaser.CANVAS,
    width: 648,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 20;
let borderPadding = borderUISize / 3;
let starSpeed = 4;

// reserve keyboard bindings
let keyF, keyR, keyLEFT, keyRIGHT;

// initialize high score
let p1HighScore = 0;