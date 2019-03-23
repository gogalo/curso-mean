# Ejercicios de la Unidad

## Ejercicio 1:

Crea una colección de documentos para guardar los datos de un cliente, debería poder guardar los siguientes datos:

- Nombre
- Dirección: calle, municipio, CP, provincia
- Teléfono
- Email
- cif-nif
- Tipo de cliente: residencial, autonomo, empresa
- Facturas: fecha emisión, importe total

```javascript

db.clientes.insert({   
    'nombre': 'Gorka', 
    'direccion': {
            'calle': 'calle kalea 1 bjo',
            'municipio': 'Vitoria-Gasteiz',
            'cp': '01001',
            'provincia': 'Alava'
    }, 
    'email': 'gorka@email.com',
    'telefono': '945999666',
    'cifNif': '111111L',
    'tipoDeCliente': 'empresa',
    'facturas': [
        {
            'fechaEmision': new Date("2019-01-01"),
            'importeTotal': 120.50
        },
        {
            'fechaEmision': new Date("2019-02-01"),
            'importeTotal': 118.50
        },
        {
            'fechaEmision': new Date("2019-03-01"),
            'importeTotal': 110.70
        }
    ]
})

```

## Ejercicio 2: 

Inserta tres clientes que tengan 3 facturas cada uno, dos clientes residenciales y uno de empresa

```javascript

db.clientes.insert({   
    'nombre': 'Alex', 
    'direccion': {
            'calle': 'calle paz 10 2ºA',
            'municipio': 'Vitoria-Gasteiz',
            'cp': '01001',
            'provincia': 'Alava'
    }, 
    'email': 'alex@email.com',
    'telefono': '945123456',
    'cifNif': '222222L',
    'tipoDeCliente': 'empresa',
    'facturas': [
        {
            'fechaEmision': new Date("2019-01-01"),
            'importeTotal': 90.50
        },
        {
            'fechaEmision': new Date("2019-02-01"),
            'importeTotal': 78.60
        },
        {
            'fechaEmision': new Date("2019-03-01"),
            'importeTotal': 56.32
        }
    ]
})

db.clientes.insert({   
    'nombre': 'Jonathan', 
    'direccion': {
            'calle': 'calle correria 102 4ºD',
            'municipio': 'Vitoria-Gasteiz',
            'cp': '01001',
            'provincia': 'Alava'
    }, 
    'email': 'jonathan@email.com',
    'telefono': '945888777',
    'cifNif': '333333H',
    'tipoDeCliente': 'residencial',
    'facturas': [
        {
            'fechaEmision': new Date("2019-01-01"),
            'importeTotal': 90.50
        },
        {
            'fechaEmision': new Date("2019-02-01"),
            'importeTotal': 78.60
        },
        {
            'fechaEmision': new Date("2019-03-01"),
            'importeTotal': 56.32
        }
    ]
})

db.clientes.insert({   
    'nombre': 'Edurne', 
    'direccion': {
            'calle': 'calle rue del percebe 1 3ºB',
            'municipio': 'Vitoria-Gasteiz',
            'cp': '01010',
            'provincia': 'Alava'
    }, 
    'email': 'edurne@email.com',
    'telefono': '945456852',
    'cifNif': '444444G',
    'tipoDeCliente': 'residencial',
    'facturas': [
        {
            'fechaEmision': new Date("2019-01-01"),
            'importeTotal': 102.50
        },
        {
            'fechaEmision': new Date("2019-02-01"),
            'importeTotal': 130.60
        },
        {
            'fechaEmision': new Date("2019-03-01"),
            'importeTotal': 96
        }
    ]
})

```

## Ejercicio 3:

Saca la consulta que permita saber la facturación total por cada cif-nif

```javascript

db.clientes.aggregate( [
    
    { $unwind : "$facturas" },
    { $group: {_id:"$cifNif",total:{$sum: "$facturas.importeTotal"}}}
] )

```

Otra manera con doble funcion sum sin tener que utilizar la funcion unwind

```javascript

db.clientes.aggregate( [
    { $group: {_id:"$cifNif",total:{$sum: {$sum: "$facturas.importeTotal"}}}}
] )

```

Mismo resultado ordenando por el total de mayor a menor

```javascript

db.clientes.aggregate( [
    { $group: {_id:"$cifNif",total:{$sum: {$sum: "$facturas.importeTotal"}}}},
    { $sort : { total : -1 }}
] )

```

## Ejercicio 4: 

Saca los clientes que tengan una facturación total superior a 2000

Primero añadimos algunas facturas mas a los clientes

```javascript

// añadimos de uno en uno
db.clientes.update(
    { cifNif: '111111L' },
    { $push: 
        { facturas: 
            {
                'fechaEmision': new Date("2019-03-01"),
                'importeTotal': 85.50
            }
        }
    }
)

// o tambien podemos añadir varios a la vez, utilizando la funcion $each
db.clientes.update(
   { cifNif: '111111L' },
   { $set: {facturas: [] } }
)

db.clientes.update(
   { cifNif: '111111L' },
   { $push: 
        { facturas: 
            { $each: [
                {
                    'fechaEmision': new Date("2019-01-01"),
                    'importeTotal': 360.75
                },
                {
                    'fechaEmision': new Date("2019-02-01"),
                    'importeTotal': 360.75
                },
                {
                    'fechaEmision': new Date("2019-03-01"),
                    'importeTotal': 360.75
                },
                {
                    'fechaEmision': new Date("2019-04-01"),
                    'importeTotal': 360.75
                },
                {
                    'fechaEmision': new Date("2019-05-01"),
                    'importeTotal': 185.50
                },
                {
                    'fechaEmision': new Date("2019-06-01"),
                    'importeTotal': 360.75
                },
                {
                    'fechaEmision': new Date("2019-07-01"),
                    'importeTotal': 185.50
                },
                {
                    'fechaEmision': new Date("2019-08-01"),
                    'importeTotal': 360.75
                },
                {
                    'fechaEmision': new Date("2019-09-01"),
                    'importeTotal': 185.50
                },
                {
                    'fechaEmision': new Date("2019-10-01"),
                    'importeTotal': 360.75
                },
                {
                    'fechaEmision': new Date("2019-11-01"),
                    'importeTotal': 185.50
                },
                {
                    'fechaEmision': new Date("2019-12-01"),
                    'importeTotal': 360.75
                }
            ] } 
        }
    }
)

```

Sacamos los clientes que superen los 2000

```javascript

db.clientes.aggregate( [
    
    { $group: { _id: "$cifNif", total: { $sum: { $sum: "$facturas.importeTotal"} } } },
    { $match: { total: { $gt: 2 * 1000 } } },
    { $sort : { total: 1 } }
] )

```

## Ejercicio 5:

Saca la facturación media de los clientes de residencial

```javascript

db.clientes.aggregate([
   { $match: { tipoDeCliente: 'residencial'} },
   { $project: { _id: "$cifNif", avg: { $avg: "$facturas.importeTotal"} } },
   { $sort : { total: 1 } }
])

```

## Ejercicio 6:

Saca por pantalla los distintos tipos de cliente

```javascript

db.clientes.distinct("tipoDeCliente")

```