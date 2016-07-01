$(document).ready(function(){
  var socket = io.connect('http://localhost:8080');
  var nickname;
  socket.on('connect', function(data){
    $('#identifying-modal').openModal();
  });
});
