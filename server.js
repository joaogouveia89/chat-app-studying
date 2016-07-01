var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var participants = [];

io.on('connection', function(client){

});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use('/css', express.static('css'));
server.listen(8080);
