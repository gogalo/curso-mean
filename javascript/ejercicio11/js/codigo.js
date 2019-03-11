// nuevo Estudiante
var estudiante = new Estudiante('Gorka', 41, 'masculino');

// registrar al estudiante
estudiante.registrar('MEAN javascript', '1')


// nuevo Profesor
var profesor = new Profesor('David', 42, 'masculino');

// asignar profesor
profesor.asignar('programación', 'básico');


console.log(estudiante.toString());
console.log(profesor.toString());