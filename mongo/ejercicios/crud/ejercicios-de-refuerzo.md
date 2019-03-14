# Ejercicio 1:

Queremos gestionar los datos de una aplicación que debe gestionar clientes de una empresa de pasteles. 

Los datos a almacenar de los clientes son: nombre, cif, email, tlf y direccion.

# Ejercicio 2:

Introduce un par de clientes de ejemplo.

```javascript
db.clientes.insert({   
    'nombre': 'Gorka', 
    'cif': '1111111', 
    'email': 'gogalo@hotmail.com', 
    'tlf': '945999666', 
    'direccion': 'rue del percebe, 13'
})

db.clientes.insert({   
    'nombre': 'Iñaki', 
    'cif': '222222', 
    'email': 'inaki@email.com', 
    'tlf': '945666222', 
    'direccion': 'calle kalea, 1'
})
```

# Ejercicio 3:

Sentencia de consulta de cliente pasando el cif, debe devolver los datos de esa empresa

```javascript
db.clientes.find({'cif': '1111111'})
```

# Ejercicio 4:

El programa debe poder gestionar los pasteles (articulos) que vende a empresa

Los campos deberán ser: sku (código de articulo), nombre, precio , descripcion

# Ejercicio 5:

Introduce tres artículos en la bbdd

```javascript
db.pasteles.insert({
    'sku': 'P1234', 
    'nombre': 'Pastelako', 
    'precio': 2.5, 
    'descripcion': 'Pastelako del kopon'
})

db.pasteles.insert({
    'sku': 'P5678', 
    'nombre': 'Pastelako 2', 
    'precio': 1.5, 
    'descripcion': 'Pastelako del kopon 2'
})

db.pasteles.insert({
    'sku': 'P9876', 
    'nombre': 'Pastelako 3', 
    'precio': 3, 
    'descripcion': 'Pastelako del kopon 3'
})
```

# Ejercicio 6:

Sentencia de consulta de un artículo por su SKU

```javascript
db.pasteles.find({'sku': 'P1234'})
```

# Ejercicio 7:

Tenemos que almacenar los pedidos de los clientes  por lo que deberemos almacenar los siguientes datos: cliente, direccion de entrega, importe total, listado de productos: articulo, cantidad de artículo, precio total de articulo

```javascript
db.pedidos.insert({
    'cliente': {
        'nombre': 'Gorka', 
        'cif': '1111111', 
        'email': 'gogalo@hotmail.com', 
        'tlf': '945999666', 
        'direccion': 'rue del percebe, 13'
    },
    'direccionDeEntrega': 'calle gran vía, 1 2ºA',
    'importeTotal': 4,
    'productos': [
        {
            'articulo': {
                'sku': 'P1234', 
                'nombre': 'Pastelako', 
                'precio': 2.5, 
                'descripcion': 'Pastelako del kopon'
            }, 
            'cantidad': 1, 
            'total': 2.5
        },
        {
            'articulo': {
                'sku': 'P5678', 
                'nombre': 'Pastelako 2', 
                'precio': 1.5, 
                'descripcion': 'Pastelako del kopon 2'
            },
            'cantidad': 1, 
            'total': 1.5
        }
    ]
});
```

# Ejercicio 8:

Sentencia que consulta todos los pedidos de un cliente
```javascript
db.pedidos.find({'cliente.cif': '1111111'})
```

# Ejercicio 9:

Sentencia que devuelve el último pedido de un cliente

** PRIMERO METEMOS UN CAMPO FECHA PARA PODER ORDENAR **
```javascript
db.pedidos.update(
    {},
    {$set: {'fecha': new Date()}},
    {multi: true}
)
```

** ULTIMO PEDIDO **
```javascript
db.pedidos.find({'cliente.cif': '1111111'}).sort({'fecha': -1}).limit(1)
```

# Ejercicio 10:

Sentencia que devuelve el pedido de mayor importe de un cliente

```javascript
db.pedidos.find({'cliente.cif': '1111111'}).sort({'importeTotal': -1}).limit(1)
```

# Para nota:

Sentencia que devuelve el total anual de de pedidos de un cliente dado

```javascript
db.pedidos.aggregate(
    { 
        $match: {
            "fecha":
            {
                "$gte":new Date(2019,1,1,0,0,0,0),
                "$lte":new Date(2019,12,31,23,59,59,0),
            }
        }
    },
    { 
        $group: { 
            '_id' : '$cliente.cif', 
            'total' : { $sum: "$importeTotal" } 
        } 
    }
)
```






























