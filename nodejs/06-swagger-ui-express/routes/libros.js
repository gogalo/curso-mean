var express = require('express');
var router = express.Router();
var controller = require('../controllers/librosController');


// GET Listado de libros 
router.get('/', controller.list);

// POST nuevo libro 
router.post('/', controller.create);

// GET Obtener un libro por isbn 
router.get('/:isbn', controller.get);

// PUT Modificar un libro 
router.put('/:isbn', controller.update);

// DELETE Borrar un libro 
router.delete('/:isbn', controller.delete);

module.exports = router;
