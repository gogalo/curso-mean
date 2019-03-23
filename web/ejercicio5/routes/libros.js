var express = require('express');
var router = express.Router();
var libros = require('../fixtures/libros');


/* GET Listado de libros */
router.get('/', function(req, res, next) {
  res.json(libros);
});


/* POST nuevo libro */
router.post('/', function(req, res, next) {  
  var libro = req.body;
  res.json(libro);
});


/* GET Obtener un libro por isbn */
router.get('/:isbn', function(req, res, next) {
  var isbn = req.params.isbn;
  var libro = libros.find(libro => libro.isbn === isbn);
  
  if (!libro) {
    res.status(404).send('Not found');
  }

  res.json(libro);
});

/* PUT Modificar un libro */
router.put('/:isbn', function(req, res, next) {
  var isbn = req.params.isbn;
  var libro = libros.find(libro => libro.isbn === isbn);
  
  if (!libro) {
    res.status(404).send('Not found');
  }
  
  // datos para modificar 
  libroModificado = req.body;
  
  // modificar el libro
  libro.name = libroModificado.name;
  libro.author = libroModificado.author;

  res.json(libro);

});

router.delete('/:isbn', function(req, res, next) {
  var isbn = req.params.isbn;
  var libro = libros.find(libro => libro.isbn === isbn);
  
  if (!libro) {
    res.status(404).send('Not found');
  }

  // delete!!!!!

  res.json(libro);
});

module.exports = router;
