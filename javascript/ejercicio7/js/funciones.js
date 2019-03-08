function calcularFactorial(numero) 
{
	
    var resultado = 1; 
	
    for (i=1; i<=numero; i++) {
		resultado = resultado * i; 
	}
	
    return resultado;

}