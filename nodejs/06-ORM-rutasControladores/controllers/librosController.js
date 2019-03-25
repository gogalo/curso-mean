//var libros = require('../fixtures/libros');
var Libro = require('../models/Libro');

var librosController = {
    // listado de libros
    list: function(req, res, next) {
        
        Libro.find({}, function (err, data) {
        
            if (err!=null) {
                return res.json({
                    success: false,
                    error: err
                });
            }

            return res.json({
                success: true,
                data: data
            });

        });
        
    },
    // nuevo libro
    create: function(req, res, next) {  
        
        var libro = new Libro(req.body);
            
        libro.save(function(err, data) {
            if (err!=null) {
                return res.json({
                    success: false,
                    error: err
                });
            }

            return res.json({
                success: true,
                data: data
            });
        });

    },
    // obtener un libro
    get: function(req, res, next) {
        
        var isbn = req.params.isbn;
        
        Libro.findOne({isbn: isbn}, function(err, data) {
            if (err!=null) {
                return res.json({
                    success: false,
                    error: err
                });
            }

            return res.json({
                success: true,
                data: data
            });
        });

    },
    // actualizar un libro
    update: function(req, res, next) {
        
        var isbn = req.params.isbn;
        
        Libro.findOneAndUpdate({isbn: isbn}, req.body, {new: true}, function(err, data) {
            if (err!=null) {
                return res.json({
                    success: false,
                    error: err
                });
            }

            return res.json({
                success: true,
                data: data
            });

        });

    },
    // borrar un libro
    delete: function(req, res, next) {
        
        var isbn = req.params.isbn;

        Libro.findOneAndRemove({isbn: isbn}, function(err, data) {
            if (err!=null) {
                return res.json({
                    success: false,
                    error: err
                });
            }

            return res.json({
                success: true,
                data: data
            });

        });

    }

};

module.exports = librosController;