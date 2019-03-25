var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification ofconnection errors)
db.on('error', console.error.bind(
    console, 'MongoDB connection error:'
));

var Schema = mongoose.Schema;

var LibroSchema = new Schema({
    isbn: String,
    name: String,
    author: String
});

var Libro = mongoose.model('libros', LibroSchema );

module.exports = Libro;


