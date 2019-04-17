import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultadosService } from '../resultados.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  resultados: any[];
  resultadosApi: Observable<any>;
  mediaPath: string;

  constructor(private resultadosService: ResultadosService) { 
    this.mediaPath = resultadosService.getMediaPath();
    this.resultados = resultadosService.getResultadosMock();
    this.resultadosApi = resultadosService.getResultados();
  }

  ngOnInit() {
  }

}
