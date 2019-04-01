import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condicionales',
  templateUrl: './condicionales.component.html',
  styleUrls: ['./condicionales.component.css']
})
export class CondicionalesComponent implements OnInit {

  contenido: string;
  mostrar: boolean;
  textoBoton: string;

  constructor() { 
  }

  ngOnInit() {
    this.contenido = "Incididunt laborum incididunt aliqua ullamco consectetur elit non consequat laborum occaecat. Commodo veniam et consectetur eiusmod mollit. Elit deserunt elit Lorem in magna. Proident commodo eiusmod tempor consectetur anim occaecat commodo dolor veniam duis. Officia velit dolore excepteur amet proident tempor ipsum. Occaecat quis non anim amet ipsum deserunt aliqua ullamco anim in.";
    this.mostrar = true;
    this.textoBoton = (this.mostrar) ? "Ocultar" :  "Mostrar";
  }

  cambiarEstado() {
    this.mostrar = !(this.mostrar);
    this.setTextoBoton();
  }

  setTextoBoton() {
    this.textoBoton = (this.mostrar) ? "Ocultar" :  "Mostrar";
  }

}
