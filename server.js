var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var participants = [];

io.on('connection', function(client){
  console.log("connected");
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
server.listen(8080);
