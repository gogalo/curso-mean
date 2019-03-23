class Estudiante extends Persona {
    
    constructor(nombre, edad, genero) {
        super(nombre, edad, genero);
        this.curso;
        this.grupo;
    }
    
    registrar(curso, grupo) {
        this.curso = curso;
        this.grupo = grupo;
        
        return this;
    }

    toString() {
        return super.obtDetalles() + " está en el curso " + this.curso + " - grupo " + this.grupo;
    }
    
}