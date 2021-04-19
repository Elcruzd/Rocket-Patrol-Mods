class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load menu background
        this.load.image('menu', './assets/menubackground.jpg');
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion5.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot7.wav');
        // load background audio
        this.load.audio('bm', './assets/Default.wav');
    }

    create() {
        // place menu background
        this.add.image(0, 0, 'menu').setOrigin(0, 0);

        // menu text configuration
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3b141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // show menu text
        // this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
        // this.add.text(game.config.width/2, game.config.height/2, 'Use ← → arrows to move & (F) to fire', menuConfig).setOrigin(0.5);
        // menuConfig.backgroundColor = '#ffffff';
        // menuConfig.color = '#000';
        // this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);
        
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            // easy mode
            game.settings = {
                spaceshipSpeed: 1,
                gameTimer: 60000
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }
        if(Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // hard mode
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 45000
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }
        // if(Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
        //     // hard mode
        //     game.settings = {
        //         spaceshipSpeed: 4,
        //         gameTimer: 45000
        //     }
        //     this.sound.play('sfx_select');
        //     this.scene.start('playScene');
        // }
        // if(Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
        //     // hard mode
        //     game.settings = {
        //         spaceshipSpeed: 4,
        //         gameTimer: 45000
        //     }
        //     this.sound.play('sfx_select');
        //     this.scene.start('playScene');
        // }
    }
}

// init() prepares any data for the scene
// preload() prepares any assets we'll need for the scene
// create() adds objects to the scene