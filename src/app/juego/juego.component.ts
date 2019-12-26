import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';
let WIDTH = (window.innerWidth > 0) ? window.innerWidth : screen.width;
let HEIGHT = (window.innerHeight > 0) ? window.innerHeight : screen.height;
class NewScene extends Phaser.Scene {

  
  constructor() {
    super({ key: 'new' });
  }

  preload() {
    // console.log('enter preload');
    this.load.image("pajaro","/ar-kids/assets/img/bird.png");
  }

  create() {
    // console.log('enter create');
    let pajaro=this.add.image(50,100,"pajaro").setInteractive();

    this.input.setDraggable(pajaro);

    this.input.on('dragstart', function (pointer, gameObject) {

      this.children.bringToTop(gameObject);

    }, this);

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
  
        gameObject.x = dragX;
        gameObject.y = dragY;
  
    });
    }

  update(time, delta){
    console.log(delta);
    WIDTH = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    HEIGHT = (window.innerHeight > 0) ? window.innerHeight : screen.height;
    this.scale.setGameSize(WIDTH,HEIGHT)
  }

}

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;

  constructor() {
    this.config = {
      type: Phaser.AUTO,
      scene: [ NewScene ],
      physics: {
        default: 'arcade',
      },
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: 'gameContainer',
        width: WIDTH,
        height: HEIGHT,
      }
    };
 
  }

  ngOnInit() {
    this.phaserGame = new Phaser.Game(this.config);

    
  }

}
