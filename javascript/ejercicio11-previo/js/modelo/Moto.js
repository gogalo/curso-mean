class Moto {
    
    constructor(matricula = "XXXXXXX", km = 0) {
        this.matricula = matricula;
        this.km = km;
    }
    
    getMatricula() {
        return this.matricula;
    }
    
    setMatricula(matricula) {
        this.matricula = matricula;
        return this;
    }
    
    getKilometros() {
        return this.km;
    }
    
    setKilometros(km) {
        this.km = km;
        return this;
    }
    
}