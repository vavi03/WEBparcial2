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