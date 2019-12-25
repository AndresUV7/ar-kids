import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';

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
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: 'gameContainer',
        width: 1024,
        height: 768,
      }
    };
 
  }

  ngOnInit() {
    this.phaserGame = new Phaser.Game(this.config);

    
  }

}
