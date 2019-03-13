function muestraInformacion(event) {
    
    var targetElement = event.target;
    var targetDiv = targetElement.getElementsByTagName('div')[0];
    
    var navegadorY = event.clientY;
    var navegadorX = event.clientX;
    var paginaY = event.offsetY;
    var paginaX = event.offsetX;
        
    if ( !targetDiv.hasChildNodes() ) {
        var ratonNavegadorInfo = document.createElement('p');
        var ratonPaginaInfo = document.createElement('p');
        ratonNavegadorInfo.id = "navegador_info";
        ratonPaginaInfo.id = "pagina_info";
        targetDiv.appendChild(ratonNavegadorInfo);
        targetDiv.appendChild(ratonPaginaInfo)
        
    }
    
    document.getElementById('navegador_info').innerHTML = "Navegador [" + navegadorX + ", " + navegadorY + "]"; 
    document.getElementById('pagina_info').innerHTML = "Pagina [" + paginaX + ", " + paginaY + "]"; 
    
}

document.addEventListener("DOMContentLoaded", function(event) {
    // obtener todos los elementos a 
    var raton = document.getElementById('raton');
    var teclado = document.getElementById('teclado');
    
    raton.addEventListener('mouseover', muestraInformacion);
    raton.addEventListener('mousemove', muestraInformacion);

});