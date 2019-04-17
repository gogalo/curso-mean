# Ejercicio 1:

Diseña un conjunto de colecciones que sean capaces de cumplir con los siguientes requisitos:

- Será necesario tener un control de acceso para los usuarios de la plataforma
-Los usuarios deberán tener al menos los siguientes campos: nombre de usuario, contraseña e email
- Queremos montar un servicio de citas por lo que tendremos que registrar los mensajes que se envíen los usuarios
- Por lo tanto una de las consultas básicas ser´el dame los últimos 10 mensajes dirigidos a un usuario
- Tenemos que almacenar también las medidas de cada usuario: altura peso, edad y color de ojos

```javascript

db.usuarios.insert({   
    'usuario': 'Gorka', 
    'contrasena': '1234', 
    'email': 'gorka@email.com',
    'altura': 1.7,
    'peso': 78,
    'edad': 41      
});

db.usuarios.insert({   
    'usuario': 'Veronica',
    'contrasena': '4321',
    'email': 'vero@email.com',
    'altura': 1.75,
    'peso': 76,
    'edad': 43
});

db.mensajes.insert({   
    'remitente': {   
        'usuario': 'Gorka', 
        'contrasena': '1234', 
        'email': 'gorka@email.com',
        'altura': 1.7,
        'peso': 78,
        'edad': 41      
    }, 
    'destinatario': {   
        'usuario': 'Veronica',
        'contrasena': '4321',
        'email': 'vero@email.com',
        'altura': 1.75,
        'peso': 76,
        'edad': 43
    }, 
    'texto': 'Lorem ipsum dolor sit amet'
})


db.mensajes.insert({   
    'destinatario': {   
        'usuario': 'Gorka', 
        'contrasena': '1234', 
        'email': 'gorka@email.com',
        'altura': 1.7,
        'peso': 78,
        'edad': 41      
    }, 
    'remitente': {   
        'usuario': 'Veronica',
        'contrasena': '4321',
        'email': 'vero@email.com',
        'altura': 1.75,
        'peso': 76,
        'edad': 43
    }, 
    'texto': 'y al y cual ...'
})

```


# Ejercicio 2

Cómo puedo consultar todos los hombres con los ojos azules?

** atualizamos las tablas con los nuevos varoles.

```javascript

db.usuarios.update(
    {'usuario': 'Gorka'},
    {
        $set: {
            'sexo': 'H',
            'colorOjos': 'Azules' 
        }
    }
)

db.usuarios.update(
    {'usuario': 'Veronica'},
    {
        $set: {
            'sexo': 'M',
            'colorOjos': 'Marrones' 
        }
    }
)

```

** ojos azules?

``` javascript

db.usuarios.find({'sexo': 'H', 'colorOjos': 'Azules'})

```

# Ejercicio 3

Dame mis últimos 10 mensajes como usuario enviados

``` javascript

db.mensajes.find({'remitente.usuario': 'Gorka'}).limit(10)

```
atualizamos las tablas con los nuevos varoles.

# Ejercicio 4

Dime mis 25 últimos mensajes recibidos ordenados descendientemente

** añadimos el campo fecha para todos los mensajes

``` javascript
db.mensajes.update(
    {},
    {
        $set: {
            'fecha': new Date(),
        }
    },
    {multi: 1}
)

```

** ultimos 25 mensajes recibidos?

``` javascript
db.mensajes.find({'destinatario.usuario': 'Gorka'}).limit(25)
```


# Ejercicio 5

Sentencia de registro de un usuario

```javascript

db.usuarios.insert({   
    'usuario': 'Miren', 
    'contrasena': 'abcd', 
    'email': 'miren@email.com',
    'altura': 1.65,
    'peso': 56,
    'edad': 32      
});

```

# Ejercicio 6

Sentencia de cambio de contraseña de un usuario

``` javascript
db.usuarios.update(
    {'usuario': 'Miren'},
    {
        $set: {
            'contrasena': 'abcde',
        }
    }
)
```

# Ejercicio 7

Sentencia de cambio de email de un usuario

# Ejercicio 8

Activación de la cuenta de un usuario

# Ejercicio 9

Dame todas las chicas mayores de 18 años que midan 179cm y mesen menos 120kg

# Ejercicio 10

Dame todos los chicos menores de 50 años que cobre más de 45000€ al año

# Ejercicio 11

Dame todas las mujeres sin hijos

# Ejercicio 12

Dame todos los chicos que tengan un Audi






















