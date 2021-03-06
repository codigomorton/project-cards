var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('app'));

app.get('/', function(req, res){
  res.sendFile('index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
  	io.emit('chat message', msg);
    console.log('message: ' + msg);
  });
  socket.on('card played', function(msg){
  	io.emit('card played', msg);
    console.log('card: ' + msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});