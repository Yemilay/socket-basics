var PORT = process.env.PORT || 3000;    // This line is x Heroku
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

// "on" listen for events
io.on('connection', function (socket) {
    console.log('User connected via socket.io!');

    socket.on('message', function (message) {
        console.log('Message recived: ' + message.text);

        socket.broadcast.emit('message', message);
    });

    socket.emit('message', {
        text: 'Welcome to the chat application!'
    });
});

http.listen(PORT, function () {
    console.log('Server started!');
});
