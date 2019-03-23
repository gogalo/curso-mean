function checkDNI(numero, letra) 
{
    
    if (numero < 0 || numero > 99999999) {
        console.log('Numero no valido!');
        return;
    }
    
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    
    var letraNumeroProporcionado= letras[(numero % 23)];
    
    if (letra.toUpperCase() != letraNumeroProporcionado) {
        console.log("La letra proporcionada no es valida");
    } else {
        console.log("El dni" + " " + numero + " " + letra + " " + "es correcto!!!");
    }
    
}