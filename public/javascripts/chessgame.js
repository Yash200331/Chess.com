const socket = io();

socket.emit("churan")
socket.on("churan paapdi", function(){
    console.log("paapdi khalo");
})