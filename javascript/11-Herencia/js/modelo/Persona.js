class Persona {
    
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    obtDetalles() {
        return this.nombre + ", de genero " + this.genero + " de " + this.edad+ " años";
    }
    
}