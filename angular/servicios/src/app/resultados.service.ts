import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resultado } from './models/Resultado';
import { Observable } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  baseUrlApi: string;
  urlApi: string;

  constructor(private httpClient: HttpClient) { 
    this.baseUrlApi = 'https://cursosdedesarrollo.com/pactometro'; 
    this.urlApi = this.baseUrlApi + '/resultados.json';
  }

  public getResultadosMock() {
    let resultado1 = new Resultado('vox', 1, 'vox.png');
    let resultado2 = new Resultado('podemos', 3, 'podemos.jpeg');
    let resultado3 = new Resultado('bildu', 13, 'bildu.png');
    let resultado4 = new Resultado('psoe', 12, 'psoe.png');

    let resultados = [];
    return resultados.concat([resultado1, resultado2, resultado3, resultado4]);
  }

  getResultados() {
    return this.httpClient.get<Observable<Resultado[]>>(this.urlApi)
    .pipe(
      catchError(this.handleError('get', [])
    ));
  }

  getMediaPath() {
    return this.baseUrlApi + "/img";
  }

  private handleError (operation = 'operation', result?) {
    return (error: any): any[] => {
      console.error(error); // log to console instead
      return [];
    };
  }
}
