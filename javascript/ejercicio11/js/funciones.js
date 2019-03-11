function checkEsPalindromo(str) 
{    
    // limpiar la frase, solo alfanumericos
    var inicial = str.toLowerCase().replace(/[\W_]+/g,"");
    
    // le damos la vuelta
    reverse = inicial.split("").reverse().join("");
    
    // comparamos
    if (inicial === reverse) {
        return true;
    } 

    return false;
}