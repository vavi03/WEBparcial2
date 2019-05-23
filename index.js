//Pareja:
//Maria del Mar Martinez -  Valeria Ramirez

var express = require('express');

var hbs = require('express-handlebars');

var fs = require('fs');

var app = express();

//para definir la carpeta publica
app.use(express.static('public'));
//para registrar el motor de render handlebars
app.engine('handlebars', hbs());
//para setear el motor de render a utilizar
app.set('view engine', 'handlebars');

// iniciar el servidor
app.listen(3000);
console.log('escuchando en el puerto 3000!');

//contadores
var home = 0;
var sobreNosotros = 0;
var contacto = 0;
var fecha= new Date();

//funcion para guardar numero visitas en archivo
function contarVisitas() {

    var mensaje= "Pagina inicio:"+ home + "fecha:"+ fecha+ "\n" 
    + "Sobre nosotros: " + sobreNosotros+ "fecha:"+ fecha+ "\n"+ 
    "Contacto:" + contacto + "fecha:"+ fecha ;
 
    console.log("Home Page: "+home+" visitas");
    console.log("sobre nosotros: "+sobreNosotros+" visitas");
    console.log("contacto: "+contacto+" visitas");
    

    fs.writeFile('message.txt', mensaje, function (err) {
        if (err) throw err;
        console.log('Guardado!');
      });

}

app.get('/', function (request, response) {

    var contexto={
        layout:false
    };

    response.render('home', contexto);
    home++;
    contarVisitas();


});

app.get('/sobreNosotros', function (request, response) {
    var contexto={
        layout:false
    };
    response.render('nosotros', contexto);
    sobreNosotros++;
    contarVisitas();


});

app.get('/contacto', function (request, response) {
    var contexto={
        layout:false
    };
    response.render('contacto', contexto);
    contacto++;
    contarVisitas();


});

app.get('/admin', function (request, response) {
    var contexto={
        home,
        sobreNosotros,
        contacto,

        layout:false
    };
    response.render('admin', contexto);
   


});