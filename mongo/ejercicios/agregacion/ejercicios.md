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
            'fechaEmision': new Date(2019,01,01),
            'importeTotal': 120.50
        },
        {
            'fechaEmision': new Date(2019,02,01),
            'importeTotal': 118.50
        },
        {
            'fechaEmision': new Date(2019,03,01),
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
            'fechaEmision': new Date(2019,01,01),
            'importeTotal': 90.50
        },
        {
            'fechaEmision': new Date(2019,02,01),
            'importeTotal': 78.60
        },
        {
            'fechaEmision': new Date(2019,03,01),
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
            'fechaEmision': new Date(2019,01,01),
            'importeTotal': 90.50
        },
        {
            'fechaEmision': new Date(2019,02,01),
            'importeTotal': 78.60
        },
        {
            'fechaEmision': new Date(2019,03,01),
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
            'fechaEmision': new Date(2019,01,01),
            'importeTotal': 102.50
        },
        {
            'fechaEmision': new Date(2019,02,01),
            'importeTotal': 130.60
        },
        {
            'fechaEmision': new Date(2019,03,01),
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



## Ejercicio 4: 

Saca los clientes que tengan una facturación total superior a 2000


## Ejercicio 5:

Saca la facturación media de los clientes de residencial


## Ejercicio 6:

Saca por pantalla los distintos tipos de cliente