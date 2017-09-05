// importar
var express = require('express');
 
// instanciar
var app = express();
 
// ruteo
app.get('/', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});
app.get('/about', function(req, res){
  res.sendfile(__dirname + '/public/about.html');
});
app.get('/hola.html', function(req, res){
  res.sendfile(__dirname + '/hola.html');
});
// escuchar
app.listen(8080);
 
console.log("Servidor Express escuchando en modo %s", app.settings.env);