$(document).ready(function(){
  var socket = io.connect('http://localhost:8080');
  var nickname;
  socket.on('connect', function(data){
    $('#identifying-modal').openModal();
    $("#join-request").click(function(){
      var nickname = $("#nickname").val().trim();
      if(nickname == undefined || nickname === "" || nickname == null){
        Materialize.toast("Nickname cannot be empty, please refresh the browser and reconnect!", 5000);
        socket.emit('invalid-nickname');
      }
    });
  });
});
