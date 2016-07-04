$(document).ready(function(){
  var socket = io.connect('http://localhost:8080');
  var nickname;
  socket.on('connect', function(data){
    $('#identifying-modal').openModal();
    $("#join-request").click(function(){
      var nickname = $("#nickname").val().trim();
      if(nickname == undefined || nickname === "" || nickname == null){
        Materialize.toast("Nickname cannot be empty!", 5000);
        socket = io.connect('http://localhost:8080', {
          'reconnect': true,
          'reconnection delay': 500
        });
      }
    });
  });
});
