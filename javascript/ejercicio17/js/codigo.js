// mostrar u ocultar el parrafo 
function magic(event) {
    event.preventDefault();
    var targetLink = event.target;
    var targetP = targetLink.parentElement.getElementsByTagName('p')[0]
    
    if (targetP.style.display == 'none') {
        targetP.style.display = 'block';
        targetLink.innerHTML = 'Ocultar contenidos';
    } else {
        targetP.style.display = 'none';
        targetLink.innerHTML = 'Mostrar contenidos';
    }
    
}


document.addEventListener("DOMContentLoaded", function(event) {
    // obtener todos los elementos a 
    var links = document.getElementsByTagName("a");
    
    // asignar evento click  a todos los elementos obtenidos
    for (var i=0;i<links.length;i++) {
        links[i].addEventListener('click', magic);
    }
});