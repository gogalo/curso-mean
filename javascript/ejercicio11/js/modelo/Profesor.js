class Profesor extends Persona {
    
    constructor(nombre, edad, genero) {
        super(nombre, edad, genero);
        this.asignatura;
        this.nivel;
    }
    
    asignar(asignatura, nivel) {
        this.asignatura = asignatura;
        this.nivel = nivel;
        
        return this;
    }

    toString() {
        return super.obtDetalles() + " imparte " + this.asignatura + " en el nivel " + this.nivel;
    }
    
}