## Ejercicios de la Unidad

- Crea un nuevo proyecto llamado servicios
- Crea un nuevo componente llamado Resultados
- Importa el uso de HTTP desde el componente (constructor)
- Define una nueva propiedad en el componente llamada resultados de tipo array
- Define una nueva clase llamada Resultados que tenga los campos nombre, dipus e imagen. dipus es number y el resto es string
- Importa la clase Resultado desde el componente
- En el constructor rellena la propiedad resultados como un array con varios resultados
- Modifica la vista asociada al componente para que sea capaz de pintar los resultados
- Desde el constructor del componente intenta hacer una llamada http a la url https://cursosdedesarrollo.com/pactometro/resultados.json si todo ha ido bien almacena los datos en la propiedad resultados.
- Si todo ha funcionado correctamente, refactoriza el código para meterlo dentro del un servicio llamado ResultadosService
- Configura el servicio dentro del app.module y dentro del componente para poder usarlo
- Comprueba que el servicio va ok cambiando la llamada a la petición para que la realice el componente a través del servicio en vez de la funcionalidad que tiene ya implementada el componente
- Retira todo el código sobrante del componente, porque ya lo realiza el servicio.
- Comprueba que seigue haciendo la llamada y que presenta correctamente los datos
