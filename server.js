var PORT = process.env.PORT || 3000;    // This line is x Heroku
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

// "on" listen for events
io.on('connection', function () {
    console.log('USer connected via socket.io!');
});

http.listen(PORT, function () {
    console.log('Server started!');
});
