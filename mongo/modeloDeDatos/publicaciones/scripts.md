## Script de creación de cada tipo de publicación
```javascript
db.publicaciones.insert({
    titulo: "post",
    url: "/post",
    publicado: false,
    publico: false,
    entradilla: "Lorem ipsum dolor sit amet",
    imagen_portada: "imagen-portada.jpeg",
    texto_completo: "Duis proident fugiat esse consectetur deserunt voluptate sunt sit tempor ad nulla pariatur occaecat. Nisi Lorem commodo velit eu mollit irure dolore reprehenderit sunt nostrud nostrud dolore. Cupidatat reprehenderit aliqua irure ipsum qui minim mollit aute quis ullamco et. Ea nostrud occaecat ipsum dolor laboris nulla cillum quis aliquip proident. Nulla elit adipisicing veniam minim eiusmod commodo et enim nulla. Elit exercitation velit incididunt ipsum in minim incididunt elit ex.",
    version: 1,
    fecha_creacion: new Date(),
    fecha_modificacion: new Date(),
    publicacion_tipo: "post",
    autor: {
       _id: "1234567890",
       email: "gorka@email.com",
       username: "gorka"
    },
    ultimo_editor: {
       _id: "1234567890",
       email: "gorka@email.com",
       username: "gorka" 
    }
})

```
## Script de consulta de publicaciones por tipo, teniendo en cuenta la paginación
```javascript
    db.publicaciones.find({publicacion_tipo: "pagina", publicado: true,}).skip(0).limit(2)
```
## Script de publicaciones públicas por tipo, teniendo en cuenta la paginación
```javascript
    db.publicaciones.find({publicacion_tipo: "pagina", publicado: true, publico: true}).skip(0).limit(2)
```
## Script de las últimas publicaciones versionadas, teniendo en cuenta la paginación
```javascript

```
## Script de modificación y borrado de una publicación
```javascript

```
## Script de consulta de una publicación concreta
```javascript

```
## Script de hacer pública o privada una publicación
```javascript

```
## Script de hacer publicar o despublicar una publicación
```javascript

```
## Script de consulta del menú principal
```javascript

```
## Script de consulta con el número de elementos de un menú
```javascript

```