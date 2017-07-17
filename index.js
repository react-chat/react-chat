const express = require('express');
const socket = require('socket.io');

const port = process.env.PORT || 8080;
const app = express();
const server = app.listen(port, function() {
  console.log('+++server listening on ', port);
});

app.use(express.static('public'))

const io = socket(server);

io.on('connection', function(socket){

})

module.exports = app; 