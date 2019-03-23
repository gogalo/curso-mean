var libros = require('../fixtures/libros');

var librosController = {
    
    list: function(req, res, next) {
        res.json(libros);
    },
    create: function(req, res, next) {  
        var libro = req.body;
        res.json(libro);
    },
    get: function(req, res, next) {
        var isbn = req.params.isbn;
        var libro = libros.find(libro => libro.isbn === isbn);
        
        if (!libro) {
            res.status(404).send('Not found');
        }
        
        res.json(libro);
    },
    update: function(req, res, next) {
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
    },
    delete: function(req, res, next) {
        var isbn = req.params.isbn;
        var libro = libros.find(libro => libro.isbn === isbn);

        if (!libro) {
            res.status(404).send('Not found');
        }

        // delete!!!!!

        res.json(libro);
    }

};

module.exports = librosController;