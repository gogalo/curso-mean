## Ejercicios de la Unidad 03

- Crea un nuevo proyecto angular llamado ejercicio3

``` bash
$ ng new ejercicio3
```

- Crea un nuevo componente llamado listado

``` bash
$ ng g c listado
```

- Añade el componente en la plantilla del componente principal

Añadir la etiqueta del componente en el fichero app.component.html

``` html
<!-- app.component.html-->
<app-listado></app-listado>
```

- Crea una nueva propiedad en el listado, que sea un array de cadenas de caracteres
- Rellena el array con algunos elementos en su construcción
- Presenta esas cadenas de caracteres en la vista como un listado (ul-li)
- Crea un formulario en la vista del listado
- Cuando se envie el formulario añade esa cadena al listado de elementos
- Verifica que el listado presenta el nuevo elemento
- Comprueba que el formulario queda vacío cuando se envía 
- Crea un segundo componente llamado misclientes

``` bash
$ ng g c listado
```

- Añade la etiqueta de ese componente en la plantilla del componente principal

``` html
<!-- app.component.html-->
...
<app-misclientes></app-misclientes>
...
```

- __Parte 2__
- Crea una nueva clase cliente que tenga los siguientes datos: nombre, dirección
- En la plantilla de misclientes presenta un listado de dos o tres clientes
- En la plantilla añade un formulario con dos campos: nombre y dirección que al enviar rellena un objeto de tipo cliente que se añade al listado
- Verifica que el listado presenta el nuevo elemento
- Comprueba que el formulario queda vacío cuando se envía

- __Parte 3__
- Crea un nuevo componente llamado condicionales

``` bash
$ ng g c condicionales
```


- Añade la etiqueta del nuevo componente en la plantilla del componente principal

``` html
<!-- app.component.html-->
...
<app-condicionales></app-condicionales>
...
```

- Dentro del plantilla de de condicionales crea un div con un párrafo de contenido
- Define una variable booleana dentro del componente
- Dependiendo del valor de la variable booleana presenta condicionalmente el contenido del div

