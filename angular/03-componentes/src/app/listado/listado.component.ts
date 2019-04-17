import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  cadenas: string[];
  cadena: string;

  constructor() { 
    this.cadenas = [
      'Consectetur nulla voluptate sit labore officia.',
      'Ad sint quis incididunt non minim ea cupidatat',
      'adipisicing qui.',
      'Fugiat sint deserunt nisi duis cupidatat exercitation Lorem.',
    ];
  }

  ngOnInit() {
  }

  add() {
    this.cadenas.push(this.cadena);
    this.cadena = "";
  }

}
