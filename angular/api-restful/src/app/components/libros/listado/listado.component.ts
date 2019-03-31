import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../../services/libros.service';


@Component({
  selector: 'app-libros',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.sass']
})
export class ListadoComponent implements OnInit {

  libros: any[];

  constructor(private librosService: LibrosService) { }

  ngOnInit() {
    this.libros = this.librosService.getLibros();
  }

}
