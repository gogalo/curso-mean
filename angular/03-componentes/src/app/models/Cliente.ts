export class Cliente {
    
    nombre: String;
    direccion: String;

    constructor(nombre: string, direccion: string) {
        this.nombre = nombre;
        this.direccion = direccion;
    }

    toString() {
        return this.nombre + " | " + this.direccion; 
    }

}
