# Ejercicio:

Dada la estructura de los ejercicios de la Unidad 04, ¿Qué índices crearías en las colecciones creadas y de qué tipo serían esos índices?

```javascript

db.clientes.createIndex({cifNif: 1})

db.clientes.createIndex({"facturas.importeTotal": 1})


```

Utilizacion de la funcion explain()

```javascript

db.clientes.find().explain()

db.clientes.explain().aggregate( [
    { $group: {_id:"$cifNif",total:{$sum: {$sum: "$facturas.importeTotal"}}}}
] )


```

Ver los indices de una coleccion

```javascript

db.clientes.getIndexes()

```
