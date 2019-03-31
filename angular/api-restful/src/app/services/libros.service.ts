import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor() { }

  getLibros() {
    // @TODO: get libros from api rest using http service
    
    return [
      {
        isbn: '123456',
        name: 'El señor de los anillos: Mock book',
        author: 'J.R.R Tolkien'
      },
      {
        isbn: '1234567890',
        name: 'El señor de los anillos: Mock book 2',
        author: 'J.R.R Tolkien'
      }
    ];
  }

}
