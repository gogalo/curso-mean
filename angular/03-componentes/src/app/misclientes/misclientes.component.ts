import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/Cliente';

@Component({
  selector: 'app-misclientes',
  templateUrl: './misclientes.component.html',
  styleUrls: ['./misclientes.component.css']
})
export class MisclientesComponent implements OnInit {

  clientes: Cliente[];
  nombre: string;
  direccion: string;
  
  constructor() { }

  ngOnInit() {
    this.iniciarClientes();
  }

  iniciarClientes() {
    this.clientes = [];

    for (let index = 1; index < 4; index++) {
      let cliente = new Cliente('cliente ' + index, 'direccion ' + index);
      this.clientes.push(cliente);
    }
  }

  add() {
    let cliente = new Cliente(this.nombre, this.direccion);
    this.clientes.push(cliente);
    this.resetForm();
  }

  resetForm() {
    this.nombre = "";
    this.direccion = "";
  }

}
