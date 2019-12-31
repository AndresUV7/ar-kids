import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  isLoaded = false;

  loaded($event){
    this.isLoaded = true;
  }
  
  constructor() { }

  ngOnInit() {
  }


}


