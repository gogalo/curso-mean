// mi burra
var miburra = new Moto();
miburra.setMatricula('SA1234H');

// nuevo objeto con kilometros a 0
var miburra2 = new Moto();
console.log("La moto tiene " + miburra2.getKilometros() + " Km");

// getter y setters de matricula y km
miburra.setMatricula('SA1234H');
miburra.setKilometros(20000);


// nueva utilizando los parametros del constructor
var miburra3 = new Moto('BI1234A', 50000);
console.log(miburra3.getMatricula(), miburra3.getKilometros());

var animalico = new Animal();
console.log(animalico, animalico.edad);
animalico.edad = 3;
console.log(animalico.edad);

var animalico2 = new Animal(2);

var gatico = new Gato(1);
var gatete2 = new Gato(0, 'Nyska');

console.log(gatete2, gatete2.nombre, gatete2.edad);