const express = require('express');
const http = require('http');
const socket = require('socket.io'); 
const path = require('path');
const {Chess} = require('chess.js');
const { log } = require('console');

const app = express();
const server = http.createServer(app);

const io = socket(server);

const chess = new Chess();

let players = {};
let currentPlayer = 'W';


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.render('index')
})

io.on("connection", function(uniquesocket){
    console.log("Connection established");
   uniquesocket.on("disconnect", function(){
    console.log("disconnected");
   })
})
server.listen(3000);