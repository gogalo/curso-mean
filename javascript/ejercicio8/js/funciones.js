function strParOrImpar(numero) 
{
	
    var resultado;
    if (numero % 2 == 0) {
        resultado = "par";
    } else {
        resultado = "impar";
    }
    
    return "El número " + " " + numero + " " + "es " + resultado;

}