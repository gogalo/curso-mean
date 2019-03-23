var datos = ['pos1','pos2','pos3','pos4','pos5','pos6','pos7','pos8','pos9','pos10'];

// while
console.log("Bucle while");
var i = 0;
while(i < datos.length) {
    
    console.log(datos[i]);
    
    i++;
}

// for
console.log("Bucle for");
for (var x=0; x < datos.length; x++) {
    console.log(datos[x]);
}

// for in
console.log("Bucle for ... in ");
var y;
for (y in datos) {
    console.log(datos[y]);
}


var datos2 = ['pos1','pos2','pos3','pos4','pos5','pos6','pos7','pos8','pos9','pos10','pos11','pos12','pos13','pos14','pos15','pos16','pos17','pos18','pos19','pos20'];

// while
console.log("Bucle while");
i = 0;
while(i < datos2.length) {
    
    console.log(datos2[i]);
    
    i++;
}

// for
console.log("Bucle for");
for (x=0; x < datos2.length; x++) {
    console.log(datos2[x]);
}

// for in
console.log("Bucle for ... in ");

for (y in datos2) {
    console.log(datos2[y]);
}

// mayor de edad que puede hacer
console.log("Que puede hacer?");
var edad = 18;
if(edad  < 18) {
    console.log("no puede conducir!");
    console.log("no puede votar!");
    console.log("no puede beber alcohol!");
} else {
    console.log("puede conducir!");
    console.log("puede votar!");
    console.log("puede beber alcohol!");
}


/*
dependiendo del número de errores que es una variable numérica, decir que si es uno, diga que no lo ha hecho mal. si es dos, que puede pasar, si es "Black" que diga el número de consejeros de bankia, y si no es ninguno de los anteriores suspéndelo!
*/
console.log("Numero de errores");
numeroErrores = "Black";
switch(numeroErrores) {
    case 1:
        console.log("No esta mal!");
        break;
    case 2:
        console.log("Pasable!");
        break;
    case "Black":
        console.log("Demasiados consejeros en Bankia!!!");
        break;
    default:
        console.log("Suspendido!");
        break;
}


// salir a la tercera
console.log("Salir a la tercera");
var numeroDeVuelta = 0;
while(numeroDeVuelta < 10) {
    if (numeroDeVuelta == 3) {
        break;
    }
    console.log("Vuelta número" + numeroDeVuelta);
    numeroDeVuelta++;
}


// alzehimer
console.log("Alzehimer");
var numeroDeVuelta = 1;
while(numeroDeVuelta < 11) {
    if (numeroDeVuelta % 2 == 0) {
        console.log("Vuelta número" + numeroDeVuelta);
    }
    numeroDeVuelta++;

}








