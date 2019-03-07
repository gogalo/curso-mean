// array de valores
var valores = [true, 5, false, "hola", "adios", 2];
var numeros = [];
var booleans = [];

// extraer los diferentes tipos de variables almacenadas en el array
for (var i=0; i < valores.length; i++) {
    
    if (typeof valores[i] === "boolean") {
        booleans.push(valores[i]);
    }else if (typeof valores[i] === "number") {
        numeros.push(valores[i]);    
    }
    
    
}

// 1.- determinar cual de los dos numeros es mayor
var numeroMayor = 0;
for (var x=0; x < numeros.length; x++) {
    
    if (numeros[x] > numeroMayor) {
        numeroMayor = numeros[x];    
    }

}

// 1.- sacar el numero mayor por pantalla
console.log("El numero mayor del array es: " + numeroMayor);

// 2.- resultados true y false
if (!booleans[0] || !booleans[1]) {
    console.log("Es falso");
} 

if (booleans[0] || booleans[1]) {
    console.log("Es verdadero");
} 

// 3 .- cinco operaciones matematicas con los numeros del array
console.log("Resultado de suma: " + (numeros[0] + numeros[1]));
console.log("Resultado de resta: " + (numeros[0] - numeros[1]));
console.log("Resultado de multiplicación: " + numeros[0] * numeros[1]);
console.log("Resultado de division: " + numeros[0] / numeros[1]);
console.log("Resultado de resto: " + numeros[0] % numeros[1]);
