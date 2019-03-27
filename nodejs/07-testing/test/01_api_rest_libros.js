let chai = require('chai');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;
var mainURL= "http://localhost:3000/v1/api";
var libro;

describe('Api RestFul - libros: ',()=>{
    
    it('GET / Devuelve listado de libros', (done) => {
        chai.request(mainURL)
        .get('/libros')
        .end( function(err,res){
            // tenemos un codigo de respuesta 200
            expect(res).to.have.status(200);
            // devuelve un objeto
            expect(res.body).to.be.an('Object');
            
            // success
            var success = res.body.success;
            expect(success).to.equal(true);
            
            // data
            var data = res.body.data;
            expect(data).to.be.an('Array');
            for (let obj of data) {
                //console.log(p);
                expect(obj).to.be.an('Object');
                expect(obj._id).to.be.an("String");
                expect(obj.isbn).to.be.an("String");
                expect(obj.name).to.be.an("String");
                expect(obj.author).to.be.an("String");
                expect(obj.__v).to.be.an("Number");
            }
            
            done();
        });
    });

    it('POST / Nuevo libro', (done) => {
        chai.request(mainURL)
        .post('/libros')
        .send({
            isbn: "1234567890ABC",
            name: "Node.js: Related Tools & Skills",
            author: "Craig Buckler; Jani Hartikainen; M. David Green; Olayinka Omole;"
        })
        .end( function(err,res){
            // tenemos un codigo de respuesta 200
            expect(res).to.have.status(200);
            // devuelve un objeto
            expect(res.body).to.be.an('Object');
            
            // success
            var success = res.body.success;
            expect(success).to.equal(true);
            
            // data
            libro = res.body.data;
            expect(libro).to.be.an('Object');
            
            expect(libro._id).to.be.an("String");
            
            expect(libro.isbn).to.be.an("String");
            expect(libro.isbn).equal("1234567890ABC");
            
            expect(libro.name).to.be.an("String");
            expect(libro.name).equal("Node.js: Related Tools & Skills");
            
            expect(libro.author).to.be.an("String");
            expect(libro.author).equal("Craig Buckler; Jani Hartikainen; M. David Green; Olayinka Omole;");
            
            expect(libro.__v).to.be.an("Number");
            expect(libro.__v).equal(0);
            
            done();
        });
    });

    //@TODO: test metodo put

    it('DELETE /:isbn Borrar libro', (done) => {
        chai.request(mainURL)
        .delete('/libros/' + libro.isbn)
        .end( function(err,res){
            // tenemos un codigo de respuesta 200
            expect(res).to.have.status(200);
            // devuelve un objeto
            expect(res.body).to.be.an('Object');
            
            // success
            var success = res.body.success;
            expect(success).to.equal(true);
            // data
            var l = res.body.data;
            expect(l).to.be.an('Object');
            
            expect(l._id).to.be.an("String");
            expect(l._id).equal(libro._id);
            
            expect(l.isbn).to.be.an("String");
            expect(l.isbn).equal(libro.isbn);
            
            expect(l.name).to.be.an("String");
            expect(l.name).equal(libro.name);
            
            expect(l.author).to.be.an("String");
            expect(l.author).equal(libro.author);
            
            expect(libro.__v).to.be.an("Number");
            expect(libro.__v).equal(libro.__v);
            
            done();
        });
    });
    
});