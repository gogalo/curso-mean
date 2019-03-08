function esMayuscula(letra) {
    
    if (letra === letra.toUpperCase()) {
        return true;
    }
    
    return false;
}

function formatoCadena(cadena) 
{
    var minusculas = 0; 
    var mayusculas = 0;
    
	for(var index = 0; index < cadena.length; index++){
        
        var letra = cadena.charAt(index);
        
        // todo lo que no sean letras no se tiene en cuenta.
        if (!letra.match(/[a-zA-Z]/i)) {
            continue;
        }
        
        if(esMayuscula(letra)) {
            mayusculas++;
        } else {
            minusculas++;
        }
        
    }
        
    return [minusculas, mayusculas];
    
}